# Ficha técnica 
## Base de datos Oscar combinada
Se corrigieron errores de limpieza de la base de datos de la entrega anterior. Se verificaron los datos que fueron rellenados con Inteligencia Artificial y se añadió la información correspondiente, en especial en la columna de idiomas. Asimismo, se arreglaron errores de espacios y se ordenaron, con ayuda de Claude, las filas que se desordenaron al combinar la base de datos 1 y 2. De esta manera, la base de datos corregida tiene los nombres de actores y actrices acordes a la base de datos. Por último, se corrigió un dato del actor Emil Jannings, que tenía incoherencias en la fila “su_debut_fue_estadounidense”. 

## Característica de los datos
### 1. Variables incorporadas
| **Variable** | **Descripción** |
| :--- | :--- | :---: | :--- | :--- |
| `nombre_nominados_nominadas` | Nombres de los artistas nominados a los Oscar. |
| `genero` | Género de los artistas nominados a los Oscar |
| `lugar_de_nacimiento` | Lugar de nacimiento de los artistas nominados |
| `nacionalidad_1` | País de nacimiento u origen de los artistas nominados |
| `nacionalidad_2` | Nacionalidad adquirida por nacionalización o doble ciudadanía |
| `raza_o_etnia` | Raza o etnia de los artistas nominados |
| `su_debut_fue_estadounidense` | Señala si la primera cinta cinematográfica del artista nominado tuvo origen en Estados Unidos |
| `titulo_original_pelicula_debut` | Título original de la película debut de los artistas nominados |
| `categoria_nominacion_oscar` | Categoría en la que fueron nominados/as los actores y las actrices |
| `fue_ganador_o_ganadora` | Señala si los artistas nominados fueron ganadores en su categoría |
| `ano_ceremonia` | Año de la ceremonia de los Premios Oscar en la los artistas recibieron la nominación |
| `titulo_original_pelicula_nominada` | Título original del filme por el cual se obtuvo la nominación al Oscar |
| `ano_pelicula_nominada` | Año en el que la película nominada se estrenó |
| `idioma_original` | Idioma original de la película nominada |
| `generos` | Géneros de la película nominada|
| `companias_de_produccion` | Nombre de las compañías que participaron de la producción de la película nominada |
| `paises de produccion` | Países de las compañías que participaron de la producción de la película nominada |
| `idiomas_hablados` | Idiomas que se hablan en el filme nominado |

### 2. Observaciones sobre la base de datos
La base de datos se convirtió en una gran base al combinar la base de datos 1 (The Oscar Award Demographics 1928-2025 ) y base de datos 2 (TMDB Movie Dataset) que se extrajeron desde Kaggle. Esta quedó de 975 filas y 18 columnas.