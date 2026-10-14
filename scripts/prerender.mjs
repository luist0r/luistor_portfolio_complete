// Renders each language version of the site to static HTML after `vite build`,
// so crawlers and link previews get real content instead of an empty <div>.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "dist/public");
const serverDir = path.join(root, "dist/server");

const { render, renderHead, SITE_URL, LANGUAGES, pageUrl } = await import(
  pathToFileURL(path.join(serverDir, "entry-server.js")).href
);

const template = fs.readFileSync(path.join(outDir, "index.html"), "utf8");

function page({ url, lang, head }) {
  return template
    .replace('<html lang="en">', `<html lang="${lang}">`)
    .replace("<!--app-head-->", head)
    .replace("<!--app-html-->", render(url));
}

function write(file, html) {
  const target = path.join(outDir, file);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, html);
  console.log(`prerendered ${file}`);
}

write("index.html", page({ url: "/", lang: "en", head: renderHead("en") }));
write("es/index.html", page({ url: "/es/", lang: "es", head: renderHead("es") }));

// Cloudflare Pages serves 404.html with a real 404 status for unknown paths.
write(
  "404.html",
  page({
    url: "/404",
    lang: "en",
    head: [
      "<title>Page not found | Luis Torres</title>",
      '<meta name="robots" content="noindex" />',
    ].join("\n    "),
  })
);

const today = new Date().toISOString().slice(0, 10);
const alternates = LANGUAGES.map(
  (l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${pageUrl(l)}" />`
)
  .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/" />`)
  .join("\n");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${LANGUAGES.map(
  (l) => `  <url>
    <loc>${pageUrl(l)}</loc>
    <lastmod>${today}</lastmod>
${alternates}
  </url>`
).join("\n")}
</urlset>
`;
write("sitemap.xml", sitemap);

fs.rmSync(serverDir, { recursive: true, force: true });
