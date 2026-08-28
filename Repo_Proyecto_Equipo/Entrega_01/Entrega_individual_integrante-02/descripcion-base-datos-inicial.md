### Ficha Técnica - Base de Datos 2
**Matriz de Características de la Producción e Idioma del Papel**
 
- **Autor y publicación de los datos:** Base de datos de construcción propia elaborada a partir de los registros abiertos de la API pública de IMDb / TMDb *[The Movie Database](https://developer.themoviedb.org/docs/finding-data)* y bases de datos encontradas en *[Kaggle.com](https://www.kaggle.com/)* que recopilan los existentes en TMDb.

Como el de Asanicka, que contiene más de un millón de películas y se actualiza diariamente: *[The full movie dataset](https://www.kaggle.com/datasets/asaniczka/tmdb-movies-dataset-2023-930k-movies)*
Junto con el publicado de Success Ikuku que contiene las peliculas de TMDb desde el año 1961-2015 *[TMBD Movie Dataset](https://www.kaggle.com/datasets/successikuku/tmbd-movie-dataset)*

- **Contenido:** Ficha técnica de cada película y personaje por el cual un actor o actriz no estadounidense fue nominado/a en el periodo estudiado. Utilizando las siguientes variables para la construcción:
  - *Variables:* `id_pelicula`, `titulo_original`, `ano_estreno`, `actor_nominado_asociado`, `pais_produccion_principal`, `idioma_principal_interpretacion`, `es_idioma_ingles` (Booleano: Sí/No), `estudio_o_distribuidora`, `es_estudio_hollywoodense` (Booleano: Sí/No), `formato_distribucion_original` (Cine Tradicional / Streaming).

- **Pertinencia:** Permite analizar si la globalización implica que Hollywood acepta la diversidad lingüística en su idioma original o si los actores extranjeros solo logran la nominación cuando actúan en inglés dentro de la maquinaria de los grandes estudios.

- **Metodología (Plan de construcción):**
  1. *Fase 1 (Extracción automatizada):* Consulta vía script en Python a la API de TMDb (`/movie/{id}`) utilizando los títulos de las películas obtenidas en la Base 1.
  2. *Fase 2 (Verificación manual):* Inscripción manual del idioma real en el que el actor interpretó su rol (para identificar casos con diálogos bilingües o doblaje).
  3. *Fase 3 (Normalización):* Exportación directa de la matriz consolidada a archivo CSV.
