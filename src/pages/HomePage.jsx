import React from 'react';
import { Link } from 'react-router-dom';
import allWords from '../data/words.json';

// Componente PalabraDelDia (Corregido para legibilidad)
function PalabraDelDia({ words }) {
    // ... (lógica para elegir palabra sin cambios) ...
    if (!words || words.length === 0) return null;
    const diaDelAnio = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    const palabrasReales = words.filter(w => w.palabranahuatl && !w.palabranahuatl.startsWith('-'));
    if (palabrasReales.length === 0) return null;
    const palabra = palabrasReales[diaDelAnio % palabrasReales.length];

    return (
      // Usamos tarjeta-palabra para heredar neomorfismo
      // **CORREGIDO**: Usamos un gradiente primario y texto blanco/claro
      <div className='tarjeta-palabra tarjeta-palabra-dia' style={{ margin: '0 0 3rem 0', textAlign: 'center' }}>
        <h3 style={{fontFamily: 'var(--font-serif)', fontSize: '1.25rem', margin: 0, opacity: 0.9 }}>Palabra del Día</h3>
        <h2 style={{fontFamily: 'var(--font-serif)', fontSize: '2.5rem', margin: '0.5rem 0', textShadow: '1px 1px 2px rgba(0,0,0,0.2)'}}>{palabra.palabranahuatl}</h2>
        <p style={{fontSize: '1.25rem', margin: 0 }}>{palabra.traduccionespanol}</p>
      </div>
    );
}

// Componente HomePage Actualizado
function HomePage() {
  return (
    <div className="contenedor-principal" style={{ paddingTop: '2rem' }}>

      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
         <img
            src="public/logo_nv_icon.png" // Asegúrate que el nombre coincida
            alt="Logo Nahuatl Vivo"
            style={{ display: 'block', margin: '0 auto 1.5rem auto', maxWidth: '180px', height: 'auto', filter: 'drop-shadow(3px 3px 5px rgba(0,0,0,0.1))' }}
         />
        <h1 className="titulo-principal" style={{ fontSize: '3rem', marginBottom: '0.25rem' }}>
          ¡Ximopanolti!
        </h1>
        <p className="subtitulo" style={{ fontSize: '1.4rem' }}>
          (Bienvenido)
        </p>
      </header>

      {/* Palabra del Día */}
      {/* <PalabraDelDia words={allWords} /> */} {/* Descomenta si la quieres aquí también */}

      {/* Tarjeta Principal */}
      {/* **CORREGIDO**: tarjeta-inicio hereda de tarjeta-palabra para neomorfismo */}
      <div className="tarjeta-inicio tarjeta-palabra" style={{ padding: '2.5rem', textAlign: 'center' }}>
        <p style={{ fontSize: '1.3rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
          Bienvenido a <strong style={{ color: 'var(--clr-primary)', fontWeight: 700 }}>Nahuatl Vivo</strong>,
          un espacio dedicado a la preservación y aprendizaje del <strong style={{fontFamily: 'var(--font-serif)', fontWeight: 700}}>Náhuatl de la Huasteca</strong>.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: 'var(--clr-text-secondary)', marginBottom: '2.5rem' }}>
          Este proyecto nace de la necesidad de crear herramientas accesibles y modernas
          para conectar con nuestras raíces lingüísticas. Aquí encontrarás un diccionario
          en constante crecimiento y, próximamente, cursos interactivos.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Link to="/diccionario" className="btn-principal">
            Explorar Diccionario
          </Link>
          <Link to="/cursos" className="btn-principal btn-secundario">
            Iniciar Cursos
          </Link>
        </div>
      </div>
    </div>
  );
}
export default HomePage;

