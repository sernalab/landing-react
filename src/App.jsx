import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section>3 bloques: - Más de X productos - Envío en 48h -</section>
      </main>
    </>
  );
}

export default App;
