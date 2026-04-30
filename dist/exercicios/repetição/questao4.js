"use strict";
// 4. Faça um programa que leia um conjunto de números (X) e imprima a quantidade de
// números pares (QPares) e a quantidade de números ímpares (QImpares) lidos. Admita que o
// valor -1 é utilizado como sentinela para fim de leitura.
let QPares = 0;
let QImpares = 0;
let numero = 0;
while (numero !== -1) {
    numero = parseInt(prompt("Digite um número (-1 para sair):"));
    if (numero !== -1) {
        if (numero % 2 === 0) {
            QPares++;
        }
        else {
            QImpares++;
        }
    }
}
console.log(`Quantidade de números pares: ${QPares}`);
console.log(`Quantidade de números ímpares: ${QImpares}`);
