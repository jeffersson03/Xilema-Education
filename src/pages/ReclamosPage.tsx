import { motion } from 'motion/react';
import reclamacionesImg from '@/assets/images/Reclamaciones.png';
import { Send } from 'lucide-react';

export default function ReclamosPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50 text-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-red-400/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-orange-400/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900">
            Libro de <span className="text-blue-600">Reclamaciones</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Tus observaciones y reclamos nos impulsan a mejorar para seguir brindándote una experiencia de aprendizaje de excelencia.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mt-8" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-200/50 to-cyan-300/50 rounded-[2.5rem] transform -rotate-3 blur-sm" />
            <div className="relative rounded-3xl overflow-hidden border border-white shadow-2xl shadow-slate-200/50 group bg-white flex items-center justify-center p-8 lg:p-12 h-full min-h-[400px]">
              <img 
                src={reclamacionesImg} 
                alt="Libro de Reclamaciones" 
                className="w-full max-w-md h-auto object-contain transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </motion.div>

          {/* Form Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/80 backdrop-blur-md border border-slate-200 p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] order-1 lg:order-2"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Nombres y Apellidos</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="Ej. Juan Pérez" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">DNI / CE</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="Número de documento" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Correo Electrónico</label>
                  <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="correo@ejemplo.com" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Celular</label>
                  <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="987 654 321" required />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Tipo de Solicitud</label>
                <div className="flex gap-6 mt-2">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input type="radio" name="tipo" className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-slate-300" defaultChecked />
                    <span className="text-slate-700 group-hover:text-blue-600 transition-colors">Reclamo</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input type="radio" name="tipo" className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-slate-300" />
                    <span className="text-slate-700 group-hover:text-blue-600 transition-colors">Queja</span>
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Detalle del Reclamo / Queja</label>
                <textarea 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all min-h-[120px] resize-none" 
                  placeholder="Por favor, describe detalladamente tu caso..." 
                  required 
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl shadow-lg shadow-blue-500/30 transition-all flex justify-center items-center gap-2 group">
                Enviar Formulario
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
