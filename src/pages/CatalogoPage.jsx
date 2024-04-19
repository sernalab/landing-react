import { useState } from "react";

import categoriesData from "../data/categories.json";
import ProductCarouselComponent from "../components/ProductCarousel";
import KitCard from "../components/KitCard";

function CatalogoPage() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event) => {
    console.log("Selected value: ", event.target.value);
    setSelectedValue(event.target.value);
  };

  const selectedCategory = categoriesData.categories.find(
    (category) => category.name === selectedValue
  );

  console.log("Selected category: ", selectedCategory);

  return (
    <>
      <section className="max-w-screen-xl mx-auto p-4 md:p-8 lg:p-12">
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
        <div className="grid grid-cols-4 mt-10 gap-5">
          {selectedCategory &&
            selectedCategory.subcategory.map((subcat) => (
              <KitCard key={subcat} name={subcat} />
            ))}
        </div>
      </section>
    </>
  );
}

export default CatalogoPage;
