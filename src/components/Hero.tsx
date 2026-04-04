import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden px-8 py-20 lg:py-32">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/10 via-surface to-surface"></div>
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >

          <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-on-surface leading-[1.1]">
            Domina las herramientas <span className="text-primary">tecnológicas</span> del futuro
          </h1>
          <p className="text-xl text-slate-600 max-w-xl leading-relaxed">
            Capacitación en Ofimática, Ingeniería, Tesis e Innovación. Aprende con expertos y obtén certificaciones universitarias reconocidas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-primary-container/20 rounded-3xl blur-3xl"></div>
          <div className="relative rounded-3xl overflow-hidden aspect-square shadow-2xl">
            <img
              src="https://picsum.photos/seed/education/800/800"
              alt="Student working"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
