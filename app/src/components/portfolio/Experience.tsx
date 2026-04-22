import React from 'react'

const experiences = [
  {
    role: "General Manager",
    company: "FUDESOL",
    location: "Guatemala",
    period: "2015 – Present",
    desc: "Designed and implemented local economic development and sustainable agriculture programs, improving productivity and climate resilience for 700+ direct beneficiaries."
  },
  {
    role: "Founder & Curator",
    company: "Global Shapers Community (WEF)",
    location: "Jalapa, Guatemala",
    period: "2022 – 2023",
    desc: "Led the Jalapa Hub during a critical growth phase, scaling local impact projects and strengthening the community of young leaders."
  },
  {
    role: "Social Impact Lead",
    company: "Altruism & Community Development",
    location: "Guatemala",
    period: "2015 – Present",
    desc: "Dedicated thousands of hours to community development, altruistic initiatives, and social welfare projects across Guatemala, focusing on education and economic empowerment."
  },
  {
    role: "Founder & Leader",
    company: "Fuds Organic",
    location: "Guatemala",
    period: "2020 – Present",
    desc: "Built and led a team introducing organic agricultural practices across Jalapa, Jutiapa, and Santa Rosa."
  },
  {
    role: "Political Advisor",
    company: "National Level",
    location: "Guatemala",
    period: "2010 – 2011",
    desc: "Designed and implemented political communication and positioning strategies at the regional level, increasing voter intention by 35%."
  }
]

export const PortfolioExperience = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-white">
      <div className="container mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-4 inline-block bg-black text-white px-4 py-2 font-oswald uppercase">
            ALTRUISTIC EXPERIENCE
          </h2>
          <p className="font-inter text-xl mt-4 font-bold text-black">PROFESSIONAL TRACK RECORD & LEADERSHIP</p>
        </div>

        <div className="border-[3px] border-black overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-black text-white font-oswald uppercase text-xl">
              <tr>
                <th className="p-6 border-r-[3px] border-black">Role / Project</th>
                <th className="p-6 border-r-[3px] border-black">Company</th>
                <th className="p-6 border-r-[3px] border-black">Period</th>
                <th className="p-6">Location</th>
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
        </div>

        <div className="grid md:grid-cols-2 mt-12 gap-8">
          <div className="border-[3px] border-black p-8 bg-white">
            <h3 className="text-3xl font-black mb-4 font-oswald uppercase">EDUCATION</h3>
            <ul className="space-y-4 font-inter font-bold">
              <li>MIT Professional Education – Digital Transformation (2025)</li>
              <li>Georgetown University – Innovation & Leadership (2024)</li>
              <li>University of Michigan – Successful Negotiation (2024)</li>
              <li>Universidad Rafael Landívar – B.A. International Relations (2011)</li>
            </ul>
          </div>
          <div className="border-[3px] border-black p-8 bg-[#FF0004] text-white">
            <h3 className="text-3xl font-black mb-4 font-oswald uppercase">COMPETENCIES</h3>
            <div className="flex flex-wrap gap-2">
              {["Strategy", "Operations", "Public Policy", "Economic Development", "Data Analysis", "AI Productivity", "Negotiation", "Partnerships"].map((skill, i) => (
                <span key={i} className="border-[3px] border-black bg-white text-black px-3 py-1 font-oswald font-bold uppercase text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
