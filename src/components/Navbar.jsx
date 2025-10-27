import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle'; // <-- 1. IMPORTAR EL BOTÓN
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        Nahuatl Vivo
      </Link>
      <div className="nav-links">
        <Link to="/" className="nav-link">Inicio</Link>
        <Link to="/diccionario" className="nav-link">Diccionario</Link>
        <Link to="/cursos" className="nav-link">Cursos</Link>
        <Link to="/historia" className="nav-link">Historia</Link>
        <Link to="/analizador" className="nav-link">Analizador</Link> {/* <-- AÑADIR ENLACE */}
        <ThemeToggle />
      </div>
    </nav>
  );
}
export default Navbar;