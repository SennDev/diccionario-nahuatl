# 🏺 Nahuatl Vivo - Diccionario Interactivo (v.0.4 Pre-Alpha)

<p align="center">
  <img src="/logo-nv.png" alt="Logo Nahuatl Vivo - Tepetl, Xóchitl, Ollin" width="220"/>
</p>

**Una plataforma web moderna y accesible para el aprendizaje y preservación del Náhuatl de la Huasteca.** ✨

Este proyecto busca ser un puente entre la riqueza ancestral del *nāhuatlahtōlli* y las herramientas digitales actuales, ofreciendo un diccionario interactivo, información cultural y futuras lecciones para una de las variantes más habladas de México.

---

## 🌐 Ver la Demo en Vivo

¡Explora la versión actual aquí! 👇

**[https://senndev.github.io/diccionario-nahuatl/](https://senndev.github.io/diccionario-nahuatl/)**

---

## 🔥 Características (v.0.4 Pre-Alpha)

* **Diccionario Interactivo:** Base de datos con +240 palabras, frases y morfemas de la Huasteca, cargados **instantáneamente** desde un archivo JSON local.
* **Diseño Neomorfista:** Interfaz moderna y suave inspirada en neomorfismo, con atención al detalle visual.
* **Paleta Dinámica:**
    * ☀️ **Modo Claro:** Esquema cálido (Rojos/Cobrizos).
    * 🌙 **Modo Oscuro:** Esquema frío (Turquesa/Acuoso) con fondo gris oscuro neutro.
    * Interruptor manual Sol/Luna para cambiar el tema.
* **Navegación Intuitiva:**
    * Navbar circular estilo "píldora" con menú hamburguesa adaptable para móviles.
    * Índice Alfabético (A-Z, #) para explorar el diccionario.
    * Enlaces activos con indicador visual.
* **Búsqueda y Filtrado:**
    * Barra de búsqueda por palabra (náhuatl/español).
    * **Menú desplegable** para filtrar por categorías gramaticales o temáticas.
* **Contenido Enriquecido:**
    * **Palabra del Día:** Descubre un nuevo término diariamente.
    * Indicación de **Raíz** en las entradas del diccionario.
    * Página dedicada a la **Historia del Náhuatl** (con contenido inicial).
* **Analizador Morfológico (Experimental):** Herramienta básica para descomponer palabras en sus morfemas (prefijos, raíz, sufijos).




---

## 🚀 Estado y Próximos Pasos

El proyecto se encuentra en fase **Pre-Alpha (v.0.4)**. Las funcionalidades clave están implementadas, pero las **prioridades** son:

1.  **Audios Nativos:** 🎙️ ¡La tarea más importante! Incorporar grabaciones de hablantes nativos para cada palabra y ejemplo.
2.  **Ampliar Base de Datos:** 📚 Añadir cientos de palabras más, refinar definiciones y ejemplos.
3.  **Mejorar Analizador:** 🧩 Refinar el algoritmo con más reglas gramaticales y datos morfológicos.
4.  **Desarrollar Cursos:** 🎓 Implementar lecciones interactivas (Fase 2).
5.  **Pulido UI/UX:** 🎨 Corregir errores visuales menores, optimizar para todos los dispositivos.

---

## 💻 Pila Tecnológica

* **Frontend:** React + Vite
* **Enrutamiento:** React Router DOM (con `HashRouter`)
* **Estilos:** CSS Puro (con variables CSS para temas y neomorfismo)
* **Datos:** JSON local (`words.json`) sincronizado desde Google Sheets.
* **Despliegue:** GitHub Pages + GitHub Actions

---

## 🛠️ Cómo Correr Localmente

1.  Clona el repositorio:
    ```bash
    git clone [https://github.com/SennDev/diccionario-nahuatl.git](https://github.com/SennDev/diccionario-nahuatl.git)
    ```
2.  Entra al directorio:
    ```bash
    cd diccionario-nahuatl
    ```
3.  Instala dependencias:
    ```bash
    npm install
    ```
4.  Corre el servidor de desarrollo:
    ```bash
    npm run dev
    ```
5.  Abre `http://localhost:XXXX` (el puerto que indique Vite) en tu navegador.

*(**Nota:** Para actualizar `src/data/words.json` con nuevos datos de Google Sheets, necesitarás configurar tu propia Google Apps Script API y usar el comando `npm run sync:data`)*

---

## 🙌 Contribuciones y Feedback

¡Tu opinión es crucial en esta etapa! Si encuentras errores, tienes sugerencias de diseño, quieres aportar palabras, o **especialmente si eres hablante nativo y te gustaría colaborar con audios**, por favor:

* Abre un **"Issue"** en este repositorio.
* Contacta directamente (si prefieres añadir tus datos de contacto).

---

*Proyecto iniciado con ❤️ por Gerson Contreras (Senndev) - 2025*