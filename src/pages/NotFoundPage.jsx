import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="contenedor-principal" style={{ textAlign: 'center', paddingTop: '4rem' }}>
      <h1 className="titulo-principal" style={{ fontSize: '3.5rem' }}>
        Axtle nikan
      </h1>
      <p className="subtitulo" style={{ fontSize: '1.5rem', marginTop: '1rem' }}>
        (Página no encontrada - 404)
      </p>

      <p style={{ marginTop: '2rem', fontSize: '1.1rem' }}>
        Parece que la página que buscas no existe.
      </p>
      
      <Link 
        to="/" 
        className="nav-link" 
        style={{ 
          marginTop: '2rem', 
          display: 'inline-block', 
          backgroundColor: 'var(--color-grana)', 
          color: 'var(--color-blanco)',
          padding: '0.75rem 1.5rem',
          borderRadius: '0.5rem',
          textDecoration: 'none'
        }}
      >
        Regresar al Inicio
      </Link>
    </div>
  );
}
export default NotFoundPage;