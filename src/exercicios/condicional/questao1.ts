/**
 * Questão 1: Verificar se número é par/ímpar e positivo/negativo
 * Crie um programa que leia um número e informe se ele é:
 * - Par ou Ímpar
 * - Positivo ou Negativo
 */

const prompter = (question: string) => prompt(question) ?? "";

function verificarNumero(): void {
  const numero = Number(prompter("Digite um número: "));

  let paridade: string = numero % 2 === 0 ? "Par" : "Ímpar";
  let sinal: string = numero > 0 ? "Positivo" : numero < 0 ? "Negativo" : "Zero";

  console.log(`O número ${numero} é ${paridade} e ${sinal}`);
}

// Executar
verificarNumero();


\nexport {};\n
