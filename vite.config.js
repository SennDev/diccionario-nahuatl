import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // ¡¡AÑADE ESTA LÍNEA!!
  // Le dice a Vite que el proyecto vivirá en el subdirectorio /diccionario-nahuatl/
  base: '/diccionario-nahuatl/',
})
