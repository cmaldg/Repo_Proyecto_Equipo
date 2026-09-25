# Documentación del Proceso, Limpieza de Datos y Análisis (README)
**Análisis de efecto trampolín de  Festivales Internacionales (Cannes, Venecia, Berlín), Globos de Oro y Premios BAFTA (1933–2026)**  
**Entrega Individual y Grupal - Integrante 03: Valentina Rivas Aguirre**

---

## 1. Gancho Periodístico y Contextualización

El análisis de este reportaje parte de un hito de alta relevancia y oportunidad periodística para la industria cinematográfica nacional e internacional: la proyección y recepción crítica de la actriz chilena **Mariana Di Girolamo** de cara a la próxima temporada de premios por su interpretación en la película *Wild Horse Nine*. Este fenómeno local sirve como prisma y punto de partida para problematizar un debate de alcance global: ¿qué significa realmente para una figura de la periferia cinematográfica ser nominada o reconocida por la Academia de Artes y Ciencias Cinematográficas de Hollywood? 

El proyecto cuestiona si el aumento de nombres internacionales en la temporada de premios anglosajona representa una verdadera descentralización de la industria audiovisual mundial, o si responde a una estrategia perfeccionada de cooptación, donde Hollywood actúa como un filtro que importa el talento de otros países bajo la condición de asimilarlo a sus propios esquemas de producción, distribución e idioma.

---

## 2. Hipótesis Actual

> **La internacionalización de las categorías actorales de los Oscar no consiste solamente en un aumento de intérpretes nacidos fuera de EE.UU., sino en una creciente entrada de películas, idiomas y carreras desarrolladas fuera de Hollywood. Durante décadas, la industria estadounidense importó talento internacional sin internacionalizar realmente las obras premiadas, exigiendo la asimilación al sistema hollywoodense; sin embargo, en los años recientes comenzó una ruptura donde los artistas ya no necesitan "entrar a Hollywood" para ser reconocidos por la Academia.**

---

## 3. Preguntas de Investigación Actuales

Las preguntas periodísticas y analíticas que guían el trabajo de procesamiento y cruce de datos son:

1. **¿Los Oscar tienen simplemente más intérpretes nacidos fuera de Estados Unidos o la industria realmente se globalizó en las obras y producciones premiadas?**
2. **¿Existe una brecha histórica entre la 'importación de talento' (actores extranjeros trabajando en producciones anglosajonas habladas en inglés) y la 'internacionalización de obras' (actuaciones en idiomas no ingleses y películas producidas íntegramente fuera de Estados Unidos)?**
3. **¿Funcionan los festivales de cine Clase A (*Cannes, Venecia y Berlín*) y los galardones de la industria (*Globos de Oro y BAFTA*) como un trampolín de impulso o como un filtro de selección previo a la nominación al Oscar?**
4. **¿A partir de qué hito o momento histórico específico comenzó la ruptura donde un artista internacional ya no necesita 'migrar a Hollywood' ni adoptar el idioma inglés para acceder al máximo reconocimiento de la Academia?**

---

## 4. Explicación del Proceso de Limpieza y Depuración de Datos

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

## 5. Fuentes de Datos Utilizadas y Justificación de Selección

| Fuente de Datos | Tipo de Fuente | Justificación Metodológica y Teórica de su Selección |
| :--- | :--- | :--- |
| **Festival de Cannes Archives** | Primaria / Oficial | Representa el festival de cine más prestigioso del mundo. Clasificado como certamen "Clase A" por la **FIAPF**, constituye el principal polo de validación de la crítica y el cine de autor internacional (*English, 2005*). |
| **La Biennale di Venezia Archives** | Primaria / Oficial | Fundado en 1932, es el festival de cine más antiguo de la historia (otorgante de la *Coppa Volpi*). Su inclusión aporta la serie histórica más longeva de la investigación. |
| **Berlinale Official Archives** | Primaria / Oficial | Junto con Cannes y Venecia, completa la **"Tríada Dorada" (Big Three)** del cine europeo de autor acreditada por la FIAPF, aportando una mirada centrada en el cine político, independiente y global. |
| **Golden Globes Official Repository** | Primaria / Oficial | Otorga reconocimientos divididos entre Drama y Comedia/Musical. La literatura empírica (*Deuchert et al., 2012*) lo identifica como el mayor predictor mediático e industrial temprano hacia los Oscar. |
| **BAFTA Awards Database** | Primaria / Oficial | Es el principal premio de una academia nacional no estadounidense. Actúa como el puente cultural definitivo entre el circuito anglo-europeo y la industria hollywoodense. |
| **IMDb & BFI Filmographic Database** | Secundaria / Auditoría | Proporcionan el catálogo técnico estandarizado global sobre créditos de rodaje, países de producción, lenguas de grabación y biografías verificadas de los intérpretes. |

---

## 6. Avance del Proyecto y Tablas Dinámicas (Pivot Tables)

A partir de la base de datos limpia de **933 registros**, se estructuraron tres tablas dinámicas para responder a las preguntas centrales del reportaje periodístico:

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

---

## 7. Síntesis de la Historia

**Título del reportaje:** *La ilusión de la globalización: De la importación de talentos al reconocimiento del cine en su propio idioma.*

El reportaje arranca con el análisis del fenómeno proyectado de la actriz chilena **Mariana Di Girolamo** por *En el rayo*, utilizándolo como ventana periodística para indagar en la transformación del camino hacia el Oscar. A través del análisis de casi un siglo de datos (1933–2026), la investigación demuestra que, durante décadas, Hollywood funcionó bajo un modelo de cooptación: abría sus puertas a intérpretes nacidos fuera de Estados Unidos (desde Sophia Loren y Roberto Benigni hasta Marion Cotillard), pero exigiendo su asimilación a través de la migración a la industria estadounidense, la firma con grandes estudios y la actuación en idioma inglés.

Finalmente, el trabajo pone en evidencia la reciente grieta en este sistema. El verdadero hallazgo periodístico no es la suma de pasaportes diversos en las ceremonias, sino la ruptura contemporánea donde producciones gestadas fuera de Hollywood y habladas en sus idiomas nativos (como *Parasite*, *Drive My Car* o *Ainda Estou Aqui*) lograron derribar el filtro de asimilación, permitiendo que el talento internacional alcance el reconocimiento global sin renunciar a su idioma ni a su industria de origen.

---

## 8. Estructura y Archivos del Repositorio Individual y Grupal

1. `Base de datos 3_Influencia de Festivales Internacionales_2.xlsx`: Archivo original estructurado en Excel con la base completa limpia (933 filas).
2. `base3_festivales_globos_bafta_y_berlin_completa.csv`: Archivo plano limpio en formato CSV codificado en UTF-8.
3. `FICHA_TECNICA.md`: Documento formal de ficha técnica y diccionario de datos actualizado con los 933 registros y 60 países.
4. `README.md`: Este documento explicativo de la metodología, justificación teórica, fuentes y tablas dinámicas.