import React from 'react'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { Menu, X } from 'lucide-react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-brutal-white border-b-3 border-brutal-black">
        <div className="flex justify-between items-center px-6 py-4">
          <div className="font-oswald text-2xl font-bold tracking-tighter">
            LUIS<span className="text-brutal-red">TORRES</span>
          </div>
          
          <div className="hidden md:flex gap-8 font-oswald text-lg font-semibold uppercase">
            <a href="#hero" className="hover:text-brutal-red transition-colors">Intro</a>
            <a href="#experience" className="hover:text-brutal-red transition-colors">Experience</a>
            <a href="#projects" className="hover:text-brutal-red transition-colors">Projects</a>
            <a href="#contact" className="hover:text-brutal-red transition-colors">Contact</a>
          </div>

          <button 
            className="md:hidden p-2 border-3 border-brutal-black bg-brutal-yellow"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-brutal-white border-b-3 border-brutal-black flex flex-col p-6 gap-4 font-oswald text-xl uppercase font-bold">
            <a href="#hero" onClick={() => setIsMenuOpen(false)}>Intro</a>
            <a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        )}
      </nav>

      <main className="pt-[75px]">
        <Hero />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t-3 border-brutal-black p-12 bg-brutal-black text-brutal-white">
        <div className="container mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl mb-6 font-bold tracking-tighter">
              LUIS<span className="text-brutal-red">TORRES</span>
            </h2>
            <p className="font-inter text-lg opacity-80 max-w-md">
              Scaling Impact through Operations and Public Policy Execution.
            </p>
          </div>
          <div className="flex flex-col gap-4 font-oswald text-xl uppercase">
            <a href="mailto:mail@luistor.uk" className="hover:text-brutal-yellow transition-colors">mail@luistor.uk</a>
            <a href="https://linkedin.com" className="hover:text-brutal-yellow transition-colors">LinkedIn</a>
            <p className="opacity-50 text-sm mt-8">© 2026 LUIS TORRES. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
