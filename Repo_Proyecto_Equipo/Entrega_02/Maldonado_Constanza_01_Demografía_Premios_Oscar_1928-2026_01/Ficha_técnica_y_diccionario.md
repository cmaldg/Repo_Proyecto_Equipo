# *Ficha Técnica y Diccionario de datos*
### **Base de datos 1: Demografía de los premios Oscar 1928-2026**

## 1. Fuente de los datos
Se utilizó una base de datos extraída de Kaggle sobre la [demografía de los nominados y ganadores de los Oscar (1928-2025)](https://www.kaggle.com/datasets/valettel/the-oscar-award-demographics-1928-2025). Para añadir los datos de los nominados y ganadores de las categorías *Mejor actor* y *Mejor actriz* de este año, se consultó la página oficial de los premios [(Oscars.org)](https://www.oscars.org/oscars/ceremonies/2026). Asimismo, se recopiló información del [IMDb](https://www.imdb.com/es/) para conocer las filmografías de los artistas y extraer información acerca de sus películas debut. Además, para corroborar datos los sobre sus lugares de nacimiento, se consultó este mismo sitio y otros como [Wikipedia](https://es.wikipedia.org/wiki/Premios_%C3%93scar#Categor%C3%ADas), [Hollywood Walk of Fame](https://walkoffame.com/), [People](https://people.com/movies/), [Biografías y Vidas](https://www.biografiasyvidas.com/), junto a medios de comunicación [(CNN en Español](https://cnnespanol.cnn.com/entretenimiento/premios-oscar), [El País](https://elpais.com/cultura/premios-oscar/), [La Vanguardia)](https://www.lavanguardia.com/topics/premios-oscar).

También se visitó: [Anexo: Oscar al mejor actor](https://es.wikipedia.org/wiki/Anexo:%C3%93scar_al_mejor_actor) y [Anexo: Oscar a la mejor actriz](https://es.wikipedia.org/wiki/Anexo:%C3%93scar_a_la_mejor_actriz).

## 2. Metodología de la construcción de la base
Se descartaron todos los datos de las filas relacionados a las categorías “Mejor dirección”, "Mejor actor de reparto” y “Mejor actriz de reparto” de la database original que no servían para la investigación.  

De las 12 columnas iniciales, se dejaron únicamente 8, tituladas:`"name"`, `"gender"`, `"birth_place"`, `"race or ethnicity"`, `"category"`, `"film"`, `"year_ceremony"` y `"win_Oscar?"`. Por otra parte, se eliminaron las variables `"sexual orientation"`, `"religion"`, `"birth_date"` de los artistas nominados a Mejor actor y Mejor actriz, junto con la columna `"link"`. 

Algunas variables fueron traducidas y renombradas por temas de practicidad/coherencia. Además, se agregaron otras nuevas como: `nacionalidad`, `su_debut_fue_ estadounidense`, `nombre_original_pelicula_debut`. También se optó por traducir el contenido de las filas, reordenar las columnas iniciales.

Asimismo, todo el contenido de las nuevas columnas fue recolectado de forma manual tras visitar los perfiles de los actores y actrices en IMDb.

## 3. Alcance de los datos
Los datos abarcan las nominaciones a *Mejor actor* y *Mejor actriz* de los Oscar en el periodo 1928-2026 (desde la 1° Edición hasta la 98°). Asimismo, estos recorren los debuts cinematográficos de artistas estadounidenses y extranjeros que han sido considerados por los premios. Los registros de cada fila también contienen los nombres de los artistas, su nacionalidad, su primera aparición cinematográfica y la película con la que obtuvieron la nominación (variables nominales). Además, se excluyó toda información de las categorías “Mejor dirección”, “Mejor actor de reparto” y “Mejor actriz de reparto” por no ser de interés para la investigación. 

## 4. Característica de los datos
La base de datos limpia presenta 12 columnas: `nombres_nominados_nominadas`, `genero`, `lugar_de_nacimiento`, `nacionalidad_1`, `nacionalidad_2`, `raza_o_etnia`, `su_debut_fue_estadounidense`, `titulo_ original_pelicula_debut`, `categoria_nominacion_Oscar`, `fue_ganador_ o_ganadora`, `ano_ceremonia` y `titulo_ original_pelicula_nominada`. 

Estas contienen 969 filas debido a la cantidad de actores y actrices que recibieron al menos una nominación en el periodo 1928-2026. También, existen múltiples valores duplicados debido a los artistas que fueron nominados más de una vez a los Oscar. 

## 5. Otras observaciones sobre la base
La estructura de la base de datos 1 está pensada para complementarse con la base de datos 2. Después de la variable `titulo_original_de la_pelicula`, se agregará todo lo relacionado con el filme correspondiente- Por lo tanto, se trabajaría con un total de 18 variables. 

## 6. Diccionario de datos

| **Nombre de la variable** | **Descripción** | **Tipo de dato** | **Valores posibles** | **Observaciones editoriales** |
| :--- | :--- | :---: | :--- | :--- |
| `nombre_nominados_nominadas` | Nombre artístico de los artistas nominados a los Oscar. | Texto (`string`). | Nombres de los actores y las actrices.| Se arreglaron caracteres "raros" y se corrigió la ortografía. |
| `genero` | Género de los artistas nominados a los Oscar. | Categórico (`string`). | Femenino o Masculino. | Se tradujeron todos los valores al español y se modificó el género de Elliot Page (anteriormente, aparecía como "Femenino").|
| `lugar_de_nacimiento` | Lugar de nacimiento de los artistas nominados a los Oscar. | Texto (`string`). | Ciudad y país de nacimiento. | Se tradujeron los valores que correspondían al español y se actualizaron algunos lugares (ej. "Alemania Oriental" se modificó a "Alemania"). |
| `nacionalidad_1` | País de nacimiento u origen de los artistas nominados a los Oscar. | Texto (`string`). | Nacionalidad de nacimiento (ej. "Estadounidense", "Irlandesa", "Mexicana", etc.). | Esta nueva variable se recolectó de forma manual con información de internet.|
| `nacionalidad_2` | Nacionalidad adquirida por nacionalización o doble ciudadanía. | Texto (`string`). | Segunda nacionalidad o No aplica. | El valor "No aplica" se le colocó a los artistas que solo registran una nacionalidad |
| `raza_o_etnia` | Raza o etnia de los artistas nominados a los Oscar. | Categórico (`string`). | Categorías como "Blanca", "Negra", "Asiática", etc. | Se estandarizó la etnia "Hispana" a los artistas provinientes de países hispanoamericanos y se optó por no incluir la etnia "Latina" a los nominados de Latinoamérica. También se tradujeron las filas al español. |
| `su_debut_fue_estadounidense` | Señala si la primera cinta cinematográfica del artista nominado tuvo origen en Estados Unidos. | Categórico binario (`booleano`). | Sí o No. | Esta nueva variable se recolectó de forma manual con información de internet (IMDb). Se descartaron series de TV, videos musicales y se aceptaron los cortometrajes de artistas que iniciaron su actuación antes de la estandarización de los largometrajes. |
| `titulo_original_pelicula_debut` | Nombre original de la película debut de los artistas nominados. | Texto (`string`). | Títulos cinematógraficos. | Esta nueva variable se recolectó de forma manual con información de internet (IMDb). El título se encuentra en inglés. |
| `categoria_nominacion_oscar` | Categoría principal en la que fueron nominados/as los actores y las actrices. | Categórico (`string`). | `Mejor actor` o `Mejor actriz`. | Se excluyen categorías de reparto y mejor dirección. También se tradujeron los valores al español y se corrió la utilización de mayúsculas. |
| `fue_ganador_ o_ganadora` | Señala si los artistas nominados fueron ganadores en su categoría.  | Categórico binario (`booleano`). | Sí o No. | Se tradujeron los valores al español y se corrió la utilización de mayúsculas. |
| `ano_ceremonia` | Año de la ceremonia de los Premios Oscar en la se que recibió la nominación. | Numérico entero (`int`). | 1928 a 2026. | Señala el año en el que se llevó a cabo el certamen. |
| `titulo_original_pelicula_nominada` | Nombre original del filme por el cual se obtuvo la nominación al Oscar. | Texto (`string`). | Títulos cinematográficos. | El título se encuentra en inglés. |