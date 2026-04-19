import { 
  FileText, TrendingUp, HardHat, Briefcase, Lightbulb, Sprout, 
  Users, BookOpen, Award, Star 
} from 'lucide-react';
import { Category, Course, Feature, Stat, Testimonial, FAQItem, GalleryImage } from './types';
import excelLogo from '@/assets/logo/Excel.svg';
import wordLogo from '@/assets/logo/Word.webp';
import powerPointLogo from '@/assets/logo/powerPoint.webp';
import microsoftLogo from '@/assets/logo/microsoft.webp';
import s10Logo from '@/assets/logo/s10.webp';
import msProjectLogo from '@/assets/logo/msproject.webp';
import powerBiLogo from '@/assets/logo/powerBi.webp';
import empleabilidadLogo from '@/assets/logo/empleabilidad.webp';
import autocadLogo from '@/assets/logo/autocad.webp';
import revitLogo from '@/assets/logo/revit.webp';
import autodeskLogo from '@/assets/logo/autodesk.webp';
export const CATEGORIES: Category[] = [
  {
    title: 'Ofimática',
    description: 'Word, Excel Avanzado, Power Point y herramientas de gestión documental profesional.',
    icon: FileText,
    tags: ['EXCEL', 'WORD'],
    color: 'text-primary',
    hoverBg: 'hover:bg-blue-50/80',
    hoverBorder: 'hover:border-blue-200',
    accentColor: 'text-blue-600'
  },
  {
    title: 'Empleabilidad',
    description: 'MS Project, Power BI, S10 para el éxito laboral.',
    icon: TrendingUp,
    color: 'text-primary',
    hoverBg: 'hover:bg-teal-50/80',
    hoverBorder: 'hover:border-teal-200',
    accentColor: 'text-teal-600'
  },
  {
    title: 'Ingeniería',
    description: 'Domina AutoCAD, Revit y diseño estructural.',
    icon: HardHat,
    color: 'text-primary',
    hoverBg: 'hover:bg-slate-100/80',
    hoverBorder: 'hover:border-slate-300',
    accentColor: 'text-slate-600'
  },
  {
    title: 'Empresarial',
    description: 'Importaciones, Contabilidad y Finanzas.',
    icon: Briefcase,
    color: 'text-primary',
    hoverBg: 'hover:bg-indigo-50/80',
    hoverBorder: 'hover:border-indigo-200',
    accentColor: 'text-indigo-600'
  },
  {
    title: 'Innovación',
    description: 'Nuevas metodologías educativas y transformación digital para la era moderna.',
    icon: Lightbulb,
    color: 'text-primary',
    hoverBg: 'hover:bg-amber-50/80',
    hoverBorder: 'hover:border-amber-200',
    accentColor: 'text-amber-600'
  },
  {
    title: 'Inteligencia Artificial',
    description: 'Aplicaciones prácticas de IA y Machine Learning en entornos profesionales.',
    icon: Lightbulb,
    color: 'text-primary',
    hoverBg: 'hover:bg-cyan-50/80',
    hoverBorder: 'hover:border-cyan-200',
    accentColor: 'text-cyan-600'
  },
  {
    title: 'Agricultura',
    description: 'Hidroponía y Sistemas Agrícolas modernos.',
    icon: Sprout,
    color: 'text-primary',
    hoverBg: 'hover:bg-green-50/80',
    hoverBorder: 'hover:border-green-200',
    accentColor: 'text-green-600'
  }
];

export const COURSES: Course[] = [
  {
    title: 'Master en Excel Avanzado',
    duration: '40 Horas lectivas',
    price: 'S/ 199.00',
    image: 'https://picsum.photos/seed/excel/600/400',
    isBestseller: true
  },
  {
    title: 'AutoCAD para Ingenieros Civil',
    duration: '60 Horas lectivas',
    price: 'S/ 249.00',
    image: 'https://picsum.photos/seed/autocad/600/400'
  },
  {
    title: 'IA Aplicada a Negocios',
    duration: '32 Horas lectivas',
    price: 'S/ 299.00',
    image: 'https://picsum.photos/seed/ai/600/400'
  }
];

export const FEATURES: Feature[] = [
  {
    category: 'Ofimática Empresarial',
    phrase: 'Domina Office de básico a avanzado',
    summary: 'Aprende Word, Excel y PowerPoint para crear documentos profesionales, analizar datos con tablas dinámicas y diseñar presentaciones de alto impacto.',
    images: [excelLogo, wordLogo, powerPointLogo, microsoftLogo],
    bgColor: 'bg-surface'
  },
  {
    category: 'Gestión y Manejo de Datos',
    phrase: 'Herramientas clave para el mercado laboral',
    summary: 'Domina Power BI, MS Project y S10. Aprende gestión de proyectos, análisis de datos y control de costos para optimizar procesos y tomar decisiones estratégicas en cualquier sector.',
    images: [s10Logo, powerBiLogo, msProjectLogo, empleabilidadLogo ],
    bgColor: 'bg-surface-container-low'
  },
  {
    category: 'INGENIERÍA',
    phrase: 'Diseño y construcción con tecnología BIM',
    summary: 'Desarrolla habilidades avanzadas en AutoCAD y Revit. Aprende modelado arquitectónico, diseño 2D/3D y documentación técnica desde cero para liderar proyectos de ingeniería y construcción.',
    images: [revitLogo, autocadLogo, autodeskLogo],
    bgColor: 'bg-surface'
  }
];

export const STATS: Stat[] = [
  { label: 'Alumnos', value: '1K+', icon: Users },
  { label: 'Cursos Activos', value: '15', icon: BookOpen },
  { label: 'Certificaciones', value: '100%', icon: Award },
  { label: 'Satisfacción', value: '4.5/5', icon: Star },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Carlos Mendoza',
    role: 'Ingeniero Civil',
    content: 'El curso de AutoCAD superó mis expectativas. La metodología es práctica y los certificados tienen peso real en el mercado.',
    avatar: 'https://i.pravatar.cc/150?u=carlos'
  },
  {
    name: 'Ana Lucía Ríos',
    role: 'Analista de Datos',
    content: 'Gracias a Power BI en Xilema, pude automatizar todos mis reportes en el trabajo. ¡Altamente recomendado!',
    avatar: 'https://i.pravatar.cc/150?u=ana'
  },
  {
    name: 'Jorge Torres',
    role: 'Arquitecto',
    content: 'Revit (BIM) cambió mi forma de diseñar. Los instructores son expertos que realmente saben de lo que hablan.',
    avatar: 'https://i.pravatar.cc/150?u=jorge'
  }
];

export const FAQS: FAQItem[] = [
  {
    q: '¿Los certificados tienen validez oficial?',
    a: 'Sí, todos nuestros cursos cuentan con certificación universitaria respaldada por instituciones de prestigio, válidas para concursos públicos y privados.'
  },
  {
    q: '¿Las clases son en vivo o grabadas?',
    a: 'Ofrecemos ambas modalidades. Contamos con sesiones en vivo para interacción directa y acceso a nuestra plataforma 24/7 con material grabado de alta calidad.'
  },
  {
    q: '¿Qué métodos de pago aceptan?',
    a: 'Aceptamos todas las tarjetas de crédito/débito, transferencias bancarias, Yape, Plin y pagos a través de plataformas seguras como Culqi o Mercado Pago.'
  },
  {
    q: '¿Hay descuentos para grupos o empresas?',
    a: 'Efectivamente. Contamos con planes corporativos y descuentos especiales para grupos de más de 3 personas. Contáctanos para una cotización personalizada.'
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { url: 'https://picsum.photos/seed/company1/800/600', title: 'Nuestras Instalaciones' },
  { url: 'https://picsum.photos/seed/company2/800/600', title: 'Sesiones Prácticas' },
  { url: 'https://picsum.photos/seed/company3/800/600', title: 'Eventos Corporativos' },
  { url: 'https://picsum.photos/seed/company4/800/600', title: 'Equipo Xilema' }
];
