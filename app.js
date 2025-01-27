// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    //Obtiene el elemento HTML por medio de su id
    let elementoHTML = document.getElementById("amigo");
    //Obtiene el valor del elemento HTML
    let amigo = elementoHTML.value;

    //Verifica si el valor del elemento HTML está vacío
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

    //Invoca a la función actualizarListaAmigos
    actualizarListaAmigos();
}

function actualizarListaAmigos(){
    //Obtiene el elemento HTML por medio de su id
    let elementoHTML = document.getElementById("listaAmigos");
    //Borra todo el contenido dentro del elemento HTML, en este caso, la lista de amigos. Incluso los
    //elementos hijos de la lista
    elementoHTML.innerHTML = "";

    //Recorre el arreglo de amigos
    for(let i = 0; i < amigos.length; i++){
        //Crea un elemento HTML
        let elemento = document.createElement("li");
        //Establece el valor del elemento HTML
        elemento.innerHTML = amigos[i];
        //Agrega un elemento hijo al elemento HTML padre
        elementoHTML.appendChild(elemento);
    }
}