
# *Nominaciones a Mejor actor y actriz en los Oscar por década*

## Proceso visualización
La visualización se creó en base a las preguntas de investigación realizadas en la entrega anterior: **“¿Qué porcentaje de nominados/as extranjeros/as debutaron en Estados Unidos?”** y **“¿Qué porcentaje de nominados/as extranjeros/as debutaron en su país de origen?”**. Siguiendo esta idea, ambas preguntas se reformularon para que se convirtieran en una sola: **¿Qué tipo de artista ha compuesto las nominaciones a los Oscar según la década?**

Para realizar la visualización, se limpiaron algunos errores de la base de datos y se exportó nuevamente en formato CSV. Posteriormente, se subió a Google Drive para conectar la aplicación con Google Colab. De esta manera, todo el proceso se iba respaldando en la nube. Una vez cargados los datos en el Colab, se verificó que las filas no tuvieran espacios.  Al tener espacios en una de las columnas con la que se trabajaría *(“nacionalidad_1”)*, se ejecutó el código “df["nacionalidad_1"] = df["nacionalidad_1"].astype(str).str.strip()” con ayuda de Claude para corregirlos. 

Posteriormente, combinamos por fila según las dos variables a trabajar **(“nacionalidad_1” y “su_debut_fue_estadounidense”)**. Por ejemplo, si *nacionalidad_1* es_estadounidense y *su_debut_fue_estadounidense*, nos dará **“estadounidense, debut en Estados Unidos”**. Y así sucesivamente, hasta tener las **4 clasificaciones** que arroja la base de datos: **“Estadounidense con debut en EE. UU.”**, **“Estadounidense con debut internacional”**, **“Extranjero con debut en EE. UU.”** y **“Extranjero con debut internacional”**.

Luego se clasificaron las filas y se convirtieron los años de las ceremonias de los Oscar en décadas. En este proceso se utilizó Claude y las correcciones de Gemini desde Google Colab para añadirle la “s” final a las décadas, que posteriormente se convirtieron en el eje Y. Una vez hecho esto, se calculó el porcentaje por década. Después de definió el orden de las 4 clasificaciones y sus respectivos colores. Se usó una paleta acorde a los Premios Oscar y se utilizaron códigos HEX de [HTML Color Codes](https://htmlcolorcodes.com/) a partir de los colores que utilizó Valentina en sus gráficos. 

La creación del gráfico se hizo en base al código del *“Gráfico de barras apiladas horizontales" de Vega-Altair*. Por último, se utilizó tooltip para que la visualización quedara interactiva. Al pasar el cursor por encima se muestra: la cantidad de nominaciones, la cantidad de clasificaciones de la década y el porcentaje específico de la clasificación. Este proceso se verificó con Gemini y CLaude.

Una vez finalizado, las clasificaciones que se ubican al lado derecho del gráfico se cortaban, quedando información con puntos suspensivos. Se utilizó Claude para probar nuevas proporciones y así el gráfico pudiera visualizarse de forma correcta. 

*Al gráfico se le bajaba la calidad al descargarlo en formato JPG, por lo mismo, Gemini, desde Google Colab, generó un código para que se visualizara bien*. 

## Ejemplos de preguntas que pueden responder la visualización de datos final
* ¿En qué décadas se evidencia una mayor presencia de artistas extranjeros nominados en las categorías "Mejor actor" y "Mejor actriz"?
* ¿Es más común que un artista extranjero debute en el cine internacional o en el cine estadounidense?
* ¿Qué porcentaje de artistas estadounidenses con debut internacional ha sido nominado en las categorías "Mejor actor" y "Mejor actriz"?
