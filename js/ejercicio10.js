let i, j;
let filas = Number(prompt("Introduzca un numero de filas"));
let column = Number(prompt("Introduzca un numero de columnas"));
let result = filas * column;
document.write("<table border>");
for (i = 0; i < filas; i++) {
  document.write("<tr>");

  for (j = 0; j < column; j++) {
    document.write("<td>");

    document.write(result);

    result--;

    document.write("</td>");
  }

  document.write("</tr>");
}

document.write("</table>");
