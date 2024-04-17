import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Products from "./components/Products";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Products />
        <Footer />
      </main>
    </>
  );
}

export default App;
