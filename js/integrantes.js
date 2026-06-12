const integrantes = [
    { nombre: 'Cristian Miranda', rol: 'Estudiante de octavo semestre de ingeniería informática', desc: '' },
    { nombre: 'Antonio Bravo', rol: 'Estudiante de octavo semestre de ingeniería informática', desc: '' },
    { nombre: 'Brayan Amaya', rol: 'Estudiante de octavo semestre de ingeniería informática', desc: '' },
    { nombre: 'Juan Camilo Noguera', rol: 'Estudiante de octavo semestre de ingeniería informática', desc: '' }
];

function renderIntegrantes() {
    const container = document.getElementById('integrantes-content');
    
    let cards = '';
    integrantes.forEach(m => {
        const primerNombre = m.nombre.split(' ')[0];
        cards += `
            <div class="team-card">
                <div class="team-photo-wrapper">
                    <img src="images/${primerNombre}.png" alt="${m.nombre}" class="team-photo">
                </div>
                <h4>${m.nombre}</h4>
                <div class="team-role">${m.rol}</div>
                <div class="team-desc">${m.desc}</div>
            </div>
        `;
    });

    container.innerHTML = `
        <div class="section-header">
            <h2>Integrantes del Proyecto</h2>
            <p>Equipo de desarrollo del modelo de predicción de rendimiento académico</p>
        </div>

        <div class="card">
            <h3>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
                Nuestro Equipo
            </h3>
            <div class="team-grid">
                ${cards}
            </div>
    `;
}
