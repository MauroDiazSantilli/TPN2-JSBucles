let cadena = prompt("Introduzca una cadena de texto");
let numeCarac = cadena.length;
cadena = cadena.toUpperCase();
let caracteres;
let contar = 0
let i;

for(i = 0; i < numeCarac; i++){
    caracteres = cadena.charAt(i);
    if((caracteres == "A") || (caracteres == "E") || (caracteres == "I") || (caracteres == "O") || (caracteres == "U")){
        contar++;
    }
}
document.write("Numero de vocales: " + contar + ".")