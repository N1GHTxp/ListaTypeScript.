// 1. Crie um programa que peça números até o usuário digitar 0 e mostre:
//  Quantidade de números digitados
//  Soma total

let quantidadeNumeros: number = 0;
let somaTotal: number = 0;
let numero: number;

do {
    numero = Number(prompt("Digite um número (0 para encerrar): "));
    if (numero !== 0) {
        quantidadeNumeros++;
        somaTotal += numero;
    }
} while (numero !== 0);

document.writeln(`Quantidade de números digitados: ${quantidadeNumeros}`);
document.writeln(`Soma total: ${somaTotal}`);