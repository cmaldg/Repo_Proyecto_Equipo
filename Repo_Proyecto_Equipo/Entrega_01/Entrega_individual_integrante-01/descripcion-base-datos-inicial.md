### Ficha Técnica - Base de Datos 1 
**Registro Histórico de Nominaciones y Demografía de Actores (1975-2026)**
 
- **Autor y publicación de los datos:** Kaggle (*The Oscar Award Demographics 1928-2025* por Valettel) combinado con el registro oficial de la Academia de Artes y Ciencias Cinematográficas ([Oscars.org Official Database](https://www.oscars.org/oscars/ceremonies)).
- **Contenido:** registro de todos los actores y actrices nominados y nominadas a "Mejor Actor" y "Mejor Actriz" entre 1975 y 2026.
  - *Variables:* `id_nominacion`, `ano_ceremonia`, `categoria`, `nombre_actor`, `pelicula`, `resultado_oscar` (Ganador/Nominado), `pais_nacimiento`, `nacionalidad_principal`, `es_estadounidense` (Booleano: Sí/No), `continente_origen`.
  - *Periodo:* 1975 a 2026 (50 años).
- **Pertinencia:** otorga el registro de datos cuantitativos necesarios para medir la cantidad de artistas locales e internacionales, además permite calcular la tendencia por décadas.
- **Metodología y recolección:**
  - *Método:* se extraería la base de datos existente desde Kaggle y se filtraría por las categorías "Mejor actor" y "Mejor actriz". Asimismo, se utilizaría la metodología de *web scraping* en el sitio web de los Oscar (`oscars.org`) para poder incorporar la última ceremonia de premiación (2026).

