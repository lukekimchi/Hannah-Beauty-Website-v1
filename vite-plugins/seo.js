/**
 * 빌드 시점에 SEO / AI 크롤러용 산출물을 생성하는 Vite 플러그인.
 *
 *  1. JSON-LD 구조화 데이터를 index.html <head> 에 삽입
 *       - BeautySalon : 사업장 정보 + 전체 시술/과정 가격표
 *       - FAQPage     : src/constants/faq.js 의 실제 FAQ
 *  2. sitemap.xml 생성
 *
 * 가격과 FAQ는 src/constants 의 기존 데이터에서 직접 읽습니다.
 * services.js 의 가격을 고치면 스키마도 자동으로 따라가므로,
 * 사람이 두 군데를 맞춰 고칠 일이 없습니다.
 */

import { site, routes } from "../src/constants/site.js";
import { servicesData } from "../src/constants/services.js";
import {
  browsCoursesData,
  lashLiftCoursesData,
} from "../src/constants/academy.js";
import {
  browsFaqData,
  lashLiftFaqData,
  eyelinerFaqData,
  lipBlushFaqData,
  smpFaqData,
} from "../src/constants/faq.js";

const SERVICE_LABELS = {
  brows: "Nano Hairstroke & Shading Brows",
  lash_lift: "Lash Lift",
  eyeliner: "Eyeliner Tattoo",
  lip_blush: "Lip Blush",
  smp: "Scalp Micropigmentation (SMP)",
};

/** 여러 줄 문자열을 스키마에 넣기 좋은 한 줄로 정리 */
const tidy = (value) =>
  String(value ?? "")
    .replace(/\s+/g, " ")
    .trim();

/**
 * 가격 문자열에서 숫자를 뽑아낸다.
 *   "$500"           -> { min: 500,  max: 500 }
 *   "$250 - 350"     -> { min: 250,  max: 350 }
 *   "From $550"      -> { min: 550,  max: 550 }
 *   "6700"           -> { min: 6700, max: 6700 }
 *   "variable"       -> null  (숫자가 없으면 가격 없이 등록)
 *   "eyeliner_price" -> null  (미입력 자리표시자도 같은 이유로 걸러짐)
 */
function parsePrice(raw) {
  if (typeof raw !== "string") return null;
  const found = raw.replace(/,/g, "").match(/\d+(?:\.\d+)?/g);
  if (!found) return null;
  const values = found.map(Number).filter((n) => n > 0);
  if (!values.length) return null;
  return { min: Math.min(...values), max: Math.max(...values) };
}

/** 파싱한 가격을 schema.org Offer 의 가격 필드로 변환 */
function priceFields(parsed) {
  if (!parsed) return {};
  if (parsed.min === parsed.max) {
    return { price: String(parsed.min), priceCurrency: site.currenciesAccepted };
  }
  return {
    priceSpecification: {
      "@type": "PriceSpecification",
      minPrice: parsed.min,
      maxPrice: parsed.max,
      priceCurrency: site.currenciesAccepted,
      valueAddedTaxIncluded: site.pricesIncludeTax,
    },
  };
}

/** "24 hours" -> "PT24H" */
function toDuration(raw) {
  const matched = String(raw ?? "").match(/(\d+)\s*hour/i);
  return matched ? "PT" + matched[1] + "H" : undefined;
}

/** 시술 가격표를 Offer 목록으로 변환 */
function treatmentOffers() {
  const offers = [];

  for (const service of servicesData) {
    const label = SERVICE_LABELS[service.name] ?? service.name;
    const rows = service.prices?.rows ?? [];

    for (const row of rows) {
      // 일반 시술은 session, SMP 는 area 를 식별자로 쓴다
      const variant = row.session ?? row.area;
      const extra = [row.extraInfo, row.sessions ? row.sessions + " sessions" : null]
        .filter(Boolean)
        .join(", ");

      offers.push({
        "@type": "Offer",
        name: tidy(label + " - " + variant),
        ...priceFields(parsePrice(row.price)),
        ...(extra ? { description: tidy(extra) } : {}),
        availability: "https://schema.org/InStock",
        itemOffered: {
          "@type": "Service",
          name: label,
          serviceType: label,
          description: tidy(service.description),
          provider: { "@id": site.url + "/#business" },
          areaServed: site.areaServed.map((name) => ({
            "@type": "Place",
            name,
          })),
        },
      });
    }
  }

  return offers;
}

/** 아카데미 과정을 Offer(Course) 목록으로 변환 */
function courseOffers() {
  const groups = [
    ["brows", browsCoursesData],
    ["lash_lift", lashLiftCoursesData],
  ];

  const offers = [];

  for (const [type, courses] of groups) {
    const label = SERVICE_LABELS[type] ?? type;

    for (const course of courses ?? []) {
      const duration = toDuration(course.duration);

      offers.push({
        "@type": "Offer",
        name: tidy("Hannah Beauty Academy - " + label + ": " + course.name),
        category: "Training course",
        ...priceFields(parsePrice(course.price)),
        itemOffered: {
          "@type": "Course",
          name: tidy(label + " - " + course.name),
          description: tidy(course.description),
          ...(duration ? { timeRequired: duration } : {}),
          provider: { "@id": site.url + "/#business" },
        },
      });
    }
  }

  return offers;
}

/** 사업장 스키마 */
function businessSchema() {
  const node = {
    "@type": ["BeautySalon", "HealthAndBeautyBusiness"],
    "@id": site.url + "/#business",
    name: site.name,
    alternateName: site.alternateName,
    description: site.description,
    url: site.url,
    image: site.url + site.logo,
    logo: site.url + site.logo,
    telephone: site.telephone,
    priceRange: site.priceRange,
    currenciesAccepted: site.currenciesAccepted,
    knowsLanguage: site.languages,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.streetAddress,
      addressLocality: site.addressLocality,
      addressRegion: site.addressRegion,
      postalCode: site.postalCode,
      addressCountry: site.addressCountry,
    },
    areaServed: site.areaServed.map((name) => ({ "@type": "Place", name })),
    sameAs: site.sameAs,
    founder: site.founders.map((person) => ({
      "@type": "Person",
      name: person.name,
      jobTitle: person.jobTitle,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Treatments and academy courses",
      itemListElement: [...treatmentOffers(), ...courseOffers()],
    },
  };

  // site.js 에서 값이 채워진 경우에만 추가되는 항목들
  if (site.geo) {
    node.geo = {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    };
  }

  if (site.openingHours?.length) {
    node.openingHoursSpecification = site.openingHours.map((entry) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: entry.days,
      opens: entry.opens,
      closes: entry.closes,
    }));
  }

  if (site.aggregateRating?.ratingValue) {
    node.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: String(site.aggregateRating.ratingValue),
      reviewCount: String(site.aggregateRating.reviewCount),
      bestRating: "5",
    };
  }

  return node;
}

/**
 * FAQPage 스키마.
 *
 * 화면에 실제로 렌더링되는 FAQ 만 넣는다. 구글은 FAQ 구조화 데이터가
 * 페이지에 보이는 내용과 일치할 것을 요구하기 때문이다.
 * src/constants/faq.js 의 generalFaqData 는 어느 컴포넌트도 쓰지 않으므로
 * (ServiceFaq.jsx 는 시술별 FAQ 만 import 한다) 여기서도 제외한다.
 * 나중에 그 4개를 화면에 노출하면 여기에도 다시 추가할 것.
 *
 * 자리표시자나 빈 답변은 아래 filter 에서 자동으로 걸러진다.
 */
function faqSchema() {
  const entries = [
    ...browsFaqData,
    ...lashLiftFaqData,
    ...eyelinerFaqData,
    ...lipBlushFaqData,
    ...smpFaqData,
  ]
    .map((item) => ({ question: tidy(item.q), answer: tidy(item.a) }))
    .filter(
      (item) =>
        item.question && item.answer && !/^\[.*\]$/.test(item.answer)
    );

  if (!entries.length) return null;

  return {
    "@type": "FAQPage",
    "@id": site.url + "/#faq",
    mainEntity: entries.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

function buildGraph() {
  const graph = [
    businessSchema(),
    {
      "@type": "WebSite",
      "@id": site.url + "/#website",
      url: site.url,
      name: site.name,
      inLanguage: "en-NZ",
      publisher: { "@id": site.url + "/#business" },
    },
  ];

  const faq = faqSchema();
  if (faq) graph.push(faq);

  return { "@context": "https://schema.org", "@graph": graph };
}

function buildSitemap() {
  const today = new Date().toISOString().slice(0, 10);

  const entries = routes.map((route) => {
    const loc = site.url + (route === "/" ? "" : route);
    return [
      "  <url>",
      "    <loc>" + loc + "</loc>",
      "    <lastmod>" + today + "</lastmod>",
      "    <changefreq>monthly</changefreq>",
      "    <priority>" + (route === "/" ? "1.0" : "0.8") + "</priority>",
      "  </url>",
    ].join("\n");
  });

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries,
    "</urlset>",
    "",
  ].join("\n");
}

export default function seoPlugin() {
  return {
    name: "hannah-beauty-seo",

    transformIndexHtml() {
      const json = JSON.stringify(buildGraph(), null, 2).replace(
        /</g,
        "\\u003c"
      );

      return [
        {
          tag: "script",
          attrs: { type: "application/ld+json" },
          children: json,
          injectTo: "head",
        },
      ];
    },

    generateBundle() {
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: buildSitemap(),
      });
    },
  };
}
