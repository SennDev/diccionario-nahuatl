import React from 'react';

function HomePage() {
  return (
    // Reutilizamos la clase CSS del contenedor principal
    <div className="contenedor-principal" style={{ textAlign: 'center', paddingTop: '4rem' }}>
      
      {/* Reutilizamos las clases de título */}
      <h1 className="titulo-principal" style={{ fontSize: '3.5rem' }}>
        ¡Ximopanolti!
      </h1>
      <p className="subtitulo" style={{ fontSize: '1.5rem', marginTop: '1rem' }}>
        (Bienvenido)
      </p>

      <p style={{ 
        fontSize: '1.25rem', 
        lineHeight: '1.7', 
        marginTop: '3rem', 
        maxWidth: '600px', 
        margin: '3rem auto 0 auto' 
      }}>
        Esta es la plataforma de <strong style={{ color: 'var(--color-grana)' }}>Nahuatl Vivo</strong>, un proyecto para la preservación y enseñanza del Náhuatl de la Huasteca.
      </p>
      
      <p style={{ marginTop: '2rem', fontSize: '1.1rem' }}>
        Usa el menú de navegación para explorar el diccionario o ver los cursos.
      </p>
    </div>
  );
}
export default HomePage;