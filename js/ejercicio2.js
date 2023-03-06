let nota = prompt("Ingrese la nota del alumno");

if (nota == 10) {
  alert("Sobresaliente");
} else if (nota == 9 || nota == 8) {
  alert("Notable");
} else if (nota == 7) {
  alert("Bien");
} else if (nota == 6 || nota == 5) {
  alert("Suficiente");
} else if (nota == 4 || nota == 3) {
  alert("Insuficiente");
} else if (nota == 2 || nota == 1) {
  alert("Muy deficiente");
} else if (nota < 0 || nota > 10) {
  alert("Numero erroneo");
} else {
  alert("Introduzca un numero valido");
}
