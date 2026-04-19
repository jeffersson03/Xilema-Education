import { motion } from 'motion/react';

export default function TransitionSection() {
  return (
    <section className="py-40 px-8 bg-white flex items-center justify-center text-center relative overflow-hidden border-y border-slate-100">
      {/* Subtle background elements adjusted for light background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-200 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-200 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-black tracking-tighter text-slate-900 leading-[1.1]">
          Formación que conecta contigo y con el  
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
             <span> </span>futuro
          </span>
        </h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "120px" }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mt-12 shadow-sm"
        />
      </motion.div>
    </section>
  );
}
