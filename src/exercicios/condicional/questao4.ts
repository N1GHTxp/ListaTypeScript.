// 4. Ler dois valores e imprimir uma das três mensagens a seguir:
// ● ‘Números iguais’, caso os números sejam iguais;
// ● ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// ● ‘Segundo maior’, caso o segundo seja maior que o primeiro.

const valor1: number = parseFloat(prompt("Digite o primeiro valor:") || "0");
const valor2: number = parseFloat(prompt("Digite o segundo valor:") || "0");
if (isNaN(valor1) || isNaN(valor2)) {
    console.log("Por favor, digite valores numéricos válidos.");
}
else {
    if (valor1 === valor2) {
        console.log("Números iguais");
    }
    else if (valor1 > valor2) {
        console.log("Primeiro é maior");
    }
    else {
        console.log("Segundo é maior");
    }
}