function Empleo() {
  return (
    <>
      <section class="max-w-screen-xl mx-auto py-12">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-8">
            Únete a nuestro equipo
          </h2>
          <p class="text-lg text-center mb-6">
            Explora las oportunidades para crecer profesionalmente y ser parte
            de nuestra visión.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 class="text-xl font-semibold mb-4">
                Ofertas de Empleo Actuales
              </h3>
              <ul class="space-y-4">
                <li class="bg-gray-100 p-4 rounded-lg">
                  <h4 class="font-semibold">Desarrollador Frontend</h4>
                  <p>
                    Buscamos un desarrollador con experiencia en React y CSS.
                  </p>
                  <a href="#" class="text-blue-500 hover:text-blue-700">
                    Ver más
                  </a>
                </li>
                <li class="bg-gray-100 p-4 rounded-lg">
                  <h4 class="font-semibold">Analista de Datos</h4>
                  <p>
                    Únete a nuestro equipo de análisis para transformar datos en
                    decisiones.
                  </p>
                  <a href="#" class="text-blue-500 hover:text-blue-700">
                    Ver más
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-4">
                Encuéntranos en LinkedIn
              </h3>
              <p class="mb-4">
                Visita nuestra página de LinkedIn para más oportunidades y para
                saber más sobre nuestra cultura de empresa.
              </p>
              <a
                href="https://www.linkedin.com"
                class="inline-block  bg-joma-color p-3 text-white px-6 py-3 rounded  transition-colors"
              >
                Visitar LinkedIn
              </a>
            </div>
          </div>
          <div class="text-center">
            <p>
              ¿Listo para dar el siguiente paso en tu carrera? Envíanos tu CV o
              contáctanos directamente a través de nuestro{" "}
              <a href="INSERT EMAIL" className="font-bold">
                correo electrónico
              </a>
              .
            </p>
            <p className="font-bold">EL EMAIL</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Empleo;
