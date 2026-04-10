// 4. Ler dois valores e imprimir uma das três mensagens a seguir:
// ● ‘Números iguais’, caso os números sejam iguais;
// ● ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// ● ‘Segundo maior’, caso o segundo seja maior que o primeiro.

function compararNumeros(num1: number, num2: number): string {
    if (num1 === num2) {
        return "Números iguais";
    } else if (num1 > num2) {
        return "Primeiro é maior";
    } else {
        return "Segundo maior";
    }
}

const numero1: number = Number(prompt("Informe o primeiro número: "));
const numero2: number = Number(prompt("Informe o segundo número: "));

const resultado: string = compararNumeros(numero1, numero2);
document.writeln(resultado);