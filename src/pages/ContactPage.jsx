function Contact() {
  return (
    <>
      <section class="bg-gray-50 py-12">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-8">Ponte en Contacto</h2>
          <div class="flex flex-wrap justify-center">
            <div class="w-full md:w-3/4 lg:w-1/2 bg-white shadow-lg rounded-lg overflow-hidden">
              <div class="md:flex">
                <div class="md:w-1/2 bg-gradient-to-br from-blue-500 to-blue-800 text-white p-8">
                  <h3 class="text-xl font-semibold mb-4">
                    Estamos aquí para ayudarte
                  </h3>
                  <p>
                    Si tienes cualquier pregunta, no dudes en enviarnos un
                    mensaje.
                  </p>
                  <div class="mt-8">
                    <p>
                      <strong>Llámanos:</strong> 93 6834840
                    </p>
                    <p>
                      <strong>Fax:</strong> 93 6831869
                    </p>
                    <p>
                      <strong>Email:</strong>{" "}
                      <a href="mailto:joma@joma-tools.com" class="underline">
                        joma@joma-tools.com
                      </a>
                    </p>
                    <p>
                      <strong>Dirección:</strong> C/ Bages, 3 Nave 24 - Pol. Can
                      Prunera 08759 - Vallirana (Barcelona)
                    </p>
                    <p>
                      <strong>Posición GPS:</strong> Latitud 41º 22’ 22” N
                      Longitud 1º 54’ 31” E
                    </p>
                  </div>
                </div>
                <div class="md:w-1/2 p-8">
                  <div class="text-gray-600">
                    <h3 class="font-semibold mb-2">
                      Envíanos un mensaje directo
                    </h3>
                    <form action="mailto:tuemail@ejemplo.com" method="GET">
                      <div class="mb-4">
                        <label class="block text-sm">Tu Nombre</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Nombre Completo"
                          required
                          class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:shadow-outline mt-1"
                        />
                      </div>
                      <div class="mb-4">
                        <label class="block text-sm">Tu Email</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="tuemail@ejemplo.com"
                          required
                          class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:shadow-outline mt-1"
                        />
                      </div>
                      <div class="mb-6">
                        <label class="block text-sm">Mensaje</label>
                        <textarea
                          name="body"
                          rows="4"
                          placeholder="Escribe tu mensaje aquí"
                          required
                          class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:shadow-outline mt-1"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      >
                        Enviar
                      </button>
                    </form>
                  </div>
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
