# Documentación

## 1. Explicación proceso de limpieza de datos

Se extrajo la base de datos **“Datos demográficos de los nominados y ganadores del Oscar (1928-2025)”** en formato .csv desde [Kaggle](https://www.kaggle.com/datasets/valettel/the-oscar-award-demographics-1928-2025). La database original tenía **2232 filas** y **12 columnas** con las variables `“name”`, `“category”`, `“film”`, `“win_Oscar?”`, `“year_ceremony”`, `“birth_date”`, `“birth_place”`, `“gender”`, `“race or ethnicity”`, `“sexual orientation”`, `“religion”` y `“link”`. 

Para obtener una base de datos limpia que se ajuste a la investigación, se filtraron los valores de la columna “category” para eliminar todo lo relacionado con las categorías “Directing”, “Actor in a supporting role” y “Actress in a supporting role”. De esta manera, quedó únicamente la información de las categorías “Actor” y “Actress” de 1928 hasta 2025. 

También se eliminaron las columnas “birth_place”, “sexual orientation”, “religion” y “link”. Con la fórmula de traducir texto, se tradujeron al español las filas de las columnas “category”, “gender” y “race or ethnicity”.  Posteriormente, **se renombraron las 8 variables que quedaron.** Estas se denominaron: 

`nombre_nominados_nominadas`, `genero`, `lugar_de_nacimiento`, `raza_o_etnia`, `categoria_nominacion_oscar`, `fue_ganador_o_ganadora`, `ano_ceremonia`, `titulo_original_pelicula_nominada`.

Con el comando “Ctrl+L” y la opción “Coincidir con el contenido de toda celda”, se reemplazaron los valores de las columnas `categoría_nominacion_oscar`, `fue_ganador_o_ganadora`y `raza_o_etnia`. Las filas de la columna "nominación Oscar" pasaron de “Actor” y “Actriz” a *“Mejor actor”* y *“Mejor actriz”*. Asimismo, las filas de la variable "ganador o ganadora" se convirtió en *“Sí”/”No”* tras reemplazar el “Falso”/”Verdadero” original. Por último, se actualizaron las filas de “raza o etnia" para que tuvieran coherencia con el nombre de la columna. Los datos cambiaron de “blanco”, “negro”, “asiático”, etc. a *“blanca”, “negra”, “asiática”*, etc.

Luego de este proceso, se añadiadieron las filas de los nominados y ganadores de 2026 en las categorías "Mejor actor" y "Mejor Actriz". Se sumaron 10 nombres nuevos y las filas quedaron en un total de 969.

Asimismo, se recopiló información de *Wikipedia* y *IMDb* para actualizar de forma manual los lugares de nacimiento de los actores y las actrices. Al ser una base de datos de origen inglés, las lugares de nacimiento de los artistas de Estados Unidos figuraban como "ciudad, Estado" (abreviado). Los nominados extranjeros aparecían con formato diferente: "ciudad, país". Todos estos errores se estandarizaron como "ciudad, país". Por ejemplo, la localidad de la actriz estadounidense Gloria Swanson se corrigió de **"Chicago, IL"** a **Chicago, Estados Unidos"**.

Además, se añadió la variable nacionalidad (1 y 2). Los datos de estas nuevas columnas se recopilaron de forma manual con información de *IMDb* y *Wikipedia*. También se decidió que `nacionalidad_1` correspondería al origen y `nacionalidad_2` a la obtenida por ciudadanía. Respecto a la nacionalidad 2, se aplicaron los valores "No aplica" a los artistas que no cuentan o no contaban con doble nacionalidad. 

Por último, se incluyeron las variables `su_debut_fue_estadounidense` ("Sí"/"No") y `titulo_original_pelicula_debut`. Los datos se recopilaron a través del sitio oficial de *IMDb*. Asimismo, se agregaron algunas nominaciones faltantes y se corrigieron los años de realización del certamen en el periodo 1928-1934. Estos años tenían un desfase, dado que se revisó en el sitio oficial de los Oscar que la primera edición fue en 1929. 

## 2. Lista fuentes de datos
* [Ceremonias Premios Oscar 1929-2026](https://www.oscars.org/oscars/ceremonies/2026).
* [Perfiles de actores y actrices en el IMBDb](https://www.imdb.com/es/), (desde Richard Barthelmess; 1929, hasta Emma Stone; 2026).
* [Demografía de los nominados y ganadores de los Oscar (1928-2025)](https://www.kaggle.com/datasets/valettel/), base de datos en Kaggle.
* [Los Premios Oscar 1927-2026](https://www.kaggle.com/datasets/unanimad/the-oscar-award?select=the_oscar_award.csv), base de datos en Kaggle.
* [Anexo: Oscar al mejor actor](https://es.wikipedia.org/wikiAnexo:%C3%93scar_al_mejor_actor), Wikipedia. 
* [Anexo: Oscar a la mejor actriz](https://es.wikipedia.org/wiki/Anexo:%C3%93scar_a_la_mejor_actriz), Wikipedia.
* [Premios Oscar](https://es.wikipedia.org/wiki/Premios_%C3%93scar#Categor%C3%ADas), Wikipedia.
* [Biografías de actores y actrices nominados/as](https://walkoffame.com/), Hollywood Walk of Fame.
* [Biografías de actores y actrices nominados/as](https://people.com/movies/), People. 
* [Biografías de actores y actrices nominados/as](https://www.biografiasyvidas.com/), Biografías y Vidas.
* [Noticias sobre los Premios Oscar](https://cnnespanol.cnn.com/entretenimiento/premios-oscar), CNN en Español.
* [Noticias sobre los Premios Oscar](https://elpais.com/cultura/premios-oscar/), El País.
* [Noticias sobre los Premios Oscar](https://www.lavanguardia.com/topics/premios-oscar), La Vanguardia. 

## 3. Ejemplos de preguntas que se pueden responder con la base de datos limpia
1. ¿Debutar en el cine estadounidense aumenta las probabilidades de que actores y actrices ganen el Oscar?
2. ¿Qué porcentaje de nominados/as extranjeros/as debutaron en Estados Unidos?, ¿qué porcentaje de nominados/as extranjeros/as debutaron en su país de origen?
3. ¿Ha aumentado la presencia de actores y actrices extranjeros/as en las últimas ediciones de los Premios Oscar o esta se ha mantenido a lo largo de los años?



