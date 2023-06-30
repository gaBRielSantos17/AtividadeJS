let palavra = "radar"
let reverso = palavra.split('').reverse().toString().replace(/,/g, "")
if (palavra == reverso){console.log("é palindromo")}
else {console.log("não é palindromo")}


