import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Import logos
import excelLogo from '@/assets/logo/Excel.svg';
import wordLogo from '@/assets/logo/Word.webp';
import powerPointLogo from '@/assets/logo/powerPoint.webp';
import powerBiLogo from '@/assets/logo/powerBi.webp';
import autocadLogo from '@/assets/logo/autocad.webp';
import revitLogo from '@/assets/logo/revit.webp';
import msProjectLogo from '@/assets/logo/msproject.webp';

const COURSES = [
  {
    id: 'excel-empresarial',
    title: 'Excel Empresarial',
    description: 'Domina las hojas de cálculo desde lo básico hasta macros y automatización.',
    logo: excelLogo,
    color: 'green',
    hoverBorder: 'hover:border-green-500',
    hoverShadow: 'hover:shadow-green-500/20',
    hoverBg: 'group-hover:bg-green-50',
    textColor: 'text-green-600',
    category: 'Ofimática'
  },
  {
    id: 'word-profesional',
    title: 'Word Profesional',
    description: 'Crea documentos estructurados, informes técnicos y plantillas automatizadas.',
    logo: wordLogo,
    color: 'blue',
    hoverBorder: 'hover:border-blue-500',
    hoverShadow: 'hover:shadow-blue-500/20',
    hoverBg: 'group-hover:bg-blue-50',
    textColor: 'text-blue-600',
    category: 'Ofimática'
  },
  {
    id: 'powerpoint-impacto',
    title: 'Presentaciones de Impacto',
    description: 'Diseña diapositivas dinámicas, interactivas y altamente profesionales.',
    logo: powerPointLogo,
    color: 'orange',
    hoverBorder: 'hover:border-orange-500',
    hoverShadow: 'hover:shadow-orange-500/20',
    hoverBg: 'group-hover:bg-orange-50',
    textColor: 'text-orange-600',
    category: 'Ofimática'
  },
  {
    id: 'powerbi-analitica',
    title: 'Power BI & Analítica',
    description: 'Transforma datos crudos en dashboards interactivos para la toma de decisiones.',
    logo: powerBiLogo,
    color: 'yellow',
    hoverBorder: 'hover:border-yellow-500',
    hoverShadow: 'hover:shadow-yellow-500/20',
    hoverBg: 'group-hover:bg-yellow-50',
    textColor: 'text-yellow-600',
    category: 'Data'
  },
  {
    id: 'autocad-2d-3d',
    title: 'AutoCAD 2D y 3D',
    description: 'Dibuja y modela planos arquitectónicos e ingeniería con precisión milimétrica.',
    logo: autocadLogo,
    color: 'red',
    hoverBorder: 'hover:border-red-500',
    hoverShadow: 'hover:shadow-red-500/20',
    hoverBg: 'group-hover:bg-red-50',
    textColor: 'text-red-600',
    category: 'Ingeniería'
  },
  {
    id: 'revit-bim',
    title: 'Revit BIM Architecture',
    description: 'Metodología BIM para modelado y coordinación de proyectos de construcción.',
    logo: revitLogo,
    color: 'cyan',
    hoverBorder: 'hover:border-cyan-500',
    hoverShadow: 'hover:shadow-cyan-500/20',
    hoverBg: 'group-hover:bg-cyan-50',
    textColor: 'text-cyan-600',
    category: 'Ingeniería'
  },
  {
    id: 'ms-project',
    title: 'MS Project & Gestión',
    description: 'Planifica, ejecuta y controla proyectos optimizando tiempos y recursos.',
    logo: msProjectLogo,
    color: 'emerald',
    hoverBorder: 'hover:border-emerald-500',
    hoverShadow: 'hover:shadow-emerald-500/20',
    hoverBg: 'group-hover:bg-emerald-50',
    textColor: 'text-emerald-600',
    category: 'Gestión'
  }
];

export default function CursosCatalogPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-700 font-bold text-sm tracking-widest uppercase mb-4 shadow-sm">
            Catálogo
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-6">
            Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Cursos</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Elige el programa que impulsará tu carrera. Todos nuestros cursos incluyen certificación oficial y metodología práctica.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {COURSES.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link 
                to={`/cursos/${course.id}`}
                className={`group block h-full bg-white rounded-2xl p-6 border border-slate-200 transition-all duration-300 shadow-sm hover:shadow-xl ${course.hoverBorder} ${course.hoverShadow}`}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-slate-50 border border-slate-100 transition-colors duration-300 ${course.hoverBg}`}>
                      <img 
                        src={course.logo} 
                        alt={course.title} 
                        className="w-10 h-10 object-contain drop-shadow-sm group-hover:scale-110 transition-transform duration-300" 
                      />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                      {course.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                    {course.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                    {course.description}
                  </p>

                  <div className={`flex items-center font-bold text-sm transition-transform duration-300 group-hover:translate-x-1 ${course.textColor}`}>
                    Ver ruta de aprendizaje 
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
