import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from './ui/Button';

export default function FinalCTA() {
  return (
    <section className="py-24 px-8 overflow-hidden relative">
      <div className="absolute inset-0 bg-slate-900 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-container rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-tertiary-container rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 text-center space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-primary-container font-bold text-sm"
        >
          <Sparkles size={16} />
          TU FUTURO EMPIEZA HOY
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-tight"
        >
          ¿Listo para transformar <br className="hidden md:block" /> tu perfil profesional?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-slate-400 max-w-2xl mx-auto"
        >
          Únete a la comunidad de Xilema Education y obtén las herramientas tecnológicas que el mercado laboral exige.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 pt-6"
        >
          <Button 
            size="xl" 
            style={{ backgroundColor: '#CCFF00' }}
            className="text-slate-900"
          >
            Inscribirme Ahora <ArrowRight size={24} />
          </Button>
          
          <Button variant="outline" size="xl">
            Hablar con un asesor
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
