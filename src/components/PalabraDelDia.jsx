import React from 'react';

// Componente PalabraDelDia (Refinado)
function PalabraDelDia({ words }) {
  if (!words || words.length === 0) return null;

  const diaDelAnio = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
  const palabrasReales = words.filter(w => w.palabranahuatl && !w.palabranahuatl.startsWith('-'));

  if (palabrasReales.length === 0) return null;

  const palabra = palabrasReales[diaDelAnio % palabrasReales.length];

  return (
    // Aplicamos clase específica
    <div className='tarjeta-palabra-dia'>
      <h3>Palabra del Día</h3>
      <h2>{palabra.palabranahuatl}</h2>
      <p>{palabra.traduccionespanol}</p>
    </div>
  );
}

export default PalabraDelDia;