// 1. Crie um programa que peça números até o usuário digitar 0 e mostre:
//  Quantidade de números digitados
//  Soma total

let quantidade: number = 0;
let soma: number = 0;
while (true) {
    const input: string | null = prompt("Digite um número (0 para sair):");
    if (input === null) {
        console.log("Entrada cancelada pelo usuário.");
        break;
    }
    const numero: number = parseFloat(input);
    if (isNaN(numero)) {
        console.log("Por favor, digite um número válido.");
        continue;
    }
    if (numero === 0) {
        break;
    }
    quantidade++;
    soma += numero;
}
console.log(`Quantidade de números digitados: ${quantidade}`);
console.log(`Soma total: ${soma}`);
