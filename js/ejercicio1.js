let edad = prompt("Por favor, ingresa tu edad.");

if (isNaN(edad)){
    alert("La edad ingresada no es valida.");
} else if (edad >= 18){
    alert("Tenes edad para manejar.");
 } else{
    alert("No cumplis con la edad para manejar")
 }