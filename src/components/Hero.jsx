import CarouselComponent from "./Carousel";

function Hero() {
  return (
    <>
      <section className="bg-gray-200 p-4 md:p-8 lg:p-12">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
              Su proveedor de herramientas y recambios para automoción
            </h1>
            <p className="">
              Joma se especializa en la importación y distribución de
              herramientas y recambios para el sector automotriz. Ofrecemos
              productos de
              <span className="font-bold"> calidad</span> a{" "}
              <span className="font-bold">precios competitivos</span>, ideales
              para distribuidores que abastecen directamente a talleres
              mecánicos.
            </p>
          </div>
          <div className="carrousel">
            <CarouselComponent />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
