function saludoSegunHora() {
    const fecha = new Date();
    const hora = fecha.getHours(); 
    //En esta parte de arriba no sabia que poner, asi que me apoye con IA.
    let saludo;

    if (hora >= 6 && hora < 12) {
        saludo = "¡Buenos días!";
    } else if (hora >= 12 && hora < 18) {
        saludo = "¡Buenas tardes!";
    } else {
        saludo = "¡Buenas noches!";
    }

    console.log(saludo);
}