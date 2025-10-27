import React, { useState, useMemo } from 'react' 
import allWords from '../data/words.json' 

// --- Componentes ---
function AudioPlayer({ url }) {
  if (!url) return null
  return (
    <audio controls className="reproductor-audio">
      <source src={url} type="audio/mpeg" />
      Tu navegador no soporta el audio.
    </audio>
  )
}
function CategoryTags({ categoriaStr }) {
  if (!categoriaStr) return null
  const tags = categoriaStr.split(',').map(tag => tag.trim()).filter(tag => tag);
  return (
    <div className="etiqueta-contenedor">
      {tags.map((tag) => (
        <span key={tag} className="etiqueta">
          {tag}
        </span>
      ))}
    </div>
  )
}


// El alfabeto náhuatl relevante
const ALFABETO = "ACHEIKLMNOPSTWXY".split('');

function PalabraDelDia({ words }) {
  // Elige una palabra al azar (basado en el día del año)
  const diaDelAnio = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
  // Nos aseguramos de que solo elija de palabras que NO sean morfemas
  const palabrasReales = words.filter(w => !w.palabranahuatl.startsWith('-'));
  const palabra = palabrasReales[diaDelAnio % palabrasReales.length];

  return (
    <div className='tarjeta-palabra' style={{
      backgroundColor: 'var(--color-grana)', 
      color: 'var(--color-fondo)', 
      margin: '1rem 0 2rem 0',
      // Aplicamos el modo oscuro al revés
      borderColor: 'var(--color-grana)'
    }}>
      <h3 style={{fontFamily: 'var(--font-serif)', fontSize: '1.25rem', margin: 0, opacity: 0.8}}>Palabra del Día</h3>
      <h2 style={{fontFamily: 'var(--font-serif)', fontSize: '2.5rem', margin: '0.5rem 0'}}>{palabra.palabranahuatl}</h2>
      <p style={{fontSize: '1.25rem', margin: 0, opacity: 0.9}}>{palabra.traduccionespanol}</p>
    </div>
  )
}

function IndiceAlfabetico({ letras }) {
  return (
    <div style={{
      display: 'flex', 
      flexWrap: 'wrap', 
      justifyContent: 'center', 
      gap: '0.5rem', 
      marginBottom: '2rem'
    }}>
      {letras.map(letra => (
        <a 
          key={letra} 
          href={`#letra-${letra}`} // Esto hace que la página "salte"
          onClick={(e) => {
            e.preventDefault(); // Evita el salto brusco
            document.getElementById(`letra-${letra}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          className="etiqueta" 
          style={{cursor: 'pointer', fontSize: '1rem'}}
        >
          {letra}
        </a>
      ))}
    </div>
  )
}

// --- 3. COMPONENTE DE LA PÁGINA  ---

function DiccionarioPage() { 
  // Estados (mucho más simple)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)
  
  // Lógica de Categorías (sin cambios, usa 'allWords' directamente)
  const categories = useMemo(() => {
    const allCategories = allWords.flatMap(word => 
      word.categoria ? word.categoria.split(',').map(tag => tag.trim()) : []
    );
    return [...new Set(allCategories)].filter(cat => cat).sort();
  }, [allWords])


  // Lógica de Filtrado
  const filteredWords = useMemo(() => {
    const query = searchQuery.toLowerCase().trim()
    return allWords.filter(word => {
      if (selectedCategory) {
        if (!word.categoria || !word.categoria.toLowerCase().includes(selectedCategory.toLowerCase())) {
          return false;
        }
      }
      if (query === '') return true;
      const nahuatlMatch = word.palabranahuatl.toLowerCase().includes(query)
      const espanolMatch = word.traduccionespanol.toLowerCase().includes(query)
      const categoriaMatch = word.categoria ? word.categoria.toLowerCase().includes(query) : false
      return nahuatlMatch || espanolMatch || categoriaMatch
    });
  }, [allWords, searchQuery, selectedCategory])
  
  // --- 4. AGRUPACIÓN POR LETRA ---
  const palabrasAgrupadas = useMemo(() => {
    return filteredWords.reduce((acc, word) => {
      // Obtiene la primera letra (y la normaliza, ej: Ā -> A)
      let primeraLetra = word.palabranahuatl[0].toUpperCase()
          .normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Quita acentos
      
      if (primeraLetra === '-') primeraLetra = '#'; // Agrupa los morfemas
      if (!ALFABETO.includes(primeraLetra)) primeraLetra = '?'; // Otros

      if (!acc[primeraLetra]) {
        acc[primeraLetra] = []; // Crea el grupo si no existe
      }
      acc[primeraLetra].push(word);
      return acc;
    }, {}); // El 'acc' (acumulador) es un objeto
  }, [filteredWords]);

  // Saca las letras de los grupos Y del alfabeto, y las ordena
  const letrasPresentes = [...new Set(Object.keys(palabrasAgrupadas), ALFABETO)].sort();


  // --- 5. JSX ---
  return (
    <div className="contenedor-principal">
      
      {/* ¡NUEVA PALABRA DEL DÍA! */}
      <PalabraDelDia words={allWords} />

      <header className="header">
        <h1 className="titulo-principal">Diccionario Vivo</h1>
        <p className="subtitulo">Náhuatl de la Huasteca</p>
      </header>

      {/* Barra de Búsqueda */}
      <div style={{ marginBottom: '1rem' }}>
        <input 
          type="text" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Buscar palabra, traducción o categoría..."
          className="barra-busqueda"
        />
      </div>

      {/* Filtros de Categoría */}
      <div className="etiqueta-contenedor" style={{ marginBottom: '2rem', paddingLeft: '5px' }}>
        {/* ... (Tu botón "Todas" y el .map de 'categories' va aquí sin cambios) ... */}
        <button 
          onClick={() => setSelectedCategory(null)} 
          className="etiqueta"
          style={{
            cursor: 'pointer',
            backgroundColor: selectedCategory === null ? 'var(--color-grana)' : 'var(--color-borde)',
            color: selectedCategory === null ? 'var(--color-blanco)' : 'var(--color-texto)',
          }}
        >
          Todas
        </button>
        {categories.map(category => (
          <button 
            key={category} 
            onClick={() => setSelectedCategory(category)}
            className="etiqueta"
            style={{
              cursor: 'pointer',
              backgroundColor: selectedCategory === category ? 'var(--color-grana)' : 'var(--color-borde)',
              color: selectedCategory === category ? 'var(--color-blanco)' : 'var(--color-texto)',
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* ¡NUEVO ÍNDICE ALFABÉTICO! */}
      <IndiceAlfabetico letras={letrasPresentes} />

      <main>
        {/* --- 6. RENDERIZADO POR GRUPOS --- */}
        {/* Mapeamos las letras ordenadas */}
        {letrasPresentes.map(letra => (
          // Comprobamos si hay palabras en ese grupo (después de filtrar por búsqueda/categoría)
          palabrasAgrupadas[letra] && palabrasAgrupadas[letra].length > 0 && (
            // Creamos un "fragmento" por cada letra
            <React.Fragment key={letra}>
              
              {/* El título de la sección, ej: "A" */}
              <h2 
                id={`letra-${letra}`} 
                className="titulo-principal titulo-letra"
              >
                {letra}
              </h2>

              {/* Contenedor de Grid para las palabras de esta letra */}
              <div className="tarjetas-contenedor">
                {palabrasAgrupadas[letra].map((word) => (
                  <div key={word.palabranahuatl} className="tarjeta-palabra">
                    <div className="tarjeta-header">
                      <h2 className="palabra-nahuatl">{word.palabranahuatl}</h2>
                      <AudioPlayer url={word.audiourl} />
                    </div>
                    <p className="palabra-espanol">{word.traduccionespanol}</p> 
                    {word.raiz && (
                      <p className="palabra-raiz">
                      Raíz: <span className="raiz-texto">{word.raiz}</span>
                      </p>
                    )}
                    <CategoryTags categoriaStr={word.categoria} />
                    {word.ejemplonahuatl && (
                      <div className="ejemplo-contenedor">
                        <p className="ejemplo-texto">"{word.ejemplonahuatl}"</p>
                        <div style={{marginTop: '8px'}}><AudioPlayer url={word.audioejemplourl} /></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </React.Fragment>
          )
        ))}
        
        {filteredWords.length === 0 && (
          <div className="mensaje-no-resultados">
            <p>No se encontraron resultados para tu búsqueda.</p>
          </div>
        )}
      </main>
    </div>
  )
}

export default DiccionarioPage