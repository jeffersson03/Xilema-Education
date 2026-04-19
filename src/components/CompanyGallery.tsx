import { motion } from 'motion/react';
import { Image as ImageIcon, ArrowRight } from 'lucide-react';
import { GALLERY_IMAGES } from '../constants';
import Button from './ui/Button';

export default function CompanyGallery() {
  return (
    <section className="py-24 px-8 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-on-surface leading-tight">
              Conoce Xilema desde adentro
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Más que una plataforma de educación, somos una comunidad dedicada a la excelencia tecnológica. Explora nuestra galería y descubre el entorno donde transformamos el futuro profesional.
            </p>
            <div className="pt-4">
              <Button 
                style={{ backgroundColor: '#CCFF00' }}
                className="text-on-tertiary-container"
              >
                Ver Galería Completa <ArrowRight size={20} />
              </Button>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY_IMAGES.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
              >
                <img 
                  src={img.url} 
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 text-center">
                  <span className="text-white font-bold text-sm">{img.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
