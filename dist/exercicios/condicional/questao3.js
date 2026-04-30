"use strict";
// 3. Crie um programa que solicite dois números e simule um menu de uma calculadora:
// 1 - Soma
// 2 - Subtração
// 3 - Multiplicação
// 4 - Divisão
// Use switch...Case
const num1 = Number(prompt("informe um numero: "));
const num2 = Number(prompt("informe um segundo numero: "));
const operacao = Number(prompt("\n1- soma \n2- subtração \n3- multiplicação \n4- divisão: "));
let resultado;
switch (operacao) {
    case 1:
        resultado = num1 + num2;
        break;
    case 2:
        resultado = num1 - num2;
        break;
    case 3:
        resultado = num1 * num2;
        break;
    case 4:
        resultado = num1 / num2;
        break;
    default:
        resultado = "Operação inválida";
}
console.log("O resultado da operação é: " + resultado);
