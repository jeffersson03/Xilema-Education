import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  { image: '/assets/images/AutocadCarrusel.webp' },
  { image: '/assets/images/excelCarrusel.webp' },
  { image: '/assets/images/IACarrusel.webp' },
  { image: '/assets/images/WordCarrusel.webp' }
];

export default function MainHero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] w-full overflow-hidden bg-slate-950 flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="w-full h-full flex items-center justify-center p-4 md:p-8"
        >
          <img
            src={slides[current].image}
            alt="Carousel Slide"
            className="max-h-full max-w-full object-contain shadow-2xl rounded-lg"
          />
        </motion.div>
      </AnimatePresence>

      {/* Progress Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-500 shadow-lg ${current === i ? 'w-12 bg-cyan-400' : 'w-4 bg-white/30 hover:bg-white/50'
              }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/20 hover:bg-black/40 text-white transition-all backdrop-blur-md border border-white/10 group"
      >
        <ChevronLeft size={28} className="transition-transform group-hover:-translate-x-1" />
      </button>
      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/20 hover:bg-black/40 text-white transition-all backdrop-blur-md border border-white/10 group"
      >
        <ChevronRight size={28} className="transition-transform group-hover:translate-x-1" />
      </button>

      {/* Decorative Overlay for depth */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/10 via-transparent to-black/20 z-10" />
    </section>
  );
}
