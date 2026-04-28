// 3. Crie um programa que solicite dois números e simule um menu de uma calculadora:
// 1 - Soma
// 2 - Subtração
// 3 - Multiplicação
// 4 - Divisão
// Use switch...Case

const num1: number = parseFloat(prompt("Digite o primeiro número:") || "0");
const num2: number = parseFloat(prompt("Digite o segundo número:") || "0");
if (isNaN(num1) || isNaN(num2)) {
    console.log("Por favor, digite números válidos.");
}
else {
    const operacao: number = parseInt(prompt("Escolha a operação:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão") || "0");

    switch (operacao) {
        case 1:
            console.log(`Resultado da Soma: ${num1 + num2}`);
            break;
        case 2:
            console.log(`Resultado da Subtração: ${num1 - num2}`);
            break;
        case 3:
            console.log(`Resultado da Multiplicação: ${num1 * num2}`);
            break;
        case 4:
            if (num2 !== 0) {
                console.log(`Resultado da Divisão: ${num1 / num2}`);
            }
            else {
                console.log("Erro: Divisão por zero não é permitida.");
            }
            break;
        default:
            console.log("Operação inválida. Por favor, escolha uma opção entre 1 e 4.");
    }
}
