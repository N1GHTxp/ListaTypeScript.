"use strict";
// Mostre-me as seguintes listas, derivadas de: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// Números pares
// Números ímpares
// Todos os múltiplos de 2,3 e 4
// Lista reversa
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const numerosPares = numeros.filter(num => num % 2 === 0);
const numerosImpares = numeros.filter(num => num % 2 !== 0);
const multiplosDe2_3_4 = numeros.filter(num => num % 2 === 0 || num % 3 === 0 || num % 4 === 0);
const listaReversa = [...numeros].reverse();
console.log("Números pares:", numerosPares);
console.log("Números ímpares:", numerosImpares);
console.log("Múltiplos de 2, 3 e 4:", multiplosDe2_3_4);
console.log("Lista reversa:", listaReversa);
