import fs from 'fs';
import path from 'path';

// API
const API_URL = 'https://script.google.com/macros/s/AKfycbxtfOLKof5zrV1teEfAHCcZqrxcbb-meFvkDne-_LiNudIyniQ3Zs-NjW5pLoobV3eH5w/exec';

// Dónde se guardan los datos
const dataDir = path.resolve(process.cwd(), 'src/data');
const dataPath = path.resolve(dataDir, 'words.json');

async function fetchData() {
  console.log('Iniciando sincronización con Google Sheets API...');
  
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Error en el fetch: ${response.statusText}`);
    }
    const data = await response.json();
    console.log(`Se recibieron ${data.length} filas.`);

    // Filtramos filas vacías (¡siempre es buena idea!)
    const filteredData = data.filter(word => word.palabranahuatl && word.palabranahuatl.trim() !== "");

    // Ordenamos alfabéticamente
    const sortedData = filteredData.sort((a, b) => {
      return a.palabranahuatl.localeCompare(b.palabranahuatl);
    });
    console.log(`Se guardarán ${sortedData.length} palabras ordenadas.`);

    // Asegurarse de que la carpeta 'src/data' exista
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir);
    }
    
    // Escribir el archivo JSON
    fs.writeFileSync(dataPath, JSON.stringify(sortedData, null, 2));
    
    console.log(`¡Éxito! Datos guardados en ${dataPath}`);

  } catch (error) {
    console.error('Error durante la sincronización:', error);
  }
}

fetchData();