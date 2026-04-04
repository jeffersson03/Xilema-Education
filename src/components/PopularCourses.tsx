import { Clock, ChevronRight } from 'lucide-react';
import { COURSES } from '../constants';
import Card from './ui/Card';
import Button from './ui/Button';

export default function PopularCourses() {
  return (
    <section className="py-24 px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-4">Cursos Populares</h2>
            <p className="text-slate-600">Nuestros programas con mayor demanda académica</p>
          </div>
          <button className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
            Ver todo <ChevronRight size={20} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course, idx) => (
            <Card
              key={course.title}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                {course.isBestseller && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-tertiary-container text-on-tertiary-container text-xs font-bold rounded-lg">
                    Bestseller
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-sm text-slate-500 mb-6 flex items-center gap-2">
                  <Clock size={14} /> {course.duration}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-surface-container-high">
                  <span className="text-2xl font-black text-on-surface">{course.price}</span>
                  <Button variant="ghost" className="bg-surface-container-high">
                    Ver detalles
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
