import React from 'react';
import { useLanguageStore, translations } from "@/store/language"
import { motion } from "framer-motion"

export const PortfolioProcess = () => {
  const { language } = useLanguageStore();
  const t = translations[language].process;

  return (
    <section id="process" className="py-24 px-6 md:px-12 bg-[#F9FF00]">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-4 inline-block bg-black text-white px-4 py-2 font-oswald uppercase">
            {t.title} <span className="text-[#FF0004]">{t.title_accent}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.steps.map((step, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="border-[3px] border-black p-8 bg-white group hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <div className="text-6xl font-black mb-6 font-oswald text-[#FF0004] opacity-20 group-hover:opacity-100 transition-opacity">
                0{idx + 1}
              </div>
              <h3 className="text-2xl font-black mb-4 font-oswald uppercase">
                {step.title}
              </h3>
              <p className="font-inter font-medium leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
};
