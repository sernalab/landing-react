function Empleo() {
  return (
    <>
      <section className="max-w-screen-xl mx-auto py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Únete a nuestro equipo
          </h2>
          <p className="text-lg text-center mb-6">
            Explora las oportunidades para crecer profesionalmente y ser parte
            de nuestra visión.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Ofertas de Empleo Actuales
              </h3>
              <ul className="space-y-4">
                <li className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="font-semibold">Desarrollador Frontend</h4>
                  <p className="text-gray-500">
                    Preline UI is an open-source set of prebuilt UI components
                    based on the utility-first Tailwind CSS framework.
                  </p>
                  <div
                    id="hs-show-hide-collapse-heading"
                    className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
                    aria-labelledby="hs-show-hide-collapse"
                  >
                    <p className="text-gray-500">
                      This is a collapse body. It is hidden by default, until
                      the collapse plugin adds the appropriate classNamees that
                      we use to style each element. These classNamees control
                      the overall appearance, as well as the showing and hiding
                      via CSS transitions.
                    </p>
                  </div>
                  <p className="mt-2">
                    <button
                      type="button"
                      className="hs-collapse-toggle inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                      id="hs-show-hide-collapse"
                      data-hs-collapse="#hs-show-hide-collapse-heading"
                    >
                      <span className="hs-collapse-open:hidden text-blue-500 hover:text-blue-700">
                        Ver más
                      </span>
                      <span className="hs-collapse-open:block hidden text-blue-500 hover:text-blue-700">
                        Ver menos
                      </span>
                      <svg
                        className="hs-collapse-open:rotate-180 flex-shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </button>
                  </p>
                </li>
                <li className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="font-semibold">Desarrollador Frontend</h4>
                  <p className="text-gray-500">
                    Preline UI is an open-source set of prebuilt UI components
                    based on the utility-first Tailwind CSS framework.
                  </p>
                  <div
                    id="hs-show-hide-collapse-heading"
                    className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
                    aria-labelledby="hs-show-hide-collapse"
                  >
                    <p className="text-gray-500">
                      This is a collapse body. It is hidden by default, until
                      the collapse plugin adds the appropriate classNamees that
                      we use to style each element. These classNamees control
                      the overall appearance, as well as the showing and hiding
                      via CSS transitions.
                    </p>
                  </div>
                  <p className="mt-2">
                    <button
                      type="button"
                      className="hs-collapse-toggle inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                      id="hs-show-hide-collapse"
                      data-hs-collapse="#hs-show-hide-collapse-heading"
                    >
                      <span className="hs-collapse-open:hidden text-blue-500 hover:text-blue-700">
                        Ver más
                      </span>
                      <span className="hs-collapse-open:block hidden text-blue-500 hover:text-blue-700">
                        Ver menos
                      </span>
                      <svg
                        className="hs-collapse-open:rotate-180 flex-shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </button>
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Encuéntranos en LinkedIn
              </h3>
              <p className="mb-4">
                Visita nuestra página de LinkedIn para más oportunidades y para
                saber más sobre nuestra cultura de empresa.
              </p>
              <a
                href="https://www.linkedin.com"
                className="inline-block  bg-joma-color p-3 text-white px-6 py-3 rounded  transition-colors"
              >
                Visitar LinkedIn
              </a>
            </div>
          </div>
          <div className="text-center">
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
