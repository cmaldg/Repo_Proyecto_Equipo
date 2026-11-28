# Ficha técnica de la base de datos ordenada con paises de producción, nominados, géneros de las peliculas, etc. 
 ## Información general
 
| Dato | Detalle |
|---|---|
| **Nombre del archivo** | `base_datos_ordenada_corregida_limpia_paises.csv` |
| **Contenido** | Nominaciones al Oscar a Mejor actor y Mejor actriz, con datos de cada nominado/a y de la película por la que fue nominado/a |
| **Unidad de análisis** | Una fila por nominación (una persona nominada por una película) |
| **Filas / columnas** | 975 filas, 19 columnas |
| **Cobertura temporal** | Ceremonias de 1929 a 2026 (98 ceremonias). Películas de 1927 a 2025 |
| **Personas distintas** | 497 nominados/as |
| **Películas distintas** | 870 (se obtienen quitando duplicados por título y año) |
| **Duplicados exactos** | 0 |
| **Idioma de los datos** | Español (los títulos de las películas están en su idioma original) |
 
## Variables
 
| Grupo | Columnas |
|---|---|
| **Persona nominada** | `nombres_nominados_nominadas`, `genero`, `lugar_de_nacimiento`, `nacionalidad_1`, `nacionalidad_2`, `raza_o_etnia`, `su_debut_fue_estadounidense`, `titulo_original_pelicula_debut` |
| **Nominación** | `categoria_nominacion_oscar`, `fue_ganador_o_ganadora`, `ano_ceremonia` |
| **Película** | `titulo_original_pelicula_nominada`, `ano_pelicula_nominada`, `idioma_original`, `idiomas_hablados`, `generos` |
| **Producción** | `companias_de_produccion`, `pais_de_produccion_1`, `pais_de_produccion_2` |
 
## Datos faltantes
 
| Columna                 | Vacíos |
|-------------------------|--------|
| `nacionalidad_2`        | 827    |
| `pais_de_produccion_2`  | 781    |
| Las otras 17 columnas   | 0      |
 
Los vacíos en `nacionalidad_2` y `pais_de_produccion_2` son normales: significa que la persona tiene una sola nacionalidad y la película un solo país de producción.
 



## Ficha técnica de la base de datos de premios internacionales (Cannes, Venecia, Berlín, Globos de Oro y BAFTA)

### Información general

| Dato | Detalle |
| :--- | :--- |
| Nombre del archivo | `base3_festivales_limpia_2.csv` |
| Contenido | Ganadores y ganadoras de Mejor actor y Mejor actriz en cinco certámenes internacionales (Globo de Oro, BAFTA, Festival de Cannes, Festival de Berlín y Festival de Venecia), con datos de cada intérprete, su película y su posterior nominación al Óscar |
| Unidad de análisis | Una fila por premio recibido (una persona premiada por una película en un certamen y año específico) |
| Filas / columnas | 933 filas, 10 columnas |
| Cobertura temporal | Ediciones de 1933 a 2026 (89 años con registros) |
| Personas distintas | 592 actores y actrices |
| Películas distintas | 745 (se obtienen quitando duplicados por título) |
| Países e idiomas | 60 países de nacionalidad y 46 idiomas de actuación distintos |
| Duplicados exactos | 0 |
| Idioma de los datos | Español (los títulos de las películas se mantienen en su idioma original o título internacional oficial) |

### Variables

| Grupo | Columnas |
| :--- | :--- |
| Intérprete | `nombre_actor_actriz`, `genero`, `pais_origen_nacionalidad`, `carrera_previa_hollywood`, `es_estadounidense` |
| Premio y certamen | `ano_premio`, `certamen`, `fue_nominado_oscar` |
| Película | `pelicula`, `idioma_actuacion` |

### Datos faltantes y observaciones

| Columna | Vacíos |
| :--- | :---: |
| Las 10 columnas | 0 |

La base no tiene celdas vacías. En la columna `fue_nominado_oscar` existen 6 registros marcados como `Pendiente`, lo cual es normal: corresponden a películas premiadas en festivales europeos de 2026 cuya ceremonia de los Óscar aún no se realiza. Asimismo, se mantuvieron en la base tanto intérpretes internacionales como estadounidenses y británicos (`es_estadounidense`) para contar con un grupo de control al calcular las tasas de nominación al Óscar.