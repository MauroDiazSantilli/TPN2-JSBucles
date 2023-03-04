let numeRepet = prompt("Introduzca un numero de repeticiones");

if (Number(numeRepet) == numeRepet) {
  if (numeRepet > 0 && numeRepet <= 50) {
    let rep, i;

    for (i = numeRepet; i >= 1; i--) {
      for (rep = i; rep >= 1; rep--) {
        document.write(i);
      }

      document.write("<br>");
    }
  } else {
    alert("El numero ingresado no es valido");
  }
} else {
  alert("No se ingresó ningun numero");
}
