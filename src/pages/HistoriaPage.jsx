import React from 'react';
// import { Link } from 'react-router-dom'; // Descomenta si necesitas enlaces internos

function HistoriaPage() {
  return (
    <div className="contenedor-principal" style={{ maxWidth: '900px', paddingBottom: '3rem' }}>
      <header className="header">
        <h1 className="titulo-principal">Historia del Nāhuatlahtōlli</h1>
        <p className="subtitulo">Tlahtōlli Tlen Ōmochīw, Ōtlachix Ōjtika Panōki / Una Lengua de Orígenes, Resistencia y Presente Vivo</p>
      </header>

      {/* Usamos tarjeta-palabra para estilo base */}
      <div className="tarjeta-palabra" style={{ fontSize: '1.1rem', lineHeight: '1.7', textAlign: 'left' }}>

        {/* --- SECCIÓN ORÍGENES --- */}
        <section className="historia-seccion">
          {/* Título en Náhuatl (aproximado) y Español */}
          <h2 className="palabra-nahuatl historia-titulo">
            Ixkintlan / Orígenes Uto-Aztecas y Migración
          </h2>

          {/* Placeholder Mapa */}
          <div className="image-placeholder" style={{ marginBottom: '1rem' }}>
             (Mapa de la familia lingüística Uto-Azteca y rutas de migración)
             <img src="/placeholder-mapa-utoazteca.png" alt="Mapa Uto-Azteca" className="historia-imagen" />
          </div>

          {/* Texto en Español */}
          <div className="texto-espanol">
            <p>
              El náhuatl, o *nāhuatlahtōlli* ("lengua clara"), pertenece a la gran familia lingüística **yuto-azteca**, originaria del suroeste de EE.UU. y noroeste de México. A lo largo de milenios, grupos proto-nahuas migraron hacia el sur, diversificándose y asentándose en Mesoamérica mucho antes de la era mexica.
            </p>
            <p>
              Esta temprana dispersión dio lugar a variantes antiguas. Se debate la presencia náhuatl en **Teotihuacan**, pero es más clara su asociación con la cultura **Tolteca** en Tula (aprox. 900-1150 d.C.), cuyo prestigio influyó en lenguas y culturas posteriores.
            </p>
          </div>

          {/* Texto en Náhuatl Huasteco (Traducción Aproximada) */}
          <div className="texto-nahuatl">
            <p>
              Nin tlahtōlli nāhuatl, tlen itoka *nāhuatlahtōlli* ("tlahtōlli tlen kwalli kāki"), walajki itech se weyi sentetl tlahtōlli tlen motoka **yuto-azteca**, ixkintlan ompa tlen axan Estados Unidos iwan Mēxihko tlani. Miyek xiwitl panōki, miyek tlakameh tlen tlahtoāyah tlahtōlli achto nāhuatl ōmpa wijkiyeh walajkeh istonal ehko Mēxihko.
            </p>
            <p>
              Pampa yohwi moixpanakeh, mochīw miyek tlahtōlli tlahko tlahko. Kitoah ompa **Teotihuacan** tlahtoāyah nāhuatl, uan okachi kimatih kwalli ompa **Tōllan**, ik weyi altepētl toltekatl (kemah 900-1150 xiwitl), tlen kipix weyi māwitztli.
            </p>
          </div>
        </section>

        {/* --- SECCIÓN CLÁSICA --- */}
        <section className="historia-seccion">
          <h2 className="palabra-nahuatl historia-titulo">
            Achto Nemiliztli / Época Clásica, Expansión Mexica
          </h2>

          {/* Placeholder Códice */}
          <div className="image-placeholder historia-imagen-float-right">
            (Imagen de escritura prehispánica, ej. Códice Borbónico)
            <img src="/placeholder-codice.png" alt="Códice" className="historia-imagen" />
          </div>

          <div className="texto-espanol">
            <p>
              En el Posclásico Tardío (1200-1521 d.C.), el náhuatl era una lengua dominante. La variante del Valle de México, especialmente la de **México-Tenochtitlan**, **Texcoco** y **Tlacopan** (la Triple Alianza), se conoce como **Náhuatl Clásico**.
            </p>
            <p>
              Fue la *lingua franca* del imperio mexica, usada en gobierno, comercio y poesía (*cuīcatl*). Se registró en **códices** (amoxtli) mediante un sistema de escritura logosilábico. Los *tlamatinimeh* (sabios) desarrollaron una rica tradición literaria y filosófica. Su influencia se extendió a otras variantes, incluida la Huasteca.
            </p>
          </div>

          <div className="texto-nahuatl">
            <p>
              Kemah yiyi wehkawitl (1200-1521 xiwitl), in tlahtōlli nāhuatl okachi weyi mochiw. Tlen tlahtoāyah ompa **Mēxihko-Tenochtitlan**, **Texkoko** iwan **Tlakopan** (tlen Yeyi Altepētl), itoka axan **Nāhuatl Wewehkapan**.
            </p>
            <p>
              Yajki se tlahtōlli tlen ika nochi tlakatl mosiawyah ipan weyi altepētl mexika, ika tekiwahyōtl, tiankistli iwan kuikatl (*cuīcatl*). Otlakuilōke ipan **āmoxtli** ika se machiyotl tlen kinextiā tlamantli iwan tlahtōlli. In *tlamatinimeh* okichīwkeh weyi tlahtōlli iwan nemilizmachiyotl. Nin okichi nechka nochi tlahtōlli nāhuatl, noijki tlen Waxtekapankopa.
            </p>
          </div>
        </section>

        {/* --- SECCIÓN RESISTENCIA --- */}
        <section className="historia-seccion">
          <h2 className="palabra-nahuatl historia-titulo">
            Tlachihchihualiztli / Conquista, Colonia y Resistencia Lingüística
          </h2>

           {/* Placeholder Lienzo */}
          <div className="image-placeholder historia-imagen-float-left">
            (Imagen de documento colonial en náhuatl o escena post-conquista)
            <img src="/placeholder-lienzotlaxcala.png" alt="Lienzo Tlaxcala" className="historia-imagen" />
          </div>

          <div className="texto-espanol">
            <p>
              La invasión española (1519-1521) transformó radicalmente el panorama. Aunque frailes como Sahagún documentaron la lengua y la usaron inicialmente, las políticas coloniales buscaron imponer el castellano y suprimir las lenguas originarias, viéndolas como inferiores o ligadas a prácticas "paganas".
            </p>
            <p>
              Sin embargo, el náhuatl **no desapareció**. Las comunidades **resistieron** manteniendo su uso en la vida diaria, adaptándolo e incorporando palabras españolas. Crucialmente, aprendieron a usar el alfabeto latino para **escribir en su propia lengua**: testamentos, crónicas locales, peticiones y títulos de tierras se redactaron en náhuatl durante toda la colonia, siendo una herramienta vital para la defensa legal y la preservación de la memoria colectiva.
            </p>
          </div>

          <div className="texto-nahuatl">
            <p>
              Kemah ehkokeh in kaxtiltēkah (1519-1521), okipatla nochi tlamantli. Maski seki teopixkeh ken Sahagún otlakuilo iwan okitekiwi achto in tlahtōlli, teipan in tekiwahyōtl okinehki ma nochi tlakatl tlahtokah kaxtillān, uan okitlajtlakoltihkeh in māsēwal tlahtōlli.
            </p>
            <p>
              Pero in tlahtōlli nāhuatl **amo opoliw**. In māsēwalmeh **otlachixkeh**, otlahtoahkeh ikalijtik, okiseliahkeh seki tlahtōlli kaxtillān pero amo okikajkeh inkachto tlahtōl. Okachi weyi: omomachtihkeh ken tlakuiloah ika in kaxtil machiotl **ipan intlahtōl**: okichīwkeh amatl tlen kitoah ken tlaxexeloah intlatki, ken opanōk ipan innaltepētl, iwan ken kichihuah ma kiknelikah, nochi ipan nāhuatl, uan yajki se weyi tepalehwiliztli para amo kinkixtiliah intlāl.
            </p>
          </div>
        </section>

        {/* --- SECCIÓN PRESENTE --- */}
        <section className="historia-seccion">
          <h2 className="palabra-nahuatl historia-titulo">
            Axan Ipan / Presente Diverso y Revitalización
          </h2>

          {/* Placeholder Foto Moderna */}
          <div className="image-placeholder" style={{ marginBottom: '1rem' }}>
            (Foto actual de hablantes, taller de lengua, o manifestación cultural)
            <img src="/placeholder-hablantes-actuales.png" alt="Hablantes Actuales" className="historia-imagen" />
          </div>

          <div className="texto-espanol">
            <p>
              Hoy, el náhuatl es un complejo de **variantes lingüísticas**, reflejo de siglos de evolución independiente y contacto. Más de 1.6 millones de personas lo hablan (INEGI 2020), siendo la lengua indígena más numerosa de México. La región **Huasteca** (Hidalgo, Veracruz, SLP, Puebla) concentra una de las comunidades de hablantes más grandes y dinámicas.
            </p>
            <p>
              A pesar de su vitalidad, enfrenta desafíos como la **discriminación** y la **interrupción de la transmisión** a nuevas generaciones. Sin embargo, existe un creciente movimiento de **revitalización** liderado por hablantes, comunidades, educadores y activistas. Se crean materiales didácticos, se promueve su uso en espacios públicos y digitales, y se fomenta el orgullo por la identidad lingüística. Este proyecto aspira a ser parte de ese esfuerzo colectivo.
            </p>
          </div>

          <div className="texto-nahuatl">
            <p>
              Axan, in nāhuatl yehwa miyek tlahtōlli tlahko tlahko, pampa wehkawitl panōki iwan onkatki sekinok tlahtōlli nechka. Okachi 1.6 millones tlakameh kitlahtoah (INEGI 2020), okachi miyekeh intla māsēwalmeh ipan Mēxihko. Ompa **Waxtekapankopa** (Hidalgo, Veracruz, SLP, Puebla) nemih okachi miyekeh tlen kitlahtoah iwan kichihuah ma yohwi nin tlahtōlli.
            </p>
            <p>
              Maski yolitok, kipiya weyi owikayotl: sekin tlakameh **kitlahuelitah**, iwan sekin konemeh ayokmo momachtiah. Pero axan onkah se weyi yōlchikawaliztli para **ma oksepa yoliki** nin tlahtōlli, tlen kichihuah tlen kitlahtoah, altepēmeh, temachtihkeh iwan oksekin. Mochihuah āmoxtli para momachtiah, motlahtlanih ma motekiwih pan kaltlamachtiloyan uan ipan internet, uan ma tlakameh pakikah pampa kitlahtoah intlahtōl. Nin tekitl kineki tepalehwiz ipan nin weyi tlateki panoliztli.
            </p>
          </div>
        </section>

        {/* --- SECCIÓN FUENTES --- */}
        <div className="ejemplo-contenedor" style={{ marginTop: '3rem' }}>
          <h3 className="palabra-nahuatl historia-titulo-fuente">Tlen Ōtechpalehui / Fuentes Consultadas</h3>
          <p style={{fontSize: '0.9rem', color: 'var(--clr-text-secondary)', marginBottom: '1rem'}}>
             (Lista preliminar. Se recomienda consultar las obras originales para mayor profundidad).
          </p>
          <ul className="lista-fuentes">
            <li>Beller, Richard & Patricia Beller. (1979). *Huasteca Nahuatl*. En: *Modern Aztec Grammatical Sketches*. (Fuente Principal para Huasteca).</li>
            <li>Croft, Kenneth. (1953). *Matlapa Nahuatl: A Study in Descriptive Linguistics*. (Tesis Doctoral sobre variante Huasteca).</li>
            <li>Instituto Nacional de Lenguas Indígenas (INALI). *Catálogo de las Lenguas Indígenas Nacionales: Variantes Lingüísticas de México con sus autodenominaciones y referencias geoestadísticas*.</li>
            <li>Launey, Michel. (2011). *An Introduction to Classical Nahuatl*. (Gramática de referencia para el Clásico).</li>
            <li>Lockhart, James. (1992). *The Nahuas After the Conquest*. (Historia social y lingüística post-conquista).</li>
            <li>Peralta Ramírez, Valentín. (2007). *El Nawat de la Huasteca*. (Material didáctico INPI/CDI).</li>
            <li>Stiles, Neville. (1983). *A Huasteca Nahuatl (Hidalgo) Fieldworker's Vocabulary*.</li>
            <li>UNAM. *Estudios de Cultura Náhuatl* (Revista Académica).</li>
            {/* Añadir URLs específicas si se usaron sitios web */}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default HistoriaPage;