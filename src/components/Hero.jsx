import CarouselComponent from "./Carousel";

function Hero() {
  return (
    <>
      <section className="grid grid-cols-2 gap-4 px-8">
        <div className="info">
          <h1 className="title text-2xl font-bold">
            Su Proveedor de Herramientas y Recambios para Automoción
          </h1>
          <p className="text">
            Joma se especializa en la importación y distribución de herramientas
            y recambios para el sector automotriz. Ofrecemos productos de
            calidad a precios competitivos, ideales para distribuidores que
            abastecen directamente a talleres mecánicos.
          </p>
        </div>
        <div className="carrousel">Carrousel</div>
        <CarouselComponent />
      </section>
    </>
  );
}

export default Hero;
