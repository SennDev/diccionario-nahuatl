import React, { createContext, useState, useEffect, useContext } from 'react';

// 1. Crear el Contexto
const ThemeContext = createContext();

// 2. Crear el "Proveedor" (el componente que manejará la lógica)
export function ThemeProvider({ children }) {
  // 3. Crear el estado. 'light' es el valor por defecto
  const [theme, setTheme] = useState(() => {
    // Revisa si el usuario YA tenía una preferencia guardada
    const localTheme = localStorage.getItem('theme');
    if (localTheme) {
      return localTheme;
    }
    // Si no, usa la preferencia del sistema (¡lo que ya tenías!)
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // 4. Este "Efecto" se ejecuta cada vez que 'theme' cambia
  useEffect(() => {
    const root = window.document.documentElement; // La etiqueta <html>
    
    // 5. Limpia la clase anterior
    root.classList.remove('light', 'dark');
    
    // 6. Añade la clase actual y la guarda en el navegador
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]); // Se ejecuta cuando 'theme' cambia

  // 7. La función para cambiar el tema
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 8. Un "hook" personalizado para que sea fácil usar el contexto
export const useTheme = () => {
  return useContext(ThemeContext);
};