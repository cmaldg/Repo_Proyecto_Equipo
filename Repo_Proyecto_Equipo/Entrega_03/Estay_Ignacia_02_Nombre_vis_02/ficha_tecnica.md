# Ficha técnica de la base de datos
Redactada con Claude luego de que se le compartiera la base de datos.

## Características generales
- **Formato:** CSV separado por comas, codificación UTF-8
- **Filas:** 975 (una por nominación a Mejor Actor o Mejor Actriz)
- **Cobertura temporal:** ceremonias de 1929 a 2026; películas de 1927 a 2025
- **Unidad de observación:** nominación (persona × película × categoría)
- **Fuentes:** elaboración propia (nominados/as) + TMDB Movie Dataset + The Oscar Award (ambos de Kaggle) + completado manual verificado
- **Idioma de las categorías:** español

## Variables

| Variable | Descripción |
|---|---|
| `nombres_nominados_nominadas` | Nombre de la persona nominada |
| `genero` | Género de la persona (Masculino / Femenino) |
| `lugar_de_nacimiento` | Ciudad y país de nacimiento |
| `nacionalidad_1` | Nacionalidad principal |
| `nacionalidad_2` | Segunda nacionalidad, si la tiene |
| `raza_o_etnia` | Categoría de raza o etnia asignada |
| `su_debut_fue_estadounidense` | Si el debut cinematográfico fue en una producción estadounidense (Sí / No) |
| `titulo_original_pelicula_debut` | Título de la película de debut |
| `categoria_nominacion_oscar` | Categoría: Mejor actor o Mejor actriz |
| `fue_ganador_o_ganadora` | Si ganó el premio (Sí / No) |
| `ano_ceremonia` | Año de la ceremonia |
| `titulo_original_pelicula_nominada` | Título original de la película nominada |
| `ano_pelicula_nominada` | Año de estreno de la película |
| `idioma_original` | Idioma original de la película |
| `generos` | Géneros# Ficha técnica de la base de datos
