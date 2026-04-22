import React from 'react';

const steps = [
  {
    number: '01',
    title: 'ANALYSIS',
    description: 'Deep dive into operational bottlenecks, system inefficiencies, and growth opportunities within the urban or organizational landscape.',
    color: 'bg-white',
    textColor: 'text-black'
  },
  {
    number: '02',
    title: 'STRATEGY',
    description: 'Designing robust architectures for scalable impact, combining technical precision with strategic foresight to meet complex objectives.',
    color: 'bg-[#F9FF00]',
    textColor: 'text-black'
  },
  {
    number: '03',
    title: 'EXECUTION',
    description: 'High-precision implementation of defined roadmaps, managing cross-functional teams and complex variables with agility.',
    color: 'bg-[#FF0004]',
    textColor: 'text-white'
  },
  {
    number: '04',
    title: 'OPTIMIZATION',
    description: 'Continuous measurement and refinement of results to ensure long-term sustainability and maximum impact for all stakeholders.',
    color: 'bg-black',
    textColor: 'text-white'
  }
];

export const PortfolioProcess = () => {
  return (
    <section id="process" className="py-20 px-6 md:px-12 bg-white border-t-[3px] border-black">
      <div className="container mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-black font-oswald uppercase tracking-tighter leading-none mb-4">
            STRATEGIC <span className="text-[#FF0004]">PROCESS</span>
          </h2>
          <div className="h-[6px] w-32 bg-black"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-[3px] border-black">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`${step.color} ${step.textColor} p-8 border-b-[3px] md:border-b-0 md:border-r-[3px] last:border-r-0 last:border-b-0 border-black min-h-[350px] flex flex-col justify-between hover:translate-y-[-10px] transition-transform duration-300 group`}
            >
              <div>
                <span className="text-6xl font-black font-oswald opacity-20 block mb-4 group-hover:opacity-100 transition-opacity">
                  {step.number}
                </span>
                <h3 className="text-3xl font-black font-oswald mb-6 tracking-tight uppercase">
                  {step.title}
                </h3>
                <p className="font-inter font-bold leading-snug text-lg">
                  {step.description}
                </p>
              </div>
              <div className="mt-8">
                <div className={`h-[3px] w-12 ${step.textColor === 'text-white' ? 'bg-white' : 'bg-black'}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
