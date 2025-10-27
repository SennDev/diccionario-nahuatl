import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import DiccionarioPage from './pages/DiccionarioPage'
import CursosPage from './pages/CursosPage'
import HistoriaPage from './pages/HistoriaPage'
import AnalizadorPage from './pages/AnalizadorPage' // <-- 1. IMPORTAR
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="diccionario" element={<DiccionarioPage />} />
        <Route path="cursos" element={<CursosPage />} />
        <Route path="historia" element={<HistoriaPage />} />
        <Route path="analizador" element={<AnalizadorPage />} /> {/* <-- 2. AÑADIR RUTA */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App