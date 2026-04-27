/**
 * Questão 4: Notas para saque
 * Crie uma função que recebe um valor de saque (inteiro). A função deve dizer quantas notas
 * de 50, 20 e 10 são necessárias para o saque (priorizando as maiores).
 * Use um laço while para ir subtraindo do valor total.
 */

const prompter = (question: string) => prompt(question) ?? "";

function calcularNotas(valor: number): void {
  let notas50 = 0;
  let notas20 = 0;
  let notas10 = 0;

  while (valor >= 50) {
    notas50++;
    valor -= 50;
  }

  while (valor >= 20) {
    notas20++;
    valor -= 20;
  }

  while (valor >= 10) {
    notas10++;
    valor -= 10;
  }

  console.log(`\nNotas de R$ 50: ${notas50}`);
  console.log(`Notas de R$ 20: ${notas20}`);
  console.log(`Notas de R$ 10: ${notas10}`);
  if (valor > 0) {
    console.log(`Valor não coberto: R$ ${valor}`);
  }
}

function executar(): void {
  const valor = Number(prompter("Digite o valor do saque (R$): "));

  if (valor <= 0) {
    console.log("Por favor, digite um valor válido!");
    return;
  }

  calcularNotas(valor);
}

// Exemplos
console.log("Exemplos de cálculo de notas:\n");

console.log("Teste 1: R$ 130");
calcularNotas(130);

console.log("\nTeste 2: R$ 250");
calcularNotas(250);

console.log("\nTeste 3: R$ 87");
calcularNotas(87);

console.log("\n--- Modo interativo ---");
executar();


\nexport {};\n
