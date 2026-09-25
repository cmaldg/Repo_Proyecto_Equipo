# Documentación del Proceso, Limpieza de Datos y Análisis (README)
**Análisis Influencia  Festivales Internacionales (Cannes, Venecia, Berlín), Globos de Oro y Premios BAFTA (1933–2026)**  
**Entrega Individual y Grupal - Integrante 03: Valentina Rivas Aguirre**

---

### 1. Explicación del Proceso de Limpieza y Depuración de Datos

El proceso de limpieza y construcción de la **Base de Datos 3** se desarrolló a través de un flujo metódico de cuatro etapas orientadas a garantizar la transparencia, integridad y replicabilidad periodística. La matriz final consolidada consta de **933 registros** y **9 variables**.

### **Paso 1: Extracción Inicial y Compilación Estructurada (1933–2024)**
* **Procedimiento:** Se compilaron las tablas documentales e inventarios históricos de ganadores protagónicos de los cinco certámenes seleccionados (Festival de Cannes, Festival de Venecia, Festival de Berlín, Premios Globo de Oro y Premios BAFTA).
* **Herramientas utilizadas:** Para la estructuración inicial de las tablas se utilizó Inteligencia Artificial (Gemini) alimentada directamente con las direcciones URL de los anexos oficiales de Wikipedia.
* **Decisiones metodológicas:**
  1. *Subdivisión de categorías en Globos de Oro:* Se incorporaron de manera independiente las categorías de *Mejor Actor/Actriz - Drama* y *Mejor Actor/Actriz - Comedia o Musical* a partir de 1951.
  2. *Categorías históricas de los Premios BAFTA:* Entre 1952 y 1967, la Academia Británica otorgaba premios paralelos a *Mejor Actor/Actriz Británico/a* y *Mejor Actor/Actriz Extranjero/a*. Siguiendo las instrucciones expresas de la docente, ambos ganadores anuales fueron registrados para preservar el valor histórico de la muestra. A partir de 1968, la categoría se unificó en un único galardón por género.

### **Paso 2: Auditoría y Verificación Manual Dato por Dato (Nacionalidad e Idioma)**
* **Procedimiento:** Una vez compilada la primera matriz, se realizó un control de calidad manual sobre el 100% de las filas consultando de forma individual las fichas de rodaje en **Internet Movie Database (IMDb)** y el **British Film Institute (BFI)**.
* **Decisiones de depuración:**
  * *Estandarización Geográfica (`pais_origen_nacionalidad`):* Se detectaron discrepancias en las etiquetas británicas ("Inglaterra", "Escocia", "Gran Bretaña", "Reino Unido"). Se tomó la decisión editorial de unificar todas bajo el término normado **`Reino Unido`**. Esta decisión evita la dispersión estadística en tablas dinámicas y respeta la definición de Estado soberano.
  * *Verificación del Idioma de Actuación (`idioma_actuacion`):* Se auditó la lengua real en que el intérprete ejecutó sus diálogos. Se corrigieron asignaciones erróneas donde se asumía el idioma del país de producción de la película en lugar del idioma del papel (por ejemplo, actores extranjeros actuando en inglés en filmes europeos, o interpretaciones bilingües).

### **Paso 3: Incorporación del Festival de Berlín, Películas Faltantes y Cobertura Manual 2025–2026**
* **Decisión de expansión:** Tras la retroalimentación académica con la docente, se decidió integrar el **Festival Internacional de Cine de Berlín (Berlinale - Oso de Plata)** desde 1956 y ajustar registros históricos específicos (como Burt Lancaster en *Trapeze* en Berlín 1956), alcanzando **933 registros históricos clave**.
* **Ingreso manual reciente:** Las temporadas cinematográficas 2025 y 2026 se construyeron mediante levantamiento periodístico **100% manual**, procesando comunicados de prensa y cobertura de medios especializados (*Variety*, *Deadline*, *The Guardian*, *Vogue España*, *El País*, *A24 Films*, *GoldDerby*).

### **Paso 4: Binarización, Imputación Criteriosa y Ordenamiento Final**
* **Binarización de Variables:** Se estandarizaron las variables `carrera_previa_hollywood` y `fue_nominado_oscar` con valores dicotómicos (`Sí`/`No`).
  * *Criterio para `fue_nominado_oscar`:* Se evaluó de forma estricta que la nominación al Oscar a Mejor Actor o Mejor Actriz haya sido **por la misma película e interpretación** por la cual el intérprete fue galardonado en el certamen original.
  * *Tratamiento de valores nulos:* Se identificaron 6 casos correspondientes a películas premiadas en Cannes y Venecia durante el primer semestre de 2026. Dado que la ceremonia de los Premios Oscar de dicho ciclo aún no se ha llevado a cabo, se imputó el valor categórico `Pendiente/No aplica` para no distorsionar las métricas con falsos negativos.
* **Herramientas de Software:**
  * **Python (Pandas & OpenPyXL):** Utilizado para el procesamiento estructurado, la eliminación de duplicados, la ordenación cronológica (`ano_premio`) y la generación de archivos exportables en formato `.xlsx` y `.csv` UTF-8.
  * **Microsoft Excel / Google Sheets:** Utilizados para la auditoría visual rápida y el armado de tablas dinámicas de verificación.



---
## 2. Lista de las Fuentes de Datos 

Para la construcción, auditoría y actualización de la **Base de Datos 3**, se utilizaron fuentes primarias y secundarias de alcance internacional, estructuradas en tres niveles:

### 1. Fuentes Primarias (Palmarés Histórico hasta 2024)
Se recurrió a los anexos documentales e inventarios históricos oficiales disponibles en Wikipedia como punto de partida para la extracción de listas de ganadores en categorías protagónicas:
* **Festival de Cannes (Mejor Actriz):** [Anexo:Premio del Festival de Cannes a la mejor actriz](https://es.wikipedia.org/wiki/Anexo:Premio_del_Festival_de_Cannes_a_la_mejor_actriz)
* **Festival de Cannes (Mejor Actor):** [Anexo:Premio del Festival de Cannes al mejor actor](https://es.wikipedia.org/wiki/Anexo:Premio_del_Festival_de_Cannes_al_mejor_actor)
* **Festival de Venecia (Mejor Actriz - Coppa Volpi):** [Volpi Cup for Best Actress](https://en.wikipedia.org/wiki/Volpi_Cup_for_Best_Actress)
* **Festival de Venecia (Mejor Actor - Coppa Volpi):** [Volpi Cup for Best Actor](https://en.wikipedia.org/wiki/Volpi_Cup_for_Best_Actor)
* **Festival de Berlín (Oso de Plata a la Mejor Interpretación Masculina):** [Anexo:Oso de Plata a la mejor interpretación masculina](https://es.wikipedia.org/wiki/Anexo:Oso_de_Plata_a_la_mejor_interpretaci%C3%B3n_masculina)
* **Festival de Berlín (Oso de Plata a la Mejor Interpretación Femenina):** [Anexo:Oso de Plata a la mejor interpretación femenina](https://es.wikipedia.org/wiki/Anexo:Oso_de_Plata_a_la_mejor_interpretaci%C3%B3n_femenina)
* **Premios Globo de Oro (Mejor Actriz - Drama):** [Anexo:Globo de Oro a la mejor actriz - Drama](https://es.wikipedia.org/wiki/Anexo:Globo_de_Oro_a_la_mejor_actriz_-_Drama)
* **Premios Globo de Oro (Mejor Actriz - Comedia o Musical):** [Anexo:Globo de Oro a la mejor actriz - Comedia o musical](https://es.wikipedia.org/wiki/Anexo:Globo_de_Oro_a_la_mejor_actriz_-_Comedia_o_musical)
* **Premios Globo de Oro (Mejor Actor - Drama):** [Anexo:Globo de Oro al mejor actor - Drama](https://es.wikipedia.org/wiki/Anexo:Globo_de_Oro_al_mejor_actor_-_Drama)
* **Premios Globo de Oro (Mejor Actor - Comedia o Musical):** [Anexo:Globo de Oro al mejor actor - Comedia o musical](https://es.wikipedia.org/wiki/Anexo:Globo_de_Oro_al_mejor_actor_-_Comedia_o_musical)
* **Premios BAFTA (Mejor Actriz):** [Anexo:BAFTA a la mejor actriz](https://es.wikipedia.org/wiki/Anexo:BAFTA_a_la_mejor_actriz)
* **Premios BAFTA (Mejor Actor):** [Anexo:BAFTA al mejor actor](https://es.wikipedia.org/wiki/Anexo:BAFTA_al_mejor_actor)

### 2. Fuentes de Verificación Manual de Idioma y Nacionalidad (1932–2024)
Para corregir errores de origen y verificar la lengua real interpretada en cada papel, se consultaron repositorios técnicos cinematográficos:
* **Internet Movie Database (IMDb):** [IMDb Official Database](https://www.imdb.com/) (Verificación de fichas técnicas de rodaje, *Original Language* y nacionalidades).
* **British Film Institute (BFI):** [BFI Filmographic Database](https://www.bfi.org.uk/) (Registros cinematográficos oficiales).
* **Archivos Oficiales:** [Festival de Cannes Archives](https://www.festival-cannes.com/) y [La Biennale di Venezia Archives](https://www.labiennale.org/).

### 3. Fuentes de Construcción Manual (Temporadas 2025 y 2026)
Dado que las temporadas recientes no estaban consolidadas en anexos únicos, se recopilaron e ingresaron los datos mediante cobertura de medios especializados y fichas de distribución:
* **Demi Moore & *La sustancia*:** [Wikipedia - Demi Moore](https://es.wikipedia.org/wiki/Demi_Moore), [Premios Óscar - Sitio Oficial](https://www.oscars.org/), [Wikipedia - La sustancia](https://es.wikipedia.org/wiki/The_Substance).
* **Fernanda Torres & *Aún estoy aquí*:** [Vogue España - Quién es Fernanda Torres](https://www.vogue.es/), [Wikipedia - Fernanda Torres](https://es.wikipedia.org/wiki/Fernanda_Torres), [El País - Brasil busca su primer Óscar](https://elpais.com/).
* **Sebastian Stan & *A Different Man* / *El aprendiz*:** [A24 - A Different Man](https://a24films.com/), [Golden Globes Official](https://goldenglobes.com/), [Meristation - Nominación](https://as.com/meristation/).
* **Robert Aramayo & *I Swear*:** [Variety - Robert Aramayo BAFTA Winner](https://variety.com/), [GoldDerby - Meet Robert Aramayo](https://www.goldderby.com/), [SelectaVisión](https://www.selecta-vision.com/).
* **Jessie Buckley & *Hamnet*:** [Wikipedia - Jessie Buckley](https://es.wikipedia.org/wiki/Jessie_Buckley), [Wikipedia - Hamnet Film](https://en.wikipedia.org/wiki/Hamnet_(film)).
* **Virginie Efira, Tao Okamoto & *All of a Sudden*:** [The Hollywood Reporter - Awards Campaign](https://www.hollywoodreporter.com/), [Wikipedia - Tao Okamoto](https://en.wikipedia.org/wiki/Tao_Okamoto).
* **Emmanuel Macchia, Valentin Campagne & *Coward*:** [Yahoo Vida y Estilo](https://es-us.vida-estilo.yahoo.com/), [Deadline - Belgium Selects Coward](https://deadline.com/).
* **John Malkovich & *Wild Horse Nine*:** [Chile Travel - Rodaje en Rapa Nui](https://chile.travel/).
* **Mathilde Arcel & *Woman Unknown*:** [The Guardian - Venice Best Actress Winner](https://www.theguardian.com/).
* **Rose Byrne & *If I Had Legs I'd Kick You*:** [Wikipedia - Rose Byrne](https://en.wikipedia.org/wiki/Rose_Byrne).
* **Timothée Chalamet & *Marty Supreme*:** [A24 - Marty Supreme](https://a24films.com/).

---


## 3. Ejemplos de preguntas que se pueden responder con la base de datos limpia

A partir de la base de datos limpia de **933 registros**, se estructuraron tres tablas dinámicas para responder a las preguntas centrales del reportaje periodístico, mediante IA( Gemini) se construyeron los porcentajes compartiendo la base de datos limpia.

### **Pregunta 1: ¿Funcionan los festivales de cine y premios de la industria como un trampolín de impulso o como un filtro de selección previo a la nominación al Oscar?**

* **Tabla Dinámica 1: Certamen de Origen vs. Nominación Posterior al Oscar**

| Certamen | No nominado al Oscar | Pendiente / No aplica | Sí nominado al Oscar | Total de Galardonados | Tasa de Conversión (% Sí) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Globo de Oro** | 67 | 0 | 255 | 322 | **79,19%** |
| **BAFTA** | 46 | 0 | 132 | 178 | **74,16%** |
| **Festival de Cannes** | 129 | 4 | 40 | 173 | **23,12%** |
| **Festival de Venecia** | 97 | 2 | 29 | 128 | **22,66%** |
| **Festival de Berlín** | 107 | 0 | 25 | 132 | **18,94%** |
| **Total General** | **446** | **6** | **481** | **933** | **51,55%** |

* **Hallazgos Periodísticos:**
  1. Existe una marcada **polarización institucional**: Los premios de la industria anglosajona exhiben una tasa de "efecto trampolín" superior al 70% (los Globos de Oro lideran con un **79,19%** y los BAFTA con un **74,16%**).
  2. En contraste, los festivales europeos de autor (*Cannes, Venecia y Berlín*) presentan tasas de nominación al Oscar comprendidas entre el **18% y el 23%**. Esto demuestra que su función principal en el ecosistema cinematográfico no es imitar a Hollywood, sino consagrar el valor artístico independiente y actuar como filtros de descubrimiento.
  3. En términos globales, **51,55% de los galardonados** en estos cinco certámenes logran la nominación al Oscar, confirmando que ganar en alguno de estos escenarios multiplica exponencialmente la visibilidad ante la Academia de Hollywood.

---

### **Pregunta 2: ¿Cómo influye el idioma de actuación en el salto hacia las nominaciones de la Academia de Hollywood?**

* **Tabla Dinámica 2: Idioma Predominante de Actuación (Top 6) vs. Nominación al Oscar**

| Idioma de Actuación | No nominado al Oscar | Pendiente / No aplica | Sí nominado al Oscar | Total de Actuaciones | Tasa de Conversión (% Sí) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Inglés** | 199 | 0 | 445 | 644 | **69,10%** |
| **Español** | 26 | 0 | 6 | 32 | **18,75%** |
| **Italiano** | 40 | 0 | 6 | 46 | **13,04%** |
| **Francés** | 67 | 2 | 7 | 76 | **9,21%** |
| **Alemán** | 24 | 0 | 0 | 24 | **0,00%** |
| **Japonés** | 9 | 0 | 0 | 9 | **0,00%** |
| **Total Muestra Analizada** | **365** | **2** | **464** | **831** | **55,84%** |

* **Hallazgos Periodísticos:**
  1. El idioma inglés actúa como la gran puerta de entrada al Oscar: el **69,10% de las interpretaciones en inglés** logran la nominación de la Academia.
  2. Las interpretaciones en lenguas romances presentan barreras significativas pero han logrado hitos históricos: el **español** alcanza un **18,75%** de conversión (con figuras como Penélope Cruz y Javier Bardem), seguido por el **italiano** (**13,04%**, destacando a Sophia Loren y Roberto Benigni) y el **francés** (**9,21%**, con figuras como Marion Cotillard).
  3. Idiomas con fuerte presencia en festivales de autor como el **alemán** o el **japonés** registran un 0% de nominación directa al Oscar en categorías protagónicas dentro de la muestra, evidenciando el sesgo anglocéntrico histórico de la Academia estadounidense.

---

### **Pregunta 3: ¿Qué proporción de galardonados no pertenecía al circuito tradicional de Hollywood al momento de ser premiados?**

* **Tabla Dinámica 3: Certamen de Origen vs. Carrera Previa Consolidada en Hollywood**

| Certamen | Sin Carrera Previa en EE. UU. (No) | Con Carrera Previa en EE. UU. (Sí) | Total de Galardonados | Proporción de Descubrimiento (% No) |
| :--- | :---: | :---: | :---: | :---: |
| **Festival de Berlín** | 90 | 42 | 132 | **68,18%** |
| **Festival de Cannes** | 115 | 58 | 173 | **66,47%** |
| **Festival de Venecia** | 76 | 52 | 128 | **59,38%** |
| **BAFTA** | 66 | 112 | 178 | **37,08%** |
| **Globo de Oro** | 46 | 276 | 322 | **14,29%** |
| **Total General** | **393** | **540** | **933** | **42,12%** |

* **Hallazgos Periodísticos:**
  1. Un **42,12% del total de los 933 galardonados** (393 intérpretes) no poseía una trayectoria previa en la industria de Hollywood cuando obtuvo el premio.
  2. Los festivales europeos de autor destacan por su función de **descubrimiento e internacionalización de nuevos talentos**: Berlín encabeza esta dimensión con un **68,18%** de ganadores sin carrera previa en EE. UU., seguido por Cannes (**66,47%**) y Venecia (**59,38%**).
  3. Los Globos de Oro, en cambio, operan mayoritariamente sobre actores consolidados en el circuito comercial norteamericano, registrando únicamente un **14,29%** de intérpretes sin carrera previa en Hollywood.

