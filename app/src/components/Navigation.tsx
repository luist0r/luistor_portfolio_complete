import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage, translations, languagePath } from "@/store/language";

const CONTACT_URL = "https://heydrop.me/luist0r";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language].nav;
  const otherLanguage = language === "en" ? "es" : "en";
  const languageLabel =
    otherLanguage === "es" ? "Ver en español" : "View in English";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t.intro, href: "#hero" },
    { label: t.experience, href: "#experience" },
    { label: t.projects, href: "#projects" },
    { label: t.process, href: "#process" },
    { label: t.contact, href: CONTACT_URL, external: true },
  ];

  const externalProps = {
    target: "_blank",
    rel: "noopener noreferrer",
  };

  const switchLanguage = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    setLanguage(otherLanguage);
  };

  return (
    <nav
      aria-label="Main"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-white border-b-[3px] border-black"
          : "bg-white/80 backdrop-blur-sm md:bg-transparent"
      }`}
    >
      <div className="w-full">
        {/* Desktop Nav */}
        <div className="hidden md:grid grid-cols-12">
          <div className="col-span-2 border-r-[3px] border-black px-6 py-4 flex items-center bg-white">
            <Link
              to={languagePath(language)}
              className="font-oswald text-xl font-bold tracking-tight uppercase"
            >
              LUIS<span className="text-[#FF0004]">TORRES</span>
            </Link>
          </div>
          <div className="col-span-7 flex bg-white/90">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                {...(item.external ? externalProps : {})}
                className="flex-1 border-r-[3px] border-black px-4 py-4 font-oswald text-sm font-semibold uppercase tracking-wide hover:bg-[#F9FF00] transition-colors text-center"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="col-span-3 flex items-center justify-end px-6 gap-3 bg-white">
            <a
              href={languagePath(otherLanguage)}
              hrefLang={otherLanguage}
              onClick={switchLanguage}
              aria-label={languageLabel}
              title={languageLabel}
              className="flex items-center gap-2 font-oswald text-sm font-bold uppercase hover:text-[#FF0004] transition-colors px-3 py-2 border-[2px] border-black bg-white"
            >
              <Globe size={16} aria-hidden="true" />
              {language.toUpperCase()}
            </a>
            <a
              href={CONTACT_URL}
              {...externalProps}
              className="btn-brutal btn-brutal-yellow text-xs py-2 px-4 font-bold uppercase"
            >
              {t.contact}
            </a>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white">
          <Link
            to={languagePath(language)}
            className="font-oswald text-xl font-bold tracking-tight uppercase"
          >
            LUIS<span className="text-[#FF0004]">TORRES</span>
          </Link>
          <div className="flex items-center gap-4">
            <a
              href={languagePath(otherLanguage)}
              hrefLang={otherLanguage}
              onClick={switchLanguage}
              aria-label={languageLabel}
              className="flex items-center gap-2 font-oswald text-xs font-bold uppercase border-[2px] border-black px-2 py-1 bg-[#F9FF00]"
            >
              <Globe size={14} aria-hidden="true" />
              {language.toUpperCase()}
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Content */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden bg-white border-t-[3px] border-black animate-in slide-in-from-top duration-300"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                {...(item.external ? externalProps : {})}
                onClick={() => setMenuOpen(false)}
                className="block w-full text-left px-6 py-6 border-b-[3px] border-black font-oswald text-2xl font-black uppercase tracking-tight hover:bg-[#F9FF00] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="p-6 bg-[#F9FF00]">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="btn-brutal btn-brutal-black w-full py-4 text-xl block text-center uppercase font-black"
              >
                {t.contact}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
