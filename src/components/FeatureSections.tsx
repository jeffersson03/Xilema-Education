import { motion } from 'motion/react';
import { FEATURES } from '../constants';
import Button from './ui/Button';

export default function FeatureSections() {
  return (
    <>
      {FEATURES.map((feature, idx) => (
        <section 
          key={idx} 
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
                <Button size="lg">
                  Saber más
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: idx % 2 === 0 ? 2 : -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={`relative ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}
            >
              <div className="absolute -inset-6 bg-primary-container/10 rounded-3xl blur-2xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img 
                  src={feature.image} 
                  alt={feature.category} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </section>
      ))}
    </>
  );
}
