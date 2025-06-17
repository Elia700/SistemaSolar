# Sistema Solar Interactivo en HTML, CSS y JavaScript

Este proyecto representa una simulación visual del Sistema Solar usando tecnologías web. Los planetas orbitan el Sol, pueden ser movidos manualmente y colisionan si se tocan, generando una animación de destrucción.

---

## Características

- Simulación visual del sistema solar.
- Órbitas animadas de todos los planetas conocidos.
- Etiquetas flotantes con el nombre de cada planeta.
- Formulario para agregar nuevos planetas con nombre y distancia.
- Puedes arrastrar y mover los planetas con el mouse.
- **Colisiones entre planetas generan una animación de explosión.**
- Estilo visual estético y responsivo.

---
##Tecnologías utilizadas

- **HTML5** – estructura de la interfaz.
- **CSS3** – estilos, animaciones y diseño visual.
- **JavaScript (Vanilla)** – lógica de órbitas, colisiones y movimiento.

---

## Estructura del proyecto

```
/sistema-solar
│
├── index.html        # Página principal
├── styles.css        # Estilos del sistema solar
├── script.js         # Lógica de animación y colisiones
└── README.md         # Documentación del proyecto
```

---

## Lógica de colisiones

- Cada planeta gira sobre su órbita con movimiento circular continuo.
- Si arrastras un planeta y lo sueltas cerca de otro, se detecta colisión por proximidad.
- Ambos planetas colisionados desaparecen con una animación de escala y desvanecimiento.

---

## Cómo usar

1. Clona este repositorio:

```bash
git clone https://github.com/tu-usuario/sistema-solar.git
```

2. Abre el archivo `index.html` en tu navegador.

3. Interactúa:

- Mira cómo orbitan los planetas.
- Arrastra uno para moverlo.
- Agrégalos o colisiónalos y observa cómo explotan.

---

## Mejoras posibles

- Agregar sonidos de colisión.
- Añadir satélites naturales (lunas).
- Exportar como widget o usar en sitios educativos.
- Incorporar datos reales como velocidad orbital o temperatura.

---

## Licencia

Este proyecto está licenciado bajo la MIT License.

---

## Autor

**Elias Sebastian Poma Granda** – [@Elia700](https://github.com/Elia700)  
Proyecto académico y visual para fines educativos e interactivos.
