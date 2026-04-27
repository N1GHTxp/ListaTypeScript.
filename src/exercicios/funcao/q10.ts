/**
 * Questão 10: Calculadora de IMC com Classificação
 * Um personal trainer precisa de uma ferramenta para avaliar seus alunos.
 */

const prompter = (question: string) => prompt(question) ?? "";

function calcularIMC(peso: number, altura: number): number {
  return peso / (altura * altura);
}

function classificarIMC(imc: number): string {
  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 25) {
    return "Peso Normal";
  } else {
    return "Sobrepeso";
  }
}

function exibirLaudo(nome: string, classificacao: string, imc: number): void {
  console.log(`\nPaciente: ${nome}`);
  console.log(`IMC: ${imc.toFixed(2)}`);
  console.log(`Status: ${classificacao}`);
}

function calcularIMCPessoa(): void {
  console.log("=== CALCULADORA DE IMC ===\n");

  const nome = prompter("Digite o nome do paciente: ");
  const peso = Number(prompter("Digite o peso (kg): "));
  const altura = Number(prompter("Digite a altura (m): "));

  if (peso <= 0 || altura <= 0) {
    console.log("Valores inválidos! Peso e altura devem ser maiores que zero.");
    return;
  }

  const imc = calcularIMC(peso, altura);
  const classificacao = classificarIMC(imc);

  exibirLaudo(nome, classificacao, imc);
}

// Exemplos
console.log("Exemplos de cálculo de IMC:\n");

console.log("Teste 1: Maria com 65 kg e 1.70 m");
const imc1 = calcularIMC(65, 1.7);
const class1 = classificarIMC(imc1);
exibirLaudo("Maria", class1, imc1);

console.log("\nTeste 2: João com 85 kg e 1.75 m");
const imc2 = calcularIMC(85, 1.75);
const class2 = classificarIMC(imc2);
exibirLaudo("João", class2, imc2);

console.log("\nTeste 3: Ana com 50 kg e 1.65 m");
const imc3 = calcularIMC(50, 1.65);
const class3 = classificarIMC(imc3);
exibirLaudo("Ana", class3, imc3);

console.log("\n--- Modo interativo ---");
calcularIMCPessoa();


\nexport {};\n
