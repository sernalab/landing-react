function Hero() {
  return (
    <>
      <section className="flex grid-cols-2 gap-1">
        <div className="info">
          <h1 className="title text-2xl font-bold">
            Su Proveedor de Herramientas y Recambios para Automoción
          </h1>
          <div className="text">
            Joma se especializa en la importación y distribución de herramientas
            y recambios para el sector automotriz. Ofrecemos productos de
            calidad a precios competitivos, ideales para distribuidores que
            abastecen directamente a talleres mecánicos.
          </div>
        </div>
        <div className="carrousel">Carrousel</div>
      </section>
    </>
  );
}

export default Hero;
