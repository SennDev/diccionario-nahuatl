import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import DiccionarioPage from './pages/DiccionarioPage'
import CursosPage from './pages/CursosPage'
import NotFoundPage from './pages/NotFoundPage' // <-- 1. IMPORTAR

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="diccionario" element={<DiccionarioPage />} />
        <Route path="cursos" element={<CursosPage />} />
        
        {/* 2. AÑADIR LA RUTA "COMODÍN" AL FINAL */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App