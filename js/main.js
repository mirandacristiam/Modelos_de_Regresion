document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    renderInicio();
    renderTeoria();
    renderEntrenamiento();
    renderPrueba();
    renderIntegrantes();
    renderDetalles();
    mostrarSeccion('inicio');
});

function initNavigation() {
    const links = document.querySelectorAll('.navbar-menu a');
    const toggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.navbar-menu');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.dataset.section;
            mostrarSeccion(section);
            if (window.innerWidth <= 768) {
                menu.classList.remove('open');
            }
        });
    });

    if (toggle) {
        toggle.addEventListener('click', function() {
            menu.classList.toggle('open');
        });
    }

    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768 && !e.target.closest('.navbar')) {
            menu.classList.remove('open');
        }
    });
}

function mostrarSeccion(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.navbar-menu a').forEach(a => a.classList.remove('active'));

    const section = document.getElementById(`section-${id}`);
    if (section) section.classList.add('active');

    const link = document.querySelector(`.navbar-menu a[data-section="${id}"]`);
    if (link) link.classList.add('active');

    if (id === 'prueba' && typeof renderPrueba === 'function') {
        renderPrueba();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderInicio() {
    const container = document.getElementById('inicio-content');
    container.innerHTML = `
        <div class="hero">
            <h1>Modelos de Regresión</h1>
            <p>Predicción del rendimiento académico utilizando regresión lineal y logística con inteligencia artificial</p>
            <div class="hero-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                Inteligencia Artificial & Machine Learning - 2026
            </div>
            <div class="feature-grid">
                <div class="feature-card">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
                    <h3>Fundamentos Teóricos</h3>
                    <p>Explora las fórmulas y conceptos de regresión lineal y logística con ejemplos prácticos.</p>
                </div>
                <div class="feature-card">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                    <h3>Entrenamiento</h3>
                    <p>Carga datos de estudiantes y entrena los modelos para aprender de los patrones.</p>
                </div>
                <div class="feature-card">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
                    <h3>Predicciones</h3>
                    <p>Ingresa horas de estudio y obtén predicciones precisas de rendimiento académico.</p>
                </div>
                <div class="feature-card">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M19 9l-5 5-4-4-3 3"/></svg>
                    <h3>Visualizaciones</h3>
                    <p>Gráficos dinámicos interactivos que muestran el comportamiento de los modelos.</p>
                </div>
            </div>
        </div>

        <div class="card">
            <h3>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
               ¿Cómo funciona este aplicativo?
            </h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:16px;">
                <div style="text-align:center;padding:16px;">
                    <div style="width:40px;height:40px;border-radius:50%;background:var(--primary-light);color:var(--primary);display:flex;align-items:center;justify-content:center;margin:0 auto 8px;font-weight:700;font-size:18px;">1</div>
                    <p style="font-size:14px;color:var(--gray-600);">Carga los datos de estudiantes con sus horas de estudio y calificaciones.</p>
                </div>
                <div style="text-align:center;padding:16px;">
                    <div style="width:40px;height:40px;border-radius:50%;background:var(--primary-light);color:var(--primary);display:flex;align-items:center;justify-content:center;margin:0 auto 8px;font-weight:700;font-size:18px;">2</div>
                    <p style="font-size:14px;color:var(--gray-600);">Entrena los modelos de regresión lineal y logística con los datos.</p>
                </div>
                <div style="text-align:center;padding:16px;">
                    <div style="width:40px;height:40px;border-radius:50%;background:var(--primary-light);color:var(--primary);display:flex;align-items:center;justify-content:center;margin:0 auto 8px;font-weight:700;font-size:18px;">3</div>
                    <p style="font-size:14px;color:var(--gray-600);">Visualiza los resultados con gráficos interactivos dinámicos.</p>
                </div>
                <div style="text-align:center;padding:16px;">
                    <div style="width:40px;height:40px;border-radius:50%;background:var(--primary-light);color:var(--primary);display:flex;align-items:center;justify-content:center;margin:0 auto 8px;font-weight:700;font-size:18px;">4</div>
                    <p style="font-size:14px;color:var(--gray-600);">Prueba el modelo con nuevos estudiantes para predecir su rendimiento.</p>
                </div>
            </div>
        </div>
    `;
}
