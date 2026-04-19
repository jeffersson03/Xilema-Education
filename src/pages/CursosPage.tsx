import { useParams } from 'react-router-dom';
import CourseTemplate from '../components/CourseTemplate';
import excelLogo from '@/assets/logo/Excel.svg';
import wordLogo from '@/assets/logo/Word.webp';
import powerPointLogo from '@/assets/logo/powerPoint.webp';
import powerBiLogo from '@/assets/logo/powerBi.webp';
import msProjectLogo from '@/assets/logo/msproject.webp';
import revitLogo from '@/assets/logo/revit.webp';
import autocadLogo from '@/assets/logo/autocad.webp';
import studiantImage from '@/assets/images/studiant.webp';
import { CourseDetail } from '../types';

const COURSE_DATABASE: Record<string, CourseDetail> = {
  'excel-empresarial': {
    id: 'excel-empresarial',
    category: 'Excel',
    title: '',
    titleHighlight: 'Excel Profesional',
    themeColor: 'green',
    description: 'Domina las herramientas más demandadas por el mercado laboral. Aprende desde cero hasta nivel avanzado con proyectos reales y obtén doble certificación.',
    backgroundImage: studiantImage,
    logo: excelLogo,
    metrics: {
      hours: '120 Horas',
      certification: 'Oficial',
      price: 'S/ 199.00',
      modality: 'Presencial y Virtual'
    },
    modules: [
      {
        title: 'NIVEL BÁSICO - Módulo 1: Introducción a Excel',
        description: 'Familiarízate con la interfaz de Excel y las operaciones esenciales.',
        lessons: ['Entorno de trabajo y cintas de opciones', 'Creación y guardado de libros', 'Atajos de teclado fundamentales']
      },
      {
        title: 'NIVEL BÁSICO - Módulo 2: Fórmulas y Funciones Básicas',
        description: 'Aprende a realizar cálculos matemáticos y estadísticos simples.',
        lessons: ['Operadores matemáticos', 'Funciones SUMA, PROMEDIO y CONTAR', 'Referencias relativas y absolutas']
      },
      {
        title: 'NIVEL BÁSICO - Módulo 3: Formato y Presentación',
        description: 'Mejora el aspecto visual de tus datos para reportes profesionales.',
        lessons: ['Formatos de celda y número', 'Alineación y estilos de tabla', 'Formato condicional básico']
      },
      {
        title: 'NIVEL BÁSICO - Módulo 4: Gráficos Básicos',
        description: 'Representa la información de manera visual y clara.',
        lessons: ['Gráficos de barras y columnas', 'Gráficos circulares (pie charts)', 'Personalización de elementos gráficos']
      },
      {
        title: 'INTERMEDIO Y AVANZADO - Módulo 1: Funciones Lógicas y de Búsqueda',
        description: 'Automatiza la toma de decisiones y el cruce de información.',
        lessons: ['Función SI y funciones lógicas anidadas', 'BUSCARV y BUSCARH', 'ÍNDICE y COINCIDIR']
      },
      {
        title: 'INTERMEDIO Y AVANZADO - Módulo 2: Gestión de Datos',
        description: 'Limpia, ordena y consolida grandes volúmenes de datos.',
        lessons: ['Filtros avanzados y ordenamiento', 'Validación de datos', 'Texto en columnas y eliminación de duplicados']
      },
      {
        title: 'INTERMEDIO Y AVANZADO - Módulo 3: Tablas y Tablas Dinámicas',
        description: 'Analiza grandes bases de datos de forma rápida y flexible.',
        lessons: ['Creación y formato de tablas dinámicas', 'Campos calculados y segmentación de datos', 'Gráficos dinámicos']
      },
      {
        title: 'INTERMEDIO Y AVANZADO - Módulo 4: Funciones de Fecha y Texto',
        description: 'Extrae y manipula información temporal y cadenas de texto.',
        lessons: ['Funciones HOY, AHORA, AÑO y MES', 'Funciones EXTRAE, IZQUIERDA, DERECHA', 'Concatenación y limpieza de texto']
      }
    ]
  },
  'ofimatica-empresarial': {
    id: 'ofimatica-empresarial',
    category: 'Ofimática',
    title: '',
    titleHighlight: 'Word Profesional',
    themeColor: 'blue',
    description: 'Aprende las principales herramientas de oficina para mejorar tu productividad laboral y académica.',
    backgroundImage: studiantImage,
    logo: wordLogo,
    metrics: {
      hours: '150 Horas',
      certification: 'Doble Oficial',
      price: 'S/ 249.00',
      modality: '100% Online'
    },
    modules: [
      {
        title: 'NIVEL BÁSICO - Módulo 1: Introducción al Ms word',
        description: 'Conoce la interfaz y las funciones esenciales del procesador de textos.',
        lessons: ['Entorno de trabajo', 'Gestión de documentos', 'Atajos de teclado']
      },
      {
        title: 'NIVEL BÁSICO - Módulo 2: Edición y Formato de Texto',
        description: 'Aplica estilos y formatos para dar un aspecto profesional a tus documentos.',
        lessons: ['Fuentes y párrafos', 'Estilos predefinidos', 'Configuración de página']
      },
      {
        title: 'NIVEL BÁSICO - Módulo 3: Listas y Tablas',
        description: 'Organiza la información de manera estructurada y visual.',
        lessons: ['Viñetas y numeración', 'Creación de tablas', 'Diseño de tablas']
      },
      {
        title: 'NIVEL BÁSICO - Módulo 4: Inserción de Elementos',
        description: 'Enriquece tus documentos con recursos gráficos e ilustraciones.',
        lessons: ['Imágenes y formas', 'Gráficos', 'SmartArt']
      },
      {
        title: 'NIVEL INTERMEDIO - Módulo 1: Formatos',
        description: 'Domina herramientas de formato avanzado para documentos complejos.',
        lessons: ['Encabezados y pies de página', 'Saltos de sección', 'Columnas']
      },
      {
        title: 'NIVEL INTERMEDIO - Módulo 2: Herramientas Académicas',
        description: 'Aprende a estructurar tesis, monografías e informes de investigación.',
        lessons: ['Índices automáticos', 'Citas y bibliografía (APA)', 'Notas al pie']
      },
      {
        title: 'NIVEL INTERMEDIO - Módulo 3: Tablas y Diseño Profesional',
        description: 'Crea diseños avanzados y consolida tus conocimientos.',
        lessons: ['Plantillas', 'Combinación de correspondencia', 'Revisión y protección']
      }
    ]
  },
  'powerpoint-impacto': {
    id: 'powerpoint-impacto',
    category: 'PowerPoint',
    title: '',
    titleHighlight: 'Power Point',
    themeColor: 'orange',
    description: 'Diseña diapositivas dinámicas, interactivas y altamente profesionales para captar la atención de cualquier audiencia.',
    backgroundImage: studiantImage,
    logo: powerPointLogo,
    metrics: {
      hours: '80 Horas',
      certification: 'Oficial',
      price: 'S/ 149.00',
      modality: 'Presencial y Virtual'
    },
    modules: [
      {
        title: 'NIVEL BÁSICO - Módulo 1: Introducción y Entorno de Trabajo',
        description: 'Familiarízate con la interfaz y las funciones esenciales para crear tu primera presentación.',
        lessons: ['Cintas de opciones y vistas', 'Creación y guardado de presentaciones', 'Gestión de diapositivas básicas']
      },
      {
        title: 'NIVEL BÁSICO - Módulo 2: Diseño y Formato',
        description: 'Aprende a aplicar estilos visuales para que tus diapositivas luzcan profesionales.',
        lessons: ['Temas y paletas de colores', 'Tipografía y alineación de texto', 'Patrón de diapositivas (Slide Master)']
      },
      {
        title: 'NIVEL BÁSICO - Módulo 3: Inserción de Elementos',
        description: 'Enriquece tus diapositivas con recursos visuales estáticos y gráficos.',
        lessons: ['Imágenes y formas inteligentes', 'Uso avanzado de SmartArt', 'Tablas y gráficos estadísticos']
      },
      {
        title: 'NIVEL BÁSICO - Módulo 4: Animaciones y Transiciones',
        description: 'Añade dinamismo a tu contenido para mantener la atención del público.',
        lessons: ['Transiciones entre diapositivas', 'Animaciones de entrada, énfasis y salida', 'Panel de animación y tiempos']
      },
      {
        title: 'NIVEL INTERMEDIO - Módulo 1: Herramientas Avanzadas',
        description: 'Optimiza tu flujo de trabajo con técnicas y herramientas avanzadas.',
        lessons: ['Hipervínculos y botones de acción', 'Secciones y organización avanzada', 'Opciones de revisión y coautoría']
      },
      {
        title: 'NIVEL INTERMEDIO - Módulo 2: Presentaciones Empresariales',
        description: 'Estructura tu mensaje para el mundo corporativo y de negocios.',
        lessons: ['Storytelling visual', 'Plantillas corporativas personalizadas', 'Gráficos financieros y reportes']
      },
      {
        title: 'NIVEL INTERMEDIO - Módulo 3: Multimedia e Interactividad',
        description: 'Integra audio, video y elementos interactivos avanzados.',
        lessons: ['Edición de video y audio en PPT', 'Grabación de voz y exportación a MP4', 'Menús interactivos tipo web']
      }
    ]
  },
  'powerbi-analitica': {
    id: 'powerbi-analitica',
    category: 'Power BI',
    title: '',
    titleHighlight: 'Power BI',
    themeColor: 'yellow',
    description: 'Transforma datos crudos en dashboards interactivos para la toma de decisiones empresariales estratégicas.',
    backgroundImage: studiantImage,
    logo: powerBiLogo,
    metrics: {
      hours: '100 Horas',
      certification: 'Oficial',
      price: 'S/ 229.00',
      modality: 'Presencial y Virtual'
    },
    modules: [
      {
        title: 'NIVEL BÁSICO - Módulo 1: Introducción a Power BI',
        description: 'Conoce el ecosistema de Power BI y su interfaz principal.',
        lessons: ['Qué es Power BI y sus componentes', 'Navegación por Power BI Desktop', 'Creación de cuenta y áreas de trabajo']
      },
      {
        title: 'NIVEL BÁSICO - Módulo 2: Conexión y Carga de Datos',
        description: 'Aprende a importar datos desde múltiples fuentes externas.',
        lessons: ['Conexión a archivos Excel y CSV', 'Conexión a bases de datos SQL y web', 'Modos de almacenamiento (Import vs DirectQuery)']
      },
      {
        title: 'NIVEL BÁSICO - Módulo 3: Transformación de Datos',
        description: 'Utiliza Power Query para limpiar y dar forma a tu información.',
        lessons: ['Interfaz de Power Query Editor', 'Limpieza y transformación de columnas', 'Combinación y anexión de consultas']
      },
      {
        title: 'NIVEL BÁSICO - Módulo 4: Visualizaciones Básicas',
        description: 'Crea tus primeros reportes gráficos interactivos.',
        lessons: ['Gráficos de barras, líneas y circulares', 'Tarjetas, medidores y KPIs', 'Formato de visualizaciones y temas']
      },
      {
        title: 'NIVEL INTERMEDIO - Módulo 1: Modelado de Datos',
        description: 'Estructura tu información para un análisis eficiente y robusto.',
        lessons: ['Esquema estrella y copo de nieve', 'Creación y gestión de relaciones', 'Tablas de dimensiones y hechos']
      },
      {
        title: 'NIVEL INTERMEDIO - Módulo 2: Introducción a DAX',
        description: 'Domina el lenguaje de expresiones de análisis de datos.',
        lessons: ['Columnas calculadas vs Medidas', 'Funciones de agregación e iteradores (SUM, SUMX)', 'Inteligencia de tiempo básica']
      },
      {
        title: 'NIVEL INTERMEDIO - Módulo 3: Visualizaciones Avanzadas',
        description: 'Mejora el impacto y la interactividad de tus tableros.',
        lessons: ['Filtros y segmentación avanzada', 'Interacciones y obtención de detalles (Drill-through)', 'Marcadores y botones']
      },
      {
        title: 'NIVEL INTERMEDIO - Módulo 4: Publicación y Compartición',
        description: 'Distribuye tus reportes y colabora en Power BI Service.',
        lessons: ['Publicación de reportes en la nube', 'Configuración de puertas de enlace (Gateways)', 'Creación y gestión de Dashboards']
      }
    ]
  },
  'ms-project': {
    id: 'ms-project',
    category: 'Empleabilidad',
    title: '',
    titleHighlight: 'MS Project',
    themeColor: 'emerald',
    description: 'Planifica, ejecuta y controla proyectos de principio a fin, optimizando tiempos y recursos de forma profesional.',
    backgroundImage: studiantImage,
    logo: msProjectLogo,
    metrics: {
      hours: '80 Horas',
      certification: 'Oficial',
      price: 'S/ 199.00',
      modality: 'Presencial y Virtual'
    },
    modules: [
      {
        title: 'NIVEL BÁSICO - Módulo 1: Introducción a MS Project',
        description: 'Familiarízate con el entorno y configura tu primer proyecto.',
        lessons: ['Interfaz y configuración inicial', 'Calendarios de proyecto', 'Información del proyecto']
      },
      {
        title: 'NIVEL BÁSICO - Módulo 2: Planificación de Tareas',
        description: 'Estructura el trabajo y estima duraciones.',
        lessons: ['Creación y esquema de tareas (EDT/WBS)', 'Hitos y tareas recurrentes', 'Estimación de duraciones']
      },
      {
        title: 'NIVEL BÁSICO - Módulo 3: Vinculación y Ruta Crítica',
        description: 'Establece dependencias y analiza la programación.',
        lessons: ['Tipos de dependencias entre tareas', 'Análisis de la ruta crítica', 'Tiempos de posposición y adelanto']
      },
      {
        title: 'NIVEL BÁSICO - Módulo 4: Recursos Básicos',
        description: 'Asigna recursos humanos y materiales a las tareas.',
        lessons: ['Creación de la hoja de recursos', 'Asignación de recursos a tareas', 'Tipos de tareas (trabajo, duración y unidades fijas)']
      },
      {
        title: 'NIVEL INTERMEDIO Y AVANZADO - Módulo 1: Gestión Avanzada de Recursos',
        description: 'Optimiza la asignación y resuelve sobreasignaciones.',
        lessons: ['Nivelación de recursos', 'Perfiles de trabajo', 'Agrupación y filtrado de recursos']
      },
      {
        title: 'NIVEL INTERMEDIO Y AVANZADO - Módulo 2: Presupuesto y Costos',
        description: 'Controla el aspecto financiero de tus proyectos.',
        lessons: ['Costos fijos y variables', 'Asignación de tasas de costo', 'Curva S y análisis de valor ganado']
      },
      {
        title: 'NIVEL INTERMEDIO Y AVANZADO - Módulo 3: Seguimiento y Control',
        description: 'Mide el avance real contra la línea base planificada.',
        lessons: ['Creación de la línea base', 'Actualización del progreso (porcentaje completado)', 'Reprogramación de trabajo incompleto']
      },
      {
        title: 'NIVEL INTERMEDIO Y AVANZADO - Módulo 4: Informes y Reportes',
        description: 'Comunica el estado del proyecto a los stakeholders.',
        lessons: ['Reportes visuales predeterminados', 'Creación de informes personalizados', 'Exportación a Excel y PDF']
      }
    ]
  },
  'revit-bim': {
    id: 'revit-bim',
    category: 'Ingeniería',
    title: '',
    titleHighlight: 'Revit BIM Architecture',
    themeColor: 'cyan',
    description: 'Aplica la metodología BIM para el modelado tridimensional, coordinación y documentación de proyectos de construcción.',
    backgroundImage: studiantImage,
    logo: revitLogo,
    metrics: {
      hours: '120 Horas',
      certification: 'Oficial',
      price: 'S/ 249.00',
      modality: 'Presencial y Virtual'
    },
    modules: [
      {
        title: 'NIVEL BÁSICO - Módulo 1: Introducción a Revit y BIM',
        description: 'Conoce los fundamentos de la metodología Building Information Modeling.',
        lessons: ['Conceptos BIM', 'Interfaz de usuario', 'Configuración inicial del proyecto']
      },
      {
        title: 'NIVEL BÁSICO - Módulo 2: Modelado Arquitectónico',
        description: 'Construye los elementos estructurales básicos de un edificio.',
        lessons: ['Muros y tabiques', 'Puertas y ventanas', 'Suelos y cubiertas']
      },
      {
        title: 'NIVEL BÁSICO - Módulo 3: Vistas y Documentación',
        description: 'Genera las vistas necesarias para la planimetría.',
        lessons: ['Plantas y alzados', 'Secciones y detalles', 'Cámaras y vistas 3D']
      },
      {
        title: 'NIVEL BÁSICO - Módulo 4: Anotaciones',
        description: 'Agrega información técnica a tus planos.',
        lessons: ['Cotas y textos', 'Etiquetas de elementos', 'Símbolos arquitectónicos']
      },
      {
        title: 'NIVEL INTERMEDIO - Módulo 1: Familias',
        description: 'Crea y edita componentes personalizados.',
        lessons: ['Editor de familias', 'Parámetros y restricciones', 'Familias anidadas']
      },
      {
        title: 'NIVEL INTERMEDIO - Módulo 2: Modelado Avanzado',
        description: 'Resuelve geometrías complejas y elementos especiales.',
        lessons: ['Escaleras y rampas', 'Muros cortina', 'Masas conceptuales']
      },
      {
        title: 'NIVEL INTERMEDIO - Módulo 3: Documentación Profesional',
        description: 'Prepara los planos para su impresión y entrega.',
        lessons: ['Creación de planos (Sheet)', 'Cuadros de rotulación', 'Tablas de planificación de cantidades']
      },
      {
        title: 'NIVEL AVANZADO - Módulo 1: Gestión BIM',
        description: 'Coordina proyectos de gran escala.',
        lessons: ['Fases del proyecto', 'Opciones de diseño', 'Trabajo colaborativo (Worksharing)']
      },
      {
        title: 'NIVEL AVANZADO - Módulo 2: Renderizado y Presentación',
        description: 'Obtén imágenes fotorrealistas de tu modelo.',
        lessons: ['Materiales y texturas', 'Iluminación artificial y solar', 'Renderizado en la nube']
      },
      {
        title: 'NIVEL AVANZADO - Módulo 3: Proyecto Integral BIM',
        description: 'Aplica todo lo aprendido en un proyecto arquitectónico completo.',
        lessons: ['Desarrollo de un edificio comercial', 'Coordinación y detección de interferencias', 'Exportación y entrega final']
      }
    ]
  },
  'autocad-2d-3d': {
    id: 'autocad-2d-3d',
    category: 'Ingeniería',
    title: '',
    titleHighlight: 'AutoCAD 2D y 3D',
    themeColor: 'red',
    description: 'Dibuja y modela planos arquitectónicos e ingeniería con precisión milimétrica, desde la concepción hasta el modelado tridimensional.',
    backgroundImage: studiantImage,
    logo: autocadLogo,
    metrics: {
      hours: '120 Horas',
      certification: 'Oficial',
      price: 'S/ 229.00',
      modality: 'Presencial y Virtual'
    },
    modules: [
      {
        title: 'NIVEL BÁSICO - Módulo 1: Introducción a AutoCAD',
        description: 'Familiarízate con el entorno de trabajo y la configuración inicial.',
        lessons: ['Interfaz de usuario y cinta de opciones', 'Configuración de unidades y límites de dibujo', 'Sistemas de coordenadas']
      },
      {
        title: 'NIVEL BÁSICO - Módulo 2: Comandos Básicos de Dibujo',
        description: 'Aprende a trazar geometrías simples con precisión.',
        lessons: ['Líneas, polilíneas y círculos', 'Rectángulos, arcos y polígonos', 'Uso de referencias a objetos (Osnap)']
      },
      {
        title: 'NIVEL BÁSICO - Módulo 3: Modificación de Objetos',
        description: 'Edita tus dibujos de manera eficiente y rápida.',
        lessons: ['Mover, copiar, rotar y escalar', 'Recortar, alargar, empalme y chaflán', 'Simetría, desfase y matrices']
      },
      {
        title: 'NIVEL INTERMEDIO - Módulo 1: Organización del Dibujo',
        description: 'Estructura tus planos utilizando capas para mayor control.',
        lessons: ['Creación y gestión de capas (Layers)', 'Propiedades de color, tipo y grosor de línea', 'Aislamiento y bloqueo de capas']
      },
      {
        title: 'NIVEL INTERMEDIO - Módulo 2: Acotado y Texto',
        description: 'Añade dimensiones y especificaciones técnicas.',
        lessons: ['Estilos de texto y directrices', 'Creación y edición de cotas (lineal, radial, angular)', 'Gestor de estilos de cota']
      },
      {
        title: 'NIVEL INTERMEDIO - Módulo 3: Bloques y Bibliotecas',
        description: 'Optimiza el trabajo repetitivo creando componentes reutilizables.',
        lessons: ['Creación e inserción de bloques', 'Edición de bloques y atributos básicos', 'Uso del Design Center']
      },
      {
        title: 'NIVEL AVANZADO - Módulo 1: Presentación e Impresión',
        description: 'Prepara tus planos para su correcta visualización e impresión a escala.',
        lessons: ['Espacio modelo vs Espacio papel (Layout)', 'Creación y configuración de ventanas gráficas (Viewports)', 'Estilos de trazado y ploteo a PDF']
      },
      {
        title: 'NIVEL AVANZADO - Módulo 2: Diseño Arquitectónico',
        description: 'Aplica AutoCAD al dibujo de un proyecto de arquitectura.',
        lessons: ['Distribución de plantas arquitectónicas', 'Dibujo de cortes y elevaciones', 'Representación de detalles constructivos']
      },
      {
        title: 'NIVEL AVANZADO - Módulo 3: Modelado 3D',
        description: 'Lleva tus diseños al entorno tridimensional.',
        lessons: ['Interfaz 3D e isometrías', 'Extrusión, revolución y barrido', 'Operaciones booleanas y vistas renderizadas básicas']
      }
    ]
  }
};

export default function CursosPage() {
  const { courseId } = useParams();
  
  // Buscar el curso en la base de datos mock. Si no existe la ID en la URL, 
  // o no está registrada, cargamos ofimatica-empresarial por defecto.
  const courseData = courseId && COURSE_DATABASE[courseId] 
    ? COURSE_DATABASE[courseId] 
    : COURSE_DATABASE['ofimatica-empresarial'];

  return <CourseTemplate course={courseData} />;
}
