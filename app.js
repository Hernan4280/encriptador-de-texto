document.getElementById("miTextarea").addEventListener("click", borrar);
// myFunction() borra el texto predeterminado al hacer clic en el textarea.
function borrar() {
    document.getElementById("button1").disabled = false;
    document.getElementById("miTextarea").innerHTML = "";
}

const llaves =  {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat"
}

function encriptar() {

    const texto = document.getElementById("miTextarea").value;

    if (/[^a-z\s]/gm.test(texto)) {
        alert('Solo se permite letras minusculas');
    }

    let img = document.getElementById('imagen');
    img.style.display = 'none';

    let p1 = document.querySelector('.paragraph1');
    let p2 = document.querySelector('.paragraph2');
    p1.innerHTML = "";
    p2.innerHTML = "";

    const encriptada = texto.split('');
    for (let k in llaves) {
        for (let i=0; i < texto.length; i++) {
            if (k === texto[i]) {
                encriptada[i] = llaves[k];
            }
        }
    }
    let salidaEncriptada = document.querySelector('.output-text');
    salidaEncriptada.innerHTML = encriptada.join('');
}
