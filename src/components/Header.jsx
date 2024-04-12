import React from "react";
import { Link } from "react-router-dom"; // Asumiendo que usas React Router

function Header() {
  return (
    <header className="header flex items-center">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/">
          <img
            className="h-9"
            src="src/assets/logo.jpg"
            alt="Logo de la empresa"
          />
        </Link>
        <p>
          Llámenos: <span className="font-bold">93 683 48 40</span>
        </p>
        <ul className="flex space-x-4">
          <li>
            <Link to="/about">Sobre Nosotros</Link>
          </li>
          <li>
            <Link to="/promotions">Promociones</Link>
          </li>
          <li>
            <Link
              target="_blank"
              to="https://www.youtube.com/@jomaimport-exports.l.4635/videos"
            >
              Vídeos
            </Link>
          </li>
          <li>
            <Link to="/contact">Contacto</Link>
          </li>
          <li>
            <Link to="/contact">Empleo</Link>
          </li>
          <li>
            <Link className="bg-black rounded-md p-2" to="/catalog">
              Catálogo
            </Link>
          </li>
          {/* <li>
            <Link to="/blog">Blog</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
