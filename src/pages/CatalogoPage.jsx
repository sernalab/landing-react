import { useState } from "react";

import categoriesData from "../data/categories.json";
import ProductCarouselComponent from "../components/ProductCarousel";

function CatalogoPage() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <section className="max-w-screen-xl mx-auto p-4 md:p-8 lg:p-12 h-lvh">
        <ProductCarouselComponent />
        <div className="flex justify-between mt-10">
          <div>
            <label for="hs-select-label" className="block  font-bold mb-2">
              Categorías
            </label>
            <select
              id="hs-select-label"
              className="py-3 px-4 pe-9 block  border-2 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              onChange={handleSelectChange}
            >
              <option value="">Selecciona</option>
              <option value="kits">Kits distribuciones</option>
              <option value="mecanica">Mecánica</option>
              <option value="diagnosis">Diagnosis</option>
              <option value="electricidad">Electricidad</option>
              <option value="chapa-pintura">Chapa y pintura</option>
            </select>
          </div>

          <p>
            Descarga{" "}
            <a
              href="https://www.joma-tools.com/CatalogoJoma.pdf"
              download="catalogojoma.pdf"
              target="_blank"
              className="font-bold"
            >
              aquí
            </a>{" "}
            el catálogo en formato PDF.
          </p>
        </div>
        <div>
          <p>{selectedValue}</p>
        </div>
      </section>
    </>
  );
}

export default CatalogoPage;
