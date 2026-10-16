# Ficha técnica de la base de datos

---

## Identificación

| Campo | Detalle |
| :--- | :--- |
| **Archivo** | `base_limpia.csv` (UTF-8, separador coma) |
| **Versión en Excel** | `Base_de_datos_limpia_original.xlsx`, hoja `base_limpia`: contiene las primeras 12 columnas del CSV (datos idénticos) |
| **Registros** | 933 |
| **Columnas** | 20 (12 originales o corregidas y 8 derivadas) |
| **Cobertura temporal** | 1933–2026 |
| **Unidad de observación** | Una persona premiada por su interpretación protagonista en un certamen y año |
| **Origen** | Base construida por Valentina Rivas.<br><br>• **Festival de Cannes (Mejor Actriz):** [Anexo:Premio del Festival de Cannes a la mejor actriz](https://es.wikipedia.org/wiki/Anexo:Premio_del_Festival_de_Cannes_a_la_mejor_actriz)<br>• **Festival de Cannes (Mejor Actor):** [Anexo:Premio del Festival de Cannes al mejor actor](https://es.wikipedia.org/wiki/Anexo:Premio_del_Festival_de_Cannes_al_mejor_actor)<br>• **Festival de Venecia (Mejor Actriz - Coppa Volpi):** [Volpi Cup for Best Actress](https://en.wikipedia.org/wiki/Volpi_Cup_for_Best_Actress)<br>• **Festival de Venecia (Mejor Actor - Coppa Volpi):** [Volpi Cup for Best Actor](https://en.wikipedia.org/wiki/Volpi_Cup_for_Best_Actor)<br>• **Festival de Berlín (Oso de Plata a la Mejor Interpretación Masculina):** [Anexo:Oso de Plata a la mejor interpretación masculina](https://es.wikipedia.org/wiki/Anexo:Oso_de_Plata_a_la_mejor_interpretaci%C3%B3n_masculina)<br>• **Festival de Berlín (Oso de Plata a la Mejor Interpretación Femenina):** [Anexo:Oso de Plata a la mejor interpretación femenina](https://es.wikipedia.org/wiki/Anexo:Oso_de_Plata_a_la_mejor_interpretaci%C3%B3n_femenina)<br>• **Premios Globo de Oro (Mejor Actriz - Drama):** [Anexo:Globo de Oro a la mejor actriz - Drama](https://es.wikipedia.org/wiki/Anexo:Globo_de_Oro_a_la_mejor_actriz_-_Drama)<br>• **Premios Globo de Oro (Mejor Actriz - Comedia o Musical):** [Anexo:Globo de Oro a la mejor actriz - Comedia o musical](https://es.wikipedia.org/wiki/Anexo:Globo_de_Oro_a_la_mejor_actriz_-_Comedia_o_musical)<br>• **Premios Globo de Oro (Mejor Actor - Drama):** [Anexo:Globo de Oro al mejor actor - Drama](https://es.wikipedia.org/wiki/Anexo:Globo_de_Oro_al_mejor_actor_-_Drama)<br>• **Premios Globo de Oro (Mejor Actor - Comedia o Musical):** [Anexo:Globo de Oro al mejor actor - Comedia o musical](https://es.wikipedia.org/wiki/Anexo:Globo_de_Oro_al_mejor_actor_-_Comedia_o_musical)<br>• **Premios BAFTA (Mejor Actriz):** [Anexo:BAFTA a la mejor actriz](https://es.wikipedia.org/wiki/Anexo:BAFTA_a_la_mejor_actriz)<br>• **Premios BAFTA (Mejor Actor):** [Anexo:BAFTA al mejor actor](https://es.wikipedia.org/wiki/Anexo:BAFTA_al_mejor_actor) |
| **Original sin modificar** | `base3_festivales_globos_bafta_y_berlin_completa.csv` |


---

## Características de los datos

| Certamen | Registros |
| :--- | :--- |
| **Globo de Oro** | 322 |
| **BAFTA** | 178 |
| **Festival de Cannes** | 173 |
| **Festival de Berlín** | 132 |
| **Festival de Venecia** | 128 |

* **Personas distintas:** 589 | **Películas distintas:** 745
* **Género:** Femenino: 480 · Masculino: 453
* **Registros por década:** 1930s: 12 · 1940s: 21 · 1950s: 101 · 1960s: 130 · 1970s: 98 · 1980s: 117 · 1990s: 121 · 2000s: 129 · 2010s: 123 · 2020s: 81
* **Idioma de la actuación:** Solo inglés: 644 · Otro idioma: 268 · Inglés y otro idioma: 21
* **Nominación al Óscar como protagonista:** Sí: 470 · No: 456 · Pendiente: 7
* **Carrera previa en Hollywood:** Sí: 541 · No: 391 · Por verificar: 1

---

## Variables

| Variable | En el Excel | Descripción |
| :--- | :---: | :--- |
| `id_fila_original` | Sí | Posición de la fila en el CSV original (desde 0) |
| `ano_premio` | Sí | Año del premio |
| `certamen` | Sí | Globo de Oro, BAFTA, Festival de Cannes, Festival de Berlín o Festival de Venecia |
| `nombre_actor_actriz` | Sí | Persona premiada |
| `genero` | Sí | Femenino / Masculino |
| `pais_origen_nacionalidad` | Sí | Nacionalidad; puede haber dos separadas por « / ». No es lugar de nacimiento |
| `pelicula` | Sí | Película por la que ganó |
| `idioma_actuacion` | Sí | Idioma(s) de la actuación; si son varios, separados por « / » |
| `carrera_previa_hollywood` | Sí | Sí / No / Por verificar. El criterio no está documentado; pendiente de definir por el equipo |

| `fue_nominado_oscar_original` | Sí | Valor original con formato normalizado, para comparar. Incluye nominaciones de reparto |
| `grupo_certamen` | Sí | Industria anglosajona (Globo de Oro, BAFTA) / Festivales europeos |


---

## Variables usadas en las visualizaciones

| Gráfico | Variables |
| :--- | :--- |
| **Gráfico 1: % de premiados nominados al Óscar** | `certamen`, `nominado_oscar_protagonico` (solo Sí y No; se excluyen 7 Pendiente) |
| **Gráfico 2: Idioma por certamen** | `certamen`, `idioma_actuacion` (convertida a `tipo_idioma` en el notebook) |

---

## Cómo se procesó (resumen)

> Detalle completo en `README_personal.md`, `limpieza.py` y `registro_cambios.csv`.

| Tipo de cambio | Celdas | Ejemplos |
| :--- | :---: | :--- |
| **Error factual (persona o película equivocada)** | 14 | Berlín 2025, Berlín 2026, Berlín 1963, Cannes 1964 |
| **Criterio protagónico vs. reparto** | 12 | Del Toro, Waltz y diez casos más por confirmar |
| **Consistencia (misma persona, distinta nacionalidad)** | 7 | Taylor, Tandy, Cheung, Finch, Stan; y un título duplicado |
| **Pendiente (nominación 2026)** | 7 | Cannes, Venecia y Berlín 2026 |
| **Errores de escritura** | 3 | Fernanda Torres, Renée Zellweger, Marty Supreme |
| **Criterio pendiente** | 1 | Sandra Hüller: carrera previa en Hollywood |
| **Total de celdas modificadas** | **44** | **En 32 filas** |

*Además se normalizaron espacios, mayúsculas (Sí/SÍ) y separadores en unas 24 celdas de formato.*

---

## Observaciones y limitaciones

1. **Solo ganadores:** No hay candidatos ni todos los nominados al Óscar.
2. **Nacionalidad, no lugar de nacimiento:** La hipótesis del grupo habla de «nacidos fuera», y la base no lo mide directamente.
3. **Verificación incompleta:** La auditoría detectó filas con la persona equivocada que no estaban en la devolución de la profesora. No se verificaron las 433 filas de festivales contra los palmarés oficiales, así que pueden quedar errores.
4. **Empates (ex aequo):** Están registrados en 2026 (Cannes) pero no de forma consistente en años anteriores. En Cannes 1964 faltan Antal Pager y Barbara Barrie.
5. **Nominaciones al Óscar:** Se revisaron de memoria; solo se confirmaron con fuente los casos señalados por la profesora. Diez correcciones de reparto están marcadas «por confirmar». Las nominaciones de 2025–2026 no se contrastaron con la lista oficial.
6. **Carrera previa en Hollywood:** La definición no está documentada y afecta cualquier análisis que use esa variable. Hay una fila sin valor («Por verificar»).
7. **Nacionalidades duales:** Cinco personas se unificaron con una regla provisional (la más frecuente) que debe aprobar el equipo.
8. **Cine mudo:** *The Artist* (Dujardin) figura como «Francés / Mudo» y cuenta como «otro idioma»; decisión pendiente.
9. **Vacíos de cobertura:** Venecia no tiene registros en la década de 1970. Los certámenes cambian sus categorías con el tiempo.
10. **Registros de otra base:** Richard Barthelmess y Gaynor/Jannings (1929), señalados por la profesora, no están en esta base.
11. **Tratamiento del idioma:** `tipo_idioma` mide el idioma de la actuación, no el de toda la película.

---
