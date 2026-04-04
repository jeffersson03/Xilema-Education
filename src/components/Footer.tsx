import { Send, Globe, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16 px-6 md:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
        <div className="space-y-6 text-center sm:text-left">
          <div className="text-2xl font-bold text-white">Xilema Education</div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
            © 2024 Xilema Education. Digital Curator Philosophy. Liderando la educación tecnológica en la región.
          </p>
          <div className="flex gap-4 justify-center sm:justify-start">
            {[Facebook, Instagram, Linkedin, Globe].map((Icon, i) => (
              <a 
                key={i}
                href="#" 
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
        
        <div className="text-center sm:text-left">
          <h4 className="text-primary-container text-xs uppercase tracking-widest font-bold mb-6">Cursos</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            {['Ofimática', 'Ingeniería', 'Empleabilidad', 'Innovación', 'Agricultura'].map(item => (
              <li key={item}>
                <a href="#" className="hover:text-white transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="text-center sm:text-left">
          <h4 className="text-primary-container text-xs uppercase tracking-widest font-bold mb-6">Empresa</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            {['Sobre nosotros', 'Convenios', 'Blog Educativo', 'Certificaciones', 'Libro de Reclamaciones'].map(item => (
              <li key={item}>
                <a href="#" className="hover:text-white transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="text-center sm:text-left">
          <h4 className="text-primary-container text-xs uppercase tracking-widest font-bold mb-6">Suscripción</h4>
          <p className="text-slate-400 text-sm mb-4">Recibe las últimas novedades en tecnología.</p>
          <div className="flex gap-2 max-w-sm mx-auto sm:mx-0">
            <input 
              type="email" 
              placeholder="Tu correo" 
              className="bg-slate-800 border-none rounded-md px-4 py-2 text-sm w-full focus:ring-2 focus:ring-primary outline-none"
            />
            <button className="bg-primary text-white p-2 rounded-md hover:bg-primary-container hover:text-on-primary-container transition-colors shrink-0">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
