document.getElementById("miTextarea").addEventListener("click", myFunction);
// myFunction() borra el texto predeterminado al hacer clic en el textarea.
function myFunction() {
  document.getElementById("miTextarea").innerHTML = "";
}

function encrypt() {
    const texto = document.getElementById("miTextarea").value;
    if (texto === "") {
        alert('Debe ingresar texto para ser encriptado.');
    }
    if (/[^a-z\s]/gm.test(texto)) {
        alert('Solo se permite letras minusculas');
    }
}