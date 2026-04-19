import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { FEATURES } from '../constants';
import Button from './ui/Button';

export default function FeatureSections() {
  return (
    <>
      {FEATURES.map((feature, idx) => (
        <section 
          key={idx} 
          id={idx === 0 ? "cursos" : undefined}
          className={`relative min-h-screen flex items-center px-8 py-20 ${feature.bgColor} overflow-hidden`}
        >
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`space-y-8 ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}
            >
              <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-widest uppercase">
                {feature.category}
              </div>
              <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-on-surface leading-tight">
                {feature.phrase}
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                {feature.summary}
              </p>
              <div className="pt-4">
                <Link to="/cursos">
                  <Button size="lg">
                    Saber más
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: idx % 2 === 0 ? 2 : -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={`relative ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}
            >
              <div className="relative w-full aspect-[4/3] flex items-center justify-center">
                {feature.images.length > 1 ? (
                  <>
                    {/* Logo Central (El último del arreglo) */}
                    <motion.div 
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.15, zIndex: 30 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="absolute z-20 w-32 h-32 md:w-44 md:h-44 flex items-center justify-center cursor-pointer"
                    >
                      <img 
                        src={feature.images[feature.images.length - 1]} 
                        alt="Center Logo"
                        className="max-w-full max-h-full object-contain drop-shadow-2xl"
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>

                    {/* Contenedor Giratorio (Órbita suave) */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                      {feature.images.slice(0, -1).map((imgSrc, imgIdx, arr) => {
                        const angle = (imgIdx / arr.length) * 360;
                        
                        // Radio responsivo: 110px en móvil, 180px en escritorio
                        const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
                        const radius = isMobile ? 110 : 180; 
                        
                        const x = Math.cos(angle * (Math.PI / 180)) * radius;
                        const y = Math.sin(angle * (Math.PI / 180)) * radius;

                        return (
                          <motion.div
                            key={imgIdx}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: imgIdx * 0.2, type: "spring" }}
                            className="absolute w-20 h-20 md:w-28 md:h-28 flex items-center justify-center pointer-events-auto cursor-pointer"
                            style={{ x, y }}
                          >
                            <motion.img 
                              src={imgSrc} 
                              alt={`Orbit Logo ${imgIdx}`} 
                              animate={{ rotate: -360 }} // Gira en reversa para no quedar de cabeza
                              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                              whileHover={{ scale: 1.25 }}
                              className="max-w-full max-h-full object-contain drop-shadow-xl"
                              referrerPolicy="no-referrer"
                            />
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  </>
                ) : (
                  /* Comportamiento normal para 1 sola imagen */
                  feature.images.map((imgSrc, imgIdx) => (
                    <motion.div 
                      key={imgIdx}
                      whileHover={{ y: -15, scale: 1.05 }}
                      whileTap={{ scale: 0.95, y: -5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      className="relative w-full h-full flex items-center justify-center cursor-pointer"
                    >
                      <img 
                        src={imgSrc} 
                        alt={`${feature.category} logo`} 
                        className="max-w-full max-h-full object-contain drop-shadow-2xl"
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>
                  ))
                )}
              </div>
            </motion.div>
          </div>
        </section>
      ))}
    </>
  );
}
