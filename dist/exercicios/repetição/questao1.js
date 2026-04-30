"use strict";
// 1. Crie um programa que peça números até o usuário digitar 0 e mostre:
//  Quantidade de números digitados
//  Soma total
let quantidadeNumeros = 0;
let somaTotal = 0;
let numero;
do {
    numero = Number(prompt("Digite um número (0 para encerrar): "));
    if (numero !== 0) {
        quantidadeNumeros++;
        somaTotal += numero;
    }
} while (numero !== 0);
console.log(`Quantidade de números digitados: ${quantidadeNumeros}`);
console.log(`Soma total: ${somaTotal}`);
