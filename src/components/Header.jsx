import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="max-w-screen-xl mx-auto p-2 md:p-4 lg:py-8 lg:px-12 border-b-2">
      <nav className="container mx-auto flex flex-wrap justify-between items-center w-full">
        <Link className="text-gray-600" to="/">
          <img
            className="h-9"
            src="/public/logo.jpg"
            alt="Logo de la empresa"
          />
        </Link>

        {/* Phone number visible only on larger screens */}
        <div className="hidden md:flex md:flex-grow items-center justify-center">
          <p className="mx-4">
            Llámenos: <span className="font-bold">93 683 48 40</span>
          </p>
        </div>

        <div className="hidden sm:flex flex-grow items-center justify-end space-x-4">
          {/* Desktop Links */}
          <Link className="text-gray-600" to="/about">
            Sobre Nosotros
          </Link>
          <Link className="text-gray-600" to="/promotions">
            Promociones
          </Link>
          <Link
            className="text-gray-600"
            target="_blank"
            to="https://www.youtube.com/@jomaimport-exports.l.4635/videos"
          >
            Vídeos
          </Link>
          <Link className="text-gray-600" to="/contact">
            Contacto
          </Link>
          <Link className="text-gray-600" to="/employment">
            Empleo
          </Link>
          <Link
            className="bg-joma-color rounded-md p-3 text-white"
            to="/catalogo"
          >
            Catálogo
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="sm:hidden p-2 rounded-lg border border-gray-200 bg-white text-gray-800 hover:bg-gray-50"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Mobile Links */}
        {isOpen && (
          <div className="sm:hidden flex flex-col items-center w-full mt-4">
            <Link className="text-gray-600 py-2" to="/about">
              Sobre Nosotros
            </Link>
            <Link className="text-gray-600 py-2" to="/promotions">
              Promociones
            </Link>
            <Link
              className="text-gray-600 py-2"
              target="_blank"
              to="https://www.youtube.com/@jomaimport-exports.l.4635/videos"
            >
              Vídeos
            </Link>
            <Link className="text-gray-600 py-2" to="/contact">
              Contacto
            </Link>
            <Link className="text-gray-600 py-2" to="/employment">
              Empleo
            </Link>
            <Link
              className="bg-joma-color rounded-md p-3 text-white py-2"
              to="/catalogo"
            >
              Catálogo
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
