// Función para iniciar la animación y reproducir el sonido durante el ciclo
function startBlinkingAndMoving() {
    const messageElement = document.getElementById('message'); 
    const soundElement = document.getElementById('sound'); 

    // Activa las animaciones
    messageElement.classList.add('blinking');

    // Reproduce el sonido
    soundElement.currentTime = 0; 
    soundElement.play(); 

    // Asegura que el sonido dure durante la animación
    setTimeout(() => {
        soundElement.pause(); 
    }, 10000); 
}

// Llama a la función cuando la página se carga
window.onload = startBlinkingAndMoving;


