function renderTeoria() {
    const container = document.getElementById('teoria-content');
    container.innerHTML = `
        <div class="section-header">
            <h2>Fundamentos Teóricos</h2>
            <p>Conceptos fundamentales de regresión lineal y logística aplicados a la predicción del rendimiento académico</p>
        </div>

        <div class="card">
            <h3>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12l2 2 4-4"/><path d="M22 12a10 10 0 11-20 0 10 10 0 0120 0z"/></svg>
                ¿Qué es un problema de clasificación supervisada?
            </h3>
            <p style="color:var(--gray-600);margin-bottom:12px;">
                En el <strong>aprendizaje supervisado</strong>, el modelo aprende a partir de ejemplos etiquetados. 
                Se le entregan datos de entrada (características) junto con la respuesta correcta (etiqueta) 
                para que encuentre patrones y pueda predecir respuestas ante nuevos datos.
            </p>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
                <div style="background:var(--primary-50);border-radius:var(--radius);padding:16px;">
                    <div style="font-size:13px;font-weight:700;color:var(--primary-dark);margin-bottom:8px;">Regresión (valores continuos)</div>
                    <p style="font-size:13px;color:var(--gray-700);">Predice un <strong>número</strong> dentro de un rango. Ej: calificación de 0 a 5.</p>
                    <div style="font-size:12px;color:var(--gray-500);margin-top:8px;">Entrada: horas &rarr; Salida: 3.5</div>
                </div>
                <div style="background:#FFF3CD;border-radius:var(--radius);padding:16px;">
                    <div style="font-size:13px;font-weight:700;color:#856404;margin-bottom:8px;">Clasificación (valores discretos)</div>
                    <p style="font-size:13px;color:var(--gray-700);">Predice una <strong>categoría</strong> entre opciones. Ej: Aprobado o Reprobado.</p>
                    <div style="font-size:12px;color:var(--gray-500);margin-top:8px;">Entrada: horas &rarr; Salida: Aprobado (1)</div>
                </div>
            </div>
            <p style="color:var(--gray-600);margin-top:12px;font-size:14px;">
                En este proyecto: <strong>X = horas de estudio</strong> (característica), <strong>y = calificación</strong> (regresión) o <strong>y = aprobado 0/1</strong> (clasificación). 
                Ambos modelos se entrenan con los mismos datos pero aprenden cosas distintas.
            </p>
        </div>

        <div class="theory-grid">
            <div class="card">
                <h3>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M19 9l-5 5-4-4-3 3"/></svg>
                    Regresión Lineal
                </h3>
                <p style="margin-bottom:12px;color:var(--gray-600);">La regresión lineal modela la relación entre una variable independiente (horas de estudio) y una variable dependiente (calificación).</p>
                
                <div class="formula-label">Ecuación de la recta</div>
                <div class="formula-box">
                    y = mx + b
                </div>
                <p style="font-size:13px;color:var(--gray-600);margin-bottom:12px;">Donde: <strong>y</strong> = calificación, <strong>x</strong> = horas de estudio, <strong>m</strong> = pendiente, <strong>b</strong> = intercepto</p>

                <div class="formula-label">Función de Costo (Error Cuadrático Medio)</div>
                <div class="formula-box">
                    J(m,b) = (1/2n) · Σ(h(xᵢ) - yᵢ)²
                </div>
                <p style="font-size:13px;color:var(--gray-600);margin-bottom:12px;">Mide la diferencia entre valores predichos y reales. A menor costo, mejor ajuste.</p>

                <div class="formula-label">Descenso por Gradiente</div>
                <div class="formula-box">
                    m := m - α · (1/n) · Σ(h(xᵢ) - yᵢ) · xᵢ<br>
                    b := b - α · (1/n) · Σ(h(xᵢ) - yᵢ)
                </div>
                <p style="font-size:13px;color:var(--gray-600);margin-bottom:12px;"><strong>α</strong> (alpha) es la tasa de aprendizaje que controla qué tan rápido se ajustan los parámetros.</p>

                <div class="example-box">
                    <strong>Ejemplo:</strong> Si un estudiante estudia 30 horas, y la recta es y = 0.1x + 0.5,<br>
                    entonces: y = 0.1(30) + 0.5 = <strong>3.5</strong> → El modelo predice una calificación de 3.5.
                </div>

                <div class="example-box" style="border-left-color:var(--success);">
                    <strong>Ejemplo 2:</strong> Si un estudiante estudia 10 horas con la misma recta:<br>
                    y = 0.1(10) + 0.5 = <strong>1.5</strong> → El modelo predice una calificación de 1.5 (reprobado).
                </div>
            </div>

            <div class="card">
                <h3>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 17a4 4 0 01-4-4 4 4 0 014-4"/><path d="M19 9a4 4 0 014 4 4 4 0 01-4 4"/><path d="M8 12h8"/></svg>
                    Regresión Logística
                </h3>
                <p style="margin-bottom:12px;color:var(--gray-600);">La regresión logística predice la probabilidad de que un evento ocurra, dando como resultado un valor entre 0 y 1 (Reprobado = 0, Aprobado = 1).</p>

                <div class="formula-label">Función Sigmoide</div>
                <div class="formula-box">
                    σ(z) = 1 / (1 + e<sup>-z</sup>)
                </div>
                <p style="font-size:13px;color:var(--gray-600);margin-bottom:12px;">Convierte cualquier valor real en una probabilidad entre 0 y 1. Si σ(z) ≥ 0.5 → Aprobado (1), si σ(z) &lt; 0.5 → Reprobado (0).</p>

                <div class="formula-label">Hipótesis del Modelo</div>
                <div class="formula-box">
                    h(x) = σ(w·x + b) = 1 / (1 + e<sup>-(w·x + b)</sup>)
                </div>
                <p style="font-size:13px;color:var(--gray-600);margin-bottom:12px;"><strong>w</strong> son los pesos del modelo, <strong>b</strong> es el sesgo (bias).</p>

                <div class="formula-label">Función de Costo (Entropía Cruzada)</div>
                <div class="formula-box">
                    J(w,b) = -(1/n) · Σ[ yᵢ·log(h(xᵢ)) + (1-yᵢ)·log(1-h(xᵢ)) ]
                </div>
                <p style="font-size:13px;color:var(--gray-600);margin-bottom:12px;">Penaliza más las predicciones equivocadas con alta confianza.</p>

                <div class="example-box">
                    <strong>Ejemplo:</strong> z = 0.1(horas) - 2.5. Para 30 horas: z = 0.5<br>
                    σ(0.5) = 1/(1+e<sup>-0.5</sup>) = <strong>0.62</strong> → 62% de aprobar → Aprobado ✓
                </div>

                <div class="example-box" style="border-left-color:var(--danger);">
                    <strong>Ejemplo 2:</strong> Para 10 horas: z = 0.1(10) - 2.5 = -1.5<br>
                    σ(-1.5) = 1/(1+e<sup>1.5</sup>) = <strong>0.18</strong> → 18% de aprobar → Reprobado ✗
                </div>
            </div>

        </div>

        <div class="card mt-24">
            <h3>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                Proceso de Entrenamiento del Modelo
            </h3>
            <p style="margin-bottom:16px;color:var(--gray-600);">El entrenamiento es el proceso donde el modelo "aprende" de los datos. Estos son los pasos:</p>

            <ol class="step-list">
                <li>
                    <strong>Recolección de datos:</strong> Se obtienen los datos históricos de estudiantes con sus horas de estudio, calificaciones y decisión de continuar.
                </li>
                <li>
                    <strong>Preparación de datos:</strong> Se organizan los datos en características (X = horas de estudio) y etiquetas (y = aprobado 0/1 para clasificación, o calificación para regresión).
                </li>
                <li>
                    <strong>Inicialización de parámetros:</strong> Se asignan valores iniciales a los pesos (w) y sesgo (b) del modelo, generalmente comenzando en 0 o valores aleatorios pequeños.
                </li>
                <li>
                    <strong>Propagación hacia adelante:</strong> Se calcula la predicción del modelo con los parámetros actuales usando la función de hipótesis correspondiente.
                </li>
                <li>
                    <strong>Cálculo del costo:</strong> Se mide el error entre las predicciones y los valores reales usando la función de costo (ECM para regresión lineal, entropía cruzada para logística).
                </li>
                <li>
                    <strong>Retropropagación:</strong> Se calcula el gradiente (derivada) del costo con respecto a cada parámetro para saber en qué dirección ajustarlos.
                </li>
                <li>
                    <strong>Actualización de parámetros:</strong> Se ajustan los pesos y el sesgo usando el descenso por gradiente: parámetro := parámetro - α × gradiente.
                </li>
                <li>
                    <strong>Repetición:</strong> Se repiten los pasos 4-6 durante 5000 iteraciones hasta minimizar el costo.
                </li>
            </ol>

            <div class="example-box mt-16" style="border-left-color:var(--primary);">
                <strong>Visualización del aprendizaje:</strong> En la pestaña "Entrenamiento" podrás ver:
                <ul style="margin-top:8px;padding-left:20px;">
                    <li>Cómo la línea de regresión se ajusta a los datos</li>
                    <li>Cómo la curva sigmoide separa aprobados de reprobados</li>
                    <li>Cómo la función de costo disminuye con cada iteración</li>
                </ul>
            </div>
        </div>
    `;
}
