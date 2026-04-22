import React from 'react'
import { useLanguageStore, translations } from "@/store/language"
import { motion } from "framer-motion"

export const PortfolioExperience = () => {
  const { language } = useLanguageStore();
  const t = translations[language].experience;

  const experiences = [
    {
      role: t.roles.manager,
      company: "FUDESOL",
      location: "Guatemala",
      period: "2015 – Present",
      desc: t.descriptions.manager
    },
    {
      role: t.roles.founder,
      company: "Global Shapers Community (WEF)",
      location: "Jalapa, Guatemala",
      period: "2022 – 2023",
      desc: t.descriptions.founder
    },
    {
      role: t.roles.impact,
      company: "Altruism & Community Development",
      location: "Guatemala",
      period: "2015 – Present",
      desc: t.descriptions.impact
    },
    {
      role: t.roles.organic,
      company: "Fuds Organic",
      location: "Guatemala",
      period: "2020 – Present",
      desc: t.descriptions.organic
    },
    {
      role: t.roles.advisor,
      company: "National Level",
      location: "Guatemala",
      period: "2010 – 2011",
      desc: t.descriptions.advisor
    }
  ]

  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-white">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-4 inline-block bg-black text-white px-4 py-2 font-oswald uppercase">
            {t.title}
          </h2>
          <p className="font-inter text-xl mt-4 font-bold text-black">{t.subtitle}</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-[3px] border-black overflow-x-auto"
        >
          <table className="w-full text-left border-collapse">
            <thead className="bg-black text-white font-oswald uppercase text-xl">
              <tr>
                <th className="p-6 border-r-[3px] border-black">{t.table.role}</th>
                <th className="p-6 border-r-[3px] border-black">{t.table.company}</th>
                <th className="p-6 border-r-[3px] border-black">{t.table.period}</th>
                <th className="p-6">{t.table.location}</th>
              </tr>
            </thead>
            <tbody className="font-inter">
              {experiences.map((exp, idx) => (
                <React.Fragment key={idx}>
                  <tr className="border-t-[3px] border-black hover:bg-[#F9FF00] transition-colors cursor-pointer group">
                    <td className="p-6 border-r-[3px] border-black font-bold text-lg">{exp.role}</td>
                    <td className="p-6 border-r-[3px] border-black font-bold">{exp.company}</td>
                    <td className="p-6 border-r-[3px] border-black whitespace-nowrap">{exp.period}</td>
                    <td className="p-6">{exp.location}</td>
                  </tr>
                  <tr className="border-t-[3px] border-black bg-white">
                    <td colSpan={4} className="p-8 text-lg leading-relaxed text-gray-700 font-medium">
                      <div className="flex gap-4">
                        <div className="w-2 bg-[#FF0004]"></div>
                        <div>{exp.desc}</div>
                      </div>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </motion.div>

        <div className="grid md:grid-cols-2 mt-12 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border-[3px] border-black p-8 bg-white"
          >
            <h3 className="text-3xl font-black mb-4 font-oswald uppercase">{t.education}</h3>
            <ul className="space-y-4 font-inter font-bold">
              <li>MIT Professional Education – Digital Transformation (2025)</li>
              <li>Georgetown University – Innovation & Leadership (2024)</li>
              <li>University of Michigan – Successful Negotiation (2024)</li>
              <li>Universidad Rafael Landívar – B.A. International Relations (2011)</li>
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border-[3px] border-black p-8 bg-[#FF0004] text-white"
          >
            <h3 className="text-3xl font-black mb-4 font-oswald uppercase">{t.competencies}</h3>
            <div className="flex flex-wrap gap-2">
              {["Strategy", "Operations", "Public Policy", "Economic Development", "Data Analysis", "AI Productivity", "Negotiation", "Partnerships"].map((skill, i) => (
                <span key={i} className="border-[3px] border-black bg-white text-black px-3 py-1 font-oswald font-bold uppercase text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
