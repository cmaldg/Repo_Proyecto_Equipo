# Ficha técnica y diccionario de datos

## 1. Fuente de los datos

Esta base de datos se construyó fusionando dos fuentes:

1. **Base principal:** contiene los datos demográficos y de trayectoria de las personas nominadas y ganadoras a los premios Oscar en las categorías de Mejor Actor y Mejor Actriz (nombre, género, lugar de nacimiento, nacionalidad, raza o etnia, película de debut, categoría y resultado de la nominación, año de la ceremonia). _[COMPLETAR: nombre exacto de la fuente/dataset y enlace, por ejemplo si proviene de Kaggle, del sitio oficial de la Academy of Motion Picture Arts and Sciences, o de una base propia recopilada manualmente]_
2. **Base de películas de IMDb:** Contiene información completa de las películas, desde los links de los posters, popularidad, presupuestos, etc. Pero se eliminaron las columnas que no se iban a utilizar y se dejaron solamente las que contenían los datos técnicos de cada película: (idioma original, idiomas hablados, país(es) de producción, compañía(s) productora(s) y géneros). [Kaggle Full TMDB Movies Dataset](https://www.kaggle.com/datasets/asaniczka/tmdb-movies-dataset-2023-930k-movies)

Ambas bases se cruzaron por **título original de la película** y **año de la película nominada**. De 975 registros de nominaciones, 117 no encontraron coincidencia automática en la base de IMDb (por diferencias de título, año o ediciones especiales). Esas 117 películas se completaron manualmente mediante búsqueda web, verificando cada dato contra fuentes públicas antes de incorporarlo a la base.

## 2. Metodología de construcción de la base

1. Se tomó la base principal de nominaciones creada por Constanza (975 filas, una fila por nominación individual).
2. Se cruzó cada fila con la base de IMDb usando como clave el título original y el año de la película.
3. Las 117 filas que no cruzaron automáticamente se identificaron y exportaron a una planilla aparte.
4. Para esas 117 películas se investigó manualmente, en fuentes públicas, el idioma original, los idiomas hablados, el/los país(es) de producción, la(s) compañía(s) productora(s) y el/los género(s), siguiendo el mismo formato que ya usaban las columnas provenientes de IMDb.
5. Los datos investigados se incorporaron a la base principal rellenando únicamente las celdas vacías, sin modificar ningún dato que ya existiera.
6. El archivo final se exportó en formato CSV, delimitado por comas y codificado en UTF-8, para su publicación y visualización en GitHub.

## 3. Alcance de los datos

- **Unidad de observación:** una fila = una nominación individual a Mejor Actor o Mejor Actriz.
- **Cobertura temporal:** ceremonias desde 1929 hasta 2026 (películas estrenadas entre 1927 y 2025).
- **Cobertura temática:** únicamente las categorías de Mejor Actor (486 nominaciones) y Mejor Actriz (489 nominaciones). No incluye otras categorías de los Oscar (dirección, mejor película, categorías técnicas, etc.).
- **Total de registros:** 975 nominaciones, correspondientes a 861 películas distintas y 497 personas nominadas distintas (algunas personas y películas se repiten porque fueron nominadas más de una vez).
- **Ganadores/as:** 198 nominaciones resultaron en victoria, 777 no.

## 4. Características de los datos

- La base combina **datos demográficos** de las personas nominadas (género, lugar de nacimiento, nacionalidad, raza o etnia, si su debut fue en una producción estadounidense) con **datos técnicos** de las películas por las que fueron nominadas (idioma, país de producción, compañía productora, géneros).
- Los datos demográficos y de la ceremonia (columnas 1 a 13) provienen íntegramente de la base principal.
- Los datos técnicos de la película (columnas 14 a 18) combinan dos orígenes: la mayoría proviene de IMDb (en inglés), y 117 filas se completaron manualmente mediante investigación web (en español). Ver observación editorial en el diccionario de datos.
- Los campos de texto libre (país, idioma, productora, género) pueden contener **más de un valor separado por comas** dentro de una misma celda (por ejemplo, `"Italia, Francia"` o `"Drama, Romance"`).

## 5. Otras observaciones

- **Inconsistencia de idioma entre filas:** las columnas `original_language`, `genres`, `production_countries` y `spoken_languages` no tienen un formato homogéneo en toda la base. Las filas que vinieron de IMDb tienen `genres` en inglés y los nombres de idioma en español sin tilde y en minúscula (por ejemplo `ingles`); las 117 filas completadas manualmente tienen estas categorías en español con tilde (por ejemplo `Inglés`, `Drama, Romance` en español). Se decidió conservar los datos nuevos tal como fueron verificados, en vez de forzarlos al formato previo, por lo que quien use la base para análisis debe estandarizar estas columnas antes de agruparlas o filtrarlas (por ejemplo, unificando "ingles"/"Inglés" a un solo valor).
- **Espacios en blanco:** algunos valores de texto (por ejemplo en `titulo_original_pelicula_debut` y `nacionalidad_1`) tienen un espacio al inicio o al final, lo que puede hacer que un mismo valor (ej. `"Estadounidense"` y `"Estadounidense "`) se cuente como dos categorías distintas al agrupar. Se recomienda limpiar espacios (`trim`) antes de análisis agregados.
- **Verificación manual:** las 117 filas completadas manualmente fueron revisadas por el equipo antes de incorporarlas a la base final; aun así, al no provenir de una base estructurada como IMDb, tienen mayor probabilidad de error puntual que el resto de los datos.
- **Formato del archivo:** el CSV publicado está delimitado por comas (`,`), codificado en UTF-8 sin BOM, y los campos que contienen comas internas están entre comillas dobles según el estándar CSV (RFC 4180), lo que permite que GitHub lo renderice como tabla.

## 6. Diccionario de datos

| Variable | Descripción | Tipo de dato | Valores posibles | Observaciones editoriales |
|---|---|---|---|---|
| `nombres_nominados_nominadas` | Nombre completo de la persona nominada. | Texto | Nombre propio (ej. `Janet Gaynor`). 497 valores únicos. | — |
| `genero` | Género de la persona nominada. | Categórico | `Femenino`, `Masculino`. | — |
| `lugar_de_nacimiento` | Ciudad y país de nacimiento de la persona nominada. | Texto | `"Ciudad, País"` (ej. `Filadelfia, Estados Unidos`). 338 valores únicos. | — |
| `nacionalidad_1` | Nacionalidad principal de la persona nominada. | Categórico | Ej. `Estadounidense`, `Británica`, `Francesa`. 33 valores. | Existen valores duplicados por espacio en blanco (ej. `Estadounidense` vs `Estadounidense `); limpiar antes de agrupar. |
| `nacionalidad_2` | Segunda nacionalidad de la persona nominada, si la tiene. | Categórico | Igual formato que `nacionalidad_1`, o `No aplica` si no tiene una segunda nacionalidad. | Mismo problema de espacios en blanco que `nacionalidad_1`. |
| `raza_o_etnia` | Raza o etnia autodeclarada/atribuida a la persona nominada. | Categórico | `Blanca`, `Negra`, `Hispana`, `Asiática`, `Mediooriental`, `Multirracial`. | _[COMPLETAR: criterio o fuente usada para asignar esta categoría]_ |
| `su_debut_fue_estadounidense` | Indica si la película de debut de la persona fue una producción estadounidense. | Booleano (texto) | `Sí`, `No`. | — |
| `titulo_original_pelicula_debut` | Título original de la película en la que debutó la persona nominada. | Texto | Título de película. 495 valores únicos. | Varios valores tienen un espacio en blanco al inicio; limpiar antes de usar como clave de cruce. |
| `categoria_nominacion_oscar` | Categoría de los premios Oscar a la que fue nominada la persona. | Categórico | `Mejor actor`, `Mejor actriz`. | — |
| `fue_ganador_o_ganadora` | Indica si la persona ganó el Oscar en esa nominación. | Booleano (texto) | `Sí`, `No`. | — |
| `ano_ceremonia` | Año en que se realizó la ceremonia de los premios Oscar. | Numérico (año) | 1929–2026. | — |
| `titulo_original_pelicula_nominada` | Título original de la película por la que la persona fue nominada. Es la clave usada para cruzar con los datos de la película. | Texto | Título de película. 861 valores únicos. | — |
| `ano_pelicula_nominada` | Año de estreno de la película por la que la persona fue nominada. | Numérico (año) | 1927–2025. | — |
| `original_language` | Idioma original en que se rodó la película. | Categórico | Ej. `ingles`, `Inglés`, `frances`, `Italiano`. | Formato mixto: minúscula/sin tilde (filas de IMDb) vs. mayúscula/con tilde (filas completadas manualmente). Estandarizar antes de agrupar. |
| `genres` | Género(s) cinematográfico(s) de la película. Puede tener más de un valor separado por comas. | Texto (lista separada por comas) | Ej. `Drama, Romance`; `War, Drama, Romance`. | Filas de IMDb en inglés; 117 filas completadas manualmente en español. Estandarizar antes de agrupar. |
| `production_companies` | Compañía(s) productora(s) de la película. Puede tener más de un valor separado por comas. | Texto (lista separada por comas) | Ej. `Fox Film Corporation`; `DeMille Pictures Corporation, Pathé Exchange`. 627 valores únicos. | — |
| `production_countries` | País(es) de producción de la película. Puede tener más de un valor separado por comas. | Texto (lista separada por comas) | Ej. `Estados Unidos`; `Reino Unido, Estados Unidos`. 100 valores únicos. | Formato mixto: la mayoría en español, pero algunos valores de IMDb quedaron sin traducir (ej. `Greece`, `Soviet Union`). Revisar antes de agrupar por país. |
| `spoken_languages` | Idioma(s) hablado(s) en la película. Puede tener más de un valor separado por comas. | Texto (lista separada por comas) | Ej. `Ingles, Frances`; `Sin Lenguaje` / `Sin idioma` (para películas mudas). 146 valores únicos. 1 valor faltante. | Mismo problema de formato mixto que `original_language` y `genres`, además de dos variantes para "sin idioma" (`Sin Lenguaje` / `Sin idioma`) según el origen del dato. |
