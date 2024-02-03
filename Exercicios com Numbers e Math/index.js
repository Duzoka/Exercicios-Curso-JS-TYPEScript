const numero = Number(prompt("Escreva seu número aqui"));
console.log(numero)

const numeroTitulo = document.getElementById("numero-titulo");
const campoDeTexto = document.getElementById("campoDeTexto");

numeroTitulo.innerHTML = numero

campoDeTexto.innerHTML = `

Rayz quadrada: ${numero ** (1/2)} <br>

${numero} é inteiro: ${Number.isInteger(numero)} <br>

É NaN: ${Number.isNaN(numero)} <br>

Arredondando para baixo: ${Math.floor(numero)} <br>

Arredondando para cima: ${Math.ceil(numero)} <br>

Com duas casas decimais: ${numero.toFixed(2)} 

`