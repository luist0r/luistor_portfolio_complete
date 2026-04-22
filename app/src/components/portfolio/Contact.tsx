import { Mail, Linkedin, Instagram, ArrowRight } from 'lucide-react'
import { useLanguageStore, translations } from "@/store/language"

export const PortfolioContact = () => {
  const { language } = useLanguageStore();
  const t = translations[language].contact;

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-6xl md:text-8xl font-black mb-8 font-oswald uppercase leading-none tracking-tighter">
              {t.title} <br />
              <span className="text-[#FF0004]">{t.title_accent}</span>
            </h2>
            <p className="font-inter text-2xl font-bold mb-12 leading-tight max-w-md">
              {t.subtitle}
            </p>
            
            <div className="space-y-6">
              <a href="mailto:ls@luistor.com" className="flex items-center gap-4 text-2xl font-black font-oswald hover:text-[#FF0004] transition-colors group">
                <div className="w-12 h-12 border-[3px] border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                  <Mail />
                </div>
                ls@luistor.com
              </a>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/luis-torres-93113524/" target="_blank" rel="noopener noreferrer" className="w-16 h-16 border-[3px] border-black flex items-center justify-center hover:bg-[#0077B5] hover:text-white transition-all">
                  <Linkedin size={32} />
                </a>
                <a href="https://www.instagram.com/fudesol?igsh=MTI5MTNxZGZsd3l1ZA==" target="_blank" rel="noopener noreferrer" className="w-16 h-16 border-[3px] border-black flex items-center justify-center hover:bg-[#E4405F] hover:text-white transition-all">
                  <Instagram size={32} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-[3px] border-black p-8 md:p-12 bg-[#F9FF00] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <form className="space-y-6">
              <div>
                <label className="block font-oswald font-black uppercase text-xl mb-2">{t.form.name}</label>
                <input type="text" className="w-full border-[3px] border-black p-4 font-inter font-bold focus:outline-none focus:bg-white bg-transparent" placeholder="LUIS TORRES" />
              </div>
              <div>
                <label className="block font-oswald font-black uppercase text-xl mb-2">{t.form.email}</label>
                <input type="email" className="w-full border-[3px] border-black p-4 font-inter font-bold focus:outline-none focus:bg-white bg-transparent" placeholder="LS@LUISTOR.COM" />
              </div>
              <div>
                <label className="block font-oswald font-black uppercase text-xl mb-2">{t.form.message}</label>
                <textarea rows={4} className="w-full border-[3px] border-black p-4 font-inter font-bold focus:outline-none focus:bg-white bg-transparent" placeholder={t.form.message_placeholder}></textarea>
              </div>
              <button className="w-full bg-black text-white font-oswald font-black uppercase text-2xl py-6 hover:bg-[#FF0004] transition-colors flex items-center justify-center gap-3 group">
                {t.form.send} <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
