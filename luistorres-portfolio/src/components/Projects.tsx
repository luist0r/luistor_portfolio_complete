import React from 'react'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: "Plus Plan",
    tag: "DRONE TECH & ANALYSIS",
    desc: "Land-analysis solution combining drone technology with high-precision 3D models and image-processing algorithms.",
    image: "/projects/plus_plan.png",
    color: "bg-brutal-yellow",
    link: "https://plusplan.app/"
  },
  {
    title: "GT-INTEL",
    tag: "TERRITORIAL INTELLIGENCE",
    desc: "Strategic intelligence dashboard for monitoring national security, infrastructure risk, and territorial dynamics.",
    image: "/projects/gt_intel.png",
    color: "bg-brutal-black",
    text: "text-brutal-white",
    link: "#"
  },
  {
    title: "Misión Argentina",
    tag: "URBAN LAB & TECH HUB",
    desc: "Exploration of the Argentinian tech ecosystem, focusing on smart cities, urban laboratories, and the scaling of LatAm tech unicorns.",
    image: "/projects/mision_argentina.png",
    color: "bg-brutal-yellow",
    link: "https://plusplan.app/mision-argentina/"
  },
  {
    title: "Fuds Organic",
    tag: "SUSTAINABLE AGRI",
    desc: "Leading-edge organic agricultural practices implementation across multiple regions, increasing production by 50%.",
    image: "/projects/fuds_organic.png",
    color: "bg-brutal-red",
    text: "text-brutal-white",
    link: "https://www.instagram.com/fudesol?igsh=MTI5MTNxZGZsd3l1ZA=="
  },
  {
    title: "GPT Fusion Portfolio",
    tag: "AI INVESTMENT SYSTEM",
    desc: "Monthly AI-driven asset selection model using macro-economic analysis and institutional flows to outperform benchmarks.",
    image: "/projects/gpt_fusion.png",
    color: "bg-brutal-white",
    link: "#"
  },
  {
    title: "Global Strategy",
    tag: "LEADERSHIP & VISION",
    desc: "Strategic advisory and operational leadership for multi-stakeholder initiatives and high-impact economic models.",
    image: "/projects/leadership.png",
    color: "bg-brutal-black",
    text: "text-brutal-white",
    link: "#"
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-brutal-black text-brutal-white">
      <div className="container mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-4 inline-block bg-brutal-yellow text-brutal-black px-4 py-2">
            STRATEGIC PROJECTS
          </h2>
          <p className="font-inter text-xl mt-4 font-bold text-brutal-white opacity-80 uppercase tracking-widest">Innovation // Execution // Impact</p>
        </div>

        <div className="grid md:grid-cols-2 gap-0 border-3 border-brutal-white">
          {projects.map((project, idx) => (
            <div key={idx} className={`group border-3 border-brutal-white -m-[1.5px] overflow-hidden flex flex-col ${project.color} ${project.text || 'text-brutal-black'}`}>
              <div className="relative h-[300px] overflow-hidden border-b-3 border-brutal-white">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                />
                <div className="absolute top-4 left-4 bg-brutal-black text-brutal-white font-oswald px-3 py-1 text-sm font-bold">
                  {project.tag}
                </div>
              </div>
              <div className="p-8 flex-grow">
                <h3 className="text-4xl font-black mb-4 uppercase">{project.title}</h3>
                <p className="font-inter text-lg mb-8 opacity-90 font-medium">
                  {project.desc}
                </p>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-brutal inline-flex items-center gap-2 ${project.color === 'bg-brutal-black' ? 'bg-brutal-white text-brutal-black' : 'bg-brutal-black text-brutal-white'}`}
                >
                  Case Study <ExternalLink size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
