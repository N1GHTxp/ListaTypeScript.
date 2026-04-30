"use strict";
// Faça um programa que leia um número indeterminado de notas ou -1 para encerrar. Após esta entrada de dados, faça o seguinte:
// Mostre a quantidade de notas que foram lidas.
// Exiba todas as notas na ordem em que foram informadas.
// Exiba todas as notas na ordem inversa à que foram informadas.
// Calcule e mostre a soma das notas.
// Calcule e mostre a média das notas.
// Calcule e mostre a quantidade de notas acima da média calculada.
let notas = [];
let entrada;
do {
    entrada = parseFloat(prompt("Digite uma nota (ou -1 para encerrar):"));
    if (entrada !== -1) {
        notas.push(entrada);
    }
} while (entrada !== -1);
console.log("Quantidade de notas lidas:", notas.length);
console.log("Notas na ordem informada:", notas);
console.log("Notas na ordem inversa:", [...notas].reverse());
const soma = notas.reduce((acc, nota) => acc + nota, 0);
const media = soma / notas.length;
console.log("Soma das notas:", soma);
console.log("Média das notas:", media);
console.log("Notas acima da média:", notas.filter(nota => nota > media));
