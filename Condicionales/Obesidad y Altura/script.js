function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    let clasificacion;

    if (imc < 18.5) {
        clasificacion = 'Bajo peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        clasificacion = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        clasificacion = 'Sobrepeso';
    } else {
        clasificacion = 'Obesidad';
    }

    return { imc: imc.toFixed(2), clasificacion };
}

const peso = 70; 
const altura = 1.75; 
const resultado = calcularIMC(peso, altura);

console.log('Tu IMC es: ' + resultado.imc);
console.log('Clasificación: ' + resultado.clasificacion);