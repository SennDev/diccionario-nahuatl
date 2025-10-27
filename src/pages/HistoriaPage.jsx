import React from 'react';
import { Link } from 'react-router-dom';

function HistoriaPage() {
  return (
    <div className="contenedor-principal" style={{ maxWidth: '800px' }}>
      <header className="header">
        <h1 className="titulo-principal">Historia del Náhuatl</h1>
        <p className="subtitulo">Una lengua de imperios y resistencia</p>
      </header>

      <div className="tarjeta-palabra" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
        <h2 className="palabra-nahuatl" style={{ fontSize: '1.75rem' }}>Orígenes</h2>
        <p>
          (Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          El náhuatl (nāhuatlahtōlli) pertenece a la familia de lenguas 
          yuto-nahuas. Sus hablantes llegaron a Mesoamérica...)
        </p>
        
        <h2 className="palabra-nahuatl" style={{ fontSize: '1.75rem', marginTop: '2rem' }}>La Época Clásica</h2>
        <p>
          (Durante el apogeo del Imperio Azteca (Mexica), una variante 
          del náhuatl, conocida como Náhuatl Clásico, sirvió como 
          lingua franca en toda la región...)
        </p>

        <h2 className="palabra-nahuatl" style={{ fontSize: '1.75rem', marginTop: '2rem' }}>Resistencia y Presente</h2>
        <p>
          (Tras la conquista, el idioma fue suprimido pero sobrevivió 
          gracias a la resistencia de las comunidades. Hoy en día, 
          existen muchas variantes modernas, siendo la de la Huasteca 
          una de las más habladas...)
        </p>

        <div className="ejemplo-contenedor">
          <h3 className="palabra-nahuatl" style={{ fontSize: '1.5rem' }}>Fuentes</h3>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li>(Fuente 1: Libro o Artículo, Año)</li>
            <li>(Fuente 2: Sitio Web, URL)</li>
            <li>(Fuente 3: INALI, etc.)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default HistoriaPage;