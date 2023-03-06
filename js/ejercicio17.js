let vocales = ["a", "e", "i", "o", "u"];
let texto = prompt("Introduzca un texto");
let textoMinusc = texto.toLowerCase();
let posc = 0;
let det = false;

for (let i = 0; i < textoMinusc.length; i++) {
  for (let j = 0; j < vocales.length; j++) {
    if (vocales[j] == textoMinusc.charAt(i)) {
      posc = i;
      det = true;

      break;
    }
  }

  if (det) {
    break;
  }
}
document.write("La primera vocal está en la posicion: " + posc);
