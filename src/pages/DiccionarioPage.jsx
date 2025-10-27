import { useState, useEffect } from 'react'

// ¡Esta es TU API!
const API_URL = 'https://script.google.com/macros/s/AKfycbzo7b4Xt6Un50uv7lRR_r2ldqUiDwKlOCYroXnta8p5n6NEQZ6Q-zmDJ8dajVcBbVQwGA/exec'

// Componente pequeño para el Spinner de Carga
function LoadingSpinner() {
  return (
    <div className="spinner-carga"></div>
  )
}

// Componente pequeño para el Reproductor de Audio
function AudioPlayer({ url }) {
  if (!url) {
    return null
  }
  return (
    <audio controls className="reproductor-audio">
      <source src={url} type="audio/mpeg" />
      Tu navegador no soporta el audio.
    </audio>
  )
}

// Componente pequeño para las Etiquetas
function CategoryTags({ categoriaStr }) {
  if (!categoriaStr) {
    return null
  }
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

// --- 2. EL COMPONENTE PRINCIPAL DE LA APP ---
function DiccionarioPage() { // <-- CAMBIO 1: El nombre de la función ya no es "App"
  const [isLoading, setIsLoading] = useState(true) 
  const [allWords, setAllWords] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  // Efecto para cargar los datos de tu API
  useEffect(() => {
    async function fetchWords() {
      try {
        const response = await fetch(API_URL)
        if (!response.ok) throw new Error('Error al cargar la API')
        
        const data = await response.json()
        setAllWords(data)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchWords()
  }, [])

  // Lógica de Filtrado
  const filteredWords = allWords.filter(word => {
    const query = searchQuery.toLowerCase().trim()
    const nahuatlMatch = word.palabranahuatl.toLowerCase().includes(query)
    const espanolMatch = word.traduccionespanol.toLowerCase().includes(query)
    const categoriaMatch = word.categoria ? word.categoria.toLowerCase().includes(query) : false
    
    return nahuatlMatch || espanolMatch || categoriaMatch
  })

  // --- 3. EL HTML (JSX) que se "pinta" en la pantalla ---
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

      <div className="mb-8">
        <input 
          type="text" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Buscar palabra, traducción o categoría..."
          className="barra-busqueda"
        />
      </div>

      <main>
        {isLoading && <LoadingSpinner />}
        
        {!isLoading && (
          <div className="tarjetas-contenedor">
            {filteredWords.map((word) => (
              <div 
                key={word.palabranahuatl} 
                className="tarjeta-palabra"
              >
                <div className="tarjeta-header">
                  <h2 className="palabra-nahuatl">
                    {word.palabranahuatl}
                  </h2>
                  <AudioPlayer url={word.audiourl} />
                </div>
                
                <p className="palabra-espanol">
                  {word.traduccionespanol}
                </p> 

                <CategoryTags categoriaStr={word.categoria} />

                {word.ejemplonahuatl && (
                  <div className="ejemplo-contenedor">
                    <p className="ejemplo-texto">
                      "{word.ejemplonahuatl}"
                    </p>
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

export default DiccionarioPage // <-- CAMBIO 2: Exportamos la nueva función