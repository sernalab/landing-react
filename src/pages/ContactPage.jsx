function Contact() {
  return (
    <>
      <section class="bg-white py-12">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-6">
            Contacta con Nosotros
          </h2>
          <p class="text-lg text-gray-600 text-center mb-6">
            Estamos aquí para ayudarte. Contáctanos por correo electrónico o
            visita nuestras redes sociales.
          </p>
          <div class="flex flex-wrap justify-center items-center">
            <div class="w-full md:w-1/2 lg:w-1/3 p-4 text-center">
              <div class="mb-6">
                <h3 class="text-xl font-semibold">Envíanos un Email</h3>
                <a
                  href="mailto:tuemail@ejemplo.com"
                  class="text-blue-500 hover:text-blue-700 text-lg"
                >
                  tuemail@ejemplo.com
                </a>
              </div>

              <div class="mb-6">
                <h3 class="text-xl font-semibold">Llámanos</h3>
                <a
                  href="tel:+34000111222"
                  class="text-blue-500 hover:text-blue-700 text-lg"
                >
                  +34 000 111 222
                </a>
              </div>

              <div>
                <h3 class="text-xl font-semibold">Redes Sociales</h3>
                <div class="flex justify-center space-x-4 mt-2">
                  <a
                    href="https://facebook.com/tuPerfil"
                    class="text-blue-600 hover:text-blue-800"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.676 0H1.324C.594 0 0 .594 0 1.324v21.352C0 23.406.594 24 1.324 24h11.568V14.724h-3.18v-3.6h3.18V8.785c0-3.15 1.926-4.869 4.743-4.869 1.35 0 2.51.1 2.85.145v3.31l-1.956.001c-1.533 0-1.828.729-1.828 1.796v2.355h3.654l-.476 3.6h-3.178V24h6.23c.729 0 1.323-.594 1.323-1.324V1.324C24 .594 23.406 0 22.676 0z" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/tuPerfil"
                    class="text-blue-400 hover:text-blue-600"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.162-2.723 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.384 4.482 13.944 13.944 0 0 1-10.109-5.136 4.916 4.916 0 0 0 1.52 6.555A4.897 4.897 0 0 1 .964 8.29v.062a4.914 4.914 0 0 0 3.941 4.796 4.903 4.903 0 0 1-2.224.085 4.92 4.92 0 0 0 4.589 3.417 9.867 9.867 0 0 1-7.286 2.032 13.892 13.892 0 0 0 7.548 2.212c9.058 0 14.01-7.5 14.01-14.008 0-.21 0-.42-.016-.63A9.935 9.935 0 0 0 24 4.557z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
