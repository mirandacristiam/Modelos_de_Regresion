function renderPrueba() {
    const container = document.getElementById('prueba-content');
    container.innerHTML = `
        <div class="section-header">
            <h2>Probar el Modelo</h2>
            <p>Ingresa los datos de un estudiante para predecir si aprobará o reprobará la materia</p>
        </div>

        <div class="card">
            <h3>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 2h6v4H9z"/><path d="M12 14v4"/><path d="M12 10v.01"/></svg>
                Datos del Estudiante
            </h3>

            <div class="form-row">
                <div class="form-group">
                    <label>Nombre del Estudiante</label>
                    <input type="text" class="form-control" id="test-nombre" placeholder="Ej: María García">
                </div>
                <div class="form-group">
                    <label>Horas de Estudio</label>
                    <input type="number" class="form-control" id="test-horas" placeholder="Ej: 28" min="0" step="0.5">
                </div>
            </div>
            <div class="btn-group mt-8">
                <button class="btn btn-primary" id="btn-predict">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                    Predecir
                </button>
                <button class="btn btn-outline" id="btn-ejemplo1">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1010 10"/><path d="M12 12l3-9"/></svg>
                    Ejemplo 1: 12 horas
                </button>
                <button class="btn btn-outline" id="btn-ejemplo2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1010 10"/><path d="M12 12l3-9"/></svg>
                    Ejemplo 2: 38 horas
                </button>
            </div>
        </div>

        <div id="test-resultado" style="display:none;">
            <div class="card">
                <h3>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
                    Resultado de la Predicción
                </h3>

                <div id="resultado-card" class="result-card">
                    <div class="result-icon" id="result-icon">📘</div>
                    <div class="result-label" id="result-label">-</div>
                    <div class="result-probability" id="result-prob">-</div>
                    <div class="result-detail" id="result-detail">-</div>
                </div>

                <div id="resultado-detalles" class="mt-16" style="display:grid;grid-template-columns:1fr 1fr;gap:16px;"></div>
            </div>

            <div class="card">
                <h3>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 17a4 4 0 01-4-4 4 4 0 014-4"/><path d="M19 9a4 4 0 014 4 4 4 0 01-4 4"/><path d="M8 12h8"/></svg>
                    Regresión Logística: Curva Sigmoide
                </h3>
                <div id="chart-prediccion" class="chart-container"></div>
            </div>

            <div class="card">
                <h3>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M19 9l-5 5-4-4-3 3"/></svg>
                    Regresión Lineal: Calificación Estimada
                </h3>
                <div id="chart-lineal-prediccion" class="chart-container"></div>
                <p style="font-size:13px;color:var(--gray-600);margin-top:8px;" id="lineal-pred-ecuacion"></p>
            </div>

        </div>

        <div id="test-sin-modelo" class="card" style="display:none;">
            <div class="alert alert-warning">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px;flex-shrink:0;"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
                <span>No hay modelos entrenados. Ve a la pestaña <strong>Entrenamiento</strong> y entrena los modelos primero.</span>
            </div>
        </div>
    `;

    document.getElementById('test-horas').addEventListener('keydown', function(e) {
        if (e.key === 'Enter') predecir();
    });

    document.getElementById('btn-predict').addEventListener('click', predecir);
    document.getElementById('btn-ejemplo1').addEventListener('click', () => cargarEjemplo(12, 'Carlos Mendoza'));
    document.getElementById('btn-ejemplo2').addEventListener('click', () => cargarEjemplo(38, 'Laura Torres'));

    if (!modeloTenido) {
        document.getElementById('test-sin-modelo').style.display = 'block';
        document.getElementById('btn-predict').disabled = true;
    } else {
        document.getElementById('test-sin-modelo').style.display = 'none';
        document.getElementById('btn-predict').disabled = false;
    }
}

function cargarEjemplo(horas, nombre) {
    document.getElementById('test-nombre').value = nombre;
    document.getElementById('test-horas').value = horas;
    predecir();
}

function predecir() {
    if (!modeloTenido) {
        alert('Primero debes entrenar los modelos en la pestaña Entrenamiento.');
        return;
    }

    const nombre = document.getElementById('test-nombre').value.trim();
    const horas = parseFloat(document.getElementById('test-horas').value);

    if (!nombre) { alert('Ingresa el nombre del estudiante.'); return; }
    if (isNaN(horas) || horas < 0) { alert('Ingresa horas de estudio válidas.'); return; }

    const resultadoLog = modeloLogistico.predictSingle([horas]);
    let califPredicha = modeloLineal.predict(horas);
    califPredicha = Math.max(0, Math.min(5, califPredicha));
    const esAprobado = resultadoLog.prediccion === 1;

    const resultadoDiv = document.getElementById('test-resultado');
    resultadoDiv.style.display = 'block';

    const card = document.getElementById('resultado-card');
    const icon = document.getElementById('result-icon');
    const label = document.getElementById('result-label');
    const prob = document.getElementById('result-prob');
    const detail = document.getElementById('result-detail');

    card.className = `result-card ${esAprobado ? 'aprobado' : 'reprobado'}`;
    icon.textContent = esAprobado ? '✅' : '❌';
    label.textContent = esAprobado ? 'APROBADO' : 'REPROBADO';
    prob.textContent = `Probabilidad de aprobar (Logística): ${(resultadoLog.probabilidad * 100).toFixed(2)}%`;
    detail.textContent = `Estudiante: ${nombre} | Horas estudiadas: ${horas} | Calificación estimada: ${califPredicha.toFixed(2)}`;

    document.getElementById('resultado-detalles').innerHTML = `
        <div class="metric-card">
            <div class="metric-value">${horas}</div>
            <div class="metric-label">Horas de Estudio</div>
        </div>
        <div class="metric-card">
            <div class="metric-value">${califPredicha.toFixed(2)}</div>
            <div class="metric-label">Calificación Estimada</div>
        </div>
        <div class="metric-card">
            <div class="metric-value">${(resultadoLog.probabilidad * 100).toFixed(2)}%</div>
            <div class="metric-label">Probabilidad de Aprobar</div>
        </div>
        <div class="metric-card">
            <div class="metric-value" style="color:${esAprobado ? '#28A745' : '#DC3545'}">${esAprobado ? 'Sí' : 'No'}</div>
            <div class="metric-label">¿Aprueba la materia?</div>
        </div>
    `;

    graficarPrediccion(horas, resultadoLog.probabilidad, esAprobado);
    graficarLinealPrediccion(horas, califPredicha, nombre);

    resultadoDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

let chartPrediccion = null;

function graficarPrediccion(horasUsuario, probUsuario, esAprobado) {
    const container = document.getElementById('chart-prediccion');
    if (chartPrediccion) chartPrediccion.dispose();

    const datosEntrenamiento = gestorDatos.datos;
    const todasHoras = datosEntrenamiento.map(d => d.horas);
    const xMin = Math.min(0, Math.min(...todasHoras) - 2);
    const xMax = Math.max(...todasHoras) + 5;

    const curvaX = [];
    const curvaY = [];
    for (let x = xMin; x <= xMax; x += 0.2) {
        const p = modeloLogistico.predictSingle([x]);
        curvaX.push(x);
        curvaY.push(p.probabilidad);
    }

    const scatterData = datosEntrenamiento.map(d => ({
        name: d.estudiante,
        value: [d.horas, d.aprobado],
        status: d.aprobado
    }));

    chartPrediccion = echarts.init(container);
    chartPrediccion.setOption({
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                if (params.seriesType === 'scatter' && params.seriesName !== 'Tu predicción') {
                    const lbl = params.data.status ? 'Aprobado' : 'Reprobado';
                    return `<strong>${params.data.name}</strong><br/>Horas: ${params.value[0]}<br/>${lbl}`;
                }
                if (params.seriesName === 'Tu predicción') {
                    return `<strong>${document.getElementById('test-nombre').value}</strong><br/>Horas: ${params.value[0]}<br/>Probabilidad: ${(params.value[1] * 100).toFixed(1)}%`;
                }
                return `Horas: ${params.data[0]}<br/>Prob: ${(params.data[1] * 100).toFixed(1)}%`;
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
            name: 'Probabilidad',
            nameLocation: 'center',
            nameGap: 40,
            type: 'value',
            min: -0.1,
            max: 1.1
        },
        series: [
            {
                name: 'Datos entrenamiento',
                type: 'scatter',
                data: scatterData,
                symbolSize: 12,
                itemStyle: {
                    color: function(p) { return p.data.status ? '#28A745' : '#DC3545'; },
                    borderColor: function(p) { return p.data.status ? '#1E7E34' : '#BD2130'; },
                    borderWidth: 1
                },
                label: {
                    show: true,
                    position: 'top',
                    formatter: function(p) { return p.data.name; },
                    fontSize: 9,
                    color: '#6C757D'
                }
            },
            {
                name: 'Curva Sigmoide',
                type: 'line',
                data: curvaX.map((x, i) => [x, curvaY[i]]),
                smooth: true,
                symbol: 'none',
                lineStyle: { color: '#1565C0', width: 2 }
            },
            {
                name: 'Umbral 0.5',
                type: 'line',
                data: [[xMin, 0.5], [xMax, 0.5]],
                symbol: 'none',
                lineStyle: { color: '#FFC107', width: 2, type: 'dashed' }
            },
            {
                name: 'Tu predicción',
                type: 'scatter',
                data: [{ name: document.getElementById('test-nombre').value, value: [horasUsuario, probUsuario] }],
                symbolSize: 22,
                symbol: 'pin',
                itemStyle: {
                    color: esAprobado ? '#28A745' : '#DC3545',
                    borderColor: '#212529',
                    borderWidth: 2
                },
                label: {
                    show: true,
                    position: 'top',
                    formatter: function(p) { return p.data.name; },
                    fontSize: 12,
                    fontWeight: 'bold',
                    color: '#212529'
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

let chartLinealPred = null;

function graficarLinealPrediccion(horasUsuario, califPredicha, nombreUsuario) {
    const container = document.getElementById('chart-lineal-prediccion');
    if (chartLinealPred) chartLinealPred.dispose();

    const datos = gestorDatos.datos;
    const todasHoras = datos.map(d => d.horas);
    const xMin = Math.min(0, Math.min(...todasHoras) - 2);
    const xMax = Math.max(...todasHoras) + 5;

    const lineX = [];
    const lineY = [];
    for (let x = xMin; x <= xMax; x += 0.5) {
        lineX.push(x);
        lineY.push(modeloLineal.predict(x));
    }

    const scatterData = datos.map(d => ({
        name: d.estudiante,
        value: [d.horas, d.calificacion]
    }));

    chartLinealPred = echarts.init(container);
    chartLinealPred.setOption({
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                if (params.seriesType === 'scatter' && params.seriesName !== 'Tu predicción') {
                    return `<strong>${params.data.name}</strong><br/>Horas: ${params.value[0]}<br/>Calificación: ${params.value[1]}`;
                }
                if (params.seriesName === 'Tu predicción') {
                    return `<strong>${nombreUsuario}</strong><br/>Horas: ${params.value[0]}<br/>Calif. estimada: ${params.value[1].toFixed(2)}`;
                }
                return `Horas: ${params.data[0]}<br/>Calif: ${params.data[1].toFixed(2)}`;
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
                name: 'Datos entrenamiento',
                type: 'scatter',
                data: scatterData,
                symbolSize: 12,
                itemStyle: {
                    color: '#1565C0',
                    borderColor: '#0D47A1',
                    borderWidth: 1
                },
                label: {
                    show: true,
                    position: 'top',
                    formatter: function(p) { return p.data.name; },
                    fontSize: 9,
                    color: '#6C757D'
                }
            },
            {
                name: 'Regresión Lineal',
                type: 'line',
                data: lineX.map((x, i) => [x, lineY[i]]),
                smooth: false,
                symbol: 'none',
                lineStyle: { color: '#DC3545', width: 2, type: 'dashed' }
            },
            {
                name: 'Umbral Aprobado (3.0)',
                type: 'line',
                data: [[xMin, 3.0], [xMax, 3.0]],
                symbol: 'none',
                lineStyle: { color: '#FFC107', width: 2, type: 'dashed' }
            },
            {
                name: 'Tu predicción',
                type: 'scatter',
                data: [{ name: nombreUsuario, value: [horasUsuario, califPredicha] }],
                symbolSize: 22,
                symbol: 'pin',
                itemStyle: {
                    color: califPredicha >= 3.0 ? '#28A745' : '#DC3545',
                    borderColor: '#212529',
                    borderWidth: 2
                },
                label: {
                    show: true,
                    position: 'top',
                    formatter: califPredicha >= 3.0 ? 'Aprobado ✓' : 'Reprobado ✗',
                    fontSize: 12,
                    fontWeight: 'bold',
                    color: '#212529'
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

    document.getElementById('lineal-pred-ecuacion').textContent =
        `Ecuación: ${modeloLineal.getEquation()} | Calificación estimada: ${califPredicha.toFixed(2)} | ${califPredicha >= 3.0 ? '≥ 3.0 → Aprobado' : '< 3.0 → Reprobado'}`;
}


