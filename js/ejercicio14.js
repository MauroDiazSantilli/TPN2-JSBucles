let cadena = prompt("Introduzca una cadena de texto:");
let numeCarac = cadena.length;
let caracteres;
let i;

for (i = 0; i < numeCarac; i++) {
  caracteres = cadena.charAt(i);

  if (i == numeCarac - 1) {
    document.write(caracteres);
  } else {
    document.write(caracteres + "-");
  }
}
