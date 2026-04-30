"use strict";
// 2. Desenvolva a tabuada de um número usando for.
function tabuada(numero) {
    document.writeln(`Tabuada do ${numero}:<br>`);
    for (let i = 1; i <= 10; i++) {
        document.writeln(`${numero} x ${i} = ${numero * i}<br>`);
    }
}
const numero = Number(prompt("Digite um número para ver a tabuada: "));
tabuada(numero);
