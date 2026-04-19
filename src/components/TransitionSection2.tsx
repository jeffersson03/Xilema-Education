import { motion } from 'motion/react';

export default function TransitionSection2() {
    return (
        <section className="py-40 px-8 bg-white flex items-center justify-center text-center relative overflow-hidden border-y border-white/5">
            {/* Subtle background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-20 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-tertiary/20 rounded-full blur-[100px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 max-w-6xl mx-auto"
            >
                <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-black tracking-tighter text-slate-900 leading-[1.1]">
                    Aprende, crece y <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                        transforma
                    </span> tu camino.
                </h2>
                <br/> 
                       <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('cursos')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative p-[2px] rounded-xl overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
          >
            <div className="absolute inset-0 z-0">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250%] h-[250%] bg-[conic-gradient(from_0deg,transparent_0deg,#0ea5e9_180deg,transparent_360deg)] opacity-60 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>

            <div className="relative z-10 bg-[#0b1121] backdrop-blur-xl px-10 py-5 sm:px-12 sm:py-6 rounded-[10px] flex items-center gap-3 text-slate-200 font-black text-xl sm:text-2xl tracking-wide group-hover:text-cyan-300 transition-all duration-300">
              <span className="relative">
                Comenzar Ahora
              </span>
            </div>
          </motion.button>
            </motion.div>
            
   
        </section>
    );
}
