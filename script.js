const sistema = document.querySelector('.sistema-solar');
let contador = 0;

const ESCALA_TAMANO = {
    mercurio: 8,
    venus: 12,
    tierra: 13,
    marte: 10,
    jupiter: 26,
    saturno: 24,
    urano: 18,
    neptuno: 17,
    pluton: 7
};

const colores = {
    mercurio: "#bfb8aa",
    venus: "#c9aa88",
    tierra: "#3f87f5",
    marte: "#b55030",
    jupiter: "#e3b56b",
    saturno: "#c7b273",
    urano: "#92e3f5",
    neptuno: "#456ff5",
    pluton: "#aaaaaa"
};

const planetasIniciales = [
    { nombre: "Mercurio", distancia: 0.5 },
    { nombre: "Venus", distancia: 4 },
    { nombre: "Tierra", distancia: 15 },
    { nombre: "Marte", distancia: 50 },
    { nombre: "Júpiter", distancia: 200 },
    { nombre: "Saturno", distancia: 600 },
    { nombre: "Urano", distancia: 2000 },
    { nombre: "Neptuno", distancia: 5000 },
    { nombre: "Plutón", distancia: 10000 }
];

function calcularRadioVisual(distancia) {
    const base = 50;
    const factor = Math.log10(distancia + 1);
    return base + factor * 55;
}

function crearOrbitaYPlaneta(nombre, distancia, color = "#fff", tamano = 10) {
    const radio = calcularRadioVisual(distancia);
    const orbita = document.createElement('div');
    orbita.className = 'orbita';
    orbita.style.width = `${radio * 2}px`;
    orbita.style.height = `${radio * 2}px`;
    orbita.style.left = `calc(50% - ${radio}px)`;
    orbita.style.top = `calc(50% - ${radio}px)`;

    const planeta = document.createElement('div');
    planeta.className = 'planeta';
    planeta.title = nombre;
    planeta.style.width = `${tamano}px`;
    planeta.style.height = `${tamano}px`;
    planeta.style.background = color;
    planeta.dataset.radio = radio;
    planeta.dataset.angulo = Math.random() * 2 * Math.PI;

    const label = document.createElement('span');
    label.className = 'nombre-planeta';
    label.textContent = nombre;
    planeta.appendChild(label);
    orbita.appendChild(planeta);
    sistema.appendChild(orbita);

    planeta.addEventListener('mousedown', (e) => iniciarArrastre(e, planeta));
}

function iniciarArrastre(e, planeta) {
    planeta.classList.add('dragging');

    const onMove = (ev) => {
        const rect = sistema.getBoundingClientRect();
        const x = ev.clientX - rect.left;
        const y = ev.clientY - rect.top;
        planeta.style.left = `${x}px`;
        planeta.style.top = `${y}px`;
    };

    const onUp = () => {
        planeta.classList.remove('dragging');
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
}

function animarOrbitas() {
    const planetas = document.querySelectorAll('.planeta:not(.dragging)');
    planetas.forEach(planeta => {
        const orbita = planeta.closest('.orbita');
        if (!orbita) return;

        let angulo = parseFloat(planeta.dataset.angulo);
        const radio = parseFloat(planeta.dataset.radio);
        angulo += 0.005;
        planeta.dataset.angulo = angulo;

        const x = radio + Math.cos(angulo) * radio;
        const y = radio + Math.sin(angulo) * radio;
        planeta.style.left = `${x}px`;
        planeta.style.top = `${y}px`;
    });

    detectarColisiones();
    requestAnimationFrame(animarOrbitas);
}

function detectarColisiones() {
    const planetas = [...document.querySelectorAll('.planeta')];
    for (let i = 0; i < planetas.length; i++) {
        for (let j = i + 1; j < planetas.length; j++) {
            const a = planetas[i].getBoundingClientRect();
            const b = planetas[j].getBoundingClientRect();
            const dx = a.left - b.left;
            const dy = a.top - b.top;
            const distancia = Math.sqrt(dx * dx + dy * dy);
            const rA = a.width / 2;
            const rB = b.width / 2;

            if (distancia < rA + rB) {
                destruir(planetas[i]);
                destruir(planetas[j]);
            }
        }
    }
}

function destruir(planeta) {
    if (planeta.classList.contains('destruido')) return;
    planeta.classList.add('destruido');
    setTimeout(() => {
        const orbita = planeta.closest('.orbita');
        if (orbita) orbita.remove();
    }, 500);
}

// Iniciar planetas
planetasIniciales.forEach((p) => {
    const clave = p.nombre.toLowerCase();
    const color = colores[clave] || "#ffffff";
    const tamano = ESCALA_TAMANO[clave] || 10;
    crearOrbitaYPlaneta(p.nombre, p.distancia, color, tamano);
    contador++;
});

// Formulario
document.getElementById('form-agregar-planeta').addEventListener('submit', function (event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const distancia = parseFloat(document.getElementById('distancia').value);
    const clave = nombre.toLowerCase();
    const color = colores[clave] || "#ffffff";
    const tamano = 12;
    crearOrbitaYPlaneta(nombre, distancia, color, tamano);
    contador++;
    event.target.reset();
});

// Animación global
animarOrbitas();