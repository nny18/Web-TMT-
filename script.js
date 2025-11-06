const titulo = document.getElementById("titulo");
const textoInicial = document.getElementById("textoInicial");
let estadoInicial = true;
let posicionTexto = 0;
const  textos = ["Hola", "como", "estas", ":)", "y", "chau"];


textoInicial.innerText = textos[posicionTexto];

textoInicial.addEventListener("click", () => {
    if (posicionTexto < textos.length - 1) {
    posicionTexto = posicionTexto + 1;
    textoInicial.innerText = textos[posicionTexto];
    } else {
        posicionTexto = 0;
        textoInicial.innerText = textos[posicionTexto];
    }
})

titulo.addEventListener("click", () => {
    if (estadoInicial === true) {
        titulo.innerText = "Holiii :)";
    } else {
        titulo.innerText = "¿Avatar? ¡Avatar!";
    }
    estadoInicial = !estadoInicial;
}) 
