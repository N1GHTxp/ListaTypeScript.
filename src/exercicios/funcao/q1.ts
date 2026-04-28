// 1. Crie uma função somarAte que recebe um número inteiro positivo. Use um laço de repetição
// para calcular a soma de todos os números de 1 até o número fornecido. (Ex: somarAte(4)
// deve retornar 10, pois 1+2+3+4 = 10).

function somarAte(n: number): number {
    if (n < 1) {
        throw new Error("O número deve ser um inteiro positivo.");
    }
    let soma: number = 0;
    for (let i = 1; i <= n; i++) {
        soma += i;
    }
    return soma;
}

const numero: number = parseInt(prompt("Digite um número inteiro positivo:") || "0");
if (isNaN(numero) || numero < 1) {
    console.log("Por favor, digite um número inteiro positivo válido.");
}
else {
    const resultado: number = somarAte(numero);
    console.log(`A soma de 1 até ${numero} é: ${resultado}`);
}