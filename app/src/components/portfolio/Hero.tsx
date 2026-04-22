import { ArrowRight } from 'lucide-react'
import { useLanguageStore, translations } from "@/store/language"
import { motion } from "framer-motion"

export const PortfolioHero = () => {
  const { language } = useLanguageStore();
  const t = translations[language].hero;

  return (
    <section id="hero" className="min-h-[90vh] flex flex-col justify-center px-6 md:px-12 bg-white pt-24 md:pt-12">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-12 gap-0 border-[3px] border-black bg-black">
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-7 p-8 md:p-16 bg-white border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-black"
          >
            <h1 className="text-6xl md:text-8xl lg:text-[110px] font-black mb-8 leading-[0.9] tracking-tighter font-oswald uppercase">
              {t.driving} <br />
              <span className="text-[#FF0004]">{t.scalable}</span><br />
              <span className="bg-[#F9FF00] px-2 inline-block mt-2">{t.impact}</span>
            </h1>
            <p className="font-inter text-xl md:text-2xl mb-12 max-w-2xl text-black font-bold leading-tight">
              {t.desc}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-brutal btn-brutal-yellow flex items-center gap-2 text-lg">
                {t.view_projects} <ArrowRight size={20} />
              </a>
              <a href="https://heydrop.me/luist0r" target="_blank" rel="noopener noreferrer" className="btn-brutal btn-brutal-black flex items-center gap-2 text-lg">
                {t.get_in_touch}
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="lg:col-span-5 relative min-h-[500px] bg-[#F9FF00] border-[3px] border-black overflow-hidden"
          >
            {/* YouTube Short Embed with Brutalist Filters */}
            <div className="absolute inset-0 z-0 opacity-80 grayscale contrast-125 brightness-75">
              <iframe 
                src="https://www.youtube.com/embed/QcB4jF8VLkw?autoplay=1&mute=1&loop=1&playlist=QcB4jF8VLkw&controls=0&modestbranding=1&showinfo=0&rel=0"
                className="w-full h-full object-cover scale-[1.5]"
                allow="autoplay; encrypted-media"
                frameBorder="0"
              ></iframe>
            </div>
            
            {/* Overlay Grid for Style Fusion */}
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 pointer-events-none z-10">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="border-[1px] border-black/20"></div>
              ))}
            </div>

            {/* Impact Text Overlay */}
            <div className="relative z-20 h-full flex flex-col items-center justify-center p-12 text-center select-none">
              <motion.div 
                whileHover={{ rotate: 0, scale: 1.05 }}
                className="bg-[#FF0004] text-white border-[3px] border-black p-6 rotate-3 transition-transform duration-300"
              >
                <h3 className="text-4xl font-black mb-2 uppercase font-oswald">{t.vision}</h3>
                <p className="font-inter font-bold uppercase tracking-widest text-sm">{t.vision_desc}</p>
              </motion.div>
              <motion.div 
                whileHover={{ rotate: 0, scale: 1.05 }}
                className="bg-black text-white border-[3px] border-black p-8 -rotate-3 transition-transform duration-300 mt-4"
              >
                <h3 className="text-5xl font-black mb-2 uppercase font-oswald">{t.urban}</h3>
                <p className="font-inter font-bold uppercase tracking-widest text-sm">{t.urban_desc}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
