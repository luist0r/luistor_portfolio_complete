import { ExternalLink } from 'lucide-react'
import { useLanguageStore, translations } from "@/store/language"
import { motion } from "framer-motion"

export const PortfolioProjects = () => {
  const { language } = useLanguageStore();
  const t = translations[language].projects;

  const projects = [
    {
      title: "Plus Plan",
      tag: t.items.plus_plan.tag,
      desc: t.items.plus_plan.desc,
      image: "/projects/plus_plan.png",
      color: "bg-[#F9FF00]",
      link: "https://plusplan.app/"
    },
    {
      title: "GT-INTEL",
      tag: t.items.gt_intel.tag,
      desc: t.items.gt_intel.desc,
      image: "/projects/gt_intel.png",
      color: "bg-black",
      text: "text-white",
      link: "#"
    },
    {
      title: "Misión Argentina",
      tag: t.items.mision_arg.tag,
      desc: t.items.mision_arg.desc,
      image: "/projects/mision_argentina.png",
      color: "bg-[#F9FF00]",
      link: "https://plusplan.app/mision-argentina/"
    },
    {
      title: "Fuds Organic",
      tag: t.items.fuds.tag,
      desc: t.items.fuds.desc,
      image: "/projects/fuds_organic.png",
      color: "bg-[#FF0004]",
      text: "text-white",
      link: "https://www.instagram.com/fudesol?igsh=MTI5MTNxZGZsd3l1ZA=="
    },
    {
      title: "GPT Fusion Portfolio",
      tag: t.items.gpt.tag,
      desc: t.items.gpt.desc,
      image: "/projects/gpt_fusion.png",
      color: "bg-white",
      link: "#"
    },
    {
      title: "Global Strategy",
      tag: t.items.global.tag,
      desc: t.items.global.desc,
      image: "/projects/leadership.png",
      color: "bg-black",
      text: "text-white",
      link: "#"
    }
  ]

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-black text-white">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-4 inline-block bg-[#F9FF00] text-black px-4 py-2 font-oswald uppercase">
            {t.title}
          </h2>
          <p className="font-inter text-xl mt-4 font-bold text-white opacity-80 uppercase tracking-widest">{t.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-0 border-[3px] border-white">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group border-[3px] border-white -m-[1.5px] overflow-hidden flex flex-col ${project.color} ${project.text || 'text-black'}`}
            >
              <div className="relative h-[300px] overflow-hidden border-b-[3px] border-white">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-black text-white font-oswald px-3 py-1 text-sm font-bold">
                  {project.tag}
                </div>
              </div>
              <div className="p-8 flex-grow">
                <h3 className="text-4xl font-black mb-4 uppercase font-oswald">{project.title}</h3>
                <p className="font-inter text-lg mb-8 opacity-90 font-medium">
                  {project.desc}
                </p>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-brutal inline-flex items-center gap-2 ${project.color === 'bg-black' ? 'bg-white text-black' : 'bg-black text-white'}`}
                >
                  {t.case_study} <ExternalLink size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
