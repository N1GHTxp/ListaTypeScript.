"use strict";
// Crie uma função que recebe um número (ex: 5) e em seguida utilize loops aninhados para desenhar um triângulo de asteriscos no console.
// Exemplo para entrada 3:
//  *
// ***
//*****
function desenharTriangulo(n) {
    for (let i = 1; i <= n; i++) {
        let linha = " ";
        for (let j = 1; j <= i; j++) {
            linha += "*";
        }
        document.write(linha + "<br>");
    }
}
let numero = parseInt(prompt("Digite um número para desenhar o triângulo de asteriscos:"));
if (numero > 0) {
    desenharTriangulo(numero);
}
else {
    document.write("Por favor, digite um número inteiro positivo.");
}
