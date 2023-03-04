let numeRepet = prompt("Introduzca un numero");

if (Number(numeRepet) == numeRepet) {
  if (numeRepet > 0 && numeRepet <= 50) {
    let rep, i;

    for (i = 0; i <= numeRepet; i++){
        for (rep = 1; rep <= i; rep++){
            document.write(rep);
        }
        document.write("<br>");
    }
}else{
    alert("El numero introducio no es válido")
}
}else{
    alert("No se ha introducido nunigun numero")
}