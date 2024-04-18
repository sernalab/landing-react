import "./App.css";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Products from "./components/Products";
import Footer from "./components/Footer";
import CatalogoPage from "./pages/CatalogoPage";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/features" element={<Features />} />
          <Route path="/products" element={<Products />} />
          <Route path="/catalog" element={<CatalogoPage />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;
