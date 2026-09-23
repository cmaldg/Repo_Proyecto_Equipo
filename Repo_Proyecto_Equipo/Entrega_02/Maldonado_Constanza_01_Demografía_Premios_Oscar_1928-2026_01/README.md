# *Documentación*

## 1. Explicación proceso de limpieza de datos

Se extrajo la base de datos **“Datos demográficos de los nominados y ganadores del Oscar (1928-2025)”** en formato .csv desde [Kaggle](https://www.kaggle.com/datasets/valettel/the-oscar-award-demographics-1928-2025). La database original tenía **2232 filas** y **12 columnas** con las variables `“name”`, `“category”`, `“film”`, `“win_Oscar?”`, `“year_ceremony”`, `“birth_date”`, `“birth_place”`, `“gender”`, `“race or ethnicity”`, `“sexual orientation”`, `“religion”` y `“link”`. 

Para obtener una base de datos limpia que se ajuste a la investigación, se filtraron los valores de la columna “category” para eliminar todo lo relacionado con las categorías “Directing”, “Actor in a supporting role” y “Actress in a supporting role”. De esta manera, quedó únicamente la información de las categorías “Actor” y “Actress” de 1928 hasta 2025. 

También se eliminaron las columnas “birth_place”, “sexual orientation”, “religion” y “link”. Con la fórmula de traducir texto, se tradujeron al español las filas de las columnas “category”, “gender” y “race or ethnicity”.  Posteriormente, **se renombraron las 8 variables que quedaron.** Estas se denominaron: 

`nombre_nominados_nominadas`, `genero`, `lugar_de_nacimiento`, `raza_o_etnia`, `categoria_nominacion_oscar`, `fue_ganador_o_ganadora`, `ano_ceremonia`, `titulo_original_pelicula_nominada`.

Con el comando “Ctrl+L” y la opción “Coincidir con el contenido de toda celda”, se reemplazaron los valores de las columnas **categoría_nominacion_oscar**, **fue_ganador_o_ganadora** y **raza_o_etnia**. Las filas de la columna "nominación Oscar" pasaron de “Actor” y “Actriz” a *“Mejor actor”* y *“Mejor actriz”*. Asimismo, las filas de la variable "ganador o ganadora" se convirtió en *“Sí”/”No”* tras reemplazar el “Falso”/”Verdadero” original. Por último, se actualizaron las filas de “raza o etnia" para que tuvieran coherencia con el nombre de la columna. Los datos cambiaron de “blanco”, “negro”, “asiático”, etc. a *“blanca”, “negra”, “asiática”*, etc.

Luego de este proceso, se añadiadieron las filas de los nominados y ganadores de 2026 en las categorías "Mejor actor" y "Mejor Actriz". Se sumaron 10 nombres nuevos y las filas quedaron en un total de 969.

Asimismo, se recopiló información de *Wikipedia* y *IMDb* para actualizar de forma manual los lugares de nacimiento de los actores y las actrices. Al ser una base de datos de origen inglés, las lugares de nacimiento de los artistas de Estados Unidos figuraban como "ciudad, Estado (abreviado)". Los nominados extranjeros aparecían con formato diferente: "ciudad, país". Todo esto se corrigió y se estandarizó "ciudad, país". Por ejemplo, la localidad de la actriz estadounidense Gloria Swanson se corrigió de **"Chicago, IL"** a **Chicago, Estados Unidos"**.



## 2. Lista fuentes de datos

## 3. Ejemplos de preguntas que se pueden responder con la base de datos limpia

