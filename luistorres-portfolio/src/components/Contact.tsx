import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-brutal-yellow">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-6xl md:text-8xl font-black mb-8 leading-none">
              LET'S <br />
              EXECUTE <br />
              <span className="bg-brutal-black text-brutal-white px-2">VISION.</span>
            </h2>
            <p className="font-inter text-xl md:text-2xl font-bold mb-12 text-brutal-black max-w-md leading-relaxed">
              Available for strategic advisory, operational leadership, and high-impact development initiatives.
            </p>
            
            <div className="space-y-4">
              <div className="flex flex-col">
                <span className="font-oswald uppercase text-sm font-bold opacity-60 text-brutal-black">Location</span>
                <span className="font-oswald text-2xl font-bold text-brutal-black">Guatemala / Global</span>
              </div>
              <div className="flex flex-col">
                <span className="font-oswald uppercase text-sm font-bold opacity-60 text-brutal-black">Email</span>
                <a href="mailto:mail@luistor.uk" className="font-oswald text-2xl font-bold hover:text-brutal-red underline decoration-4 underline-offset-4 text-brutal-black">mail@luistor.uk</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <a 
              href="https://heydrop.me/luist0r" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brutal-white border-brutal p-12 hover:bg-brutal-black group transition-all duration-300 block"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="bg-brutal-black text-brutal-white px-4 py-2 font-oswald text-xl font-bold group-hover:bg-brutal-yellow group-hover:text-brutal-black transition-colors">
                  DIGITAL CARD
                </div>
                <ArrowUpRight size={48} className="group-hover:text-brutal-yellow group-hover:translate-x-2 group-hover:-translate-y-2 transition-all" />
              </div>
              <h3 className="text-5xl md:text-7xl font-black group-hover:text-brutal-white transition-colors leading-tight">
                GET IN <br /> TOUCH
              </h3>
              <p className="font-inter font-bold text-xl mt-6 group-hover:text-brutal-white opacity-60 group-hover:opacity-100 transition-all">
                heydrop.me/luist0r
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
