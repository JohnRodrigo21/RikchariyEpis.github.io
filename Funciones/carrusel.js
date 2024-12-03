const images = [
    '../logosConectar/propuestas.png', // Imagen 1
    '../logosConectar/objetivos.png', // Imagen 2
    '../logosConectar/quienessomos.png'  // Imagen 2
];

let currentIndex = 0;

function changeImage() {
    const carrusel = document.getElementById('carrusel');
    carrusel.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
}

// Cambiar imagen cada 1 segundo
setInterval(changeImage, 5000);

// Inicializar con la primera imagen
changeImage();
