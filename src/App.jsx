import "./App.css";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/HomePage";
import Footer from "./components/Footer";

// PAGES
import CatalogoPage from "./pages/CatalogoPage";
import ProductDetailPage from "./pages/ProductDetail";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<CatalogoPage />} />
          <Route path="/details/:title" element={<ProductDetailPage />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;
