import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { useAuth } from "@/hooks/useAuth";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const { user, isAuthenticated, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

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
    { label: "INTRO", action: () => scrollToSection("hero") },
    { label: "EXPERIENCE", action: () => scrollToSection("experience") },
    { label: "PROJECTS", action: () => scrollToSection("projects") },
    { label: "PROCESS", action: () => scrollToSection("process") },
    { label: "CONTACT", action: () => scrollToSection("contact") },
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
          <div className="col-span-3 border-r-[3px] border-black px-6 py-4 flex items-center bg-white">
            <Link
              to="/"
              className="font-oswald text-xl font-bold tracking-tight uppercase"
            >
              LUIS<span className="text-[#FF0004]">TORRES</span>
            </Link>
          </div>
          <div className="col-span-6 flex bg-white/90">
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
            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className="font-oswald text-sm font-semibold uppercase hover:text-[#FF0004] transition-colors"
                >
                  {user?.name || "DASHBOARD"}
                </Link>
                <button
                  onClick={logout}
                  className="btn-brutal btn-brutal-black text-xs py-2 px-4"
                >
                  LOG OUT
                </button>
              </>
            ) : (
              <a
                href="/api/oauth/authorize"
                className="btn-brutal btn-brutal-yellow text-xs py-2 px-4"
              >
                LOG IN
              </a>
            )}
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white">
          <Link
            to="/"
            className="font-oswald text-lg font-bold tracking-tight uppercase"
          >
            LUIS<span className="text-[#FF0004]">TORRES</span>
          </Link>
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="p-2 border-[3px] border-black bg-[#F9FF00]"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Content */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t-[3px] border-black flex flex-col p-6 gap-4 font-oswald text-xl uppercase font-bold">
            {navItems.map((item, i) => (
              <button
                key={i}
                onClick={item.action}
                className="text-left hover:text-[#FF0004] transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-black/10 flex flex-col gap-4">
              {isAuthenticated ? (
                <>
                  <Link
                    to="/dashboard"
                    className="font-oswald text-lg font-bold uppercase hover:text-[#FF0004]"
                  >
                    {user?.name || "DASHBOARD"}
                  </Link>
                  <button
                    onClick={logout}
                    className="btn-brutal btn-brutal-black w-full"
                  >
                    LOG OUT
                  </button>
                </>
              ) : (
                <a
                  href="/api/oauth/authorize"
                  className="btn-brutal btn-brutal-yellow w-full text-center"
                >
                  LOG IN
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
