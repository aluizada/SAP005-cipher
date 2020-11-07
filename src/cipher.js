const cipher = {encode, decode}
 
 function encode (chave, frase) {
  
    let palavra = "";
    let deslocamento;
    let converteMensagem;

    for (let index = 0; index < frase.length; index++) {
    let numeroASC = frase.charCodeAt(index);
    deslocamento = ((numeroASC - 65 + chave) % 26) + 65;
    converteMensagem = String.fromCharCode(deslocamento);
    palavra += converteMensagem;
    console.log(palavra)
  } 
return palavra;
}

 function decode (chave, frase) {
   let palavra = "";
   let deslocamento;
    let converteMensagem;

    for (let index = 0; index < frase.length; index++) {
    let numeroASC = frase.charCodeAt(index);
    deslocamento = ((numeroASC - 65 - chave) % 26) + 65;
    converteMensagem = String.fromCharCode(deslocamento);
    palavra += converteMensagem;
    console.log(palavra)
  
}
return palavra 
}


export default cipher; 
