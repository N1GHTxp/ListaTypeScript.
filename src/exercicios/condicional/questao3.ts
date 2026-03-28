// 3. Crie um programa que solicite dois números e simule um menu de uma calculadora:
// 1 - Soma
// 2 - Subtração
// 3 - Multiplicação
// 4 - Divisão
// Use switch...Case

const num1: number = Number(prompt("informe um numero: "))
const num2: number = Number(prompt("informe um segundo numero: "))
const operacao: number = Number(prompt("1- soma 2- subtração 3- multiplicação 4- divisão: "));
let resultado: any;
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