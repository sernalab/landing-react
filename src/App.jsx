import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <section>3 bloques: - Más de X productos - Envío en 48h -</section>
      </main>
    </>
  );
}

export default App;
