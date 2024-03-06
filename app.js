document.getElementById("miTextarea").addEventListener("click", borrar);
// borrar() borra el texto predeterminado al hacer clic en el textarea.
function borrar() {
    document.getElementById("button1").disabled = false;
    document.getElementById("miTextarea").innerHTML = "";
}

function validarTexto(texto) {
    if (texto.length == 0 || !(/(?:.*[a-z]){1}/gm.test(texto))) {
        alert('Campo de texto vacío');
        window.location.reload();
    }
    if (/[^a-z\s]/gm.test(texto)) {
        alert('Solo se permite letras minusculas');
        window.location.reload();
    }
}

function botonCopiar() {
    // Se crea el boton copiar al encriptar.
    const nuevoBoton = document.createElement("button");
    nuevoBoton.innerHTML = "Copiar";
    nuevoBoton.setAttribute("id", "mi-btn");

    // Se ubica el boton en el contenedor de texto encriptado.
    const miBoton = document.getElementById("btn-copiar");
    miBoton.appendChild(nuevoBoton);

    // Se le da funcionalidad al boton copiar.
    nuevoBoton.onclick = async function copiarAlPortapapeles() {
        const txtEncriptado = document.querySelector('.output-text').innerHTML;
        document.getElementById("button2").disabled = false;
        try {
            await navigator.clipboard.writeText(txtEncriptado);
            console.log('Contenido copiado al portapapeles');
            document.getElementById("miTextarea").value = "";
          } catch (err) {
            console.error('Error al copiar: ', err);
          }
    }
}

function botonReset() {
    const nuevoBoton = document.createElement("button");
    nuevoBoton.innerHTML = "Reset";
    nuevoBoton.setAttribute("id", "mi-btn-reset");

    const miBoton = document.getElementById("btn-reset");
    miBoton.appendChild(nuevoBoton);

    nuevoBoton.onclick = function() {
        window.location.reload();
    }
}

const llaves =  {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat"
}

function encriptar(texto) {
    const copiaTxt = texto.split('');
    for (let k in llaves) {
        for (let i=0; i < texto.length; i++) {
            if (k === texto[i]) {
                copiaTxt[i] = llaves[k];
            }
        }
    }
    return copiaTxt;
}

function desencriptar(texto) {
    const desencriptada = [...texto];
    for (let k in llaves) {
        for (let i=0; i < texto.length; i++) {
            if (llaves[k] === texto[i]) {
                desencriptada[i] = k;
            }
        }
    }
    return desencriptada;
}

let arrayEncriptado = [];
let bloqueo = false;
function btnEncriptar() {

    const texto = document.getElementById("miTextarea").value;
    
    validarTexto(texto);

    let img = document.getElementById('imagen');
    img.style.display = 'none';

    let p1 = document.querySelector('.paragraph1');
    let p2 = document.querySelector('.paragraph2');
    p1.innerHTML = "";
    p2.innerHTML = "";

    arrayEncriptado = [...encriptar(texto)];
    let salidaEncriptada = document.querySelector('.output-text');
    salidaEncriptada.innerHTML = arrayEncriptado.join('');

    if (bloqueo === false) {
        botonCopiar();
        bloqueo = true;
    }

    document.getElementById("button1").disabled = true;
}

let bloqueoReset = false;
function btnDesencriptar() {
    const arrayDesencriptado = desencriptar(arrayEncriptado);
    document.querySelector('.output-text').innerHTML = arrayDesencriptado.join('');
    if (bloqueoReset === false) {
        botonReset();
        bloqueoReset = true;
    }
}