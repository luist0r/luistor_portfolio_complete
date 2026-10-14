import { languagePath, translations, type Language } from "@/store/language";

export const SITE_URL = "https://luistor.uk";
export const ogImage = (lang: Language) =>
  `${SITE_URL}/${lang === "es" ? "luis-torres-es.jpg" : "luis-torres-en.jpg"}`;
export const LANGUAGES: Language[] = ["en", "es"];

export const pageUrl = (lang: Language) => `${SITE_URL}${languagePath(lang)}`;

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

function structuredData(lang: Language) {
  const seo = translations[lang].seo;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Luis Torres",
        url: pageUrl(lang),
        image: ogImage(lang),
        jobTitle: seo.jobTitle,
        description: seo.description,
        email: "mailto:mail@luistor.uk",
        address: { "@type": "PostalAddress", addressCountry: "GT" },
        worksFor: { "@type": "Organization", name: "FUDESOL" },
        alumniOf: [
          { "@type": "CollegeOrUniversity", name: "Universidad Rafael Landívar" },
        ],
        knowsAbout: [
          "Strategy",
          "Operations",
          "Public Policy",
          "Economic Development",
          "Data Analysis",
          "AI Productivity",
          "Negotiation",
          "Partnerships",
        ],
        sameAs: [
          "https://www.linkedin.com/in/luist0r",
          "https://www.instagram.com/luist0r/",
          "https://www.tiktok.com/@luist0r",
          "https://heydrop.me/luist0r",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: "Luis Torres",
        inLanguage: lang,
        publisher: { "@id": `${SITE_URL}/#person` },
      },
    ],
  };
}

// Language-specific <head> tags, injected into each prerendered page.
export function renderHead(lang: Language) {
  const seo = translations[lang].seo;
  const url = pageUrl(lang);
  const other = LANGUAGES.filter((l) => l !== lang);
  const title = escapeHtml(seo.title);
  const description = escapeHtml(seo.description);

  return [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    `<link rel="canonical" href="${url}" />`,
    ...LANGUAGES.map(
      (l) => `<link rel="alternate" hreflang="${l}" href="${pageUrl(l)}" />`
    ),
    `<link rel="alternate" hreflang="x-default" href="${pageUrl("en")}" />`,
    `<meta property="og:type" content="profile" />`,
    `<meta property="og:site_name" content="Luis Torres" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:locale" content="${seo.locale}" />`,
    ...other.map(
      (l) =>
        `<meta property="og:locale:alternate" content="${translations[l].seo.locale}" />`
    ),
    `<meta property="og:image" content="${ogImage(lang)}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="Luis Torres — ${escapeHtml(seo.jobTitle)}" />`,
    `<meta property="profile:first_name" content="Luis" />`,
    `<meta property="profile:last_name" content="Torres" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    `<meta name="twitter:image" content="${ogImage(lang)}" />`,
    `<script type="application/ld+json">${JSON.stringify(
      structuredData(lang)
    ).replace(/</g, "\\u003c")}</script>`,
  ].join("\n    ");
}

// Keeps the live document in sync when the visitor switches language
// without a full page load.
export function applyHead(lang: Language) {
  const seo = translations[lang].seo;
  const url = pageUrl(lang);

  document.documentElement.lang = lang;
  document.title = seo.title;

  const set = (selector: string, attr: string, value: string) => {
    document.querySelector(selector)?.setAttribute(attr, value);
  };
  set('meta[name="description"]', "content", seo.description);
  set('link[rel="canonical"]', "href", url);
  set('meta[property="og:url"]', "content", url);
  set('meta[property="og:title"]', "content", seo.title);
  set('meta[property="og:description"]', "content", seo.description);
  set('meta[property="og:locale"]', "content", seo.locale);
  set('meta[property="og:image"]', "content", ogImage(lang));
  set('meta[name="twitter:image"]', "content", ogImage(lang));
}
