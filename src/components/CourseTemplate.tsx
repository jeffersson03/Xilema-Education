import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Award, Banknote, MonitorPlay, CheckCircle2, X, Send } from 'lucide-react';
import { CourseDetail } from '../types';

interface CourseTemplateProps {
  course: CourseDetail;
}

const COLOR_MAP = {
  cyan: {
    badge: 'bg-cyan-100 border-cyan-200 text-cyan-700',
    title: 'from-cyan-500 to-blue-600',
    btnHover: 'group-hover:text-cyan-300',
    btnGlow: 'hover:shadow-cyan-500/30',
    timelineLine: 'from-cyan-400 via-blue-300',
    nodeBorder: 'border-cyan-500',
    nodePulse: 'bg-cyan-500',
    cardBorderHover: 'hover:border-cyan-300',
    cardBgHover: 'group-hover:from-cyan-100/50',
    stepText: 'text-cyan-600',
    cardTitleHover: 'group-hover:text-cyan-600',
    checkIcon: 'text-cyan-500',
  },
  green: {
    badge: 'bg-green-100 border-green-200 text-green-700',
    title: 'from-green-500 to-emerald-600',
    btnHover: 'group-hover:text-green-300',
    btnGlow: 'hover:shadow-green-500/30',
    timelineLine: 'from-green-400 via-emerald-300',
    nodeBorder: 'border-green-500',
    nodePulse: 'bg-green-500',
    cardBorderHover: 'hover:border-green-300',
    cardBgHover: 'group-hover:from-green-100/50',
    stepText: 'text-green-600',
    cardTitleHover: 'group-hover:text-green-600',
    checkIcon: 'text-green-500',
  },
  blue: {
    badge: 'bg-blue-100 border-blue-200 text-blue-700',
    title: 'from-blue-500 to-indigo-600',
    btnHover: 'group-hover:text-blue-300',
    btnGlow: 'hover:shadow-blue-500/30',
    timelineLine: 'from-blue-400 via-indigo-300',
    nodeBorder: 'border-blue-500',
    nodePulse: 'bg-blue-500',
    cardBorderHover: 'hover:border-blue-300',
    cardBgHover: 'group-hover:from-blue-100/50',
    stepText: 'text-blue-600',
    cardTitleHover: 'group-hover:text-blue-600',
    checkIcon: 'text-blue-500',
  },
  orange: {
    badge: 'bg-orange-100 border-orange-200 text-orange-700',
    title: 'from-orange-500 to-red-600',
    btnHover: 'group-hover:text-orange-300',
    btnGlow: 'hover:shadow-orange-500/30',
    timelineLine: 'from-orange-400 via-red-300',
    nodeBorder: 'border-orange-500',
    nodePulse: 'bg-orange-500',
    cardBorderHover: 'hover:border-orange-300',
    cardBgHover: 'group-hover:from-orange-100/50',
    stepText: 'text-orange-600',
    cardTitleHover: 'group-hover:text-orange-600',
    checkIcon: 'text-orange-500',
  },
  yellow: {
    badge: 'bg-yellow-100 border-yellow-200 text-yellow-700',
    title: 'from-yellow-400 to-orange-500',
    btnHover: 'group-hover:text-yellow-300',
    btnGlow: 'hover:shadow-yellow-500/30',
    timelineLine: 'from-yellow-400 via-orange-300',
    nodeBorder: 'border-yellow-500',
    nodePulse: 'bg-yellow-500',
    cardBorderHover: 'hover:border-yellow-400',
    cardBgHover: 'group-hover:from-yellow-100/50',
    stepText: 'text-yellow-600',
    cardTitleHover: 'group-hover:text-yellow-600',
    checkIcon: 'text-yellow-500',
  },
  red: {
    badge: 'bg-red-100 border-red-200 text-red-700',
    title: 'from-red-500 to-rose-600',
    btnHover: 'group-hover:text-red-300',
    btnGlow: 'hover:shadow-red-500/30',
    timelineLine: 'from-red-400 via-rose-300',
    nodeBorder: 'border-red-500',
    nodePulse: 'bg-red-500',
    cardBorderHover: 'hover:border-red-300',
    cardBgHover: 'group-hover:from-red-100/50',
    stepText: 'text-red-600',
    cardTitleHover: 'group-hover:text-red-600',
    checkIcon: 'text-red-500',
  },
  emerald: {
    badge: 'bg-emerald-100 border-emerald-200 text-emerald-700',
    title: 'from-emerald-500 to-teal-600',
    btnHover: 'group-hover:text-emerald-300',
    btnGlow: 'hover:shadow-emerald-500/30',
    timelineLine: 'from-emerald-400 via-teal-300',
    nodeBorder: 'border-emerald-500',
    nodePulse: 'bg-emerald-500',
    cardBorderHover: 'hover:border-emerald-300',
    cardBgHover: 'group-hover:from-emerald-100/50',
    stepText: 'text-emerald-600',
    cardTitleHover: 'group-hover:text-emerald-600',
    checkIcon: 'text-emerald-500',
  }
};

export default function CourseTemplate({ course }: CourseTemplateProps) {
  const theme = COLOR_MAP[course.themeColor || 'cyan'];
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* SECCIÓN 1: Hero de Conversión */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={course.backgroundImage} 
            alt={`Fondo de Curso ${course.title}`} 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-slate-50"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border font-bold text-sm tracking-widest uppercase mb-4 shadow-sm ${theme.badge}`}
          >
            {course.logo && (
              <img src={course.logo} alt="Logo" className="w-5 h-5 object-contain" />
            )}
            {course.category}
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-tight"
          >
            {course.title} <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.title}`}>{course.titleHighlight}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-slate-600 max-w-3xl leading-relaxed font-medium"
          >
            {course.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-8"
          >
            {/* Botón Tecnológico estilo MasterHero */}
            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative p-[2px] rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${theme.btnGlow} cursor-pointer`}
            >
              <div className="absolute inset-0 z-0">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250%] h-[250%] bg-[conic-gradient(from_0deg,transparent_0deg,#22d3ee_120deg,#0ea5e9_180deg,#3b82f6_240deg,transparent_360deg)] opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>

              <div className={`relative z-10 bg-slate-900 backdrop-blur-xl px-10 py-4 sm:px-12 sm:py-5 rounded-[10px] flex items-center gap-3 text-slate-50 font-black text-xl tracking-wide ${theme.btnHover} transition-all duration-300`}>
                <span className="relative">
                  Inscribirme Ahora
                </span>
              </div>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN 2: Barra de Información Clave */}
      <section className="relative z-20 -mt-12 px-6 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-2xl p-8 shadow-xl grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100"
        >
          <div className="flex flex-col items-center text-center space-y-2 pt-4 md:pt-0">
            <Clock className={`w-8 h-8 ${theme.checkIcon} mb-2`} />
            <h3 className="text-slate-800 font-bold text-lg">{course.metrics.hours}</h3>
            <p className="text-sm text-slate-500">Duración total</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2 pt-4 md:pt-0">
            <Award className="w-8 h-8 text-slate-400 mb-2" />
            <h3 className="text-slate-800 font-bold text-lg">{course.metrics.certification}</h3>
            <p className="text-sm text-slate-500">Certificación</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2 pt-4 md:pt-0">
            <Banknote className={`w-8 h-8 ${theme.checkIcon} mb-2`} />
            <h3 className="text-slate-800 font-bold text-lg">{course.metrics.price}</h3>
            <p className="text-sm text-slate-500">Pago único (Oferta)</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2 pt-4 md:pt-0">
            <MonitorPlay className="w-8 h-8 text-slate-400 mb-2" />
            <h3 className="text-slate-800 font-bold text-lg">{course.metrics.modality}</h3>
            <p className="text-sm text-slate-500">Modalidad</p>
          </div>
        </motion.div>
      </section>

      {/* SECCIÓN 3: Ruta de Aprendizaje (Timeline) */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            Ruta de <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.title}`}>Aprendizaje</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            El camino diseñado paso a paso para llevarte desde cero hasta nivel experto.
          </p>
        </div>

        <div className="relative">
          {/* Línea vertical central (Desktop) y lateral (Móvil) */}
          <div className={`absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b ${theme.timelineLine} to-transparent transform md:-translate-x-1/2 rounded-full`}></div>

          <div className="space-y-16">
            {course.modules.map((module, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`relative flex items-center ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} flex-row`}
                >
                  {/* Espaciador para Desktop */}
                  <div className="hidden md:block w-1/2"></div>

                  {/* Nodo central brillante */}
                  <div className={`absolute left-6 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white border-[3px] ${theme.nodeBorder} shadow-sm z-10`}>
                    <div className={`w-3 h-3 rounded-full ${theme.nodePulse} animate-pulse`}></div>
                  </div>

                  {/* Tarjeta de Contenido */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pl-16' : 'md:pr-16'} group`}>
                    <div className={`p-8 rounded-2xl bg-white border border-slate-200 ${theme.cardBorderHover} hover:bg-slate-50 transition-all duration-300 shadow-md hover:shadow-xl relative overflow-hidden`}>
                      {/* Efecto de brillo de fondo al hacer hover */}
                      <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent ${theme.cardBgHover} group-hover:to-transparent transition-all duration-500`}></div>
                      
                      <div className="relative z-10">
                        <div className={`${theme.stepText} font-black text-sm tracking-widest uppercase mb-2`}>Paso {idx + 1}</div>
                        <h3 className={`text-2xl font-bold text-slate-900 mb-3 ${theme.cardTitleHover} transition-colors`}>
                          {module.title}
                        </h3>
                        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                          {module.description}
                        </p>
                        <ul className="space-y-3">
                          {module.lessons.map((lesson, lIdx) => (
                            <li key={lIdx} className="flex items-start gap-3">
                              <CheckCircle2 className={`w-5 h-5 ${theme.checkIcon} shrink-0 mt-0.5`} />
                              <span className="text-slate-700 font-medium">{lesson}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal de Inscripción */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50"
            />
            
            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden pointer-events-auto border border-slate-100"
              >
                {/* Header Modal */}
                <div className={`p-6 md:p-8 bg-gradient-to-r ${theme.title} relative`}>
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/10 hover:bg-black/20 p-2 rounded-full transition-colors"
                  >
                    <X size={20} />
                  </button>
                  <h3 className="text-2xl font-bold text-white mb-2">¡Estás a un paso!</h3>
                  <p className="text-white/90 text-sm md:text-base leading-relaxed">
                    Déjanos tus datos y un asesor se contactará contigo para darte más información sobre el curso de <span className="font-bold">{course.category}</span>.
                  </p>
                </div>

                {/* Formulario */}
                <div className="p-6 md:p-8">
                  <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-slate-700">Nombres y Apellidos</label>
                      <input 
                        type="text" 
                        placeholder="Ej. Juan Pérez" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-700" 
                        required 
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-slate-700">Número de Celular</label>
                      <input 
                        type="tel" 
                        placeholder="987 654 321" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-700" 
                        required 
                      />
                    </div>
                    <button 
                      type="submit" 
                      className={`w-full bg-gradient-to-r ${theme.title} text-white font-bold py-3.5 rounded-xl shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98] flex justify-center items-center gap-2 mt-4`}
                    >
                      Solicitar Información
                      <Send size={18} />
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
