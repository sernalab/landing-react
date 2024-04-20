import "./App.css";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/HomePage";
import Footer from "./components/Footer";

// PAGES
import CatalogoPage from "./pages/CatalogoPage";
import ProductDetailPage from "./pages/ProductDetail";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<CatalogoPage />} />
          <Route path="/details/:title" element={<ProductDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;
