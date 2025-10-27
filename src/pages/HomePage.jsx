import React from 'react';
import { Link } from 'react-router-dom';
import allWords from '../data/words.json';

function PalabraDelDia({ words }) {
  if (!words || words.length === 0) return null; // Manejo si words está vacío

  const diaDelAnio = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
  const palabrasReales = words.filter(w => w.palabranahuatl && !w.palabranahuatl.startsWith('-'));
  if (palabrasReales.length === 0) return null; // No hay palabras válidas

  const palabra = palabrasReales[diaDelAnio % palabrasReales.length];

  return (
    <div className='tarjeta-palabra' style={{
      backgroundColor: 'var(--color-grana)',
      color: 'var(--color-fondo)',
      margin: '0 0 3rem 0', // Espacio debajo
      borderColor: 'var(--color-grana)',
      textAlign: 'center' // Centramos el contenido
    }}>
      <h3 style={{fontFamily: 'var(--font-serif)', fontSize: '1.25rem', margin: 0, opacity: 0.8}}>Palabra del Día</h3>
      <h2 style={{fontFamily: 'var(--font-serif)', fontSize: '2.5rem', margin: '0.5rem 0'}}>{palabra.palabranahuatl}</h2>
      <p style={{fontSize: '1.25rem', margin: 0, opacity: 0.9}}>{palabra.traduccionespanol}</p>
    </div>
  );
}


// --- Componente HomePage  ---
function HomePage() {
  return (
    <div className="contenedor-principal" style={{ paddingTop: '3rem' }}> {/* Reducimos padding superior */}

      {/* 1. Título principal */}
      <header style={{ textAlign: 'center' }}>
        <h1 className="titulo-principal" style={{ fontSize: '3.5rem' }}>
          ¡Ximopanolti!
        </h1>
        <p className="subtitulo" style={{ fontSize: '1.5rem', marginTop: '0.5rem' }}>
          (Bienvenido)
        </p>
      </header>

      {/* 2. Palabra del Día */}
      <PalabraDelDia words={allWords} />

      {/* 3. Tarjeta Principal con Descripción */}
      <div className="tarjeta-inicio" style={{
        backgroundColor: 'var(--color-blanco)',
        padding: '2.5rem', // Más padding
        borderRadius: '0.5rem',
        border: '1px solid var(--color-borde)',
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
        textAlign: 'center' // Centramos texto
      }}>
        {/* Párrafo de Bienvenida */}
        <p style={{ fontSize: '1.3rem', lineHeight: '1.7', marginBottom: '1.5rem' }}> {/* Aumentamos tamaño y margen */}
          Bienvenido a <strong style={{ color: 'var(--color-grana)' }}>Nahuatl Vivo</strong>,
          un espacio dedicado a la preservación y aprendizaje del <strong style={{fontFamily: 'var(--font-serif)'}}>Náhuatl de la Huasteca</strong>.
        </p>

        {/* Párrafo de Propósito */}
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#57534e', marginBottom: '2.5rem' }}> {/* Color Stone-600 */}
          Este proyecto nace de la necesidad de crear herramientas accesibles y modernas
          para conectar con nuestras raíces lingüísticas. Aquí encontrarás un diccionario
          en constante crecimiento y, próximamente, cursos interactivos.
        </p>

        {/* Botones de Call to Action */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}> {/* Flexbox para botones */}
          <Link to="/diccionario" className="btn-principal">
            Explorar Diccionario
          </Link>
          {/* Cambiamos el color del segundo botón a un gris oscuro */}
          <Link to="/cursos" className="btn-principal" style={{backgroundColor: '#44403c'}}> {/* Stone-700 */}
            Iniciar Cursos
          </Link>
        </div>
      </div>

    </div>
  );
}
export default HomePage;