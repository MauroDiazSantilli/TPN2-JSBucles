let conclusion = "";

do{
    let cadena = prompt("Introduzca una cadena");
    if(conclusion == ""){

    conclusion = conclusion + cadena;
 }

 else{
    conclusion = conclusion + "-" + cadena;
 }

}while(confirm("¿Quiere seguir?"));
document.write(conclusion)