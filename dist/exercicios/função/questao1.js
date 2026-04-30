"use strict";
// 1. Crie uma função somarAte que recebe um número inteiro positivo. Use um laço de repetição
// para calcular a soma de todos os números de 1 até o número fornecido. (Ex: somarAte(4)
// deve retornar 10, pois 1+2+3+4 = 10).
function somarAte(numero) {
    let soma = 0;
    for (let i = 1; i <= numero; i++) {
        soma += i;
    }
    return soma;
}
let numero = parseInt(prompt("Digite um número inteiro positivo:"));
if (numero > 0) {
    let resultado = somarAte(numero);
    console.log(`A soma de 1 até ${numero} é: ${resultado}`);
}
else {
    console.log("Por favor, digite um número inteiro positivo.");
}
