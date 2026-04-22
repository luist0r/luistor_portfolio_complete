import { ArrowRight } from 'lucide-react'

export const PortfolioHero = () => {
  return (
    <section id="hero" className="min-h-[90vh] flex flex-col justify-center px-6 md:px-12 bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-12 gap-0 border-[3px] border-black bg-black">
          <div className="lg:col-span-7 p-8 md:p-16 bg-white border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-black">
            <h1 className="text-6xl md:text-8xl lg:text-[110px] font-black mb-8 leading-[0.9] tracking-tighter font-oswald uppercase">
              DRIVING <br />
              <span className="text-[#FF0004]">SCALABLE</span><br />
              <span className="bg-[#F9FF00] px-2 inline-block mt-2">IMPACT</span>
            </h1>
            <p className="font-inter text-xl md:text-2xl mb-12 max-w-2xl text-black font-bold leading-tight">
              Strategic Operations Leader specialized in executing complex visions and implementing high-impact development models.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-brutal btn-brutal-yellow flex items-center gap-2 text-lg">
                View Projects <ArrowRight size={20} />
              </a>
              <a href="#contact" className="btn-brutal btn-brutal-black flex items-center gap-2 text-lg">
                Get in Touch
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative min-h-[500px] bg-[#F9FF00] border-[3px] border-black overflow-hidden">
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
              <div className="bg-[#FF0004] text-white border-[3px] border-black p-6 rotate-3 hover:rotate-0 transition-transform duration-300">
                <h3 className="text-4xl font-black mb-2 uppercase font-oswald">Vision</h3>
                <p className="font-inter font-bold uppercase tracking-widest text-sm">Strategic Execution</p>
              </div>
              <div className="bg-black text-white border-[3px] border-black p-8 -rotate-3 hover:rotate-0 transition-transform duration-300 mt-4">
                <h3 className="text-5xl font-black mb-2 uppercase font-oswald">Luis</h3>
                <p className="font-inter font-bold uppercase tracking-widest text-sm">Urban Intelligence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
