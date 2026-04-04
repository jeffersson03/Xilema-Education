import { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Button from './ui/Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = ['Inicio', 'Nuestros Cursos', 'Ubicación', 'Quiénes somos'];

  useEffect(() => {
    const handleScroll = () => {
      // Se activa el efecto de scroll después de 50px para una respuesta más rápida
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${isScrolled
      ? 'bg-slate-900/80 backdrop-blur-xl py-3 border-b border-white/10 shadow-2xl'
      : 'bg-[#002B5B] py-5 shadow-none border-b border-transparent'
      }`}>
      <div className="flex justify-between items-center w-full px-6 md:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2 group">
            <img
              src="/assets/logo/logoXilemaSolo.webp"
              alt="Logo"
              className="h-20 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
            />
            <img
              src="/assets/logo/logoXilemaLetra.webp"
              alt="Xilema"
              className="h-10 md:h-7 w-auto object-contain"
            />
          </a>
          <nav className="hidden lg:flex gap-8 items-center">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="relative text-cyan-50 font-medium hover:text-white transition-colors duration-300 text-sm group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full" />
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-400/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 blur-[2px]" />
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2 md:gap-4">

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-all"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-900 border-t border-white/10 overflow-hidden"
          >
            <nav className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-cyan-50 font-medium hover:text-tertiary-container transition-colors py-2 text-lg"
                >
                  {item}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
