# ¿Qué géneros dominan en las películas nominadas al Oscar? Estadounidenses vs. extranjeras

## Pregunta: ¿Cuáles son los géneros que más predominan en las películas estadounidenses y en las extranjeras nominadas al Oscar, y cómo han cambiado con el tiempo?

**Tipo de visualización:** dos gráficos de líneas hechos con Altair, uno por origen. Muestran, para cada década, el porcentaje de películas que tienen cada uno de los seis géneros más frecuentes del grupo. Elegí líneas para tener una mejor visualización de las tendencias a lo largo del tiempo, y dos gráficos separados porque cada grupo tiene sus propios géneros principales. Que luego uní en un mismo gráfico.

### Base de datos utilizada

Es la base de datos corregida de la entrega anterior, ya que notamos unos pequeños errores, por lo que se limpió y ordenó,
Dos casillas de la catégoria "idioma" estaban vacias, junto con unas películas que no concordaba su información con la oficial. De igual manera se tradujeron los nombres de las categorías ya que se mantenían en inglés de su base original de TMBD. A su vez, se tradujeron las filas de la columna "generos", debido a que estas igualmente se encontraban en inglés. Esto fue de vital importancia para poder hacer la visualización de forma correcta. 

-Para realizar la visualización se eliminaron duplicados por `titulo_original_pelicula_nominada` + `ano_pelicula_nominada`, porque la base tiene una fila por nominación, así que una película con varias nominaciones aparece repetida. Sin este paso, esas películas pesarían más en el conteo.
- Se creó la variable `origen`: "Estadounidense" si `paises_de_produccion` incluye "Estados Unidos", y "Extranjera" en caso contrario, es el criterio más directo para separar los grupos. Las coproducciones con EE. UU. cuentan como estadounidenses.
- Se creó la variable `decada` a partir de `ano_pelicula_nominada` para ver tendencias sin el ruido de los años individuales.
- Se separó `generos`, ya que en una celda había más de un género y quedó en una fila por género. Una película puede tener varios géneros y todos deben contarse.
- Se unificó "Bélica" y "Guerra", eran el mismo género con dos nombres, eso ocurrió debido a las fórmulas de traducción que se utilizaron para la base de datos, y también debido a que algunas traducciones se hicieron de forma manual reemplazando palabras claves.
- Se calculó el porcentaje: películas de la década con ese género ÷ total de películas de la década, permite comparar décadas con distinta cantidad de películas.
- Por último, se seleccionaron los 6 géneros más frecuentes de cada grupo y se rellenaron con 0 las décadas sin ese género, para así facilitar la legibilidad de los gráficos y evitar líneas cortadas.

### Condicionamiento de la visualización
- Década según el año de la película, no el de la ceremonia.
- **Los porcentajes no suman 100%** porque cada película puede tener varios géneros.
- "Extranjera" significa que EE. UU. no figura entre los países de producción. **NO*** es lo mismo que "no anglosajona": en la práctica incluye muchas películas británicas.
- Es una muestra pequeña las películas extranjeras, sobre todo antes de 1960, debido a las nominaciones de los Oscar en un inicio. Una sola película puede mover una línea 20 puntos o más. Por eso el tooltip muestra el total de películas de cada década.
- Solo se analizan películas con nominaciones a Mejor Actor o Mejor Actriz, no todas las películas nominadas al Oscar.

## Preguntas que puede responder la visualización
- ¿Qué géneros dominan las nominaciones y cuáles coinciden entre extranjeros y estadounidenses?
- El drama lidera en ambos grupos, con 90% y 89%. La comedia (21% y 20%) y el suspenso (10% en ambos) también son casi idénticos ¿En qué géneros se separan más los dos grupos?
- El romance es el género que más los distingue, con 14 puntos de diferencia (46% y 32%). Le siguen la historia y el cine bélico, donde los extranjeros pesan más. El crimen y “Otros” pesan más entre los estadounidenses.
- ¿Qué tipo de película premia la Academia, y qué tan variado es su repertorio?
- Se concentra en dramas y romances, sobre todo entre los extranjeros, cuyo repertorio parece más estrecho porque “Otros” pesa menos.
- ¿Cuánto pesa cada grupo en cifras absolutas?
- Hay 625 nominaciones estadounidenses frente a 90 extranjeras. Los porcentajes comparan perfiles, pero el cine estadounidense domina en volumen (por ejemplo, 202 nominaciones de romance contra 41).
- ¿Qué no puede responder esta visualización?
- No muestra cómo cambió el perfil de géneros a lo largo del tiempo, ni qué géneros ganan (solo cuáles se nominan), ni por qué los perfiles se parecen. Tampoco distingue géneros dentro de “Otros”.

## Cómo replicar el trabajo
1. Abrir el cuaderno en Google Colab.
2. Ejecutar la celda de carga y subir `base_datos_oficial_ordenada_final.csv`.
3. Ejecutar las celdas de preparación y gráficos en orden.
4. Para exportar: `!pip install -q vl-convert-python` y luego `grafico.save("nombre.png", scale_factor=3)` (se convierte a JPG con Pillow). Para HTML: `grafico.save("nombre.html")`.

**Librerías:** `pandas`, `altair`, `vl-convert-python`, `Pillow` (todas disponibles en Colab salvo `vl-convert-python`).

_**Se utilizó como herramienta la Inteligencia Artificial Claude como apoyo en generación de códigos para la visualización y a Gemini integrada en Google Colab al momento de solucionar errores**_