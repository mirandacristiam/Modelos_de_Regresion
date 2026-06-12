function renderDetalles() {
    const container = document.getElementById('detalles-content');
    container.innerHTML = `
        <div class="section-header">
            <h2>Detalles Técnicos del Proyecto</h2>
            <p>Arquitectura, estructura de archivos y herramientas utilizadas</p>
        </div>

        <div class="card">
            <h3>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                Sobre el Proyecto
            </h3>
            <p style="color:var(--gray-600);margin-bottom:12px;">
                Este proyecto fue desarrollado como parte del curso de <strong>Inteligencia Artificial y Machine Learning</strong>. 
                El objetivo es aplicar los conceptos de regresión lineal y regresión logística para predecir el rendimiento 
                académico de estudiantes basándose en las horas de estudio.
            </p>
            <p style="color:var(--gray-600);">
                El modelo utiliza <strong>descenso por gradiente</strong> para ajustar los parámetros y 
                <strong>funciones de costo</strong> para medir la precisión. Los resultados se visualizan mediante 
                gráficos dinámicos interactivos con la librería <strong>ECharts</strong>.
            </p>
        </div>

        <div class="card">
            <h3>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1010 10"/><path d="M12 12l3-9"/></svg>
                Uso Responsable de IA Generativa
            </h3>
            <p style="color:var(--gray-600);margin-bottom:12px;">
                Este proyecto fue desarrollado con apoyo de <strong>IA generativa (Deepseek V4 Flash Free)</strong> 
                a trav&eacute;s de <strong>opencode CLI</strong>.
            </p>
            <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;">
                <div style="background:#E3F2FD;border-radius:var(--radius);padding:16px;">
                    <div style="font-size:13px;font-weight:700;color:var(--primary-dark);margin-bottom:8px;display:flex;align-items:center;gap:6px;">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px;"><path d="M12 2a10 10 0 1010 10"/><path d="M12 12l3-9"/></svg>
                        Generado por IA
                    </div>
                    <ul style="margin:0;padding-left:16px;font-size:13px;color:var(--gray-700);line-height:1.7;">
                        <li>Estructura del proyecto y organizaci&oacute;n de archivos</li>
                        <li>Clases de los modelos: <code>ModeloLineal</code>, <code>ModeloLogistico</code>, <code>GestorDatos</code></li>
                        <li>Implementaci&oacute;n del descenso por gradiente y funciones de costo</li>
                        <li>Gr&aacute;ficas interactivas con ECharts</li>
                        <li>Estilos CSS base y estructura responsive</li>
                        <li>L&oacute;gica de navegaci&oacute;n SPA y men&uacute; m&oacute;vil</li>
                    </ul>
                </div>
                <div style="background:#FFF3CD;border-radius:var(--radius);padding:16px;">
                    <div style="font-size:13px;font-weight:700;color:#856404;margin-bottom:8px;display:flex;align-items:center;gap:6px;">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px;"><path d="M10 3H5a2 2 0 00-2 2v14a2 2 0 002 2h6"/><path d="M21 12H9"/><path d="M15 8l-4 4 4 4"/></svg>
                        Corregido por el equipo
                    </div>
                    <ul style="margin:0;padding-left:16px;font-size:13px;color:var(--gray-700);line-height:1.7;">
                        <li>Validaci&oacute;n de f&oacute;rmulas matem&aacute;ticas (ECM, sigmoide, entrop&iacute;a cruzada)</li>
                        <li>Ajuste de hiperpar&aacute;metros: tasa de aprendizaje (0.001 / 0.01) e iteraciones (5000)</li>
                        <li>Correcci&oacute;n de la visualizaci&oacute;n de datos en gr&aacute;ficas</li>
                        <li>Dise&ntilde;o visual: colores, disposici&oacute;n de elementos, tipograf&iacute;a</li>
                        <li>Contenido del dataset de estudiantes (valores y nombres reales)</li>
                        <li>Textos explicativos y ejemplos en la secci&oacute;n de teor&iacute;a</li>
                    </ul>
                </div>
                <div style="background:#D4EDDA;border-radius:var(--radius);padding:16px;">
                    <div style="font-size:13px;font-weight:700;color:#155724;margin-bottom:8px;display:flex;align-items:center;gap:6px;">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px;"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
                        Comprendido por el estudiante
                    </div>
                    <ul style="margin:0;padding-left:16px;font-size:13px;color:var(--gray-700);line-height:1.7;">
                        <li>Funcionamiento del descenso por gradiente y su impacto en el aprendizaje</li>
                        <li>Interpretaci&oacute;n de los coeficientes (pendiente, intercepto, pesos)</li>
                        <li>Diferencia entre regresi&oacute;n lineal (predecir valores) y log&iacute;stica (clasificar)</li>
                        <li>Lectura e interpretaci&oacute;n de la curva sigmoide y el umbral de decisi&oacute;n</li>
                        <li>Significado de las m&eacute;tricas: R<sup>2</sup>, precisi&oacute;n, matriz de confusi&oacute;n</li>
                        <li>Importancia de separar datos en entrenamiento y prueba para evaluar el modelo</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="card">
            <h3>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1010 10"/><path d="M12 12l3-9"/></svg>
                Herramientas Utilizadas
            </h3>
            <p style="color:var(--gray-600);margin-bottom:12px;">
                Este proyecto fue desarrollado con el apoyo de <strong>Deepseek V4 Flash Free</strong>, 
                un modelo de IA generativa ejecutado a través de <strong>opencode CLI</strong>. 
                Se utilizó como herramienta de asistencia en la generación de código, 
                estructuración del proyecto y documentación técnica.
            </p>
            <ul style="color:var(--gray-600);padding-left:20px;">
                <li><strong>Asistente IA:</strong> Deepseek V4 Flash Free (via opencode CLI)</li>
                <li><strong>Lenguajes:</strong> HTML5, CSS3, JavaScript (vanilla)</li>
                <li><strong>Visualización:</strong> ECharts 5.5.0 (gráficos interactivos)</li>
                <li><strong>Tipografía:</strong> Inter (Google Fonts)</li>
                <li><strong>Hosting:</strong> Hostinger (servicio cloud)</li>
            </ul>
        </div>

        <div class="card">
            <h3>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>
                Arquitectura del Proyecto
            </h3>
            <p style="color:var(--gray-600);margin-bottom:12px;">
                Aplicación web 100% estática (frontend puro). Todo el procesamiento 
                de los modelos se ejecuta en el navegador del usuario (client-side).
            </p>
            <div class="formula-box" style="text-align:left;font-size:13px;line-height:1.8;">
modelos-de-regresion/<br>
│── index.html<br>
│── css/<br>
│&nbsp;&nbsp;&nbsp;└── style.css<br>
│── js/<br>
│&nbsp;&nbsp;&nbsp;├── modelo.js<br>
│&nbsp;&nbsp;&nbsp;├── teoria.js<br>
│&nbsp;&nbsp;&nbsp;├── entrenamiento.js<br>
│&nbsp;&nbsp;&nbsp;├── prueba.js<br>
│&nbsp;&nbsp;&nbsp;├── detalles.js<br>
│&nbsp;&nbsp;&nbsp;├── integrantes.js<br>
│&nbsp;&nbsp;&nbsp;└── main.js<br>
│── data/<br>
│&nbsp;&nbsp;&nbsp;└── estudiantes.csv<br>
└── images/
            </div>
        </div>

        <div class="card">
            <h3>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>
                Detalle de cada Archivo
            </h3>
            <div class="file-list">

                <div class="file-item">
                    <span class="file-icon file-icon-html">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 8l3 3-3 3"/><path d="M15 14h-3"/></svg>
                    </span>
                    <div class="file-info">
                        <div class="file-name">index.html</div>
                        <div class="file-desc">Página principal tipo SPA (Single Page Application). Contiene las 6 secciones del proyecto, la barra de navegación superior con iconos y la carga de todos los scripts y estilos.</div>
                    </div>
                </div>

                <div class="file-item">
                    <span class="file-icon file-icon-css">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 12h6"/><path d="M9 8h4"/><path d="M9 16h2"/></svg>
                    </span>
                    <div class="file-info">
                        <div class="file-name">css/style.css</div>
                        <div class="file-desc">Hoja de estilos profesional con tema azul, blanco y gris claro. Incluye diseño responsive, animaciones de transición, tarjetas, tablas, formularios, botones y contenedores de gráficos adaptados a todos los tamaños de pantalla.</div>
                    </div>
                </div>

                <div class="file-item">
                    <span class="file-icon file-icon-js">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 9l3 3-3 3"/><path d="M15 12h-3"/></svg>
                    </span>
                    <div class="file-info">
                        <div class="file-name">js/modelo.js</div>
                        <div class="file-desc">Núcleo matemático del proyecto. Define las clases ModeloLineal (regresión lineal con descenso por gradiente), ModeloLogistico (regresión logística con función sigmoide) y GestorDatos (almacena y organiza los registros de estudiantes).</div>
                    </div>
                </div>

                <div class="file-item">
                    <span class="file-icon file-icon-js">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 9l3 3-3 3"/><path d="M15 12h-3"/></svg>
                    </span>
                    <div class="file-info">
                        <div class="file-name">js/teoria.js</div>
                        <div class="file-desc">Contenido educativo con fórmulas matemáticas y conceptos teóricos. Incluye la explicación de regresión lineal (Error Cuadrático Medio, descenso por gradiente), regresión logística (función sigmoide, entropía cruzada) y ejemplos prácticos.</div>
                    </div>
                </div>

                <div class="file-item">
                    <span class="file-icon file-icon-js">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 9l3 3-3 3"/><path d="M15 12h-3"/></svg>
                    </span>
                    <div class="file-info">
                        <div class="file-name">js/entrenamiento.js</div>
                        <div class="file-desc">Módulo de entrenamiento. Permite cargar datos desde CSV o formulario manual, entrena ambos modelos (lineal y logístico) y genera 3 gráficas interactivas: regresión lineal, curva sigmoide y evolución del costo.</div>
                    </div>
                </div>

                <div class="file-item">
                    <span class="file-icon file-icon-js">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 9l3 3-3 3"/><path d="M15 12h-3"/></svg>
                    </span>
                    <div class="file-info">
                        <div class="file-name">js/prueba.js</div>
                        <div class="file-desc">Módulo de predicción. Permite ingresar horas de estudio para obtener la calificación estimada (lineal) y la probabilidad de aprobar (logística). Incluye 2 ejemplos predefinidos: 12 horas → Reprobado y 38 horas → Aprobado.</div>
                    </div>
                </div>

                <div class="file-item">
                    <span class="file-icon file-icon-js">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 9l3 3-3 3"/><path d="M15 12h-3"/></svg>
                    </span>
                    <div class="file-info">
                        <div class="file-name">js/detalles.js</div>
                        <div class="file-desc">Esta sección técnica. Describe el proyecto, herramientas, uso de IA (generado/corregido/comprendido), arquitectura, archivos, flujo de la aplicación y despliegue en la nube.</div>
                    </div>
                </div>

                <div class="file-item">
                    <span class="file-icon file-icon-js">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 9l3 3-3 3"/><path d="M15 12h-3"/></svg>
                    </span>
                    <div class="file-info">
                        <div class="file-name">js/integrantes.js</div>
                        <div class="file-desc">Presenta al equipo de desarrollo del proyecto con fotos rectangulares, nombres y descripción de su rol en el equipo.</div>
                    </div>
                </div>

                <div class="file-item">
                    <span class="file-icon file-icon-js">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 9l3 3-3 3"/><path d="M15 12h-3"/></svg>
                    </span>
                    <div class="file-info">
                        <div class="file-name">js/main.js</div>
                        <div class="file-desc">Controlador principal. Inicializa todas las secciones al cargar la página, maneja la navegación entre pestañas, el menú responsive en dispositivos móviles y el scroll suave al cambiar de sección.</div>
                    </div>
                </div>

                <div class="file-item">
                    <span class="file-icon file-icon-csv">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 8h6"/><path d="M9 12h6"/><path d="M9 16h4"/></svg>
                    </span>
                    <div class="file-info">
                        <div class="file-name">data/estudiantes.csv</div>
                        <div class="file-desc">Dataset de 10 estudiantes con 4 columnas: Estudiante (nombre), HorasEstudio (horas dedicadas), Calificacion (0-5) y Aprobado (1 = sí, 0 = no). Los datos se distribuyen desde 2 hasta 50 horas de estudio.</div>
                    </div>
                </div>

                <div class="file-item">
                    <span class="file-icon file-icon-folder">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>
                    </span>
                    <div class="file-info">
                        <div class="file-name">images/</div>
                        <div class="file-desc">Carpeta para las fotografías rectangulares del equipo en formato PNG con proporción 2:3 (840x1260 px), mostradas con object-fit: contain para evitar recortes en las caras.</div>
                    </div>
                </div>

            </div>
        </div>

        <div class="card">
            <h3>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
                Flujo de la Aplicación
            </h3>

            <div class="flowchart">

                <div class="flow-node">
                    <div class="flow-node-inner">
                        <div class="flow-badge">1</div>
                        <div class="flow-body">
                            <div class="flow-title">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
                                Carga de Datos
                            </div>
                            <div class="flow-desc">El usuario carga estudiantes con sus horas de estudio, calificaciones y estado de aprobaci&oacute;n, ya sea mediante un <strong>archivo CSV</strong> o ingres&aacute;ndolos manualmente en un <strong>formulario</strong>.</div>
                        </div>
                    </div>
                    <div class="flow-arrow">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14"/><path d="M19 12l-7 7-7-7"/></svg>
                    </div>
                </div>

                <div class="flow-node">
                    <div class="flow-node-inner">
                        <div class="flow-badge">2</div>
                        <div class="flow-body">
                            <div class="flow-title">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h6"/><path d="M21 15l-3-3-2 2-4-4-3 3 3 3"/><path d="M15 21l3-3 2 2 4-4"/></svg>
                                Organizaci&oacute;n
                            </div>
                            <div class="flow-desc"><code>GestorDatos</code> almacena los registros y separa autom&aacute;ticamente las variables de entrenamiento: <strong>X</strong> (horas), <strong>y_lineal</strong> (calificaciones) y <strong>y_logistico</strong> (aprobado 0/1).</div>
                        </div>
                    </div>
                    <div class="flow-arrow">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14"/><path d="M19 12l-7 7-7-7"/></svg>
                    </div>
                </div>

                <div class="flow-node">
                    <div class="flow-node-inner">
                        <div class="flow-badge flow-badge-orange">3</div>
                        <div class="flow-body">
                            <div class="flow-title">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                                Divisi&oacute;n Train / Test
                            </div>
                            <div class="flow-desc">Los datos se dividen aleatoriamente: <strong>80% para entrenamiento</strong> y <strong>20% para prueba</strong>. El modelo aprende solo con los datos de entrenamiento y se eval&uacute;a con los de prueba para medir su rendimiento real.</div>
                        </div>
                    </div>
                    <div class="flow-arrow">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14"/><path d="M19 12l-7 7-7-7"/></svg>
                    </div>
                </div>

                <div class="flow-node">
                    <div class="flow-split-label">Entrenamiento en paralelo</div>
                    <div class="flow-split">
                        <div class="flow-split-box">
                            <div class="flow-badge flow-badge-purple">4</div>
                            <div class="flow-body">
                                <div class="flow-title">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M19 9l-5 5-4-4-3 3"/></svg>
                                    Regresi&oacute;n Lineal
                                </div>
                                <div class="flow-desc">Aprende la relaci&oacute;n <strong>calificaci&oacute;n = m &middot; horas + b</strong> usando 5000 iteraciones de descenso por gradiente para minimizar el error cuadr&aacute;tico medio.</div>
                            </div>
                        </div>
                        <div class="flow-split-divider">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                        </div>
                        <div class="flow-split-box">
                            <div class="flow-badge flow-badge-purple">4</div>
                            <div class="flow-body">
                                <div class="flow-title">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 17a4 4 0 01-4-4 4 4 0 014-4"/><path d="M19 9a4 4 0 014 4 4 4 0 01-4 4"/><path d="M8 12h8"/></svg>
                                    Regresi&oacute;n Log&iacute;stica
                                </div>
                                <div class="flow-desc">Calcula la <strong>probabilidad de aprobar</strong> mediante la funci&oacute;n sigmoide: &sigma;(z) = 1/(1+e<sup>-z</sup>). Entrena 5000 iteraciones minimizando entrop&iacute;a cruzada.</div>
                            </div>
                        </div>
                    </div>
                    <div class="flow-arrow">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14"/><path d="M19 12l-7 7-7-7"/></svg>
                    </div>
                </div>

                <div class="flow-node">
                    <div class="flow-node-inner">
                        <div class="flow-badge flow-badge-teal">6</div>
                        <div class="flow-body">
                            <div class="flow-title">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M19 9l-5 5-4-4-3 3"/></svg>
                                Visualizaci&oacute;n
                            </div>
                            <div class="flow-desc"><strong>ECharts</strong> genera 3 gr&aacute;ficos interactivos: recta de regresi&oacute;n lineal, curva sigmoide de probabilidad y evoluci&oacute;n del costo a trav&eacute;s de las iteraciones.</div>
                        </div>
                    </div>
                    <div class="flow-arrow">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14"/><path d="M19 12l-7 7-7-7"/></svg>
                    </div>
                </div>

                <div class="flow-node">
                    <div class="flow-node-inner">
                        <div class="flow-badge flow-badge-green">7</div>
                        <div class="flow-body">
                            <div class="flow-title">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
                                Predicci&oacute;n Final
                            </div>
                            <div class="flow-desc">El usuario ingresa las horas de estudio. El modelo devuelve <strong>calificaci&oacute;n estimada</strong> (0-5) y <strong>probabilidad de aprobar</strong> con resultado visual: Aprobado o Reprobado.</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="card">
            <h3>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path d="M9 22V12h6v10"/></svg>
                Despliegue en la Nube
            </h3>
            <p style="color:var(--gray-600);margin-bottom:12px;">
                La aplicaci&oacute;n fue desplegada en un servidor cloud utilizando el hosting de <strong>Hostinger</strong>, 
                bajo el dominio principal <strong>hypermathics.com</strong>, usando el subdominio:
            </p>
            <div class="formula-box" style="font-size:18px;font-weight:700;color:var(--primary);">
                modelosderegresion.hypermathics.com
            </div>
            <p style="color:var(--gray-600);margin-bottom:12px;">
                El proceso de despliegue consisti&oacute; en:
            </p>
            <ol style="color:var(--gray-600);padding-left:20px;line-height:1.8;font-size:14px;">
                <li><strong>Acceder al panel de control</strong> de Hostinger (hPanel) y entrar al administrador de archivos.</li>
                <li><strong>Crear un subdominio</strong> <code>modelosderegresion.hypermathics.com</code> desde la secci&oacute;n de dominios del panel.</li>
                <li><strong>Subir los archivos del proyecto</strong> a la carpeta del subdominio dentro de <code>public_html/</code>.</li>
                <li><strong>Verificar la aplicaci&oacute;n</strong> accediendo a <a href="https://modelosderegresion.hypermathics.com" target="_blank" style="color:var(--primary);">modelosderegresion.hypermathics.com</a> para confirmar que todas las secciones, gr&aacute;ficas y predicciones funcionan correctamente.</li>
            </ol>
            <p style="color:var(--gray-600);margin-top:12px;font-size:14px;">
                <strong>Nota:</strong> Al ser una aplicaci&oacute;n 100% frontend (HTML + CSS + JS), no requiere configuraci&oacute;n de base de datos ni backend. 
                Todo el procesamiento ocurre en el navegador del usuario.
            </p>
        </div>
    `;
}
