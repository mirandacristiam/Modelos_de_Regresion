let gestorDatos = new GestorDatos();
let modeloLineal = new ModeloLineal();
let modeloLogistico = new ModeloLogistico();
let modeloTenido = false;
let chartLineal = null;
let chartLogistico = null;
let chartCostos = null;

function renderEntrenamiento() {
    const container = document.getElementById('entrenamiento-content');
    container.innerHTML = `
        <div class="section-header">
            <h2>Entrenamiento del Modelo</h2>
            <p>Carga los datos de estudiantes y entrena los modelos de regresión lineal y logística</p>
        </div>

        <div class="card">
            <h3>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>
                Cargar Datos
            </h3>

            <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:20px;">
                <div>
                    <p style="font-size:14px;color:var(--gray-600);margin-bottom:12px;">Opción 1: Cargar archivo CSV</p>
                    <div class="file-upload" id="csv-upload-area">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><path d="M17 8l-5-5-5 5"/><path d="M12 3v12"/></svg>
                        <p>Haz clic para seleccionar un archivo CSV</p>
                        <p style="font-size:12px;color:var(--gray-500);">El archivo debe tener: Estudiante, HorasEstudio, Calificacion, Aprobado</p>
                        <input type="file" id="csv-file-input" accept=".csv">
                    </div>
                </div>

                <div>
                    <p style="font-size:14px;color:var(--gray-600);margin-bottom:12px;">Opción 2: Ingresar manualmente</p>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Nombre del Estudiante</label>
                            <input type="text" class="form-control" id="input-nombre" placeholder="Ej: Carlos">
                        </div>
                        <div class="form-group">
                            <label>Horas de Estudio</label>
                            <input type="number" class="form-control" id="input-horas" placeholder="Ej: 25" min="0" step="0.5">
                        </div>
                    </div>
                    <div class="form-row" style="margin-top:0;">
                        <div class="form-group">
                            <label>Calificación (0-5)</label>
                            <input type="number" class="form-control" id="input-calificacion" placeholder="Ej: 3.5" min="0" max="5" step="0.1">
                        </div>
                        <div class="form-group" style="display:flex;align-items:flex-end;">
                            <button class="btn btn-primary" id="btn-agregar-dato" style="width:100%;">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
                                Agregar
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div style="display:flex;align-items:center;gap:12px;padding:12px 16px;background:var(--gray-100);border-radius:var(--radius);margin-bottom:16px;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:20px;height:20px;flex-shrink:0;color:var(--primary);"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>
                <span style="font-size:14px;color:var(--gray-700);">¿No tienes datos? Descarga el archivo CSV de ejemplo con 10 estudiantes:</span>
                <a href="data/estudiantes.csv" download="estudiantes.csv" class="btn btn-primary btn-sm" style="margin-left:auto;flex-shrink:0;">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px;"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>
                    Descargar CSV
                </a>
            </div>

            <div class="alert alert-info">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px;flex-shrink:0;"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                <span>Los datos cargados se mostrarán en la tabla de abajo. Luego podrás entrenar los modelos.</span>
            </div>
        </div>

        <div class="card" id="tabla-datos-card">
            <h3>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 3v18"/></svg>
                Datos Cargados
                <span id="contador-datos" style="font-size:13px;font-weight:400;color:var(--gray-500);margin-left:8px;">(0 registros)</span>
            </h3>
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Estudiante</th>
                            <th>Horas Estudio</th>
                            <th>Calificación</th>
                            <th>Aprobado</th>
                            <th style="width:80px;">Acción</th>
                        </tr>
                    </thead>
                    <tbody id="tabla-datos-body">
                        <tr>
                            <td colspan="6" style="text-align:center;color:var(--gray-500);padding:32px;">
                                <div class="empty-state">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:36px;height:36px;"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 3v18"/></svg>
                                    <p>No hay datos cargados. Carga un CSV o agrega datos manualmente.</p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="btn-group mt-8" id="acciones-entrenamiento" style="display:none;">
                <button class="btn btn-primary" id="btn-entrenar">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                    Entrenar Modelos
                </button>
                <button class="btn btn-danger" id="btn-limpiar-datos">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6"/><path d="M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
                    Limpiar Datos
                </button>
            </div>
        </div>

        <div id="resultados-entrenamiento" style="display:none;">
            <div class="card">
                <h3>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                    Resultados del Entrenamiento
                </h3>
                
                <div class="training-status success" id="status-entrenamiento">
                    <div class="spinner"></div>
                    <span class="status-text" id="status-texto">Modelos entrenados exitosamente</span>
                </div>

                <div class="metrics-grid" id="metricas-entrenamiento"></div>
            </div>

            <div class="card">
                <h3>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M19 9l-5 5-4-4-3 3"/></svg>
                    Regresión Lineal: Horas de Estudio vs Calificación
                </h3>
                <div id="chart-lineal" class="chart-container"></div>
                <p style="font-size:13px;color:var(--gray-600);margin-top:8px;" id="lineal-ecuacion"></p>
            </div>

            <div class="card">
                <h3>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 17a4 4 0 01-4-4 4 4 0 014-4"/><path d="M19 9a4 4 0 014 4 4 4 0 01-4 4"/><path d="M8 12h8"/></svg>
                    Regresión Logística: Curva Sigmoide de Probabilidad
                </h3>
                <div id="chart-logistico" class="chart-container"></div>
            </div>

            <div class="card">
                <h3>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                    Evolución de la Función de Costo
                </h3>
                <div id="chart-costos" class="chart-container"></div>
            </div>
        </div>
    `;

    document.getElementById('csv-upload-area').addEventListener('click', () => {
        document.getElementById('csv-file-input').click();
    });

    document.getElementById('csv-file-input').addEventListener('change', function(e) {
        const archivo = e.target.files[0];
        if (!archivo) return;

        const lector = new FileReader();
        lector.onload = function(event) {
            const texto = event.target.result;
            gestorDatos.cargarCSV(texto);
            actualizarTablaDatos();
        };
        lector.readAsText(archivo);
    });

    document.getElementById('btn-agregar-dato').addEventListener('click', agregarDatoManual);

    document.getElementById('input-calificacion').addEventListener('keydown', function(e) {
        if (e.key === 'Enter') agregarDatoManual();
    });
    document.getElementById('input-horas').addEventListener('keydown', function(e) {
        if (e.key === 'Enter') document.getElementById('input-calificacion').focus();
    });
    document.getElementById('input-nombre').addEventListener('keydown', function(e) {
        if (e.key === 'Enter') document.getElementById('input-horas').focus();
    });

    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-eliminar-dato')) {
            const index = parseInt(e.target.dataset.index);
            gestorDatos.eliminarDato(index);
            actualizarTablaDatos();
        }
    });

    document.getElementById('btn-entrenar').addEventListener('click', entrenarModelos);
    document.getElementById('btn-limpiar-datos').addEventListener('click', limpiarDatos);

    if (gestorDatos.cantidad() > 0) {
        actualizarTablaDatos();
    }
}

function agregarDatoManual() {
    const nombre = document.getElementById('input-nombre').value.trim();
    const horas = parseFloat(document.getElementById('input-horas').value);
    const calificacion = parseFloat(document.getElementById('input-calificacion').value);

    if (!nombre) { mostrarAlerta('entrenamiento-content', 'Ingresa el nombre del estudiante.', 'warning'); return; }
    if (isNaN(horas) || horas < 0) { mostrarAlerta('entrenamiento-content', 'Ingresa horas de estudio válidas.', 'warning'); return; }
    if (isNaN(calificacion) || calificacion < 0 || calificacion > 5) { mostrarAlerta('entrenamiento-content', 'La calificación debe estar entre 0 y 5.', 'warning'); return; }

    gestorDatos.agregarDato(nombre, horas, calificacion);
    actualizarTablaDatos();

    document.getElementById('input-nombre').value = '';
    document.getElementById('input-horas').value = '';
    document.getElementById('input-calificacion').value = '';
    document.getElementById('input-nombre').focus();
}

function actualizarTablaDatos() {
    const tbody = document.getElementById('tabla-datos-body');
    const contador = document.getElementById('contador-datos');
    const acciones = document.getElementById('acciones-entrenamiento');
    const datos = gestorDatos.datos;

    contador.textContent = `(${datos.length} registros)`;

    if (datos.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align:center;color:var(--gray-500);padding:32px;">
                    <div class="empty-state">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:36px;height:36px;"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 3v18"/></svg>
                        <p>No hay datos cargados. Carga un CSV o agrega datos manualmente.</p>
                    </div>
                </td>
            </tr>
        `;
        acciones.style.display = 'none';
        return;
    }

    acciones.style.display = 'flex';

    let html = '';
    datos.forEach((d, i) => {
        const badgeClass = d.aprobado ? 'badge-success' : 'badge-danger';
        const label = d.aprobado ? 'Aprobado' : 'Reprobado';
        html += `
            <tr>
                <td>${i + 1}</td>
                <td><strong>${d.estudiante}</strong></td>
                <td>${d.horas}</td>
                <td>${d.calificacion.toFixed(1)}</td>
                <td><span class="badge ${badgeClass}">${label}</span></td>
                <td><button class="btn btn-danger btn-sm btn-eliminar-dato" data-index="${i}">Eliminar</button></td>
            </tr>
        `;
    });
    tbody.innerHTML = html;
}

function limpiarDatos() {
    gestorDatos.limpiarDatos();
    actualizarTablaDatos();
    document.getElementById('resultados-entrenamiento').style.display = 'none';
    modeloTenido = false;
}

function entrenarModelos() {
    const datos = gestorDatos.datos;
    if (datos.length < 4) {
        mostrarAlerta('entrenamiento-content', 'Se necesitan al menos 4 registros para dividir en entrenamiento (80%) y prueba (20%).', 'warning');
        return;
    }

    const resultados = document.getElementById('resultados-entrenamiento');
    resultados.style.display = 'block';

    const status = document.getElementById('status-entrenamiento');
    const statusText = document.getElementById('status-texto');
    status.className = 'training-status';
    statusText.textContent = 'Dividiendo datos en entrenamiento (80%) y prueba (20%)...';

    const split = gestorDatos.splitData(0.8);

    setTimeout(() => {
        modeloLineal.fit(split.train.horas, split.train.yReg, 0.001, 5000);
        modeloLogistico.fit(split.train.X, split.train.yCls, 0.01, 5000);

        status.className = 'training-status success';
        statusText.textContent = 'Modelos entrenados exitosamente';
        modeloTenido = true;

        mostrarMetricas(split);
        graficarRegresionLineal(split);
        graficarRegresionLogistica(split);
        graficarCostos();

        document.getElementById('lineal-ecuacion').textContent =
            `Ecuación: ${modeloLineal.getEquation()} | R² (entrenamiento) = ${modeloLineal.getRSquared(split.train.horas, split.train.yReg).toFixed(4)} | R² (prueba) = ${modeloLineal.getRSquared(split.test.horas, split.test.yReg).toFixed(4)}`;
    }, 300);
}

function mostrarMetricas(split) {
    const { train, test } = split;

    const accTrain = modeloLogistico.getAccuracy(train.X, train.yCls);
    const accTest = modeloLogistico.getAccuracy(test.X, test.yCls);
    const r2Train = modeloLineal.getRSquared(train.horas, train.yReg);
    const r2Test = modeloLineal.getRSquared(test.horas, test.yReg);

    const cm = modeloLogistico.getConfusionMatrix(test.X, test.yCls);
    const precision = modeloLogistico.getPrecision(test.X, test.yCls);
    const recall = modeloLogistico.getRecall(test.X, test.yCls);
    const f1 = modeloLogistico.getF1Score(test.X, test.yCls);

    const w = modeloLogistico.weights[0];
    const b = modeloLogistico.bias;
    const m = modeloLineal.slope;
    const intercept = modeloLineal.intercept;

    document.getElementById('metricas-entrenamiento').innerHTML = `
        <div style="grid-column:1/-1;display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px;margin-bottom:16px;">
            <div class="metric-card">
                <div class="metric-value">${train.length}</div>
                <div class="metric-label">Entrenamiento (${(split.trainRatio * 100).toFixed(0)}%)</div>
            </div>
            <div class="metric-card">
                <div class="metric-value">${test.length}</div>
                <div class="metric-label">Prueba (${(split.testRatio * 100).toFixed(0)}%)</div>
            </div>
            <div class="metric-card">
                <div class="metric-value">${(accTrain * 100).toFixed(1)}%</div>
                <div class="metric-label">Precisión Log. (Train)</div>
            </div>
            <div class="metric-card">
                <div class="metric-value">${(accTest * 100).toFixed(1)}%</div>
                <div class="metric-label">Precisión Log. (Prueba)</div>
            </div>
            <div class="metric-card">
                <div class="metric-value">${r2Train.toFixed(4)}</div>
                <div class="metric-label">R² Lineal (Train)</div>
            </div>
            <div class="metric-card">
                <div class="metric-value">${r2Test.toFixed(4)}</div>
                <div class="metric-label">R² Lineal (Prueba)</div>
            </div>
        </div>

        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px;margin-bottom:16px;padding:16px;background:var(--primary-50);border-radius:var(--radius);">
            <div style="text-align:center;">
                <div style="font-size:13px;font-weight:600;color:var(--gray-700);margin-bottom:4px;">Matriz de Confusión</div>
                <table style="width:auto;margin:0 auto;font-size:13px;">
                    <tr><td style="padding:4px 8px;border:1px solid var(--gray-300);background:#D4EDDA;color:#155724;font-weight:600;">VP: ${cm.tp}</td><td style="padding:4px 8px;border:1px solid var(--gray-300);background:#F8D7DA;color:#721C24;">FP: ${cm.fp}</td></tr>
                    <tr><td style="padding:4px 8px;border:1px solid var(--gray-300);background:#F8D7DA;color:#721C24;">FN: ${cm.fn}</td><td style="padding:4px 8px;border:1px solid var(--gray-300);background:#D4EDDA;color:#155724;font-weight:600;">VN: ${cm.tn}</td></tr>
                </table>
            </div>
            <div style="text-align:center;">
                <div style="font-size:13px;font-weight:600;color:var(--gray-700);margin-bottom:4px;">Precisión</div>
                <div style="font-size:20px;font-weight:700;color:var(--primary);">${(precision * 100).toFixed(1)}%</div>
            </div>
            <div style="text-align:center;">
                <div style="font-size:13px;font-weight:600;color:var(--gray-700);margin-bottom:4px;">Recall</div>
                <div style="font-size:20px;font-weight:700;color:var(--primary);">${(recall * 100).toFixed(1)}%</div>
            </div>
            <div style="text-align:center;">
                <div style="font-size:13px;font-weight:600;color:var(--gray-700);margin-bottom:4px;">F1-Score</div>
                <div style="font-size:20px;font-weight:700;color:var(--primary);">${(f1 * 100).toFixed(1)}%</div>
            </div>
        </div>

        <div style="padding:16px;background:var(--gray-100);border-radius:var(--radius);">
            <div style="font-size:14px;font-weight:600;color:var(--gray-800);margin-bottom:8px;">Interpretación de los coeficientes</div>
            <div style="font-size:13px;color:var(--gray-700);line-height:1.7;">
                <strong>Regresión Lineal:</strong> Calificación = <strong>${m.toFixed(4)}</strong> &middot; horas + <strong>${intercept.toFixed(4)}</strong><br>
                &rarr; Por cada hora adicional de estudio, la calificación esperada <strong>${m >= 0 ? 'aumenta' : 'disminuye'} en ${Math.abs(m).toFixed(4)}</strong> puntos.<br>
                &rarr; Con 0 horas de estudio, la calificación esperada es <strong>${intercept.toFixed(2)}</strong>.<br><br>
                <strong>Regresión Logística:</strong> z = <strong>${w.toFixed(4)}</strong> &middot; horas + <strong>${b.toFixed(4)}</strong><br>
                &rarr; El coeficiente <strong>w = ${w.toFixed(4)}</strong> es positivo, lo que significa que <strong>a más horas de estudio, mayor probabilidad de aprobar</strong>.<br>
                &rarr; Cuando z = 0 &rarr; &sigma;(0) = 0.5 (punto de corte). Esto ocurre aproximadamente en <strong>${Math.abs(b / w).toFixed(1)} horas</strong>.
            </div>
        </div>
    `;
}

function graficarRegresionLineal(split) {
    const container = document.getElementById('chart-lineal');
    if (chartLineal) chartLineal.dispose();

    const todasHoras = [...split.train.horas, ...split.test.horas];
    const xMin = Math.min(...todasHoras) - 2;
    const xMax = Math.max(...todasHoras) + 2;
    const lineX = [];
    const lineY = [];
    for (let x = xMin; x <= xMax; x += 0.5) {
        lineX.push(x);
        lineY.push(modeloLineal.predict(x));
    }

    const datosTrain = split.train.horas.map((h, i) => ({
        name: split.train.nombres[i],
        value: [h, split.train.yReg[i]],
        itemStyle: { color: '#1565C0', borderColor: '#0D47A1' }
    }));

    const datosTest = split.test.horas.map((h, i) => ({
        name: split.test.nombres[i],
        value: [h, split.test.yReg[i]],
        itemStyle: { color: '#FF9800', borderColor: '#E65100' }
    }));

    chartLineal = echarts.init(container);
    chartLineal.setOption({
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                if (params.seriesType === 'scatter') {
                    return `<strong>${params.data.name}</strong><br/>Horas: ${params.value[0]}<br/>Calificación: ${params.value[1]}`;
                }
                return `Horas: ${params.data[0]}<br/>Calif. predicha: ${params.data[1].toFixed(2)}`;
            }
        },
        xAxis: {
            name: 'Horas de Estudio',
            nameLocation: 'center',
            nameGap: 30,
            type: 'value',
            min: xMin,
            max: xMax
        },
        yAxis: {
            name: 'Calificación',
            nameLocation: 'center',
            nameGap: 40,
            type: 'value',
            min: 0,
            max: 5.5
        },
        series: [
            {
                name: 'Entrenamiento',
                type: 'scatter',
                data: datosTrain,
                symbolSize: 14,
                itemStyle: {
                    color: '#1565C0',
                    borderColor: '#0D47A1',
                    borderWidth: 1
                },
                label: {
                    show: true,
                    position: 'top',
                    formatter: function(p) { return p.data.name; },
                    fontSize: 10,
                    color: '#495057'
                }
            },
            {
                name: 'Prueba',
                type: 'scatter',
                data: datosTest,
                symbolSize: 16,
                itemStyle: {
                    color: '#FF9800',
                    borderColor: '#E65100',
                    borderWidth: 2
                },
                label: {
                    show: true,
                    position: 'top',
                    formatter: function(p) { return p.data.name + ' (test)'; },
                    fontSize: 10,
                    color: '#E65100',
                    fontWeight: 'bold'
                }
            },
            {
                name: 'Regresión Lineal',
                type: 'line',
                data: lineX.map((x, i) => [x, lineY[i]]),
                smooth: false,
                symbol: 'none',
                lineStyle: {
                    color: '#DC3545',
                    width: 2,
                    type: 'dashed'
                }
            }
        ],
        grid: {
            left: 60,
            right: 30,
            top: 30,
            bottom: 50
        }
    });
}

function graficarRegresionLogistica(split) {
    const container = document.getElementById('chart-logistico');
    if (chartLogistico) chartLogistico.dispose();

    const todasHoras = [...split.train.horas, ...split.test.horas];
    const xMin = Math.min(...todasHoras) - 2;
    const xMax = Math.max(...todasHoras) + 2;

    const curvaX = [];
    const curvaY = [];
    for (let x = xMin; x <= xMax; x += 0.2) {
        const prob = modeloLogistico.predictSingle([x]);
        curvaX.push(x);
        curvaY.push(prob.probabilidad);
    }

    const datosTrain = split.train.horas.map((h, i) => ({
        name: split.train.nombres[i],
        value: [h, split.train.yCls[i]],
        status: split.train.yCls[i]
    }));

    const datosTest = split.test.horas.map((h, i) => ({
        name: split.test.nombres[i],
        value: [h, split.test.yCls[i]],
        status: split.test.yCls[i],
        symbolSize: 18
    }));

    chartLogistico = echarts.init(container);
    chartLogistico.setOption({
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                if (params.seriesType === 'scatter') {
                    const label = params.data.status ? 'Aprobado (1)' : 'Reprobado (0)';
                    return `<strong>${params.data.name}</strong><br/>Horas: ${params.value[0]}<br/>Estado: ${label}`;
                }
                return `Horas: ${params.data[0]}<br/>Probabilidad: ${(params.data[1] * 100).toFixed(1)}%`;
            }
        },
        xAxis: {
            name: 'Horas de Estudio',
            nameLocation: 'center',
            nameGap: 30,
            type: 'value',
            min: xMin,
            max: xMax
        },
        yAxis: {
            name: 'Probabilidad / Estado',
            nameLocation: 'center',
            nameGap: 40,
            type: 'value',
            min: -0.1,
            max: 1.1
        },
        series: [
            {
                name: 'Entrenamiento',
                type: 'scatter',
                data: datosTrain,
                symbolSize: 14,
                itemStyle: {
                    color: function(p) {
                        return p.data.status ? '#28A745' : '#DC3545';
                    },
                    borderColor: function(p) {
                        return p.data.status ? '#1E7E34' : '#BD2130';
                    },
                    borderWidth: 1
                },
                label: {
                    show: true,
                    position: 'top',
                    formatter: function(p) {
                        return p.data.name + ' (' + (p.data.status ? '1' : '0') + ')';
                    },
                    fontSize: 10,
                    color: '#495057'
                }
            },
            {
                name: 'Prueba',
                type: 'scatter',
                data: datosTest,
                symbolSize: 18,
                itemStyle: {
                    color: function(p) {
                        return p.data.status ? '#28A745' : '#DC3545';
                    },
                    borderColor: '#FF9800',
                    borderWidth: 3
                },
                label: {
                    show: true,
                    position: 'top',
                    formatter: function(p) {
                        return p.data.name + ' (test)';
                    },
                    fontSize: 10,
                    color: '#E65100',
                    fontWeight: 'bold'
                }
            },
            {
                name: 'Curva Sigmoide',
                type: 'line',
                data: curvaX.map((x, i) => [x, curvaY[i]]),
                smooth: true,
                symbol: 'none',
                lineStyle: {
                    color: '#1565C0',
                    width: 3
                },
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0, y: 0, x2: 0, y2: 1,
                        colorStops: [
                            { offset: 0, color: 'rgba(21,101,192,0.25)' },
                            { offset: 1, color: 'rgba(21,101,192,0.02)' }
                        ]
                    }
                }
            },
            {
                name: 'Umbral 0.5',
                type: 'line',
                data: [[xMin, 0.5], [xMax, 0.5]],
                symbol: 'none',
                lineStyle: {
                    color: '#FFC107',
                    width: 2,
                    type: 'dashed'
                }
            }
        ],
        grid: {
            left: 60,
            right: 30,
            top: 30,
            bottom: 50
        }
    });
}

function graficarCostos() {
    const container = document.getElementById('chart-costos');
    if (chartCostos) chartCostos.dispose();

    const dataLineal = modeloLineal.costHistory;
    const dataLog = modeloLogistico.costHistory;

    chartCostos = echarts.init(container);
    chartCostos.setOption({
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['Costo Reg. Lineal (ECM)', 'Costo Reg. Logística (Entropía Cruzada)'],
            bottom: 0
        },
        xAxis: {
            name: 'Iteraciones',
            nameLocation: 'center',
            nameGap: 30,
            type: 'value'
        },
        yAxis: {
            name: 'Costo',
            nameLocation: 'center',
            nameGap: 45,
            type: 'value'
        },
        series: [
            {
                name: 'Costo Reg. Lineal (ECM)',
                type: 'line',
                data: dataLineal.map(d => [d.iteration, d.cost]),
                smooth: true,
                symbol: 'none',
                lineStyle: { color: '#DC3545', width: 2 }
            },
            {
                name: 'Costo Reg. Logística (Entropía Cruzada)',
                type: 'line',
                data: dataLog.map(d => [d.iteration, d.cost]),
                smooth: true,
                symbol: 'none',
                lineStyle: { color: '#1565C0', width: 2 }
            }
        ],
        grid: {
            left: 60,
            right: 30,
            top: 20,
            bottom: 50
        }
    });
}

function mostrarAlerta(containerId, mensaje, tipo = 'info') {
    const container = document.getElementById(containerId);
    const alerta = document.createElement('div');
    alerta.className = `alert alert-${tipo}`;
    alerta.innerHTML = `<span>${mensaje}</span>`;
    alerta.style.marginBottom = '16px';
    container.insertBefore(alerta, container.firstChild.nextSibling);
    setTimeout(() => alerta.remove(), 4000);
}
