# Ficha Técnica y Diccionario de Datos
**Base de Datos 3: Influencia de Festivales Internacionales (1932–2026)**

---

## 1. Ficha Técnica

### **Fuente de los datos**
La base de datos fue construida a partir de la extracción, unificación y sistematización de los anexos documentales y registros históricos oficiales disponibles en las siguientes fuentes:
* **Festival de Cannes (Mejor Actriz):** [Anexo:Premio del Festival de Cannes a la mejor actriz](https://es.wikipedia.org/wiki/Anexo:Premio_del_Festival_de_Cannes_a_la_mejor_actriz)
* **Festival de Cannes (Mejor Actor):** [Anexo:Premio del Festival de Cannes al mejor actor](https://es.wikipedia.org/wiki/Anexo:Premio_del_Festival_de_Cannes_al_mejor_actor)
* **Festival de Venecia (Mejor Actriz - Coppa Volpi):** [Volpi Cup for Best Actress](https://en.wikipedia.org/wiki/Volpi_Cup_for_Best_Actress)
* **Festival de Venecia (Mejor Actor - Coppa Volpi):** [Volpi Cup for Best Actor](https://en.wikipedia.org/wiki/Volpi_Cup_for_Best_Actor)
* **Premios Globo de Oro (Mejor Actriz - Drama):** [Anexo:Globo de Oro a la mejor actriz - Drama](https://es.wikipedia.org/wiki/Anexo:Globo_de_Oro_a_la_mejor_actriz_-_Drama)
* **Premios Globo de Oro (Mejor Actriz - Comedia o Musical):** [Anexo:Globo de Oro a la mejor actriz - Comedia o musical](https://es.wikipedia.org/wiki/Anexo:Globo_de_Oro_a_la_mejor_actriz_-_Comedia_o_musical)
* **Premios Globo de Oro (Mejor Actor - Drama):** [Anexo:Globo de Oro al mejor actor - Drama](https://es.wikipedia.org/wiki/Anexo:Globo_de_Oro_al_mejor_actor_-_Drama)
* **Premios Globo de Oro (Mejor Actor - Comedia o Musical):** [Anexo:Globo de Oro al mejor actor - Comedia o musical](https://es.wikipedia.org/wiki/Anexo:Globo_de_Oro_al_mejor_actor_-_Comedia_o_musical)

### **Metodología de la construcción de la base**
1. **Recopilación e Integración:** Se consolidaron las listas históricas de ganadores principales de actuación en los tres certámenes. Para los Globos de Oro, a partir de 1951 se incorporaron los cuatro ganadores anuales (Drama y Comedia/Musical tanto para actor como para actriz) para reflejar la totalidad de las categorías de actuación protagónica. 
2. **Auditoría y Verificación Cruzada asistida por IA (Gemini):**  Mediante los datos proporcionados por Wikipedia, junto a al IA se creo la ase dedatos. Se ejecutó una fase de corroboración de forma manual  mediante Google para auditar el 100% de los registros, asegurando la precisión de la nacionalidad de origen (`pais_origen_nacionalidad`) y el idioma de la actuación (`idioma_actuacion`), resolviendo casos complejos de doble nacionalidad o producciones multilingües.
3. **Evaluación Cualitativa y Binarización:** Se analizaron y codificaron cualitativamente las variables de trayectoria previa en la industria de EE. UU. (`carrera_previa_hollywood`) y el reconocimiento posterior en la misma temporada por la Academia de Hollywood (`fue_nominado_oscar`), verificando de manera manual que la nominación al Oscar haya sido **por la misma película e interpretación**.
4. **Estandarización:** Se estandarizaron las categorías nominales (ej. unificación formal de `Femenino`/`Masculino` y etiquetas oficiales de certámenes) y se ordenó la base de manera cronológica estricta (1932–2024).

### **Alcance de los datos**
* **Temporal:** Cobertura histórica desde la primera edición del Festival de Venecia en 1932 hasta la temporada de premios de 2026.
* **Geográfico:** Internacional (abarca producciones cinematográficas e intérpretes de América, Europa, Asia, Oceanía y África).
* **Temático:** Limitado a categorías de interpretación protagónica masculina y femenina en cine (*Best Actor* y *Best Actress*).

### **Características de los datos**
* **Nivel de agregación:** Cada fila/registro representa una actuación individual galardonada en una edición y certamen específico.
* **Estructura:** Matriz de 595 filas y 9 columnas.
* **Completitud:** 100% de datos completos (0 valores nulos o vacíos en la versión limpia).
* **Formato de almacenamiento:** Codificación UTF-8 en formato estructurado plano CSV (`.csv`) y hoja de cálculo Excel (`.xlsx`).

### **Otras observaciones sobre la base**
* La base de datos incluye tanto a actores internacionales como a estadounidenses. Esta inclusión es intencional y metodológicamente indispensable para constituir el "grupo de control", permitiendo comparar proporciones reales (% locales vs % extranjeros) en las tablas dinámicas y análisis gráficos sin incurrir en sesgo de selección (*selection bias*).

---

## 2. Diccionario de Datos

| Nombre de la Variable | Descripción | Tipo de Dato | Valores Posibles | Observaciones Editoriales |
| :--- | :--- | :--- | :--- | :--- |
| `ano_premio` | Año en que se entregó el galardón en el certamen | Numérico (`Integer`) | 1932 a 2024 | Corresponde al año del festival o de la ceremonia del premio |
| `certamen` | Nombre del festival de cine o premio internacional | Texto (`String`) | `Festival de Cannes`, `Festival de Venecia`, `Globo de Oro` | Estandarizado sin abreviaturas para facilitar filtros y agrupaciones |
| `nombre_actor_actriz` | Nombre completo del intérprete premiado | Texto (`String`) | Nombres propios (ej. `Ray Milland`, `Michèle Morgan`, `Cillian Murphy`) | Estandarizado en alfabeto latino con tildes y caracteres oficiales |
| `genero` | Género del actor o actriz galardonado | Categórico (`String`) | `Femenino`, `Masculino` | Normalizado formalmente en reemplazo de "Mujer"/"Hombre" |
| `pais_origen_nacionalidad` | País de nacimiento o nacionalidad principal del intérprete | Texto (`String`) | Nombres de países en español (ej. `Estados Unidos`, `Francia`, `Chile`) | Verificado y auditado con Gemini para resolver dobles nacionalidades |
| `pelicula` | Título de la película por la cual obtuvo el galardón | Texto (`String`) | Títulos de obras (ej. *The Lost Weekend*, *Volver*, *Oppenheimer*) | Se registra el título oficial en inglés o nativo según catálogo internacional |
| `idioma_actuacion` | Idioma predominante en el que se realizó la interpretación | Texto (`String`) | Idiomas (ej. `Inglés`, `Francés`, `Español`, `Italiano`, `Coreano`) | Corroborado con Gemini para identificar interpretaciones no anglófonas |
| `carrera_previa_hollywood` | Indica si el actor/actriz ya tenía carrera consolidada en EE. UU. al ganar | Booleano (`String`) | `Sí`, `No` | Criterio cualitativo basado en créditos previos en producciones de EE. UU. |
| `fue_nominado_oscar` | Indica si la misma interpretación obtuvo nominación al Oscar | Booleano (`String`) | `Sí`, `No` | Evaluado de forma estricta **únicamente para la misma película** |
