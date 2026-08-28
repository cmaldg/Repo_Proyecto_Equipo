# Propuesta de Investigación Periodística: La Globalización de los Oscar

## 1. Presentación de la propuesta

### Síntesis del proyecto
A lo largo de sus casi 100 años de historia, la Academia de Artes y Ciencias Cinematográficas de Hollywood (AMPAS) ha sido el epicentro de la industria del cine global. Históricamente, las categorías de actuación principal ("Mejor Actor" y "Mejor Actriz") estuvieron marcadamente dominadas por intérpretes estadounidenses. Sin embargo, en las últimas tres décadas, la expansión del streaming, los mercados internacionales y la conectividad digital han transformado de forma radical el consumo y la producción cinematográfica global.

Este fenómeno de hiperconectividad no solo ha cambiado el perfil de las audiencias, sino que ha abierto las puertas de la industria estadounidense a producciones e intérpretes internacionales. Casos icónicos como los triunfos o nominaciones de talentos de Asia, Europa y Latinoamérica han reabierto el debate sobre si la Academia está realmente transitando hacia un reconocimiento verdaderamente global o si las nominaciones internacionales continúan siendo casos excepcionales dentro de una estructura mayoritariamente local.

Esta investigación busca medir cuantitativamente el alcance de la globalización en los Premios Oscar durante los últimos 50 años (1975-2026), analizando la nacionalidad, país de nacimiento y origen de las producciones en las que participan los nominados a las categorías de Mejor Actor y Mejor Actriz, para comprobar si existe una tendencia sostenida de apertura multicultural e internacional.

---

### Pregunta de investigación (~ hipótesis)
- En los últimos 50 años, ¿cómo han cambiado los nominados no estadounidenses en las categorías "Mejor actor" y "Mejor actriz" de los premios Oscar?

**Hipótesis**  
En el contexto de la globalización del entretenimiento, ha aumentado de forma sostenida la presencia de actores y actrices no estadounidenses nominados en las categorías principales de los Premios Oscar.

---

### Antecedentes del tema
**¿Qué se ha publicado antes sobre el tema y con qué enfoque?**

Respecto al tema, se han publicado análisis sobre la demografía y etnia de los nominados y ganadores de los Premios Oscar. El enfoque de gran parte de la información expone la relación entre el historial de los premios y su poca diversidad racial.

- [Kaggle: The Oscar Award Demographics 1928-2025](https://www.kaggle.com/datasets/valettel/the-oscar-award-demographics-1928-2025)
- [American Immigration Council: Immigrant Nominees & Winners in the Oscars](https://www.americanimmigrationcouncil.org/blog/oscars-2026-immigrant-nominees-winners/)
- [Autostraddle: Análisis de Diversidad y Equidad en los Oscar](https://www.autostraddle.com/2016-oscars-so-so-so-white-329290/)

---

### Datos
- **Datos necesarios para probar la hipótesis:**
  - Lista de todos los nominados y ganadores en "Mejor Actor" y "Mejor Actriz" de los últimos 50 años (1975-2026).
  - País de nacimiento y nacionalidad(es) de cada intérprete nominado.
  - Idioma original y país de origen de la producción de la película por la que fueron nominados.
- **Datos existentes y por conseguir:**
  - *Existentes:* registro oficial de nominados/ganadores de la Cineteca/Academia y dataset base de Kaggle con demografía histórica. 
  - *Por conseguir:* normalización de nacionalidades (diferenciar país de nacimiento de país de nacionalidad/carrera), idioma de la película e identificación de casos de doble nacionalidad.
- **Datos inexistentes y forma de obtención:**
  - No existe un dataset público consolidado que clasifique específicamente el "origen del talento" (si la carrera se consolidó fuera de EE. UU. antes de la nominación). Se obtendrá construyendo una matriz propia mediante extracción automatizada (web scraping de Wikipedia/IMDb API) y verificación manual.
- **Datos públicos y no públicos:**
  - *Públicos:* todos los datos biográficos, historial de nominaciones, fichas de IMDb y registros de la Academia son 100% de acceso público.
  - *No públicos:* las votaciones individuales o los desgloses de porcentajes de votos de los miembros de la Academia (no requeridos para esta investigación).
- **Datos confiables y no confiables:**
  - *Confiables:* base de datos oficial de la Academia (`oscars.org`), IMDb Pro, censos de cine y registros biográficos verificados.
  - *No confiables / por verificar:* foros de fans, especulaciones sobre antecedentes biográficos en sitios no oficiales.

---

### Preguntas a responder
1. ¿Qué porcentaje del total de nominados a Mejor Actor y Mejor Actriz en cada década (1975-1984, 1985-1994,..., 2015-2026) ha sido no estadounidense?
2. ¿De qué regiones geográficas o continentes provienen los intérpretes internacionales que logran llegar a las categorías principales?
3. ¿Ha aumentado la presencia de actuaciones en idiomas distintos al inglés en las categorías principales o los nominados internacionales siguen actuando en películas de estudio hollywoodense?
4. ¿Existe disparidad en la tasa de conversión a "ganador" entre nominados estadounidenses e internacionales?

---

### Historia visual
Abordar el fenómeno de la globalización del entretenimiento a partir de las categorías "Mejor Actor" y "Mejor Actriz" de los premios Oscar. La intención es averiguar si es que, gracias a la globalización, los Oscar comenzaron a incluir a más actores y/o actrices de otras nacionalidades diferentes a la estadounidense. Asimismo, explicaremos a grandes rasgos cómo se han visto más representadas ciertas nacionalidades en las votaciones de estos premios.

- **Lo novedoso:** desplazar el foco de la discusión racial/étnica estadounidense para analizar la diversidad desde una perspectiva de **geografía, nacionalidad y descentralización de la industria global del entretenimiento**.
- **Elementos digitales sugeridos:**
  - *Mapa interactivo (Datawrapper):* mapeo del origen de cada nominado por década, permitiendo hacer clic para ver su ficha y película.
  - *Gráfico de área apilada o líneas interactivas (Flourish):* evolución porcentual década a década entre actores nacidos en EE. UU. vs. Resto del Mundo.
  - *Buscador interactivo / Tarjetas de datos:* Una tabla/tarjetario filtrable donde el lector explore la nacionalidad, idioma y resultado de cada actor nominado desde 1975.

---

### Resultados
- **Resultado mínimo:** esperamos que nuestra webstory logre ser descriptiva. Para eso, tendría gráficos de líneas y barras que contabilice el porcentaje de actores extranjeros nominados por década desde 1975 hasta la actualidad, que respondan si hubo un incremento o no.
- **Resultado máximo:** una plataforma interactiva que combine mapas geográficos de origen, análisis de la industria cinematográfica  y un modelo de correlación entre la masificación del streaming/plataformas globales y la aceleración de nominaciones internacionales en la última década.
