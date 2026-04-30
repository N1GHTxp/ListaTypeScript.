"use strict";
// 2. Desenvolva a tabuada de um número usando for.
function tabuada(numero) {
    console.log(`Tabuada do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
const numero = Number(prompt("Digite um número para ver a tabuada: "));
tabuada(numero);
