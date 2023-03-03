let resultado = 0
let numero

do{
    numero = prompt("Introduzca un numero:");
    if(numero !== null && !isNaN(numero)) {
        resultado += parseInt(numero);
    } else if(numero !== null) {
        alert("Es necesario introducir un numero valido");

    }
} while (numero !== null);

alert("La suma total es: " + resultado);