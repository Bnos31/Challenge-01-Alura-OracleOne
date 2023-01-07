var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var contenedorimg = document.querySelector(".contenedo-persona");
var contenedorh3 = document.querySelector(".contenedor-h3");
var contenedorP = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");
var botonCopiar = document.querySelector(".btn-Copiar");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;

function copiar() {
    var copiartext = document.querySelector(".texto-resultado").innerHTML;
    navigator.clipboard.writeText(copiartext);
    alert("mensaje copiado")
}

function mostrarcontenido() {
    document.querySelector(".contenedor-resultado").style.display = "show";
    document.querySelector(".contenedor-resultado").style.display = "inherit";
    document.querySelector(".btn-Copiar").style.display = "show";
    document.querySelector(".btn-Copiar").style.display = "inherit";
}

function encriptar() {
    ocultarDerecha();
    mostrarcontenido();
    resultado.textContent = encriptador(recuperar());
    //encriptado a partir de aqui ... :)

}

function desencriptar() {
    ocultarDerecha();
    mostrarcontenido();
    resultado.textContent = desencriptador(recuperar());
}

function recuperar() {
    var area = document.querySelector(".area");
    return area.value;
}

function ocultarDerecha() {
    contenedorimg.classList.add("ocultar");
    contenedorP.classList.add("ocultar");
    contenedorh3.classList.add("ocultar");
}


function encriptador(mensaje) {
    var texto = mensaje;
    var textoF = "";

    for (var i = 0; i < texto.length; i++)
        if (texto[i] == "a") {
            textoF = textoF + "ai"
        } else if (texto[i] == "e") {
        textoF = textoF + "enter"
    } else if (texto[i] == "i") {
        textoF = textoF + "imes"
    } else if (texto[i] == "o") {
        textoF = textoF + "ober"
    } else if (texto[i] == "u") {
        textoF = textoF + "ufat"
    } else {
        textoF = textoF + texto[i];
    }
    return textoF;
}

function desencriptador(mensaje) {
    var texto = mensaje;
    var textoF = "";

    for (var i = 0; i < texto.length; i++)
        if (texto[i] == "a") {
            textoF = textoF + "a"
            i = i + 1;
        } else if (texto[i] == "e") {
        textoF = textoF + "e"
        i = i + 4;
    } else if (texto[i] == "i") {
        textoF = textoF + "i"
        i = i + 3;
    } else if (texto[i] == "o") {
        textoF = textoF + "o"
        i = i + 3;
    } else if (texto[i] == "u") {
        textoF = textoF + "u"
        i = i + 3;
    } else {
        textoF = textoF + texto[i];
    }
    return textoF;
}