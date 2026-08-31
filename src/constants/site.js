/**
 * 사업장 정보 단일 출처 (single source of truth).
 *
 * 이 파일의 값으로 빌드 시점에 다음이 자동 생성됩니다.
 *   - JSON-LD 구조화 데이터 (검색엔진 / AI 크롤러가 읽는 사업 정보)
 *   - sitemap.xml
 *
 * null 로 둔 항목은 스키마에서 자동으로 제외됩니다.
 * 값을 채우면 다음 빌드부터 자동으로 반영됩니다.
 */

/**
 * 알려진 미해결 과제 — 모바일 반응형
 *
 * index.html 에 viewport 메타 태그가 없습니다. 빠뜨린 것이 아니라 의도적입니다.
 *
 * 히어로의 상호 텍스트가 `text-[13rem]` 처럼 모바일 브레이크포인트 없이
 * 고정 크기로 잡혀 있어서, viewport 를 켜면 375px 화면에서 콘텐츠 폭이
 * 994px 로 넘쳐 레이아웃이 깨집니다.
 *
 * viewport 가 없는 지금은 모바일 브라우저가 페이지를 약 980px 로 그린 뒤
 * 축소해서 보여주므로, 작게 보일 뿐 형태는 유지됩니다.
 *
 * 순서: 반응형 CSS 정리 -> 실기기 확인 -> 그 다음 viewport 메타 추가.
 * 반응형 정리 전에 viewport 만 켜면 모바일 화면이 지금보다 나빠집니다.
 */

export const site = {
  name: "Hannah Beauty",
  alternateName: ["Hannah Beauty NZ", "Hannah Beauty Academy"],
  url: "https://www.hannahbeauty.co.nz",
  logo: "/images/logo_clear.png",

  // TODO 확인 필요: 웹 검색 결과에서 가져온 번호입니다. 실제 번호와 대조해 주세요.
  telephone: "+64 27 659 2705",

  // 주소. 번지수를 아는 경우 streetAddress 를 "12 Horoeka Avenue" 형태로 바꾸면
  // 구글 지도 매칭 정확도가 올라갑니다.
  streetAddress: "Horoeka Avenue",
  addressLocality: "Mount Eden",
  addressRegion: "Auckland",
  postalCode: "1024",
  addressCountry: "NZ",

  priceRange: "$$",
  currenciesAccepted: "NZD",
  pricesIncludeTax: true, // 표시 가격 GST 포함
  languages: ["en", "ko"],

  sameAs: [
    "https://www.instagram.com/hannah_beauty_nz/",
    "https://www.instagram.com/hannah_beauty_smp/",
    "https://blog.hannahbeauty.co.nz",
  ],

  founders: [
    { name: "Hannah", jobTitle: "Co-founder and Beautician" },
    { name: "Dal", jobTitle: "Co-founder and SMP Specialist" },
  ],

  areaServed: [
    "Mount Eden",
    "Auckland",
    "Epsom",
    "Balmoral",
    "Sandringham",
    "Newmarket",
    "Kingsland",
  ],

  description:
    "Permanent makeup studio and training academy in Mount Eden, Auckland, specialising in nano hairstroke and shading brows. Also offering lip blush, eyeliner tattoo, lash lift and scalp micropigmentation. Korean and English spoken.",

  // ---- 아래는 값이 확인되면 채우세요. null 이면 스키마에서 빠집니다. ----

  // 예: { latitude: -36.8875, longitude: 174.7530 }
  geo: null,

  // 예: [{ days: ["Monday","Tuesday"], opens: "09:00", closes: "18:00" }]
  openingHours: null,

  // 구글 리뷰 129개. 평균 평점을 확인해서 ratingValue 를 채우면 활성화됩니다.
  // 예: { ratingValue: 5, reviewCount: 129 }
  aggregateRating: null,
};

/** 사이트맵과 프리렌더링에 사용하는 전체 경로 목록 (src/App.jsx 와 일치해야 함) */
export const routes = [
  "/",
  "/services",
  "/brows",
  "/lash_lift",
  "/eyeliner",
  "/lip_blush",
  "/smp",
  "/academy",
  "/academy/brows",
  "/academy/lash_lift",
  "/academy/eyeliner",
  "/academy/lip_blush",
  "/academy/smp",
];
