# README personal · Entrega 3 · Visualización atómica

**Autora:** ⚠️ COMPLETAR (nombre)  
**Curso:** Narración Gráfica  
**Título de la historia:** El pasaporte no abre la puerta  
**Hipótesis del grupo:** La internacionalización de las categorías «Mejor actor» y «Mejor actriz» de los Óscar no consiste en un aumento de intérpretes nacidos fuera de Estados Unidos, sino en una creciente entrada de películas, idiomas y carreras desarrolladas fuera de Hollywood.

> ⚠️ **Atención:** Los textos marcados con «COMPLETAR» son datos que solo la autora puede confirmar. Deben revisarse antes de entregar.

---

## 1. Qué muestran mis visualizaciones

| Archivo | Qué responde |
| :--- | :--- |
| **grafico_1** *(HTML y JPG)* | De los premiados en cada certamen, ¿qué porcentaje fue nominado al Óscar como protagonista? |
| **grafico_2** *(HTML y JPG)* | En cada certamen, ¿qué proporción de las actuaciones premiadas fue en inglés, en otro idioma o en ambos? |

### Cómo se conectan con la hipótesis
Juntos muestran que los certámenes donde casi todo es en inglés (Globo de Oro y BAFTA) son también donde más premiados llegan a nominados al Óscar, mientras que en los festivales europeos, con más actuaciones en otros idiomas, esa proporción es mucho menor. Es una asociación, no una causa. Estos gráficos apoyan la parte de la hipótesis sobre el idioma; no miden por sí solos nacionalidad ni carrera previa en Hollywood, aunque esas variables están en la base.

---

## 2. Base de datos utilizada y por qué la seleccioné

* **Archivo:** `base_limpia.csv` (933 filas, 20 columnas, UTF-8). Es el resultado de limpiar la base original del equipo con `limpieza.py`. El Excel `Base_de_datos_limpia_original.xlsx`, que usé para graficar, contiene las primeras 12 columnas de ese mismo CSV (se comprobó que los datos son idénticos).
* **Qué contiene:** Una fila por persona premiada por su interpretación protagonista en el Globo de Oro, BAFTA, Festival de Cannes, Berlín y Venecia, entre 1933 y 2026.
* **Origen:** Base construida por el equipo.  
  *(⚠️ COMPLETAR: fuentes originales de cada certamen, por ejemplo, sitios oficiales o Wikipedia, y cómo se recopilaron).*
* **Por qué la elegí:** Reúne en un mismo lugar el idioma de la actuación, la nacionalidad, la carrera previa en Hollywood y la nominación al Óscar. Eso permite comparar el circuito de premios previos con el acceso al Óscar, que es lo que plantea la hipótesis del grupo.
* **Límite principal:** Solo incluye a quienes ganaron, no a todos los candidatos ni a todos los nominados al Óscar. Otras bases del grupo cubren esa parte.

> Ver la ficha técnica completa en `ficha_tecnica.md`.

---

## 3. Cómo procesé la base (pasos y decisiones)

* **Paso 1: Punto de partida.** Recibí la base armada por el equipo y la devolución de la profesora, que señalaba: un premio atribuido a otra persona (Berlín 2025), nominaciones de reparto mezcladas con protagónicas (Del Toro y Waltz), formatos inconsistentes, typos (*Fernada Torres*, *Martu Supreme*) y seis vacíos en la nominación al Óscar.
* **Paso 2: Auditoría.** Revisé la base buscando esos problemas y otros del mismo tipo: valores sin normalizar, personas con datos distintos según la fila, nombres casi duplicados y premios atribuidos a la persona equivocada. Para verificar premios consulté palmarés oficiales y prensa (Berlinale 2025 y 2026, Cannes 2026 y 1964, Venecia 2026).
* **Paso 3: Limpieza con registro.** Todo el proceso está en `limpieza.py`. El archivo original nunca se modifica. Cada cambio de contenido (44 celdas en 32 filas) quedó en `registro_cambios.csv`, con valor anterior, valor nuevo, motivo y estado de verificación.

| Decisión | Qué hice y por qué |
| :--- | :--- |
| **Premios con persona equivocada** | Corregí Berlín 2025 (*Abbass* → *Rose Byrne*), Berlín 2026 (*Rogowski* → *Sandra Hüller*), Berlín 1963 (*Koundouros* → *Sidney Poitier*) y Cannes 1964 (*Antony Hopkins* → *Saro Urzì*). Verificados con palmarés o por coherencia con otras filas de la base. |
| **Nominación de reparto vs. protagónica** | Creé `nominado_oscar_protagonico`: solo cuenta nominaciones a mejor actor o actriz, porque la hipótesis habla de esas dos categorías. Corregí 12 casos de reparto; 10 los detecté por conocimiento propio y están por confirmar en la base de la Academia. |
| **Vacíos en la nominación** | Los distinguí en *Sí / No / Pendiente / Desconocido*. Los 6 vacíos y Berlín 2026 son «Pendiente»: películas de 2026 cuyo Óscar aún no se anuncia. |
| **Formato** | Normalicé espacios, *Sí/SÍ* y separadores « / ». |
| **Typos** | Corregí *Fernanda Torres*, *Marty Supreme*, *Renée Zellweger* y un título duplicado (*La Ciociara*). |
| **Nacionalidades** | Cinco personas tenían nacionalidad distinta según la fila. Apliqué una regla provisional (la más frecuente) que debe aprobar el equipo. |
| **Idiomas** | Creé `tipo_idioma` (*Solo inglés / Inglés y otro idioma / Otro idioma*), `idioma_principal` y `familia_idioma`, para poder analizar también lenguas como el coreano. |
| **Lo que no resolví** | Los empates (*ex aequo*) no están registrados de forma consistente en todos los años, el criterio de «carrera previa en Hollywood» no está documentado, y la fila de Hüller está incompleta. Todo está en `por_verificar.csv`. |

---

## 4. Cómo hice las visualizaciones (pasos y decisiones)

1. **Elección de variables:**  
   * **Gráfico 1:** certamen y `nominado_oscar_protagonico`.  
   * **Gráfico 2:** certamen e `idioma_actuacion` (convertido en `tipo_idioma`).
2. **Diseño:**  
   *(⚠️ COMPLETAR con tus propias palabras: por qué elegiste barras horizontales para el gráfico 1 y barras apiladas al 100% para el gráfico 2, y por qué elegiste la paleta de los Óscar [negro, dorado, rojo alfombra, crema], destacando el rojo para «otro idioma»).*
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

## 5. Preguntas que pueden responder mis visualizaciones

### Con el gráfico 1:
* **¿En qué certamen es más probable que un premiado llegue a nominado al Óscar como protagonista?**  
  → Globo de Oro, 79,2% (255 de 322), y BAFTA, 71,9% (128 de 178).
* **¿Y en los festivales europeos?**  
  → Cannes 21,9% (37 de 169), Venecia 21,4% (27 de 126) y Berlín 17,6% (23 de 131).

### Con el gráfico 2:
* **¿En qué certámenes se premia más el cine en otro idioma?**  
  → Berlín (59%), Cannes (58%) y Venecia (52%) frente a BAFTA (7%) y Globo de Oro (3%).
* **¿Qué certamen premia casi solo en inglés?**  
  → Globo de Oro (95%) y BAFTA (91%).

### Con los dos juntos:
* **¿Los certámenes que más premian en inglés son también los que más nominados al Óscar producen?**  
  → Sí, hay asociación.

### Lo que NO pueden responder:
* Si el premio causa la nominación (no se puede afirmar causalidad).
* Cuánto han cambiado las cosas en el tiempo, ni el efecto de la nacionalidad o la carrera en Hollywood.
* Qué pasa con quienes no ganaron: la base solo incluye a ganadores.

---

## 6. Datos de otras fuentes

* **`datos_complementarios.csv`:** Información de prensa usada en la escena inicial de la crónica (el aplauso a *Wild Horse Nine* en Venecia 2026, la Copa Volpi a John Malkovich, las menciones de *Variety* a Mariana Di Girolamo), con fuente, URL y fecha de consulta.
* **Palmarés oficiales y prensa:** Usados para verificar premios (ver columna `fuente` de `registro_cambios.csv`).

---

## 7. Uso de inteligencia artificial (transparencia)

Usé Claude (Anthropic) como asistente, con mi supervisión. El detalle se encuentra en `declaracion_uso_ia.md`.

| Hizo la IA | Hice yo |
| :--- | :--- |
| Auditoría de la base, script de limpieza y registro de cambios | *(⚠️ COMPLETAR: decisiones de qué corregir y qué dejar pendiente)* |
| Búsqueda y verificación de palmarés | *(⚠️ COMPLETAR: diseño de los dos gráficos: tipo de gráfico, paleta, estructura)* |
| Código Altair, escrito a partir de mi diseño | *(⚠️ COMPLETAR: revisión del código, ejecución en Colab, ajuste de títulos y textos)* |
| Borrador de la crónica y de estos documentos | *(⚠️ COMPLETAR: reescritura de la crónica con mi voz)* |

> *(⚠️ COMPLETAR, respondiendo a la pregunta de la profesora: indicar con exactitud si usaste Python con asistencia de IA o notebooks propios en Colab, y con qué archivos).*

---

## 8. Limitaciones y pendientes

* La base solo incluye a quienes ganaron, y mide nacionalidad, no lugar de nacimiento.
* No se puede asegurar que esté libre de errores: la auditoría encontró filas con persona equivocada que no estaban en la devolución, y no se verificaron las 433 filas de festivales contra los palmarés oficiales.
* Las nominaciones al Óscar se revisaron de memoria, salvo los casos que señaló la profesora.
* Los datos de 2026 quedan en estado «Pendiente» hasta que se anuncien las nominaciones oficiales.

---

## 9. Archivos de la entrega y cómo replicar

| Archivo | Contenido |
| :--- | :--- |
| **`README_personal.md`** | Este documento. |
| **`ficha_tecnica.md`** | Ficha técnica de la base de datos. |
| **`base_limpia.csv`** | Base lista para visualizar (20 columnas). |
| **`limpieza.py`** | Proceso completo de limpieza de datos. |
| **`registro_cambios.csv`** | Cada cambio aplicado, con motivo y estado. |
| **`por_verificar.csv`** | Pendientes que requieren decisión humana. |
| **`graficos_corregidos.ipynb`** | Notebook de Google Colab con el código de los gráficos. |
| **`grafico_1` y `grafico_2`** | Visualizaciones finales en formatos `.html` y `.jpg`. |
| **`cronica.md`** | Texto completo de la crónica periodística. |
| **`datos_complementarios.csv`** | Datos de prensa de la escena inicial. |
| **`declaracion_uso_ia.md`** | Declaración transparente de uso de IA. |

### Pasos para replicar el proyecto:
1. Ejecutar el script `limpieza.py` sobre el CSV original para obtener el archivo `base_limpia.csv`.
2. Abrir el notebook `graficos_corregidos.ipynb` en Google Colab, cargar la base limpia y ejecutar las celdas en orden secuencial.