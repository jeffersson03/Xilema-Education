import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import Card from './ui/Card';

export default function Testimonials() {
  return (
    <section className="py-24 px-8 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-on-surface">
            Lo que dicen nuestros alumnos
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Miles de profesionales ya han transformado su carrera con nosotros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <Card
              key={idx}
              transition={{ delay: idx * 0.1 }}
              className="p-8 relative group"
            >
              <Quote className="absolute top-6 right-6 text-primary/10 w-12 h-12 group-hover:text-primary/20 transition-colors" />
              <div className="flex items-center gap-4 mb-6">
                <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-primary-container" />
                <div>
                  <h4 className="font-bold text-on-surface">{t.name}</h4>
                  <p className="text-xs text-primary font-bold uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
              <p className="text-slate-600 italic leading-relaxed">
                "{t.content}"
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
