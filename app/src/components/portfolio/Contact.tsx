import { Mail, Linkedin, Instagram, ArrowRight } from 'lucide-react'
import { useLanguageStore, translations } from "@/store/language"
import { motion } from "framer-motion"

export const PortfolioContact = () => {
  const { language } = useLanguageStore();
  const t = translations[language].contact;

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-8xl font-black mb-8 font-oswald uppercase leading-none tracking-tighter">
              {t.title} <br />
              <span className="text-[#FF0004]">{t.title_accent}</span>
            </h2>
            <p className="font-inter text-2xl font-bold mb-12 leading-tight">
              {t.subtitle}
            </p>
            
            <div className="flex flex-col items-center gap-8">
              <a 
                href="https://heydrop.me/luist0r" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-brutal btn-brutal-yellow text-2xl md:text-4xl py-8 px-12 w-full max-w-2xl flex items-center justify-center gap-4 group"
              >
                {t.form.send.toUpperCase()} <ArrowRight className="group-hover:translate-x-2 transition-transform" size={32} />
              </a>

              <div className="flex flex-wrap justify-center gap-6 mt-8">
                <a href="mailto:mail@luistor.uk" className="flex items-center gap-4 text-xl font-black font-oswald hover:text-[#FF0004] transition-colors group">
                  <div className="w-12 h-12 border-[3px] border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                    <Mail />
                  </div>
                  mail@luistor.uk
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}
