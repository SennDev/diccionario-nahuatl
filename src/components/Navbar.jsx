import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom'; // Importa NavLink y useLocation
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); // Hook para detectar cambios de ruta

  // Función para cerrar el menú móvil
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Efecto para cerrar el menú móvil cuando cambia la ruta
  useEffect(() => {
    closeMobileMenu();
  }, [location]); // Se ejecuta cada vez que la URL cambia

  return (
    <div className="navbar-container">
      <nav className="navbar">
        {/* Logo */}
        <NavLink to="/" className="nav-logo">
          NV
        </NavLink>

        {/* Enlaces para Escritorio (ocultos en móvil) */}
        <div className="nav-links desktop-links">
          <NavLink to="/" className="nav-link" end>Inicio</NavLink>
          <NavLink to="/diccionario" className="nav-link">Diccionario</NavLink>
          <NavLink to="/cursos" className="nav-link">Cursos</NavLink>
          <NavLink to="/historia" className="nav-link">Historia</NavLink>
          <NavLink to="/analizador" className="nav-link">Analizador</NavLink>
        </div>

        {/* Contenedor para Botón de Tema y Hamburguesa */}
        <div className="navbar-controls">
          <ThemeToggle />

          {/* Botón de Hamburguesa (solo visible en móvil) */}
          <button
            className={`menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu" // Para accesibilidad
          >
            <div className="hamburger-line line-1"></div>
            <div className="hamburger-line line-2"></div>
            <div className="hamburger-line line-3"></div>
          </button>
        </div>
      </nav>

      {/* Menú Desplegable para Móvil */}
      <div className={`nav-links-mobile ${isMobileMenuOpen ? 'open' : ''}`}>
        <NavLink to="/" className="nav-link-mobile" end onClick={closeMobileMenu}>Inicio</NavLink>
        <NavLink to="/diccionario" className="nav-link-mobile" onClick={closeMobileMenu}>Diccionario</NavLink>
        <NavLink to="/cursos" className="nav-link-mobile" onClick={closeMobileMenu}>Cursos</NavLink>
        <NavLink to="/historia" className="nav-link-mobile" onClick={closeMobileMenu}>Historia</NavLink>
        <NavLink to="/analizador" className="nav-link-mobile" onClick={closeMobileMenu}>Analizador</NavLink>
      </div>
    </div>
  );
}
export default Navbar;