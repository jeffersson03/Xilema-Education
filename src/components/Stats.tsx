import { motion } from 'motion/react';
import { STATS } from '../constants';

export default function Stats() {
  return (
    <section className="py-20 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="space-y-4"
            >
              <div className="inline-flex p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                <stat.icon size={32} className="text-primary-container" />
              </div>
              <div className="text-4xl md:text-5xl font-black tracking-tighter">
                {stat.value}
              </div>
              <div className="text-cyan-100/70 font-medium uppercase tracking-widest text-xs">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
