import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="contenedor-principal" style={{ textAlign: 'center', paddingTop: '4rem' }}>
      
      <h1 className="titulo-principal" style={{ fontSize: '3.5rem' }}>
        ¡Ximopanolti!
      </h1>
      <p className="subtitulo" style={{ fontSize: '1.5rem', marginTop: '1rem' }}>
        (Bienvenido)
      </p>

      {/* Usamos una tarjeta con la animación de fade-in */}
      <div className="tarjeta-inicio" style={{ 
        backgroundColor: 'var(--color-blanco)', 
        padding: '2rem', 
        borderRadius: '0.5rem', 
        marginTop: '3rem', 
        border: '1px solid var(--color-borde)',
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
      }}>
        <p style={{ fontSize: '1.25rem', lineHeight: '1.7' }}>
          Esta es la plataforma de <strong style={{ color: 'var(--color-grana)' }}>Nahuatl Vivo</strong>,
          un proyecto para la preservación y enseñanza del Náhuatl de la Huasteca.
        </p>
        
        {/* Botones de Call to Action */}
        <div>
          <Link to="/diccionario" className="btn-principal">
            Explorar Diccionario
          </Link>
          <Link to="/cursos" className="btn-principal" style={{backgroundColor: '#57534e'}}>
            Iniciar Cursos
          </Link>
        </div>
      </div>
    </div>
  );
}
export default HomePage;