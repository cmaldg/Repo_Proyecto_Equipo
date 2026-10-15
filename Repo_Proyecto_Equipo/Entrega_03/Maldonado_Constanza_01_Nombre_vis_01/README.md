

## Proceso visualización
La visualización se creó en base a las preguntas de investigación realizadas en la entrega anterior: **“¿Qué porcentaje de nominados/as extranjeros/as debutaron en Estados Unidos?”** y **“¿Qué porcentaje de nominados/as extranjeros/as debutaron en su país de origen?”**. Ambas preguntas se reformularon para que se convirtieran en una sola y quedó la siguiente: ...

Para realizar la visualización, se limpiaron algunos errores de la base de datos y se exportó nuevamente en formato .CSV. Posteriormente, se subió a Google Drive para conectar la aplicación con Google Colab. De esta manera, todo el proceso se iba respaldando en la nube. Una vez cargados los datos en el Colab, se verificó que las filas no tuvieran espacios.  Al tener espacios en una de las columnas con la que se trabajaría *(“nacionalidad_1”)*, se ejecutó el código “df["nacionalidad_1"] = df["nacionalidad_1"].astype(str).str.strip()” con ayuda de Claude para corregirlos. 

Posteriormente, combinamos por fila según las dos variables a trabajar **(“nacionalidad_1” y “su_debut_fue_estadounidense”)**. Por ejemplo, si *nacionalidad_1* es_estadounidense y *su_debut_fue_estadounidense*, nos dará **“estadounidense, debut en Estados Unidos”**. Y así sucesivamente, hasta tener las **4 clasificaciones** que arroja la base de datos: **“Estadounidense con debut en EE. UU.”**, **“Estadounidense con debut internacional”**, **“Extranjero con debut en EE. UU.”** y **“Extranjero con debut internacional”**.

Luego se clasificaron las filas y se convirtieron los años de las ceremonias de los Oscar en décadas. En este proceso se utilizó Claude y las correcciones de Gemini desde Google Colab para añadirle la “s” final a las décadas, que posteriormente se convirtieron en el eje Y.  Una vez hecho esto, 

Ejemplos de preguntas que pueden responder la visualización de datos final

