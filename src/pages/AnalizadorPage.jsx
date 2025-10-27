import React, { useState } from 'react';
import allWords from '../data/words.json';

// --- 1. Componente de la Página del Analizador ---
function AnalizadorPage() {
  const [inputWord, setInputWord] = useState(''); // Estado para la palabra ingresada
  const [analysisResult, setAnalysisResult] = useState(null); // Estado para guardar el resultado
  const [error, setError] = useState(''); // Estado para mensajes de error

  // --- 2. Lógica del Análisis ---
  const handleAnalyze = () => {
    setError(''); // Limpiar errores previos
    setAnalysisResult(null); // Limpiar resultados previos
    const wordToAnalyze = inputWord.trim().toLowerCase(); // Normalizar la palabra

    if (!wordToAnalyze) {
      setError('Por favor, ingresa una palabra.');
      return;
    }

    // --- Algoritmo de Análisis Simple ---
    let remainingWord = wordToAnalyze;
    const foundMorphemes = [];

    // **Paso 1: Buscar Prefijos**
    // Se ordenan los prefijos de más largo a más corto para evitar falsos positivos
    const prefixes = allWords.filter(m => m.categoria?.includes('prefijo')).sort((a, b) => b.palabranahuatl.length - a.palabranahuatl.length);
    let prefixFound = true;
    while(prefixFound){
        prefixFound = false;
        for (const prefix of prefixes) {
            const prefixForm = prefix.palabranahuatl.replace('-', '').toLowerCase(); // Quitamos guion si lo tiene
            if (remainingWord.startsWith(prefixForm)) {
                foundMorphemes.push(prefix);
                remainingWord = remainingWord.substring(prefixForm.length);
                prefixFound = true; // Encontramos uno, intentamos buscar otro (ej. Ni-mitz-)
                break; // Volvemos a empezar la búsqueda de prefijos con la palabra restante
            }
        }
    }

    // **Paso 2: Buscar Sufijos**
    // Se ordenan sufijos de más largo a más corto
    const suffixes = allWords.filter(m => m.categoria?.includes('sufijo')).sort((a, b) => b.palabranahuatl.length - a.palabranahuatl.length);
    let suffixFound = true;
     while(suffixFound){
        suffixFound = false;
        for (const suffix of suffixes) {
            const suffixForm = suffix.palabranahuatl.replace('-', '').toLowerCase(); // Quitamos guion
            if (remainingWord.endsWith(suffixForm)) {
                // Insertamos el sufijo al *final* de nuestra lista de resultados
                // (Para mantener el orden visual: Prefijo-Raíz-Sufijo)
                // Usamos un marcador temporal para insertarlo después de la raíz
                foundMorphemes.push({...suffix, type: 'suffix'});
                remainingWord = remainingWord.substring(0, remainingWord.length - suffixForm.length);
                suffixFound = true;
                break;
            }
        }
    }

    // **Paso 3: Identificar la Raíz**
    // Lo que queda *debería* ser la raíz
    let root = null;
    if (remainingWord) {
      // Se buscauna coincidencia exacta de la raíz O la forma completa en nuestra DB
      root = allWords.find(w =>
        (w.raiz && w.raiz.toLowerCase() === remainingWord) ||
        (w.palabranahuatl.toLowerCase() === remainingWord && !w.categoria?.includes('morfema'))
      );

      if (root) {
        // Encontramos la raíz, la insertamos después de los prefijos
        const firstSuffixIndex = foundMorphemes.findIndex(m => m.type === 'suffix');
        if (firstSuffixIndex !== -1) {
            foundMorphemes.splice(firstSuffixIndex, 0, { ...root, raiz: root.raiz || remainingWord, type: 'root' });
        } else {
            foundMorphemes.push({ ...root, raiz: root.raiz || remainingWord, type: 'root' });
        }

      } else {
        // No encontramos la raíz, la marcamos como desconocida
         const firstSuffixIndex = foundMorphemes.findIndex(m => m.type === 'suffix');
         if (firstSuffixIndex !== -1) {
            foundMorphemes.splice(firstSuffixIndex, 0, { palabranahuatl: remainingWord, traduccionespanol: '(Raíz desconocida)', type: 'root' });
         } else {
             foundMorphemes.push({ palabranahuatl: remainingWord, traduccionespanol: '(Raíz desconocida)', type: 'root' });
         }
      }
    } else if (foundMorphemes.length > 0 && !foundMorphemes.some(m => m.type === 'root')){
         // Si solo encontramos afijos pero no raíz
         setError(`Análisis incompleto. No se identificó una raíz clara para "${wordToAnalyze}".`);
         return;
    }


    // Reordenar para asegurar Prefijos -> Raíz -> Sufijos
     const finalResult = foundMorphemes
        .filter(m => m.type !== 'suffix') // Quitamos los sufijos temporalmente
        .concat(foundMorphemes.filter(m => m.type === 'suffix')); // Añadimos los sufijos al final


    if (finalResult.length > 0) {
      setAnalysisResult(finalResult);
    } else {
      setError(`No se pudo analizar la palabra "${wordToAnalyze}". Verifica que esté bien escrita o que las partes existan en la base de datos.`);
    }
  };

  // --- 3. JSX ---
  return (
    <div className="contenedor-principal">
      <header className="header">
        <h1 className="titulo-principal">Analizador Morfológico</h1>
        <p className="subtitulo">Descompón palabras en Náhuatl</p>
      </header>

      {/* Input y Botón */}
      <div className="analizador-input-area">
        <input
          type="text"
          value={inputWord}
          onChange={(e) => setInputWord(e.target.value)}
          placeholder="Escribe una palabra en náhuatl (ej. nimitztlazohtla)"
          className="barra-busqueda"
        />
        <button onClick={handleAnalyze} className="btn-principal">
          Analizar
        </button>
      </div>

      {/* Resultados */}
      {error && (
        <p className="mensaje-error">{error}</p>
      )}
      {analysisResult && (
        <div className="analizador-resultados">
          <h2 className="titulo-seccion">Descomposición:</h2>
          <ul>
            {analysisResult.map((morpheme, index) => (
              <li key={index} className="morfema-item">
                <span className="morfema-forma">{morpheme.palabranahuatl}</span>
                <span className="morfema-significado">
                  {morpheme.traduccionespanol}
                  {morpheme.categoria && ` (${morpheme.categoria.replace('morfema, ', '')})`}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default AnalizadorPage;