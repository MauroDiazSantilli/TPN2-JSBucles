let cadena = prompt("Introduzca un texto");
let numeCarac = cadena.length;
let j;
let caracteres;
let resultado = "";

for (j = 0; j < numeCarac; j++) {
  caracteres = cadena.charAt(j);
  resultado = caracteres + resultado;
}

document.write(resultado);
