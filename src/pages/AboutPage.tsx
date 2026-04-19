import { motion } from 'motion/react';
import logoMejorado from '@/assets/logo/logoXilemaMejorado.webp';
import fotoAlumnos from '@/assets/images/fotoAlumnos.jpeg';

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50 text-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-cyan-400/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900">
            Quiénes <span className="text-blue-600">Somos</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10"
          >
            <div className="flex justify-center lg:justify-start">
              <img 
                src={logoMejorado} 
                alt="Logo Xilema Education" 
                className="h-40 md:h-48 object-contain filter drop-shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="space-y-6 text-lg md:text-xl text-slate-600 leading-relaxed">
              <p>
                <span className="text-blue-600 font-semibold">Xilema Education</span> ofrece cursos virtuales diseñados para técnicos, profesionales y público general, con un enfoque práctico y actualizado.
              </p>
              <p>
                Nuestros programas están estructurados para brindar herramientas aplicables en el mundo laboral real, impulsando el crecimiento profesional y la especialización técnica de nuestros estudiantes.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-md border border-slate-200 p-8 rounded-2xl inline-block shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-600/5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <div className="relative z-10">
                <p className="text-sm text-blue-600 uppercase tracking-widest font-semibold mb-2">Razón Social</p>
                <p className="text-xl md:text-2xl font-bold text-slate-900 tracking-wide">XILEMA PROIMPACTO E.I.R.L.</p>
              </div>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-200/50 to-blue-300/50 rounded-[2.5rem] transform rotate-3 blur-sm" />
            <div className="relative rounded-3xl overflow-hidden border border-white shadow-2xl shadow-slate-200/50 group">
              {/* Overlay gradient for depth - lighter for light mode */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent z-10 pointer-events-none" />
              
              <img 
                src={fotoAlumnos} 
                alt="Alumnos de Xilema Education" 
                className="w-full h-full object-cover aspect-[4/3] transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
