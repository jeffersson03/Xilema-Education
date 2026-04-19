import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import heroVideo from '@/assets/video/Videoxilema.mp4';

export default function MasterHero() {
  return (
    <section className="relative min-h-screen lg:h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/45 z-10" />
        <video
          src={heroVideo}
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="pt-16 md:pt-24 flex justify-center"
        >
          <motion.button
            onClick={() => window.scrollBy({ top: window.innerHeight - 80, behavior: 'smooth' })}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-blue-600/20 backdrop-blur-sm border border-cyan-400/30 flex items-center justify-center text-cyan-300 hover:bg-blue-600/40 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
            aria-label="Ver más contenido"
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
