import { Navigation } from "@/components/Navigation";
import { PortfolioHero } from "@/components/portfolio/Hero";
import { PortfolioExperience } from "@/components/portfolio/Experience";
import { PortfolioProcess } from "@/components/portfolio/Process";
import { PortfolioProjects } from "@/components/portfolio/Projects";
import { PortfolioContact } from "@/components/portfolio/Contact";
import { useLanguageStore, translations } from "@/store/language";

export default function Home() {
  const { language } = useLanguageStore();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <PortfolioHero />
      <PortfolioExperience />
      <PortfolioProcess />
      <PortfolioProjects />
      <PortfolioContact />

      {/* Footer */}
      <footer className="border-t-[3px] border-black bg-[#1a1a1a] text-white">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-4 border-r-[3px] border-white/10 px-6 md:px-10 py-10">
            <h3 className="font-oswald text-2xl font-bold uppercase tracking-tight mb-4">
              LUIS TORRES
            </h3>
            <p className="font-inter text-xs text-white/60 leading-relaxed max-w-sm">
              {t.footer.desc}
            </p>
          </div>
          <div className="md:col-span-3 border-r-[3px] border-white/10 px-6 md:px-10 py-10">
            <h4 className="font-oswald text-xs font-bold uppercase tracking-[0.2em] text-[#F9FF00] mb-4">
              {t.footer.navigate}
            </h4>
            <div className="space-y-2">
              {[
                { label: t.nav.projects, id: "projects" },
                { label: t.nav.experience, id: "experience" },
                { label: t.nav.process, id: "process" },
                { label: t.nav.contact, id: "contact", isExternal: true },
                { label: t.nav.dashboard, id: "dashboard" }
              ].map(
                (item) => (
                  <a
                    key={item.id}
                    href={
                      item.id === "dashboard"
                        ? "/dashboard"
                        : item.isExternal 
                          ? "https://heydrop.me/luist0r"
                          : `#${item.id}`
                    }
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    className="block font-inter text-sm text-white/70 hover:text-[#F9FF00] transition-colors"
                  >
                    {item.label}
                  </a>
                )
              )}
            </div>
          </div>
          <div className="md:col-span-5 px-6 md:px-10 py-10">
            <div className="flex flex-col h-full justify-between">
              <div>
                <h4 className="font-oswald text-xs font-bold uppercase tracking-[0.2em] text-[#F9FF00] mb-4">
                  {t.footer.talk}
                </h4>
                <a
                  href="https://heydrop.me/luist0r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-oswald text-2xl md:text-3xl font-bold hover:text-[#F9FF00] transition-colors"
                >
                  HEYDROP.ME/LUIST0R
                </a>
              </div>
              <div className="mt-8 pt-8 border-t border-white/10 flex justify-between items-center">
                <span className="font-inter text-[10px] uppercase tracking-widest text-white/40">
                  {t.footer.rights}
                </span>
                <span className="font-inter text-[10px] uppercase tracking-widest text-white/40">
                  {t.footer.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
