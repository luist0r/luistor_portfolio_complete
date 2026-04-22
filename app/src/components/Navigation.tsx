import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { useAuth } from "@/hooks/useAuth";
import { Menu, X, Globe } from "lucide-react";
import { useLanguageStore, translations } from "@/store/language";

export function Navigation() {
  const { user, isAuthenticated, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage } = useLanguageStore();
  const t = translations[language].nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const navItems = [
    { label: t.intro, action: () => scrollToSection("hero") },
    { label: t.experience, action: () => scrollToSection("experience") },
    { label: t.projects, action: () => scrollToSection("projects") },
    { label: t.process, action: () => scrollToSection("process") },
    { label: t.contact, action: () => window.open("https://heydrop.me/luist0r", "_blank") },
  ];

  return (
    <nav
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
              to="/"
              className="font-oswald text-xl font-bold tracking-tight uppercase"
            >
              LUIS<span className="text-[#FF0004]">TORRES</span>
            </Link>
          </div>
          <div className="col-span-7 flex bg-white/90">
            {navItems.map((item, i) => (
              <button
                key={i}
                onClick={item.action}
                className="flex-1 border-r-[3px] border-black px-4 py-4 font-oswald text-sm font-semibold uppercase tracking-wide hover:bg-[#F9FF00] transition-colors text-center"
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="col-span-3 flex items-center justify-end px-6 gap-3 bg-white">
            <button
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              className="flex items-center gap-2 font-oswald text-sm font-bold uppercase hover:text-[#FF0004] transition-colors px-3 py-2 border-[2px] border-black bg-white"
            >
              <Globe size={16} />
              {language.toUpperCase()}
            </button>
            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className="font-oswald text-sm font-semibold uppercase hover:text-[#FF0004] transition-colors"
                >
                  {user?.name || t.dashboard}
                </Link>
                <button
                  onClick={logout}
                  className="btn-brutal btn-brutal-black text-xs py-2 px-4"
                >
                  {t.logout}
                </button>
              </>
            ) : (
              <a
                href="https://heydrop.me/luist0r"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brutal btn-brutal-yellow text-xs py-2 px-4 font-bold uppercase"
              >
                {t.contact}
              </a>
            )}
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white">
          <Link
            to="/"
            className="font-oswald text-xl font-bold tracking-tight uppercase"
          >
            LUIS<span className="text-[#FF0004]">TORRES</span>
          </Link>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              className="flex items-center gap-2 font-oswald text-xs font-bold uppercase border-[2px] border-black px-2 py-1 bg-[#F9FF00]"
            >
              <Globe size={14} />
              {language.toUpperCase()}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Content */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t-[3px] border-black animate-in slide-in-from-top duration-300">
            {navItems.map((item, i) => (
              <button
                key={i}
                onClick={item.action}
                className="w-full text-left px-6 py-6 border-b-[3px] border-black font-oswald text-2xl font-black uppercase tracking-tight hover:bg-[#F9FF00] transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="p-6 bg-[#F9FF00]">
              {isAuthenticated ? (
                <div className="flex flex-col gap-4">
                  <Link
                    to="/dashboard"
                    className="font-oswald text-xl font-black uppercase underline decoration-[4px]"
                  >
                    {user?.name || t.dashboard}
                  </Link>
                  <button
                    onClick={logout}
                    className="btn-brutal btn-brutal-black w-full py-4 text-xl"
                  >
                    {t.logout}
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => scrollToSection("contact")}
                  className="btn-brutal btn-brutal-black w-full py-4 text-xl block text-center uppercase font-black"
                >
                  {t.contact}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
