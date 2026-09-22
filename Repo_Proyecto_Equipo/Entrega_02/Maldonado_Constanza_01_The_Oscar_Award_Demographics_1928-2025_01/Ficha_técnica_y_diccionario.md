# The Oscar Award 
## 1. Fuente de los datos
Se utilizó una base de datos extraída de Kaggle sobre la demografía de los nominados y ganadores de los Oscar (1928-2025). Para añadir los datos de los nominados y ganadores de las categorías “Mejor actor” y “Mejor actriz” del 2026, se consultó la página oficial de los premios (Oscar.org). Asimismo, se recopiló información del IMDb para conocer las filmografías de los actores y las actrices. Además, para corroborar datos, se consultó este mismo sitio y otros como Wikipedia, Hollywood Walk of Fame, People, Biografías y Vidas, junto a medios de comunicación.

## 2. Metodología de la construcción de la base
Se descartaron todos los datos relacionados a las categorías “Mejor dirección”, “Mejor actor de reparto” y “Mejor actriz de reparto”. Asimismo, se eliminaron las variables sexualidad, religión y fecha de nacimiento de los artistas nominados a “Mejor actor” y “Mejor actriz”. Se mantuvieron 8 columnas, que presentan: nombre, género, lugar de nacimiento, raza o identidad, categoría, nombre original de la película nominada, año de la ceremonia y ganador o ganadora.  Asimismo, se agregaron nuevas variables, que fueron recolectadas de forma manual. Estas son: nacionalidad de los actores y actrices, si su debut fue en el cine estadounidense y el nombre original de la película debut. Además, se optó por traducir la base de datos al español y por reordenar las columnas iniciales. 

## 3. Alcance de los datos
Los datos abarcan las nominaciones a “Mejor actor” y “Mejor actriz” de los Oscar en el periodo 1928-2026 (desde la 1° Edición hasta la 98°). Asimismo, estos recorren los debuts cinematográficos de artistas estadounidenses y extranjeros que han sido considerados por los premios. Los registros de cada fila también contienen los nombres de los artistas, su nacionalidad, su primera aparición cinematográfica y la película con la que obtuvieron la nominación. Asimismo, se excluyeron las categorías “Mejor dirección”, “Mejor actor de reparto” y “Mejor actriz de reparto” por no ser de interés para la investigación. 

## 4. Característica de los datos
La base de datos limpia tiene 12 columnas con las variables: nombres nominados y nominadas, género, lugar de nacimiento, nacionalidad 1, nacionalidad 2, raza o etnia, su debut fue estadounidense, título original película debut, categoría nominación Oscar, fue ganador o ganadora, año ceremonia y título original película. Asimismo, contiene 969 filas con los nombres de los actores y actrices que recibieron al menos una nominación desde 1928 hasta el 2026. También, existen múltiples valores duplicados debido a los artistas que fueron nominados más de una vez a los Oscar. 

## 5. Otras observaciones sobre la base
La base de datos 1 está pensada para juntarse con la base de datos 2. Después de la variable “título original de la película” iría todo lo relacionado con las ganancias de ese filme. Como su producción, director, idioma, distribuidora, entre otras variables similares. 

## 6. Diccionario de datos
