"use strict";
// 4. Ler dois valores e imprimir uma das três mensagens a seguir:
// ● ‘Números iguais’, caso os números sejam iguais;
// ● ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// ● ‘Segundo maior’, caso o segundo seja maior que o primeiro.
function compararNumeros(num1, num2) {
    if (num1 === num2) {
        return "Números iguais";
    }
    else if (num1 > num2) {
        return "Primeiro é maior";
    }
    else {
        return "Segundo maior";
    }
}
const numero1 = Number(prompt("Informe o primeiro número: "));
const numero2 = Number(prompt("Informe o segundo número: "));
const resultado = compararNumeros(numero1, numero2);
console.log(resultado);
