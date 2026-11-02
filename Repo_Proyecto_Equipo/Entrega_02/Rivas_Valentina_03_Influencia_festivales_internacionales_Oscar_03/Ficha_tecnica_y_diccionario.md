# Ficha Técnica y Diccionario de Datos
**Base de Datos 3: Influencia de Festivales Internacionales (1932–2026)**

---

### **Fuente de los datos**
La base de datos se estructuró a partir de la extracción, unificación y sistematización de los anexos documentales e información de fuentes oficiales y secundarias:

#### **1. Fuentes Primarias (Palmarés Histórico hasta 2024):**
Extracción de listas históricas desde los anexos documentales de Wikipedia para los cuatro certámenes:
* **Festival de Cannes (Mejor Actriz):** [Anexo:Premio del Festival de Cannes a la mejor actriz](https://es.wikipedia.org/wiki/Anexo:Premio_del_Festival_de_Cannes_a_la_mejor_actriz)
* **Festival de Cannes (Mejor Actor):** [Anexo:Premio del Festival de Cannes al mejor actor](https://es.wikipedia.org/wiki/Anexo:Premio_del_Festival_de_Cannes_al_mejor_actor)
* **Festival de Venecia (Mejor Actriz - Coppa Volpi):** [Volpi Cup for Best Actress](https://en.wikipedia.org/wiki/Volpi_Cup_for_Best_Actress)
* **Festival de Venecia (Mejor Actor - Coppa Volpi):** [Volpi Cup for Best Actor](https://en.wikipedia.org/wiki/Volpi_Cup_for_Best_Actor)
* **Premios Globo de Oro (Mejor Actriz - Drama):** [Anexo:Globo de Oro a la mejor actriz - Drama](https://es.wikipedia.org/wiki/Anexo:Globo_de_Oro_a_la_mejor_actriz_-_Drama)
* **Premios Globo de Oro (Mejor Actriz - Comedia o Musical):** [Anexo:Globo de Oro a la mejor actriz - Comedia o musical](https://es.wikipedia.org/wiki/Anexo:Globo_de_Oro_a_la_mejor_actriz_-_Comedia_o_musical)
* **Premios Globo de Oro (Mejor Actor - Drama):** [Anexo:Globo de Oro al mejor actor - Drama](https://es.wikipedia.org/wiki/Anexo:Globo_de_Oro_al_mejor_actor_-_Drama)
* **Premios Globo de Oro (Mejor Actor - Comedia o Musical):** [Anexo:Globo de Oro al mejor actor - Comedia o musical](https://es.wikipedia.org/wiki/Anexo:Globo_de_Oro_al_mejor_actor_-_Comedia_o_musical)
* **Premios BAFTA (Mejor Actriz):** [Anexo:BAFTA a la mejor actriz](https://es.wikipedia.org/wiki/Anexo:BAFTA_a_la_mejor_actriz)
* **Premios BAFTA (Mejor Actor):** [Anexo:BAFTA al mejor actor](https://es.wikipedia.org/wiki/Anexo:BAFTA_al_mejor_actor)

#### **2. Fuentes de Verificación Manual de Idioma y Nacionalidad (1932–2024):**
Verificación dato por dato del idioma actuado y la nacionalidad de cada intérprete realizada directamente en:
* **IMDb (Internet Movie Database):** [IMDb Official Database](https://www.imdb.com/) (Fichas técnicas de rodaje y *Original Language*).
* **BFI (British Film Institute):** [BFI Filmographic Database](https://www.bfi.org.uk/) (Registros cinematográficos oficiales).
* **Archivos Oficiales de Cannes y Venecia:** [Festival de Cannes Archives](https://www.festival-cannes.com/) y [La Biennale di Venezia](https://www.labiennale.org/).

#### **3. Fuentes de Construcción Manual (Temporadas 2025 y 2026):**
Recopilación e ingreso manual directo utilizando artículos de prensa especializada, portales oficiales y fichas de distribuidoras:
* **Demi Moore & La sustancia:** [Wikipedia - Demi Moore](https://es.wikipedia.org/wiki/Demi_Moore), [Premios Óscar - Sitio Oficial](https://www.oscars.org/), [Wikipedia - La sustancia](https://es.wikipedia.org/wiki/The_Substance).
* **Fernanda Torres & Aún estoy aquí:** [Vogue España - Quién es Fernanda Torres](https://www.vogue.es/), [Wikipedia - Fernanda Torres](https://es.wikipedia.org/wiki/Fernanda_Torres), [El País - Brasil busca su primer Óscar](https://elpais.com/).
* **Sebastian Stan & A Different Man / El aprendiz:** [A24 - A Different Man](https://a24films.com/), [Golden Globes - Sebastian Stan](https://www.goldenglobes.com/), [Meristation - Nominación por El aprendiz](https://as.com/meristation/).
* **Robert Aramayo & I Swear:** [Variety - Robert Aramayo BAFTA Winner](https://variety.com/), [GoldDerby - Meet Robert Aramayo](https://www.goldderby.com/), [SelectaVisión - Incontrolable](https://www.selecta-vision.com/).
* **Jessie Buckley & Hamnet:** [Wikipedia - Jessie Buckley](https://es.wikipedia.org/wiki/Jessie_Buckley), [Wikipedia - Hamnet Film](https://en.wikipedia.org/wiki/Hamnet_(film)).
* **Virginie Efira, Tao Okamoto & All of a Sudden:** [The Hollywood Reporter - Awards Campaign](https://www.hollywoodreporter.com/), [Wikipedia - Tao Okamoto](https://es.wikipedia.org/wiki/Tao_Okamoto).
* **Emmanuel Macchia, Valentin Campagne & Coward:** [Yahoo Vida y Estilo - Premio ex aequo](https://es-us.vida-estilo.yahoo.com/), [Deadline - Belgium Selects Coward](https://deadline.com/).
* **John Malkovich & Wild Horse Nine:** [Chile Travel - Rodaje en Rapa Nui](https://chile.travel/).
* **Mathilde Arcel & Woman Unknown:** [The Guardian - Venice Best Actress Winner](https://www.theguardian.com/).
* **Rose Byrne & If I Had Legs I'd Kick You:** [Wikipedia - Rose Byrne](https://es.wikipedia.org/wiki/Rose_Byrne).
* **Timothée Chalamet & Marty Supreme:** [A24 - Marty Supreme](https://a24films.com/).

---

### **Metodología de la construcción de la base**

1. **Fase 1: Extracción Inicial Asistida por IA (hasta 2024):**  
   Se proporcionaron a la Inteligencia Artificial los enlaces a los anexos de Wikipedia de cada premio (Cannes, Venecia, Globos de Oro y BAFTA) para realizar la extracción y compilación inicial del palmarés histórico en un dataframe estructurado. Para los Globos de Oro (desde 1951) y los Premios BAFTA (entre 1952 y 1967), la IA consolidó las categorías subdivididas (Drama/Comedia para Globos; Británico/Extranjero para BAFTA).

2. **Fase 2: Verificación y Auditoría Manual Dato por Dato (1932–2024):**  
   Una vez estructurada la base inicial con la IA, se realizó una verificación manual rigurosa de cada registro en IMDb y BFI para determinar con precisión:
   * La **nacionalidad exacta de cada actor o actriz** (`pais_origen_nacionalidad`), resolviendo casos de doble nacionalidad.
   * El **idioma real de actuación** (`idioma_actuacion`), identificando interpretaciones en lenguas nativas, producciones bilingües o actuaciones en inglés por parte de actores extranjeros.

3. **Fase 3: Construcción e Ingreso Manual de las Temporadas 2025 y 2026:**  
   Los registros correspondientes a los años 2025 y 2026 fueron investigados, codificados e ingresados de manera **100% manual**, utilizando como insumos reportajes periodísticos, notas de prensa de festivales y sitios de la industria cinematográfica.

4. **Fase 4: Binarización y Estandarización:**  
   * **Binarización:** Se binarizaron las variables `carrera_previa_hollywood` y `fue_nominado_oscar` (`Sí`/`No`), evaluando de forma estricta que la nominación al Oscar haya sido **por la misma película e interpretación**.
   * **Estandarización Categórica:** Se unificó la nomenclatura formal de género (`Femenino`/`Masculino`) y se estandarizó la nacionalidad utilizando la etiqueta normada **`Reino Unido`** para evitar dispersión estadística.
   * **Orden Cronológico:** Se ordenó la matriz de manera cronológica estricta por año de edición (1932–2026).

---
### **Alcance de los datos**
* **Alcance General:** Matriz histórica compuesta por **933 registros** que abarcan desde la edición inaugural de los certámenes europeos en la década de 1930 hasta la temporada cinematográfica de 2026.
* **Desglose de Registros por Certamen:**
  * **Premios Globo de Oro (1944 – 2026):** 322 registros (34,5% de la base).
  * **Premios BAFTA (1952 – 2026):** 178 registros (19,1% de la base).
  * **Festival de Cannes (1946 – 2026):** 173 registros (18,5% de la base).
  * **Festival de Berlín (1956 – 2026):** 132 registros (14,1% de la base).
  * **Festival de Venecia (1933 – 2026):** 128 registros (13,7% de la base).
* **Alcance Geográfico Detallado:** La base de datos cuenta con representación de intérpretes provenientes de **60 países y territorios autónomos** agrupados en 6 grandes regiones continentales:
  * **Mercado Anglosajón e Industria Hegemónica (623 registros | 66,77%):** Encabezado por Estados Unidos (399), Reino Unido (169), Australia (27), Irlanda (15), Canadá (10) y Nueva Zelanda (3).
  * **Europa Continental, Nórdica y Oriental (232 registros | 24,87%):** Con fuerte presencia de Francia (84), Italia (46), Alemania (24), España (21), Suecia (9), Austria (6), Bélgica (6), Rusia / ex Unión Soviética (9), Polonia (5), Dinamarca (4), Hungría (2), Noruega (2), Finlandia (2), Grecia (2), República Checa (1), Suiza (1), Portugal (1), Islandia (1), Yugoslavia (1) y Rumania (1).
  * **Asia y Asia-Pacífico (32 registros | 3,43%):** Representado por Japón (10), China (8), Corea del Sur (4), Hong Kong (3), Filipinas (2), Camboya (1), Malasia (1), Kazajistán (1) e India (1).
  * **América Latina y el Caribe (22 registros | 2,36%):** Integrado por Brasil (7), México (3), Argentina (3), Puerto Rico (3), Chile (2), Paraguay (1), Colombia (1) y Uruguay (1).

  * **Medio Oriente (17 registros | 1,82%):** Con participación de Israel (6), Irán (5), Turquía (4) y Palestina (2: Hiam Abbass).
  * **África Continental (7 registros | 0,75%):** Con representantes de Sudáfrica (2), Nigeria (1), República Democrática del Congo (1), Túnez (1), Malí (1) y Egipto (1).

---

### **Características de los datos**
* **Nivel de agregación:** Unidad de observación individualizada donde cada fila representa una actuación protagónica premiada en un certamen y año específico.
* **Dimensiones de la matriz:** 922 filas por 9 columnas.
* **Completitud:** 100% de datos completos en 8 de las 9 variables. En `fue_nominado_oscar` existen 6 registros pendientes asociados a estrenos recientes de 2026 en festivales europeos cuyas ceremonias del Oscar aún no han tenido lugar.
* **Formato de almacenamiento:** Archivo ejecutable Excel (`.xlsx`) y archivo plano estructurado CSV (`.csv`) codificado en UTF-8 con delimitador coma.

---

### **Otras observaciones sobre la base**
* La inclusión de actores locales (estadounidenses y británicos) junto con intérpretes internacionales es intencional e indispensable para constituir el "grupo de control" de la investigación, permitiendo comparar proporciones reales en las tablas dinámicas sin sesgo de selección.
* **Justificación Teórica:** La selección de estos cinco certámenes combina la **"Tríada Dorada" (Big Three)** del cine europeo de autor acreditada por la **FIAPF** (*Cannes, Venecia y Berlín*) con los dos mayores predictores de la industria anglosajona (*Globos de Oro y BAFTA*). Esta articulación permite construir un grupo de control heterogéneo que evita el sesgo de selección.
---

## 2. Diccionario de Datos

| Nombre de la Variable | Descripción | Tipo de Dato | Valores Posibles | Observaciones Editoriales |
| :--- | :--- | :--- | :--- | :--- |
| `ano_premio` | Año de la edición cinematográfica correspondiente al galardón | Numérico (`Integer`) | 1932 a 2026 | Sincronizado por año de producción cinematográfica |
| `certamen` | Nombre del festival de cine o premio internacional | Texto (`String`) | `Festival de Cannes`, `Festival de Venecia`, `Globo de Oro`, `BAFTA` | Estandarizado sin abreviaturas para facilitar filtros y agrupaciones |
| `nombre_actor_actriz` | Nombre completo del intérprete premiado | Texto (`String`) | Nombres propios (ej. `Ray Milland`, `Michèle Morgan`, `Fernanda Torres`) | Estandarizado en alfabeto latino con tildes y caracteres oficiales |
| `genero` | Género del actor o actriz galardonado | Categórico (`String`) | `Femenino`, `Masculino` | Normalizado formalmente en reemplazo de "Mujer"/"Hombre" |
| `pais_origen_nacionalidad` | País de nacimiento o nacionalidad principal del intérprete | Texto (`String`) | Nombres de países en español (ej. `Estados Unidos`, `Francia`, `Reino Unido`, `Brasil`) | Estandarizado usando `Reino Unido`. Verificado manualmente en IMDb y BFI |
| `pelicula` | Título de la película por la cual obtuvo el galardón | Texto (`String`) | Títulos de obras (ej. *The Lost Weekend*, *Volver*, *Ainda Estou Aqui*) | Registra el título oficial en inglés o nativo según catálogo internacional |
| `idioma_actuacion` | Idioma predominante en el que se realizó la interpretación | Texto (`String`) | Idiomas (ej. `Inglés`, `Francés`, `Español`, `Portugués`, `Inglés / Español`) | Verificado manualmente en IMDb y BFI para detectar interpretaciones bilingües |
| `carrera_previa_hollywood` | Indica si el actor/actriz tenía carrera previa en EE. UU. al ganar | Booleano (`String`) | `Sí`, `No` | Criterio cualitativo basado en créditos previos en producciones de EE. UU. |
| `fue_nominado_oscar` | Indica si la misma interpretación obtuvo nominación al Oscar | Booleano (`String`) | `Sí`, `No` | Evaluado de forma estricta **únicamente para la misma película e interpretación** |
