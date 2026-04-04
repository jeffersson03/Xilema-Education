import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { CATEGORIES } from '../constants';
import Card from './ui/Card';

export default function Categories() {
  return (
    <section className="py-24 px-8 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Nuestras Categorías</h2>
          <div className="h-1.5 w-24 bg-primary-container rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, idx) => (
            <Card
              key={cat.title}
              transition={{ delay: idx * 0.1 }}
              className={`p-8 flex flex-col justify-between group cursor-pointer border border-transparent ${cat.hoverBg} ${cat.hoverBorder}`}
            >
              <div>
                <cat.icon className={`w-10 h-10 mb-6 transition-colors duration-300 group-hover:${cat.accentColor} ${cat.color}`} />
                <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 group-hover:${cat.accentColor} text-on-surface`}>
                  {cat.title}
                </h3>
                <p className="transition-colors duration-300 text-slate-600 group-hover:text-slate-700">
                  {cat.description}
                </p>
              </div>
              
              <div className="mt-8 flex flex-col gap-4">
                {cat.tags && (
                  <div className="flex gap-2">
                    {cat.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-surface-container text-[10px] font-bold rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                <div
                  className={`flex items-center gap-2 font-bold text-sm transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 ${cat.accentColor}`}
                >
                  Explorar área <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
