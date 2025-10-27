import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Importamos sus estilos

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        Nahuatl Vivo
      </Link>
      <div className="nav-links">
        {/* Usamos 'Link' de react-router-dom en lugar de 'a' */}
        <Link to="/" className="nav-link">Inicio</Link>
        <Link to="/diccionario" className="nav-link">Diccionario</Link>
        <Link to="/cursos" className="nav-link">Cursos</Link>
      </div>
    </nav>
  );
}
export default Navbar;