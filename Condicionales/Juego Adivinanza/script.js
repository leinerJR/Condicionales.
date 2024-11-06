function juegoAdivinanza() {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1; 
    //En la parte de arriba tuve ayuda de mi hermano mayor, por que no entendi muy bien.
    let intentos = 0;
    let adivinanza = false;

   
    while (!adivinanza) {
       
        const suposicion = prompt('Adivina el número (entre 1 y 100):');
        const numeroAdivinado = parseInt(suposicion);

        if (isNaN(numeroAdivinado)) {
            //Y la IA me dijo que me faltaba esto.
            alert('Por favor ingresa un número válido.');
            continue;
        }

        intentos++;

        if (numeroAdivinado > numeroSecreto) {
            alert('El número es menor. ¡Intenta de nuevo!');
        } else if (numeroAdivinado < numeroSecreto) {
            alert('El número es mayor. ¡Intenta de nuevo!');
        } else {
            alert('¡Felicidades! Adivinaste el número secreto en ' + intentos + ' intentos.');
            adivinanza = true; 
        }
    }
}

juegoAdivinanza();