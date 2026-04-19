import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export default function UbicacionPage() {
  return (
    <div className="pt-32 pb-16 min-h-screen bg-slate-50 text-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-bold mb-6 border border-blue-100 shadow-sm">
            <MapPin size={16} />
            Sede Principal
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-slate-900">
            Nuestra <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Ubicación</span>
          </h1>
          <div className="flex items-start md:items-center justify-center gap-4 text-lg md:text-xl text-slate-700 bg-white/80 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-slate-200 max-w-4xl mx-auto shadow-lg shadow-slate-200/50">
            <div className="p-3 bg-blue-50 rounded-xl shrink-0 border border-blue-100 shadow-sm">
              <MapPin className="text-blue-600" size={32} />
            </div>
            <p className="font-medium text-left leading-relaxed">
              PJ. EL CALLEJON LOTE. 8 C.P. EL ARENAL<br />
              ICA - ICA - LOS AQUIJES<br />
              <span className="text-blue-600 font-bold mt-2 inline-block">ICA - Perú</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full h-[600px] rounded-3xl overflow-hidden border border-slate-200 shadow-2xl shadow-slate-200/60 relative bg-white group"
        >
          {/* Overlay to avoid immediate scrolling zoom trap until hover */}
          <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
          
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d760.4823673518387!2d-75.70300743891542!3d-14.096905134549578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91111d84a47c0475%3A0x1a595780896a7d48!2sEl%20Arenal%2C%2011000!5e0!3m2!1ses-419!2spe!4v1776582313151!5m2!1ses-419!2spe"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full transition-all duration-700"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
}
