// Renders scripts/og-image.html to app/public/luis-torres-{en,es}.jpg with headless
// Chrome (macOS). Run with `npm run og` after changing the card's copy.
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const chrome =
  process.env.CHROME_PATH ||
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const template = pathToFileURL(path.join(root, "scripts/og-image.html")).href;
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "og-"));

for (const [lang, file] of [
  ["en", "luis-torres-en.jpg"],
  ["es", "luis-torres-es.jpg"],
]) {
  const png = path.join(tmp, `${lang}.png`);
  execFileSync(chrome, [
    "--headless",
    "--disable-gpu",
    "--hide-scrollbars",
    "--allow-file-access-from-files",
    "--force-device-scale-factor=1",
    "--window-size=1200,630",
    "--virtual-time-budget=3000",
    `--screenshot=${png}`,
    `${template}?lang=${lang}`,
  ], { stdio: "ignore" });
  const out = path.join(root, "app/public", file);
  execFileSync("sips", ["-s", "format", "jpeg", "-s", "formatOptions", "85", png, "--out", out], {
    stdio: "ignore",
  });
  console.log(`${file}: ${Math.round(fs.statSync(out).size / 1024)} KB`);
}

fs.rmSync(tmp, { recursive: true, force: true });
