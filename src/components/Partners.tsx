export default function Partners() {
  const partners = [
    'UNIVERSIDAD NACIONAL',
    'COLEGIO DE INGENIEROS',
    'MINISTERIO EDUCACIÓN',
    'INSTITUTO TECNOLÓGICO'
  ];

  return (
    <section className="py-20 px-8 bg-surface-container-high">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-slate-500 tracking-widest uppercase text-xs mb-12">
          NUESTROS RESPALDOS Y CONVENIOS
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner) => (
            <div 
              key={partner} 
              className="font-bold text-xl lg:text-2xl text-slate-900 tracking-tight"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
