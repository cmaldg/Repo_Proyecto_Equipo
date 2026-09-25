# README — Documentación del proceso de limpieza y construcción de la base de datos

La base subida constituye a la base oficial que fue creada entre **Constanza Maldonado e Ignacia Estay**

## 1. Fuentes de datos utilizadas

1. **Base de nominados y nominadas (construcción propia).** Mi compañera Constanza construyó manualmente una base con los 975 nominados y nominadas a Mejor Actor y Mejor Actriz en la historia de los Oscar, desde la ceremonia de 1929 hasta la de 2026. Para cada persona registró nombre, género, lugar de nacimiento, nacionalidad(es), raza o etnia, película de debut, si ese debut fue una producción estadounidense, categoría de la nominación, si ganó o no, y el año de la ceremonia. La elegimos porque no existe una base pública que cruce estos datos demográficos con el historial completo de nominaciones en actuación, así que había que construirla desde cero a partir de fuentes primarias (actas de la Academia y biografías).
2. **[TMDB Movie Dataset (Kaggle)](https://www.kaggle.com/datasets/successikuku/tmbd-movie-dataset).** La usamos para obtener los datos técnicos de cada película: idioma original, idiomas hablados, país(es) de producción y compañía(s) productora(s). La elegimos porque es una base grande y estructurada, con un formato consistente por película, lo que permite cruzarla por título.
3. **[The Oscar Award (Kaggle)](https://www.kaggle.com/datasets/unanimad/the-oscar-award).** La base de Constanza solo registraba el año de la ceremonia, no el año de estreno de cada película, y esa diferencia (que en los Oscar puede ser de un año) impedía cruzar correctamente con la base de TMDB. Usamos esta base, que sí incluye tanto el año de la ceremonia como el título de la película, para incorporar el año de estreno correcto a la base de Constanza antes de intentar el cruce con TMDB.

---

## 2. Proceso de limpieza y construcción de la base

Constanza armó la base con los 975 nominados y nominadas, fila por fila, de manera manual. Esta base fue el punto de partida y no se modificó su contenido demográfico en ningún paso posterior; todo el trabajo de limpieza posterior se hizo sobre las columnas de la película, no sobre las de las personas.

Descargué el dataset de TMDB desde Kaggle y lo importé a Power Query. La base original traía muchas más columnas de las que necesitábamos (presupuesto, recaudación, popularidad, sinopsis, reparto, etc.), así que el primer paso fue eliminar todo lo que no aportaba a nuestra investigación y quedarme solo con: año, título de la película, idioma original, idioma(s) hablado(s), compañía(s) de producción y país(es) de producción. Esto redujo el tamaño del archivo y evitó arrastrar información irrelevante al cruce final. También se traducieron al español los datos restantes de estas columnas, alestar el archivo originalmente en inglés, esto fue mediante la función "reemplazar valores" de forma manual.

Al intentar cruzar la base de Constanza con la de TMDB por título y año, noté que no coincidían: Constanza tenía el año de la ceremonia, mientras que TMDB tiene el año de estreno de la película, y ambos pueden diferir en un año (por ejemplo, una película estrenada en 1994 se premia en la ceremonia de 1995). Sin una columna común, el cruce por título solo no era confiable, porque hay títulos repetidos entre distintos años. Para resolver esto, usé la base de _[The Oscar Award (Kaggle)](https://www.kaggle.com/datasets/unanimad/the-oscar-award)_ de Kaggle, que sí contiene el año de estreno junto al título y al año de la ceremonia, y la usé para agregar el año de estreno correcto a la base de Constanza. Una vez que las dos bases compartieron una clave real (título + año de estreno), el cruce se pudo hacer sin ambigüedad.

Con el año de estreno ya corregido, crucé, con la función "combinar consultas" de Power Query la base de Constanza con la base limpia de TMDB usando **título original de la película + año de estreno** como clave. De las 975 nominaciones, 858 cruzaron sin problema y quedaron con todos sus datos técnicos completos.
117 filas no encontraron coincidencia automática, generalmente porque el título en una base tenía una grafía distinta a la otra (acentos, subtítulos, reediciones) o porque la película no estaba en el dataset de TMDB. Aislé esas 117 filas en una planilla aparte y, para cada una, busqué en la web el idioma original, los idiomas hablados, el/los país(es) de producción, la(s) compañía(s) productora(s) y el/los género(s), verificando cada dato contra fuentes públicas antes de anotarlo. Cada fila quedó marcada con un nivel de verificación (dato conocido, verificado en la web, o "revisar") para poder auditar después cuáles merecían una segunda revisión, y esa segunda revisión de las filas marcadas como "revisar" también se hizo antes de incorporarlas a la base final.

Lamentablemente, al momento de combinar se desorganizó el orden que tenía la base de Constanza en un inicio, que más adelante se ordenará de la forma más conveniente para seguir trabajando.

Con las 117 filas ya completas, las integré a la base principal cruzando de nuevo por título y año, rellenando **únicamente** las celdas que estaban vacías, sin sobrescribir ningún dato que ya viniera de TMDB. Esto se hizo con Python (`pandas`), usando un `merge` por la clave título+año y un `fillna` columna por columna, lo que garantiza que el proceso es reproducible y que no se pierde ni se duplica ninguna fila (se verificó que la base mantuviera las 975 filas originales antes y después del cruce).


Por último, exporté la base final a formato **CSV**, delimitado por comas y codificado en UTF-8 sin BOM, con los campos que contienen comas internas (por ejemplo "Drama, Romance") entre comillas dobles, siguiendo el estándar CSV. Esto fue necesario porque un primer intento de exportación quedó delimitado por punto y coma (configuración regional en español de Excel), lo que impedía que GitHub renderizara la tabla correctamente.

### Herramientas utilizadas
- **Excel:** construcción manual de la base de nominados y primeras revisiones.
- **Power Query:** limpieza y selección de columnas del dataset de TMDB.
- **Kaggle:** origen de los dos datasets externos (TMDB y The Oscar Award).
- **Python (pandas, openpyxl, csv):** cruce de bases, relleno de datos faltantes, control de calidad (conteo de vacíos antes/después) y conversión final a CSV.
- **Búsqueda web:** para completar manualmente los datos técnicos de las 117 películas sin coincidencia.
- **GitHub:** publicación final de la base y su documentación.

---

## 3. Preguntas que se pueden responder con la base limpia

Para poner a prueba la base armamos tablas dinámicas cruzando distintas variables. Algunas preguntas periodísticas que la base permite responder:

1. **¿Ha cambiado la diversidad racial o étnica de los nominados y ganadores de Oscar a lo largo del tiempo?** Con una tabla dinámica que cruza `ano_ceremonia` (agrupado por década) en las filas y `raza_o_etnia` en las columnas, contando `nombres_nominados_nominadas`, se puede ver si la proporción de nominados no blancos ha aumentado, se ha mantenido estable o solo cambió en años recientes.

2. **¿Los actores extranjeros (cuyo debut no fue en una producción estadounidense) tienen las mismas chances de ser nominados que quienes debutaron en Hollywood?** Cruzando `su_debut_fue_estadounidense` con `fue_ganador_o_ganadora` (contando nominaciones y calculando el porcentaje de victorias dentro de cada grupo) se puede comparar la tasa de triunfo de ambos grupos.

3. **¿De qué países provienen las películas que más nominaciones y premios de actuación concentran, más allá de Estados Unidos?** Una tabla dinámica con `production_countries` en las filas y `fue_ganador_o_ganadora` en las columnas (contando casos) permite identificar qué países, fuera de EE. UU., aparecen con más frecuencia entre las películas premiadas, y si esa presencia ha cambiado con los años.

4. **¿Ha aumentado con el tiempo la presencia de películas no habladas originalmente en inglés entre los nominados a mejor actuación?** Cruzando `ano_pelicula_nominada` (agrupado por década) con `original_language`, se puede observar si el Oscar de actuación premia cada vez más actuaciones en idiomas distintos al inglés, o si sigue siendo un premio mayoritariamente anglocéntrico.

