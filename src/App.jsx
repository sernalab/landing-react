import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/HomePage";
import Footer from "./components/Footer";

// PAGES
import CatalogoPage from "./pages/CatalogoPage";
import ProductDetailPage from "./pages/ProductDetail";
import AboutPage from "./pages/AboutPage";
import PromotionsPage from "./pages/PromotionsPage";
import VideosPage from "./pages/VideosPage";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="routes-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<CatalogoPage />} />
            <Route path="/details/:title" element={<ProductDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/promotions" element={<PromotionsPage />} />
            <Route path="/videos" element={<VideosPage />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;
