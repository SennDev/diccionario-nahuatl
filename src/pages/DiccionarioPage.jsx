import { useState, useEffect, useMemo } from 'react'

const API_URL = 'https://script.google.com/macros/s/AKfycbzo7b4Xt6Un50uv7lRR_r2ldqUiDwKlOCYroXnta8p5n6NEQZ6Q-zmDJ8dajVcBbVQwGA/exec'

function LoadingSpinner() { /*...*/ }
function AudioPlayer({ url }) { /*...*/ }
function CategoryTags({ categoriaStr }) { /*...*/ }

function DiccionarioPage() { 
  const [isLoading, setIsLoading] = useState(true) 
  const [allWords, setAllWords] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  
  // --- 2. NUEVOS ESTADOS PARA FILTROS ---
  const [selectedCategory, setSelectedCategory] = useState(null) // 'null' significa "todas"
  
  useEffect(() => {
    async function fetchWords() {
      try {
        const response = await fetch(API_URL)
        if (!response.ok) throw new Error('Error al cargar la API')
        const data = await response.json()
        const filteredData = data.filter(word => word.palabranahuatl && word.palabranahuatl.trim() !== "");
        setAllWords(filteredData);
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchWords()
  }, [])

  // --- 3. LÓGICA PARA OBTENER CATEGORÍAS ÚNICAS ---
  // `useMemo` evita que esta lista se recalcule en cada renderizado
  const categories = useMemo(() => {
    const allCategories = allWords.flatMap(word => 
      word.categoria ? word.categoria.split(',').map(tag => tag.trim()) : []
    );
    // Crea un Set (para tener solo valores únicos) y lo vuelve un array
    return [...new Set(allCategories)].filter(cat => cat).sort(); // Filtra vacíos y ordena
  }, [allWords]) // Solo se recalcula si `allWords` cambia


  // --- 4. LÓGICA DE FILTRADO ---
  const filteredWords = useMemo(() => {
    const query = searchQuery.toLowerCase().trim()
    
    return allWords.filter(word => {
      // Filtro 1: Por Categoría Seleccionada
      if (selectedCategory) {
        if (!word.categoria || !word.categoria.toLowerCase().includes(selectedCategory.toLowerCase())) {
          return false; // No coincide con la categoría, se descarta
        }
      }
      
      // Filtro 2: Por Búsqueda (si no hay búsqueda, todo pasa)
      if (query === '') {
        return true; // Pasa el filtro de categoría y no hay búsqueda
      }
      
      // Si hay búsqueda, revisa las 3 columnas
      const nahuatlMatch = word.palabranahuatl.toLowerCase().includes(query)
      const espanolMatch = word.traduccionespanol.toLowerCase().includes(query)
      const categoriaMatch = word.categoria ? word.categoria.toLowerCase().includes(query) : false
      
      return nahuatlMatch || espanolMatch || categoriaMatch
    });
  }, [allWords, searchQuery, selectedCategory]) // Se recalcula si cambia cualquiera de estos 3


  // --- 5. EL JSX CON LOS NUEVOS BOTONES DE FILTRO ---
  return (
    <div className="contenedor-principal">
      
      <header className="header">
        <h1 className="titulo-principal">
          Diccionario Vivo
        </h1>
        <p className="subtitulo">
          Náhuatl de la Huasteca
        </p>
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

      {/* --- 6. NUEVA SECCIÓN: FILTROS DE CATEGORÍA --- */}
      <div className="etiqueta-contenedor" style={{ marginBottom: '2rem', paddingLeft: '5px' }}>
        {/* Botón para "limpiar" el filtro */}
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

        {/* Mapea todas las categorías únicas */}
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

      <main>
        {/* ... (El resto del JSX: isLoading, filteredWords.map, etc. no cambia) ... */}
        {isLoading && <LoadingSpinner />}
        {!isLoading && (
          <div className="tarjetas-contenedor">
            {filteredWords.map((word) => (
              <div key={word.palabranahuatl} className="tarjeta-palabra">
                {/* ... (Contenido de la tarjeta: h2, AudioPlayer, p, CategoryTags, etc.) ... */}
                <div className="tarjeta-header">
                  <h2 className="palabra-nahuatl">{word.palabranahuatl}</h2>
                  <AudioPlayer url={word.audiourl} />
                </div>
                <p className="palabra-espanol">{word.traduccionespanol}</p> 
                <CategoryTags categoriaStr={word.categoria} />
                {word.ejemplonahuatl && (
                  <div className="ejemplo-contenedor">
                    <p className="ejemplo-texto">"{word.ejemplonahuatl}"</p>
                    <div style={{marginTop: '8px'}}>
                      <AudioPlayer url={word.audioejemplourl} />
                    </div>
                  </div>
                )}
              </div>
            ))}
            {filteredWords.length === 0 && (
              <div className="mensaje-no-resultados">
                <p>No se encontraron resultados para tu búsqueda.</p>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  )
}

export default DiccionarioPage