// 1. Crie um programa que leia um número e informe se ele é:
//  Par ou Ímpar
//  Positivo ou Negativo

const numero: number = parseFloat(prompt("Digite um número:") || "0");

if (isNaN(numero)) {
    console.log("Por favor, digite um número válido.");
}
else {
    if (numero % 2 === 0) {
        console.log("O número é Par.");
    } else {
        console.log("O número é Ímpar.");
    }

    if (numero > 0) {
        console.log("O número é Positivo.");
    } else if (numero < 0) {
        console.log("O número é Negativo.");
    } else {
        console.log("O número é Zero.");
    }
}