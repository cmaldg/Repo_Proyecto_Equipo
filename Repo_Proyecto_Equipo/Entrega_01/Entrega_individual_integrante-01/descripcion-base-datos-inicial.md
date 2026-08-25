### Ficha Técnica - Base de Datos 1 (Integrante 1)
**Registro Histórico de Nominaciones y Demografía de Actores (1975-2026)**
 
- **Autor y publicación de los datos:** Kaggle (*The Oscar Award Demographics 1928-2025* por Valettel) combinado con el registro oficial de la Academia de Artes y Ciencias Cinematográficas ([Oscars.org Official Database](https://www.oscars.org/oscars/ceremonies)).
- **Contenido:** Registro de todos los actores y actrices nominados a "Mejor Actor" y "Mejor Actriz" entre 1975 y 2026.
  - *Variables:* `id_nominacion`, `ano_ceremonia`, `categoria`, `nombre_actor`, `pelicula`, `resultado_oscar` (Ganador/Nominado), `pais_nacimiento`, `nacionalidad_principal`, `es_estadounidense` (Booleano: Sí/No), `continente_origen`.
  - *Periodo:* 1975 a 2026 (50 años).
- **Pertinencia:** Otorga el registro estadístico cuantitativo indispensable para medir la proporción de intérpretes locales versus internacionales y calcular la tendencia de apertura por década.
- **Metodología y recolección:**
  - *Método:* Extracción de la base existente en CSV desde Kaggle, filtrada por las categorías de actuación principal en la ventana temporal de 50 años. Se actualiza mediante *web scraping* automatizado en Python (BeautifulSoup) sobre el buscador oficial de `oscars.org` para incorporar la última ceremonia de premiación.
