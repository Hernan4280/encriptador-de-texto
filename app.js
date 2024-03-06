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

function botonCopiar(txtEncriptado) {
    const nuevoBoton = document.createElement("button");
    nuevoBoton.innerHTML = "Copiar";
    nuevoBoton.setAttribute("id", "mi-btn");

    const miBoton = document.getElementById("btn-copiar");
    miBoton.appendChild(nuevoBoton);

    nuevoBoton.onclick = async function copiarAlPortapapeles() {
        try {
            await navigator.clipboard.writeText(txtEncriptado);
            console.log('Contenido copiado al portapapeles', txtEncriptado);
            document.getElementById("miTextarea").value = "";
            /* Resuelto - texto copiado al portapapeles con éxito */
          } catch (err) {
            console.error('Error al copiar: ', err);
            /* Rechazado - fallo al copiar el texto al portapapeles */
          }
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

    let salidaEncriptada = document.querySelector('.output-text');
    salidaEncriptada.innerHTML = encriptar(texto).join('');

    const txtEncriptado = document.querySelector('.output-text').innerHTML;
    if (bloqueo === false) {
        botonCopiar(txtEncriptado);
        bloqueo = true;
    }

    document.getElementById("button1").disabled = true;
}
