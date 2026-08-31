/* eslint-env node */
/**
 * 빌드 결과가 검색엔진 / AI 크롤러에게 실제로 읽히는 상태인지 검사한다.
 *
 *   npm run build && npm run verify:seo
 *
 * 하나라도 실패하면 종료 코드 1 을 반환하므로,
 * GitHub Actions 에서 PR 머지를 막는 용도로 쓸 수 있다.
 */

import fs from "node:fs";
import path from "node:path";
import { site, routes } from "../src/constants/site.js";

const DIST = "dist";
const results = [];
let failed = 0;

function check(label, condition, detail = "") {
  const ok = Boolean(condition);
  if (!ok) failed += 1;
  results.push({ ok, label, detail });
}

function read(file) {
  const target = path.join(DIST, file);
  return fs.existsSync(target) ? fs.readFileSync(target, "utf8") : null;
}

// ---------------------------------------------------------------- index.html

const html = read("index.html");

if (!html) {
  console.error("dist/index.html 이 없습니다. 먼저 npm run build 를 실행하세요.");
  process.exit(1);
}

// 자바스크립트를 실행하지 않는 크롤러가 받아가는 바이트 수.
// 개선 전 원본은 515 바이트였다.
check(
  "index.html 이 충분히 크다 (크롤러가 읽을 내용이 있다)",
  html.length > 5000,
  html.length.toLocaleString() + " 바이트"
);

check(
  "meta description 이 있다",
  /<meta[^>]+name="description"[^>]+content="[^"]{50,}"/.test(html)
);

check("canonical 링크가 있다", /<link[^>]+rel="canonical"/.test(html));

check("Open Graph 태그가 있다", /<meta[^>]+property="og:title"/.test(html));

check(
  "favicon 이 빌드 결과에 실제로 존재하는 경로를 가리킨다",
  (() => {
    const match = html.match(/<link[^>]+rel="icon"[^>]+href="([^"]+)"/);
    if (!match) return false;
    const href = match[1];
    if (href.startsWith("src/")) return false; // 개발용 경로는 배포 후 깨진다
    return fs.existsSync(path.join(DIST, href.replace(/^\//, "")));
  })()
);

// ------------------------------------------------------------------ JSON-LD

const ldMatch = html.match(
  /<script type="application\/ld\+json">([\s\S]*?)<\/script>/
);

check("JSON-LD 스크립트가 삽입되어 있다", Boolean(ldMatch));

let graph = [];

if (ldMatch) {
  let parsed = null;
  try {
    parsed = JSON.parse(ldMatch[1]);
  } catch (error) {
    check("JSON-LD 가 유효한 JSON 이다", false, error.message);
  }

  if (parsed) {
    check("JSON-LD 가 유효한 JSON 이다", true);
    graph = parsed["@graph"] ?? [];
  }
}

const business = graph.find((node) =>
  String(node["@type"]).includes("BeautySalon")
);
const faqPage = graph.find((node) => node["@type"] === "FAQPage");

check("사업장(BeautySalon) 노드가 있다", Boolean(business));

if (business) {
  check("주소가 들어 있다", Boolean(business.address?.addressLocality));
  check("전화번호가 들어 있다", Boolean(business.telephone));
  check("인스타그램 등 sameAs 링크가 있다", business.sameAs?.length >= 2);

  const offers = business.hasOfferCatalog?.itemListElement ?? [];
  const priced = offers.filter((offer) => offer.price || offer.priceSpecification);

  check("시술 / 과정이 10개 이상 등록되어 있다", offers.length >= 10, offers.length + "개");
  check(
    "그중 대부분에 가격이 붙어 있다",
    priced.length >= offers.length - 3,
    priced.length + "/" + offers.length + "개에 가격 있음"
  );
}

check("FAQ 스키마가 있다", Boolean(faqPage));

if (faqPage) {
  check(
    "FAQ 항목이 10개 이상이다",
    faqPage.mainEntity?.length >= 10,
    faqPage.mainEntity.length + "개"
  );
}

// 미입력 자리표시자가 공개 페이지로 새어나가지 않았는지
const placeholders = ["eyeliner_price", "eyeliner_deposit", "TABLE OF SERVICES"];
const leaked = placeholders.filter((token) => html.includes(token));

check(
  "미입력 자리표시자가 스키마에 유출되지 않았다",
  leaked.length === 0,
  leaked.length ? "유출: " + leaked.join(", ") : ""
);

// ---------------------------------------------------------------- sitemap.xml

const sitemap = read("sitemap.xml");

check("sitemap.xml 이 생성되었다", Boolean(sitemap));

if (sitemap) {
  check("sitemap 이 HTML 이 아닌 실제 XML 이다", sitemap.trimStart().startsWith("<?xml"));

  const missing = routes.filter((route) => {
    const loc = site.url + (route === "/" ? "" : route);
    return !sitemap.includes("<loc>" + loc + "</loc>");
  });

  check(
    "모든 경로가 sitemap 에 들어 있다",
    missing.length === 0,
    missing.length ? "누락: " + missing.join(", ") : routes.length + "개 경로"
  );
}

// ----------------------------------------------------------------- robots.txt

const robots = read("robots.txt");

check("robots.txt 가 배포된다", Boolean(robots));

if (robots) {
  check("robots.txt 가 sitemap 위치를 알려준다", /^Sitemap:\s*http/m.test(robots));
  check(
    "주요 AI 크롤러가 허용되어 있다",
    ["GPTBot", "ClaudeBot", "PerplexityBot"].every((bot) => robots.includes(bot))
  );
}

// --------------------------------------------------------------------- 출력

console.log("");
console.log("  SEO / AI 크롤러 검증");
console.log("  " + "-".repeat(58));

for (const result of results) {
  const mark = result.ok ? "PASS" : "FAIL";
  const detail = result.detail ? "  (" + result.detail + ")" : "";
  console.log("  " + mark + "  " + result.label + detail);
}

console.log("  " + "-".repeat(58));
console.log("  " + (results.length - failed) + "/" + results.length + " 통과");
console.log("");

if (failed > 0) {
  console.error("  " + failed + "개 항목이 실패했습니다.");
  process.exit(1);
}
