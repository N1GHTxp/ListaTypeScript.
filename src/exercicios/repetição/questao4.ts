// 4. Faça um programa que leia um conjunto de números (X) e imprima a quantidade de
// números pares (QPares) e a quantidade de números ímpares (QImpares) lidos. Admita que o
// valor -1 é utilizado como sentinela para fim de leitura.

let QPares: number = 0;
let QImpares: number = 0;
while (true) {
    const input: string | null = prompt("Digite um número (-1 para sair):");
    if (input === null) {
        console.log("Entrada cancelada pelo usuário.");
        break;
    }
    const numero: number = parseFloat(input);
    if (isNaN(numero)) {
        console.log("Por favor, digite um número válido.");
        continue;
    }
    if (numero === -1) {
        break;
    }
    if (numero % 2 === 0) {
        QPares++;
    }
    else {
        QImpares++;
    }
}
console.log(`Quantidade de números pares: ${QPares}`);
console.log(`Quantidade de números ímpares: ${QImpares}`);
