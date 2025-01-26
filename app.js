// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    //Obtiene el elemento HTML por medio de su id
    let elementoHTML = document.getElementById("amigo");
    //Obtiene el valor del elemento HTML
    let amigo = elementoHTML.value;

    //Verifica si el valor del elemento HTML no esté vacío
    if(amigo == ""){
        //Muestra una alerta
        alert("Por favor, inserte un nombre.");
        //Sale del método
        return;
    }

    //Agrega un elemento al arreglo
    amigos.push(amigo);
    //console.log(amigos);

    //Establece el valor del elemento HTML en vacío
    elementoHTML.value = "";
}