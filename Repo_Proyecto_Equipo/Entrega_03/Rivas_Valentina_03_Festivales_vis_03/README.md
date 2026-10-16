# README personal · Entrega 3 · Visualización atómica

**Valentina Rivas** 


**La verdadera llave a Hollywood** 


**La internacionalización de las dos principales categorías de los Oscar ("Mejor actor" y "Mejor actriz") no consiste en un aumento de intérpretes nacidos fuera de Estados Unidos, sino en una creciente entrada de películas, idiomas y carreras desarrolladas fuera de Hollywood.** 


---

## Qué muestran mis visualizaciones






<img width="1854" height="870" alt="grafico_1" src="https://github.com/user-attachments/assets/47e31f35-05ba-4707-b511-55e906b6a0f9" />










|


 De los premiados en cada certamen, ¿qué porcentaje fue nominado al Óscar como protagonista? 







<img width="1668" height="1034" alt="grafico_2" src="https://github.com/user-attachments/assets/6bf3dce1-cce7-40d5-99b2-fa3bbe69a523" />









 En cada certamen, ¿qué proporción de las actuaciones premiadas fue en inglés, en otro idioma o en ambos?

### Cómo se conectan con la hipótesis
Juntos muestran que los certámenes donde casi todo es en inglés (Globo de Oro y BAFTA) son también donde más premiados llegan a nominados al Óscar, mientras que en los festivales europeos, con más actuaciones en otros idiomas, esa proporción es mucho menor. Es una asociación, no una causa. Estos gráficos apoyan la parte de la hipótesis sobre el idioma; no miden por sí solos nacionalidad ni carrera previa en Hollywood, aunque esas variables están en la base.

---

## Base de datos utilizada y por qué la seleccioné

* **Archivo:** `base_limpia.csv` (933 filas, 20 columnas, UTF-8). Es el resultado de limpiar la base original del equipo con `limpieza.py`. El Excel `Base_de_datos_limpia_original.xlsx`, que usé para graficar, contiene las primeras 12 columnas de ese mismo CSV (se comprobó que los datos son idénticos).
* **Qué contiene:** Una fila por persona premiada por su interpretación protagonista en el Globo de Oro, BAFTA, Festival de Cannes, Berlín y Venecia, entre 1933 y 2026.
* **Origen:** Base construida por el equipo.  
  Se recurrió a los anexos documentales e inventarios históricos oficiales disponibles en Wikipedia como punto de partida para la extracción de listas de ganadores en categorías protagónicas:
* **Festival de Cannes (Mejor Actriz):** [Anexo:Premio del Festival de Cannes a la mejor actriz](https://es.wikipedia.org/wiki/Anexo:Premio_del_Festival_de_Cannes_a_la_mejor_actriz)
* **Festival de Cannes (Mejor Actor):** [Anexo:Premio del Festival de Cannes al mejor actor](https://es.wikipedia.org/wiki/Anexo:Premio_del_Festival_de_Cannes_al_mejor_actor)
* **Festival de Venecia (Mejor Actriz - Coppa Volpi):** [Volpi Cup for Best Actress](https://en.wikipedia.org/wiki/Volpi_Cup_for_Best_Actress)
* **Festival de Venecia (Mejor Actor - Coppa Volpi):** [Volpi Cup for Best Actor](https://en.wikipedia.org/wiki/Volpi_Cup_for_Best_Actor)
* **Festival de Berlín (Oso de Plata a la Mejor Interpretación Masculina):** [Anexo:Oso de Plata a la mejor interpretación masculina](https://es.wikipedia.org/wiki/Anexo:Oso_de_Plata_a_la_mejor_interpretaci%C3%B3n_masculina)
* **Festival de Berlín (Oso de Plata a la Mejor Interpretación Femenina):** [Anexo:Oso de Plata a la mejor interpretación femenina](https://es.wikipedia.org/wiki/Anexo:Oso_de_Plata_a_la_mejor_interpretaci%C3%B3n_femenina)
* **Premios Globo de Oro (Mejor Actriz - Drama):** [Anexo:Globo de Oro a la mejor actriz - Drama](https://es.wikipedia.org/wiki/Anexo:Globo_de_Oro_a_la_mejor_actriz_-_Drama)
* **Premios Globo de Oro (Mejor Actriz - Comedia o Musical):** [Anexo:Globo de Oro a la mejor actriz - Comedia o musical](https://es.wikipedia.org/wiki/Anexo:Globo_de_Oro_a_la_mejor_actriz_-_Comedia_o_musical)
* **Premios Globo de Oro (Mejor Actor - Drama):** [Anexo:Globo de Oro al mejor actor - Drama](https://es.wikipedia.org/wiki/Anexo:Globo_de_Oro_al_mejor_actor_-_Drama)
* **Premios Globo de Oro (Mejor Actor - Comedia o Musical):** [Anexo:Globo de Oro al mejor actor - Comedia o musical](https://es.wikipedia.org/wiki/Anexo:Globo_de_Oro_al_mejor_actor_-_Comedia_o_musical)
* **Premios BAFTA (Mejor Actriz):** [Anexo:BAFTA a la mejor actriz](https://es.wikipedia.org/wiki/Anexo:BAFTA_a_la_mejor_actriz)
* **Premios BAFTA (Mejor Actor):** [Anexo:BAFTA al mejor actor](https://es.wikipedia.org/wiki/Anexo:BAFTA_al_mejor_actor)

* **Por qué la elegí:** Reúne en un mismo lugar el idioma de la actuación, la nacionalidad, la carrera previa en Hollywood y la nominación al Óscar. Eso permite comparar el circuito de premios previos con el acceso al Óscar, que es lo que plantea la hipótesis del grupo.

* **Límite principal:** Solo incluye a quienes ganaron, no a todos los candidatos ni a todos los nominados al Óscar. Otras bases del grupo cubren esa parte.

> Ver la ficha técnica completa en `ficha_tecnica.md`.

---

## Cómo procesé la base (pasos y decisiones)

* **Paso 1: Punto de partida.** A partir de la base de datos creada por mi y la devolución de la profesora, que señalaba: un premio atribuido a otra persona (Berlín 2025), nominaciones de reparto mezcladas con protagónicas (Del Toro y Waltz), formatos inconsistentes, typos (*Fernada Torres*, *Martu Supreme*) y seis vacíos en la nominación al Óscar.
* **Paso 2: Auditoría.** Revisé la base buscando esos problemas y otros del mismo tipo: valores sin normalizar, personas con datos distintos según la fila, nombres casi duplicados y premios atribuidos a la persona equivocada. Para verificar premios consulté palmarés oficiales y prensa (Berlinale 2025 y 2026, Cannes 2026 y 1964, Venecia 2026).
* **Paso 3: Limpieza con registro.**: Limpie de manera manual las 6 nominaciones en blanco y los premios con persona equivocada. Luego teniendo en cuenta el cáracter ético de la IA Cluaude, le pasé las instrucciones y mi base de datos limpias para corrobar que estuviera correcta. 

| Decisión | Qué hice y por qué |
| :--- | :--- |
| **Premios con persona equivocada** | Claude corrigió Berlín 2025 (*Abbass* → *Rose Byrne*), Berlín 2026 (*Rogowski* → *Sandra Hüller*), Berlín 1963 (*Koundouros* → *Sidney Poitier*) y Cannes 1964 (*Antony Hopkins* → *Saro Urzì*). Verificados con palmarés o por coherencia con otras filas de la base. |
| **Nominación de reparto vs. protagónica** | Creé `nominado_oscar_protagonico`: solo cuenta nominaciones a mejor actor o actriz, porque la hipótesis habla de esas dos categorías. Corregí 12 casos de reparto; 10 los detecté por conocimiento propio y están por confirmar en la base de la Academia. |
| **Vacíos en la nominación** | Los distinguí en *Sí / No / Pendiente / Desconocido*. Los 6 vacíos y Berlín 2026 son «Pendiente»: películas de 2026 cuyo Óscar aún no se anuncia. |
| **Formato** | Claude Normalizo  espacios, *Sí/SÍ* y separadores « / ». |
| **Typos** | Claude Corrigió *Fernanda Torres*, *Marty Supreme*, *Renée Zellweger* y un título duplicado (*La Ciociara*). |
||
| **Lo que no resolví** | Los empates (*ex aequo*) no están registrados de forma consistente en todos los años, el criterio de «carrera previa en Hollywood» no está documentado, y la fila de Hüller está incompleta. Todo está en `por_verificar.csv`. |

---

## Cómo hice las visualizaciones (pasos y decisiones)

1. **Elección de variables:**  
   * **Gráfico 1:** certamen y `nominado_oscar_protagonico`.  
   * **Gráfico 2:** certamen e `idioma_actuacion` (convertido en `tipo_idioma`).
2. **Diseño:** 
### 2. Diseño

* **Gráfico 1(Barras apiladas al 100%):**  
Opté por barras apiladas al 100% para representar la composición del idioma en las actuaciones premiadas. Este tipo de gráfico es idóneo para visualizar proporciones de un todo, haciendo evidente a primera vista la abrumadora dominancia del idioma inglés en relación con el conjunto de todas las demás lenguas nativas dentro de la muestra histórica.
  

* **Gráfico 2 (Barras horizontales):**  
Elegí un gráfico de barras horizontales porque los nombres de los cinco certámenes (*Festival de Cannes*, *Festival de Venecia*, *Festival de Berlín*, *Globo de Oro*, *BAFTA*) tienen extensiones de texto variables. Este formato permite leer las etiquetas categóricas de forma limpia, fluida y legible en pantallas digitales y dispositivos móviles, facilitando la comparación visual directa de las proporciones sin saturar el espacio.
  
* **Paleta de Colores (Inspirada en la estética de los Óscar):**  
    **Gemini**  entrego la paleta de colores.
  * **Negro, Dorado y Crema:** Utilizados para representar la industria hegemónica y el idioma inglés, evocando la estética formal de la estatuilla y la gala de los Premios Óscar.
  * **Rojo Alfombra:** Utilizado intencionalmente como tono de alto contraste para destacar la categoría **«Otro idioma»** (lenguas no anglófonas). Este resalte cromático genera un punto focal inmediato, dirigiendo la atención del lector hacia el núcleo de la hipótesis: la irrupción y resistencia del cine en su idioma nativo dentro del circuito de premios.

  
3. **Revisión ética y de responsabilidad:** Revisé mis primeras versiones y las corregí en cuatro puntos:
   * Los nombres de premios decían «Palma de Oro», «León de Oro» y «Oso de Oro», pero la base solo tiene premios de actuación. Los reemplacé por nombres exactos.
   * El título «Efecto trampolín» sugería causalidad que los datos no permiten. Lo cambié por un título descriptivo.
   * Había contado los 7 casos «Pendiente» como «No nominado». Los excluí del cálculo.
   * Agregué el tamaño de muestra ($n$) y una nota con fuente y límites en cada gráfico.
4. **Construcción con Altair:** Se programaron en Python con la librería Altair en Google Colab (`graficos_corregidos.ipynb`).
5. **Verificación de cifras:** El código incluye comprobaciones automáticas (`assert`) que detienen la ejecución si una cifra no coincide con el análisis independiente hecho con `pandas`.
6. **Exportación:** A formatos HTML (con tooltips interactivos) y JPG.

> **Dos gráficos que no entrego:**  
> Antes de estos dos gráficos exploré otro diseño más complejo (un gráfico de puntos donde cada punto es un premio, y un panel que compara nominación por perfil y nacionalidad). Quedó como exploración en la carpeta `referencia` y no forma parte de la entrega.

---

## Preguntas que pueden responder mis visualizaciones

### Con el gráfico 1:
 **¿En qué certámenes se premia más el cine en otro idioma?**  
  → Berlín (59%), Cannes (58%) y Venecia (52%) frente a BAFTA (7%) y Globo de Oro (3%).
* **¿Qué certamen premia casi solo en inglés?**  
  → Globo de Oro (95%) y BAFTA (91%).

### Con el gráfico 2:
* **¿En qué certamen es más probable que un premiado llegue a nominado al Óscar como protagonista?**  
  → Globo de Oro, 79,2% (255 de 322), y BAFTA, 71,9% (128 de 178).
* **¿Y en los festivales europeos?**  
  → Cannes 21,9% (37 de 169), Venecia 21,4% (27 de 126) y Berlín 17,6% (23 de 131).

### Con los dos juntos:
* **¿Los certámenes que más premian en inglés son también los que más nominados al Óscar producen?**  
  → Sí, hay asociación.

### Lo que NO pueden responder:
* Si el premio causa la nominación (no se puede afirmar causalidad).
* Cuánto han cambiado las cosas en el tiempo, ni el efecto de la nacionalidad o la carrera en Hollywood.
* Qué pasa con quienes no ganaron: la base solo incluye a ganadores.

---

## Datos de otras fuentes

* **`datos_complementarios.csv`:** Información de prensa usada en la escena inicial de la crónica (el aplauso a *Wild Horse Nine* en Venecia 2026, la Copa Volpi a John Malkovich, las menciones de *Variety* a Mariana Di Girolamo), con fuente, URL y fecha de consulta.
* **Palmarés oficiales y prensa:** Usados para verificar premios (ver columna `fuente` de `registro_cambios.csv`).

---


## Uso de inteligencia artificial (transparencia)

En este proyecto se utilizaron herramientas de Inteligencia Artificial Generativa (**Claude 3.5 Sonnet de Anthropic** y **Gemini de Google**) como asistentes de apoyo técnico, analítico y editorial, siempre bajo mi directa supervisión y toma de decisiones. El detalle completo de los *prompts* y flujos se encuentra en `declaracion_uso_ia.md`.

| Hizo la IA | Hice yo (Autora) |
| :--- | :--- |
| **Auditoría de la base y script de limpieza:** Claude asistió en la detección de inconsistencias y la creación del script `limpieza.py` y `registro_cambios.csv`. | **Toma de decisiones de limpieza:** Evalué y aprobé qué datos corregir, cuáles dejar pendientes en `por_verificar.csv` y definí los criterios periodísticos de normalización. |
| **Búsqueda y verificación de palmarés:** Consulta asistida de ganadores en festivales para contrastar filas dudosas. | **Conceptualización e idea periodística:** Propuse la idea central de la crónica, el enfoque narrativo y definí las preguntas que los gráficos debían responder. |
| **Generación de código para visualizaciones:** Gemini me apoyó en la generación del código inicial para Altair en Google Colab (`graficos_corregidos.ipynb`). Posteriormente, revisé y perfeccioné la estructura visual con Claude por mayor precisión y confianza analítica. | **Diseño y validación visual:** Elegí la estructura de los gráficos (barras horizontales y apiladas al 100%), seleccioné la paleta cromática inspirada en los Óscar y verifiqué de forma independiente que las cifras no tuvieran sesgos. |
| **Sugerencias de estructuración:** Borradores iniciales para explorar ideas de organización de párrafos. | **Redacción de la crónica:** Escribí la crónica íntegramente con mi voz periodística. Utilicé Gemini de manera puntual como asistente de estilo para precisar aspectos de redacción, ortografía y fluidez sintáctica. |

La paleta de colores, me la creo Gemini indicandole que quería seguir la colorimetría de los Premios Oscar.

---

### Respuesta sobre el entorno de trabajo y herramientas de código
Para la realización de esta entrega utilicé un flujo mixto:
1. **Limpieza y auditoría de datos:** Utilicé el script en Python (`limpieza.py`) generado en conjunto con Claude para procesar `Base_de_datos_limpia_original.xlsx` hasta obtener `base_limpia.csv`.
2. **Generación y renderizado de gráficos:** Utilicé un **Notebook propio en Google Colab** (`graficos_corregidos.ipynb`), integrando código Python (con las librerías `pandas` y `altair`) generado con la asistencia de Gemini y refinado mediante Claude, desde el cual exporté las visualizaciones finales en formatos `.html` y `.jpg`.
---

## Limitaciones y pendientes

* La base solo incluye a quienes ganaron, y mide nacionalidad, no lugar de nacimiento.
* No se puede asegurar que esté libre de errores: la auditoría encontró filas con persona equivocada que no estaban en la devolución, y no se verificaron las 433 filas de festivales contra los palmarés oficiales.
* Las nominaciones al Óscar se revisaron de memoria, salvo los casos que señaló la profesora.
* Los datos de 2026 quedan en estado «Pendiente» hasta que se anuncien las nominaciones oficiales.


## Cómo replicar el trabajo

1. Abrir el cuaderno `graficos_corregidos.ipynb` en Google Colab.
2. Ejecutar la celda de carga y subir `base_limpia.csv`.
3. Ejecutar las celdas de preparación y gráficos en orden.
4. Para exportar: `!pip install -q vl-convert-python` y luego `grafico.save("nombre.png", scale_factor=3)` (se convierte a JPG con Pillow).  
   Para HTML: `grafico.save("nombre.html")`.

**Librerías:** `pandas`, `altair`, `vl-convert-python`, `Pillow` (todas disponibles en Colab salvo `vl-convert-python`).

*Se utilizó como herramienta la Inteligencia Artificial Claude como apoyo en generación de códigos para la visualización y a Gemini integrada en Google Colab al momento de solucionar errores.*

---
