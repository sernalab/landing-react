import React from "react";
import { Link } from "react-router-dom"; // Asumiendo que usas React Router

function Header() {
  return (
    <header className="header flex items-center max-w-screen-xl mx-auto p-2 md:p-4 lg:py-8 lg:px-12 border-b-2">
      <nav className="container mx-auto  flex justify-between items-center">
        <Link className="text-gray-600" to="/">
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
            <Link className="text-gray-600" to="/about">
              Sobre Nosotros
            </Link>
          </li>
          <li>
            <Link className="text-gray-600" to="/promotions">
              Promociones
            </Link>
          </li>
          <li>
            <Link
              className="text-gray-600"
              target="_blank"
              to="https://www.youtube.com/@jomaimport-exports.l.4635/videos"
            >
              Vídeos
            </Link>
          </li>
          <li>
            <Link className="text-gray-600" to="/contact">
              Contacto
            </Link>
          </li>
          <li>
            <Link className="text-gray-600" to="/contact">
              Empleo
            </Link>
          </li>
          <li>
            <Link
              className="bg-joma-color rounded-md p-3 text-white hover:text-white"
              to="/catalogo"
            >
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
