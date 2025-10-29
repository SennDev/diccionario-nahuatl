import React, { useState, useMemo } from 'react';
import allWords from '../data/words.json';

// --- Componentes Auxiliares ---

// (AudioPlayer y CategoryTags - sin cambios funcionales)
function AudioPlayer({ url }) {
  if (!url) return null;
  return (
    <audio controls className="reproductor-audio">
      <source src={url} type="audio/mpeg" />
      Tu navegador no soporta el audio.
    </audio>
  );
}
function CategoryTags({ categoriaStr }) {
  if (!categoriaStr) return null;
  const tags = categoriaStr.split(',').map(tag => tag.trim()).filter(tag => tag);
  return (
    <div className="etiqueta-contenedor">
      {tags.map((tag) => (
        <span key={tag} className="etiqueta">
          {tag}
        </span>
      ))}
    </div>
  );
}

// (PalabraDelDia - extraído del componente principal)
function PalabraDelDia({ words }) {
  if (!words || words.length === 0) return null;
  const diaDelAnio = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
  const palabrasReales = words.filter(w => w.palabranahuatl && !w.palabranahuatl.startsWith('-'));
  if (palabrasReales.length === 0) return null;
  const palabra = palabrasReales[diaDelAnio % palabrasReales.length];

  return (
    <div className='tarjeta-palabra-dia'> {/* Usa la clase CSS dedicada */}
      <h3>Palabra del Día</h3>
      <h2>{palabra.palabranahuatl}</h2>
      <p>{palabra.traduccionespanol}</p>
    </div>
  );
}

// (IndiceAlfabetico - extraído del componente principal)
const ALFABETO = "ACHEIKLMNOPSTWXY#?".split(''); // Incluye # y ?
function IndiceAlfabetico({ letras }) {
  return (
    <div className="indice-alfabetico-contenedor"> {/* Clase CSS dedicada */}
      {letras.map(letra => (
        <a
          key={letra}
          href={`#letra-${letra}`}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById(`letra-${letra}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          className="etiqueta indice-letra" /* Clase CSS dedicada */
        >
          {letra}
        </a>
      ))}
    </div>
  );
}

// --- Componente Principal de la Página ---

function DiccionarioPage() {
  // Estados
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null); // null significa "todas"

  // Lógica de Categorías (calcula las opciones para el dropdown)
  const categories = useMemo(() => {
    const allCategories = allWords.flatMap(word =>
      word.categoria ? word.categoria.split(',').map(tag => tag.trim()) : []
    );
    return [...new Set(allCategories)].filter(cat => cat && !cat.includes('morfema')).sort(); // Excluimos 'morfema' aquí si no queremos filtrarlo
  }, [allWords]);


  // Lógica de Filtrado (combina búsqueda y categoría seleccionada)
  const filteredWords = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    return allWords.filter(word => {
      // Filtro por Categoría
      if (selectedCategory) {
        if (!word.categoria || !word.categoria.toLowerCase().split(',').map(t => t.trim()).includes(selectedCategory.toLowerCase())) {
          return false;
        }
      }
      // Filtro por Búsqueda (si no hay query, todo pasa)
      if (query === '') return true;

      const nahuatlMatch = word.palabranahuatl.toLowerCase().includes(query);
      const espanolMatch = word.traduccionespanol.toLowerCase().includes(query);
      // Opcional: buscar también en categoría con el input de texto?
      // const categoriaMatch = word.categoria ? word.categoria.toLowerCase().includes(query) : false
      // return nahuatlMatch || espanolMatch || categoriaMatch
      return nahuatlMatch || espanolMatch; // Buscamos solo en palabra y traducción
    });
  }, [allWords, searchQuery, selectedCategory]);

  // Lógica de Agrupación por Letra (para el índice)
  const palabrasAgrupadas = useMemo(() => {
    return filteredWords.reduce((acc, word) => {
      let primeraLetra = word.palabranahuatl[0].toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      if (primeraLetra === '-') primeraLetra = '#';
      else if (!ALFABETO.includes(primeraLetra)) primeraLetra = '?';

      if (!acc[primeraLetra]) acc[primeraLetra] = [];
      acc[primeraLetra].push(word);
      return acc;
    }, {});
  }, [filteredWords]);

  const letrasPresentes = useMemo(() => Object.keys(palabrasAgrupadas).sort((a, b) => {
    // Orden personalizado: Letras -> # -> ?
    if (a === '#') return 1; if (b === '#') return -1;
    if (a === '?') return 1; if (b === '?') return -1;
    return a.localeCompare(b);
  }), [palabrasAgrupadas]);


  // --- JSX de la Página ---
  return (
    <div className="contenedor-principal diccionario-page-container"> {/* Clase específica */}

      {/* Palabra del Día */}
      <PalabraDelDia words={allWords} />

      {/* Header */}
      <header className="header">
        <h1 className="titulo-principal">Diccionario Vivo</h1>
        <p className="subtitulo">Náhuatl de la Huasteca</p>
      </header>

      {/* --- Controles de Búsqueda y Filtro --- */}
      <div className="controles-diccionario">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Buscar palabra o traducción..."
          className="barra-busqueda"
        />

        {/* --- NUEVO: Menú Desplegable de Categorías --- */}
        <div className="filtro-categoria-wrapper">
          <select
            className="category-select"
            value={selectedCategory || ''}
            onChange={(e) => setSelectedCategory(e.target.value || null)}
            aria-label="Filtrar por categoría"
          >
            <option value="">-- Todas las Categorías --</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
          <span className="select-arrow" aria-hidden="true">▼</span>
        </div>
      </div>

      {/* Índice Alfabético */}
      <IndiceAlfabetico letras={letrasPresentes} />

      <main>
        {/* Renderizado por Grupos */}
        {letrasPresentes.map(letra => (
          // Solo renderiza la sección si hay palabras para esa letra DESPUÉS de filtrar
          palabrasAgrupadas[letra] && palabrasAgrupadas[letra].length > 0 && (
            <React.Fragment key={letra}>
              <h2 id={`letra-${letra}`} className="titulo-principal titulo-letra">
                {letra === '#' ? 'Morfemas' : letra === '?' ? 'Otros' : letra} {/* Muestra "Morfemas" */}
              </h2>
              <div className="tarjetas-contenedor">
                {palabrasAgrupadas[letra].map((word) => (
                  // --- TARJETA DE PALABRA REFINADA ---
                  <div key={word.palabranahuatl} className="tarjeta-palabra">
                    <div className="tarjeta-header">
                      {/* Palabra Nahuatl más grande */}
                      <h2 className="palabra-nahuatl">{word.palabranahuatl}</h2>
                      <AudioPlayer url={word.audiourl} />
                    </div>
                    {/* Separador */}
                    <hr className="tarjeta-separador" />
                    {/* Sección principal de info */}
                    <div className="tarjeta-info">
                        <p className="palabra-espanol">{word.traduccionespanol}</p>
                        {word.raiz && (
                          <p className="palabra-raiz">
                            Raíz: <span className="raiz-texto">{word.raiz}</span>
                          </p>
                        )}
                        {/* Mostramos etiquetas solo si no es un morfema (ya lo indica el #) */}
                        {!word.palabranahuatl.startsWith('-') && <CategoryTags categoriaStr={word.categoria} />}
                    </div>
                    {/* Ejemplo (si existe) */}
                    {word.ejemplonahuatl && (
                      <div className="ejemplo-contenedor">
                        <p className="ejemplo-texto">Ejemplo:</p>
                        <p className="ejemplo-frase">"{word.ejemplonahuatl}"</p>
                        <div style={{marginTop: '8px'}}><AudioPlayer url={word.audioejemplourl} /></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </React.Fragment>
          )
        ))}

        {/* Mensaje No Resultados (solo si no hay NINGUNA palabra después de filtrar) */}
        {filteredWords.length === 0 && (
             <div className="mensaje-no-resultados">
                 <p>No se encontraron resultados para tu búsqueda o filtro.</p>
             </div>
         )}
      </main>
    </div>
  );
}

export default DiccionarioPage;