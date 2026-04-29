// Crie uma função que recebe dois números: início e fim. Depois use um laço para percorrer esse intervalo e imprimir apenas os números que são múltiplos de 3.

function imprimirMultiplosDeTres(inicio: number, fim: number): void {
    for (let i = inicio; i <= fim; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}

let inicio = parseInt(prompt("Digite o número de início:"));
let fim = parseInt(prompt("Digite o número de fim:"));
if (inicio < fim) {
    imprimirMultiplosDeTres(inicio, fim);
} else {
    console.log("Por favor, certifique-se de que o número de início seja menor que o número de fim.");
}

