import "./App.css";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/HomePage";
import Footer from "./components/Footer";
import CatalogoPage from "./pages/CatalogoPage";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<CatalogoPage />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;
