import { Link } from "react-router-dom";

function Products() {
  return (
    <>
      <section class="max-w-screen-xl mx-auto p-4 md:p-8 lg:p-12">
        <div class="grid sm:grid-cols-12 gap-3">
          <div class="sm:self-end col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3">
            <a class="group relative block rounded-xl overflow-hidden" href="#">
              <div class="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden border-solid border-2 border-slate-300">
                <img
                  src="https://www.joma-tools.com/catalogo/837-large_default/lampara-cob-articulada-jolcoba.jpg"
                  alt=""
                />
              </div>
              <div class="absolute bottom-0 start-0 end-0 p-2">
                <div class="font-semibold text-gray-800 rounded-lg bg-gray-200 p-3">
                  Workplace personalities
                </div>
              </div>
            </a>
          </div>

          <div class="sm:self-end col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-3">
            <a class="group relative block rounded-xl overflow-hidden" href="#">
              <div class="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden border-solid border-2 border-slate-300">
                <img
                  class="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                  src="https://www.joma-tools.com/catalogo/951-large_default/supresor-de-picos-12-y-24-voltios-josp.jpg"
                  alt="Image Description"
                />
              </div>
              <div class="absolute bottom-0 start-0 end-0 p-2">
                <div class="font-semibold text-gray-800 rounded-lg bg-gray-200 p-3">
                  Engineering
                </div>
              </div>
            </a>
          </div>

          <div class="col-span-12 md:col-span-4">
            <a class="group relative block rounded-xl overflow-hidden" href="#">
              <div class="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden border-solid border-2 border-slate-300">
                <img
                  class="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                  src="https://www.joma-tools.com/catalogo/791-large_default/kit-cableados-de-pruebas-jokit.jpg"
                  alt="Image Description"
                />
              </div>
              <div class="absolute bottom-0 start-0 end-0 p-2">
                <div class="font-semibold text-gray-800 rounded-lg bg-gray-200 p-3">
                  Data 2021
                </div>
              </div>
            </a>
          </div>

          <div class="col-span-12 sm:col-span-6 md:col-span-4">
            <a class="group relative block rounded-xl overflow-hidden" href="#">
              <div class="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden border-solid border-2 border-slate-300">
                <img
                  class="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                  src="https://www.joma-tools.com/catalogo/896-large_default/polimetro-digital-rango-manual-vipd3000.jpg"
                  alt="Image Description"
                />
              </div>
              <div class="absolute bottom-0 start-0 end-0 p-2">
                <div class="font-semibold text-gray-800 rounded-lg bg-gray-200 p-3">
                  Data at Preline
                </div>
              </div>
            </a>
          </div>

          <div class="col-span-12 sm:col-span-6 md:col-span-4">
            <a class="group relative block rounded-xl overflow-hidden" href="#">
              <div class="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden border-solid border-2 border-slate-300">
                <img
                  class="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                  src="https://www.joma-tools.com/catalogo/915-large_default/termometros-por-infrarrojos-con-puntero-laser.jpg"
                  alt="Image Description"
                />
              </div>
              <div class="absolute bottom-0 start-0 end-0 p-2">
                <div class="font-semibold text-gray-800 rounded-lg bg-gray-200 p-3">
                  Empowered management
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            className="bg-joma-color rounded-full p-5 text-white hover:text-white transition-transform duration-300 transform hover:scale-110"
            to="/catalogo"
          >
            Más productos
          </Link>
        </div>
      </section>
    </>
  );
}

export default Products;
