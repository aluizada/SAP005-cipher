import cipher from './cipher.js';
function clickEncode(event) {
    event.preventDefault()
    let chave = parseInt(document.getElementById("offset").value)
    let frase = document.getElementById("mensagem").value
    frase = frase.toUpperCase()
    let retorna = cipher.encode(chave, frase);
    console.log (retorna)

    document.getElementById("mensagem").value = retorna;
}

function clickDecode(event) {
    event.preventDefault()
    let chave = parseInt(document.getElementById("offset").value)
    let frase = document.getElementById("mensagem").value
    frase = frase.toUpperCase()
    let retorna = cipher.decode(chave, frase);
    console.log (retorna)

    document.getElementById("mensagem").value = retorna;

}
document.getElementById("CIFRAR").addEventListener("click", clickEncode)
document.getElementById("DECIFRAR").addEventListener("click", clickDecode)




console.log(cipher);
