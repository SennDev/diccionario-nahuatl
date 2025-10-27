import React from 'react';
import { Link } from 'react-router-dom'; // Útil si quieres enlazar a otras secciones

function HistoriaPage() {
  return (
    <div className="contenedor-principal" style={{ maxWidth: '900px', paddingBottom: '3rem' }}>
      <header className="header">
        <h1 className="titulo-principal">Historia del Nāhuatlahtōlli</h1> {/* Usamos el nombre en Náhuatl */}
        <p className="subtitulo">Una Lengua de Imperios, Resistencia y Presente Vivo</p>
      </header>

      <div className="tarjeta-palabra" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>

        {/* --- SECCIÓN ORÍGENES --- */}
        <section>
          <h2 className="palabra-nahuatl" style={{ fontSize: '1.75rem' }}>Orígenes Uto-Aztecas y Migración</h2>
         
          <div className="image-placeholder" style={{ marginBottom: '1rem' }}>
           
             <img src="/placeholder-mapa-utoazteca.png" alt="Mapa de la familia lingüística Uto-Azteca" style={{ width: '100%', height: 'auto', marginTop: '0.5rem', opacity: 0.7 }} />
          </div>
          <p>
            El náhuatl, o *nāhuatlahtōlli* ("lengua clara" o "sonido agradable"), pertenece a la vasta familia lingüística **yuto-azteca** (o yuto-nahua),
            cuyos orígenes se rastrean hasta el suroeste de lo que hoy es Estados Unidos y el noroeste de México. A lo largo de milenios,
            diversos grupos hablantes de lenguas proto-nahuas migraron hacia el sur, asentándose en diferentes regiones de Mesoamérica.
          </p>
          <p>
            Esta dispersión temprana dio lugar a una diversificación lingüística significativa mucho antes de la llegada de los europeos.
            Evidencias arqueológicas y lingüísticas sugieren la presencia de hablantes nahuas en sitios clave como **Teotihuacan** (aunque
            el debate sobre la lengua principal de esta metrópoli continúa) y posteriormente en **Tula**, la capital tolteca.
          </p>
        </section>

        {/* --- SECCIÓN CLÁSICA --- */}
        <section style={{ marginTop: '2.5rem' }}>
          <h2 className="palabra-nahuatl" style={{ fontSize: '1.75rem' }}>Expansión, Época Clásica y el Imperio Mexica</h2>
          <p>
            Para el Posclásico Tardío (aprox. 1200-1521 d.C.), el náhuatl se había consolidado como una de las lenguas más importantes de Mesoamérica.
            La variante hablada en el Valle de México, particularmente en los influyentes centros de poder como <b>Texcoco, Tlacopan</b> y,
            sobre todo, <b>México-Tenochtitlan</b>, capital del Imperio Mexica (Azteca), alcanzó un estatus de gran prestigio.
          </p>
          {/* Marcador para Códice */}
          <div className="image-placeholder" style={{ float: 'right', width: '200px', marginLeft: '1rem', marginBottom: '0.5rem' }}>
            (Aquí iría una imagen de un Códice, ej. Florentino o Boturini)
            <img src="/placeholder-codice.png" alt="Fragmento de un códice prehispánico" style={{ width: '100%', height: 'auto', border: '1px solid var(--color-borde)' }} />
          </div>
          <p>
            Esta variante, conocida hoy como <b>Náhuatl Clásico</b>, se convirtió en la <b>lingua franca</b> del imperio, utilizada para la administración,
            el comercio, la diplomacia y la producción literaria. Se desarrolló una rica tradición oral y un sistema de escritura pictográfica
            y logográfica, plasmada en códices, que registraba historia, genealogías, conocimientos astronómicos y poesía (*cuīcatl*).
            Los *tlamatinimeh* (sabios) cultivaron una expresión filosófica y literaria de gran profundidad.
          </p>
        </section>

        {/* --- SECCIÓN RESISTENCIA --- */}
        <section style={{ marginTop: '2.5rem' }}>
          <h2 className="palabra-nahuatl" style={{ fontSize: '1.75rem' }}>Conquista, Colonización y Estrategias de Resistencia</h2>
          <p>
            La llegada de los españoles en 1519 y la caída de Tenochtitlan en 1521 marcaron un punto de inflexión dramático.
            Aunque inicialmente algunos misioneros (como Sahagún u Olmos) utilizaron el náhuatl para la evangelización y documentaron
            extensivamente la lengua y la cultura (creando gramáticas, vocabularios y adaptando el alfabeto latino),
            la política colonial posterior tendió a la **supresión** de las lenguas indígenas en favor del castellano.
          </p>
          {/* Marcador para Lienzo Tlaxcala o similar */}
          <div className="image-placeholder" style={{ float: 'left', width: '250px', marginRight: '1rem', marginBottom: '0.5rem' }}>
            (Aquí iría una imagen mostrando la interacción post-conquista, ej. Lienzo de Tlaxcala)
             <img src="/placeholder-lienzotlaxcala.png" alt="Escena del Lienzo de Tlaxcala" style={{ width: '100%', height: 'auto', border: '1px solid var(--color-borde)' }} />
          </div>
          <p>
            A pesar de la violencia, la imposición cultural y la discriminación, el náhuatl **sobrevivió gracias a la tenacidad de las comunidades**.
            Se adaptó, incorporó préstamos léxicos del español, pero mantuvo su estructura fundamental. Se convirtió en un **símbolo de identidad y resistencia cultural**.
            Documentos coloniales escritos en náhuatl por los propios indígenas (testamentos, títulos primordiales, anales)
            son testimonio de cómo utilizaron la escritura alfabética para defender sus tierras y preservar su memoria histórica.
          </p>
        </section>

        {/* --- SECCIÓN PRESENTE --- */}
        <section style={{ marginTop: '2.5rem' }}>
          <h2 className="palabra-nahuatl" style={{ fontSize: '1.75rem' }}>Presente Diverso y Futuro Desafiante</h2>
          {/* Marcador para Foto Moderna */}
          <div className="image-placeholder" style={{ marginBottom: '1rem' }}>
            (Aquí iría una foto actual de hablantes, un letrero bilingüe, o un evento cultural)
            <img src="/placeholder-hablantes-actuales.png" alt="Hablantes de Náhuatl en la actualidad" style={{ width: '100%', height: 'auto', marginTop: '0.5rem', opacity: 0.9 }} />
          </div>
          <p>
            Hoy en día, el náhuatl no es una lengua monolítica, sino un **continuo dialectal** con una gran diversidad de variantes modernas,
            a menudo agrupadas geográficamente (Huasteca, Centro, Periferia Occidental, Istmo, Pipil en El Salvador).
            Según el INEGI (Censo 2020), más de **1.6 millones de personas** se identifican como hablantes de náhuatl en México,
            convirtiéndola en la lengua indígena con mayor número de hablantes en el país.
            La variante de la **Huasteca** (Veracruz, Hidalgo, San Luis Potosí, Puebla) es una de las más vitales.
          </p>
          <p>
            Sin embargo, la lengua enfrenta serios desafíos: la **discriminación**, la **ruptura de la transmisión intergeneracional**,
            la falta de espacios de uso en la educación, la administración y los medios de comunicación. A pesar de ello,
            existen importantes **esfuerzos de revitalización** impulsados por las propias comunidades, académicos, activistas y creadores.
            Proyectos como este buscan contribuir a la visibilización, documentación y aprendizaje del *nāhuatlahtōlli* como parte fundamental
            del patrimonio cultural vivo de México.
          </p>
        </section>

        {/* --- SECCIÓN FUENTES --- */}
        <div className="ejemplo-contenedor" style={{ marginTop: '3rem' }}>
          <h3 className="palabra-nahuatl" style={{ fontSize: '1.5rem' }}>Fuentes y Referencias</h3>
          <p style={{fontSize: '0.9rem', color: '#78716c', marginBottom: '1rem'}}>
            Esta sección se basa en información general. Se recomienda consultar fuentes especializadas para una investigación más profunda.
          </p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '1rem' }}>
            <li>Instituto Nacional de Lenguas Indígenas (INALI) - Catálogo de las Lenguas Indígenas Nacionales.</li>
            <li>Universidad Nacional Autónoma de México (UNAM) - Estudios de Cultura Náhuatl, Gran Diccionario Náhuatl.</li>
            <li>Hill, Jane H. & Kenneth C. Hill. (1986). *Speaking Mexicano: Dynamics of Syncretic Language in Central Mexico*.</li>
            <li>Launey, Michel. (1992). *Introduction à la langue et à la littérature aztèques*.</li>
            <li>Lockhart, James. (1992). *The Nahuas After the Conquest*.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default HistoriaPage;