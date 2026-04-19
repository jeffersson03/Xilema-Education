import { useState, useEffect } from 'react';
import { Menu, X, Facebook } from 'lucide-react';

const WhatsappIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const TiktokIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import logoOtro from '@/assets/logo/logoXilemaMejorado.webp'
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Nuestros Cursos', path: '/cursos' },
    { name: 'Ubicación', path: '/ubicacion' },
    { name: 'Quiénes somos', path: '/nosotros' },
    { name: 'Libro de Reclamaciones', path: '/reclamos' }
  ];

  const socialLinks = [
    { name: 'WhatsApp', url: 'https://api.whatsapp.com/send/?phone=%2B51917893978&text&type=phone_number&app_absent=0', icon: WhatsappIcon, colors: 'text-green-400 hover:bg-green-500 hover:text-white border-green-400/20 hover:border-green-500' },
    { name: 'Facebook', url: 'https://www.facebook.com/xilemaeducation/', icon: Facebook, colors: 'text-blue-400 hover:bg-blue-600 hover:text-white border-blue-400/20 hover:border-blue-600' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@xilema.education', icon: TiktokIcon, colors: 'text-slate-300 hover:bg-slate-800 hover:text-white border-slate-400/20 hover:border-slate-800' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Se activa el efecto de scroll después de 50px para una respuesta más rápida
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${isScrolled || location.pathname !== '/'
      ? 'bg-slate-900/80 backdrop-blur-xl py-3 border-b border-white/10 shadow-2xl'
      : 'bg-[#0B0E2D] py-5 shadow-none border-b border-transparent'
      }`}>
      <div className="flex justify-between items-center w-full px-6 md:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src={logoOtro}
              alt="Logo"
              className="h-20 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
            />
          
          </Link>
          <nav className="hidden lg:flex gap-8 items-center">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path && (item.path !== '/' || location.hash === '');
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative font-medium transition-colors duration-300 text-sm group ${isActive ? 'text-cyan-400' : 'text-cyan-50 hover:text-white'}`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-400/20 transition-transform duration-500 blur-[2px] ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          
          {/* Social Bubbles */}
          <div className="hidden sm:flex items-center gap-2 border-r border-white/10 pr-4 mr-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-9 h-9 flex items-center justify-center rounded-full border bg-slate-800/50 backdrop-blur-sm transition-all duration-300 ${social.colors}`}
                aria-label={`Visitar ${social.name}`}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>

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
              {navItems.map((item) => {
                const isActive = location.pathname === item.path && (item.path !== '/' || location.hash === '');
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`font-medium transition-colors py-2 text-lg ${isActive ? 'text-cyan-400' : 'text-cyan-50 hover:text-cyan-200'}`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
