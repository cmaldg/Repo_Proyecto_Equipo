# Ficha técnica de la base de datos
 
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
 
| Columna | Vacíos |
|---|---|---|
| `nacionalidad_2` | 827 |
| `pais_de_produccion_2` | 781 |
| Las otras 17 columnas | 0 |
 
Los vacíos en `nacionalidad_2` y `pais_de_produccion_2` son normales: significa que la persona tiene una sola nacionalidad y la película un solo país de producción.
 