import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import studiantImage from '@/assets/images/studiant.webp';
export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden px-8 py-20 lg:py-32">
      <div className="absolute inset-0 z-0"></div>
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >

          <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-white font-black leading-[1.1]">
            Domina las herramientas <span className="text-primary">Productivas e innovadoras</span> del futuro
          </h1>
          <p className="text-xl text-gray-100 max-w-xl font-medium leading-relaxed">
            Capacitación en Ofimática, Ingeniería, Tesis e Innovación. Aprende con expertos y obtén certificaciones universitarias reconocidas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center items-center"
        >
          <img
            src={studiantImage} 
            alt="Student working"
            className="w-full max-w-xl lg:max-w-2xl h-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
}
