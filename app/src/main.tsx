import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.tsx";
import { LANGUAGE_PREFERENCE_KEY, languagePath } from "@/store/language";

// First visit to "/" from a Spanish-language browser goes to /es/, unless the
// visitor already picked a language with the toggle.
function preferredLanguageRedirect() {
  if (window.location.pathname !== "/") return false;
  let saved: string | null = null;
  try {
    saved = localStorage.getItem(LANGUAGE_PREFERENCE_KEY);
  } catch {
    // Ignore unavailable storage.
  }
  const prefersSpanish = saved
    ? saved === "es"
    : (navigator.languages[0] ?? navigator.language ?? "")
        .toLowerCase()
        .startsWith("es");
  if (!prefersSpanish) return false;
  window.history.replaceState(null, "", languagePath("es") + window.location.hash);
  return true;
}

const root = document.getElementById("root")!;
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Prerendered HTML is hydrated in place; after a language redirect the markup
// no longer matches the URL, so render from scratch instead.
if (root.firstElementChild && !preferredLanguageRedirect()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
