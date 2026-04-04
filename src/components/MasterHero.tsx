import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function MasterHero() {
  return (
    <section className="relative min-h-screen lg:h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/45 z-10" />
        <video
          src="/assets/video/videoXilema.webm"
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover blur-[8px] scale-110 opacity-60"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto space-y-8 pt-32 pb-20">
        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-tight sm:leading-none"
            style={{
              textShadow: '2px 2px 0px rgba(0,0,0,0.3), 4px 4px 0px rgba(0,0,0,0.2), 8px 8px 16px rgba(0,0,0,0.4)'
            }}
          >
            Xilema Education
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl font-medium text-white tracking-tight max-w-3xl mx-auto"
            style={{
              textShadow: '1px 1px 0px rgba(0,0,0,0.3), 2px 2px 0px rgba(0,0,0,0.2), 4px 4px 8px rgba(0,0,0,0.4)'
            }}
          >
            Da el siguiente paso en tu aprendizaje
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative p-[1px] rounded-xl overflow-hidden shadow-2xl shadow-black/50 transition-all"
          >
            <div className="absolute inset-0 z-0">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250%] h-[250%] bg-[conic-gradient(from_0deg,transparent_0deg,#22d3ee_120deg,white_180deg,#3b82f6_240deg,transparent_360deg)] opacity-40 group-hover:opacity-80 transition-opacity duration-700"
              />
            </div>

            <div className="relative z-10 bg-white/10 backdrop-blur-md px-10 py-5 sm:px-12 sm:py-6 rounded-[11px] flex items-center gap-3 text-white font-black text-xl sm:text-2xl tracking-tight hover:bg-white/20 transition-all duration-500 border border-white/20">
              Comenzar Ahora
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
