/**
 * Questão 9: Simulador de Aprovação de Crédito
 * Uma loja quer automatizar a análise de crédito de clientes.
 */

const prompter = (question: string) => prompt(question) ?? "";

function solicitarRendaMensal(): number {
  let renda: number;
  do {
    renda = Number(prompter("Digite sua renda mensal (R$): "));
    if (renda <= 0) {
      console.log("Renda inválida! Digite um valor maior que zero.");
    }
  } while (renda <= 0);
  return renda;
}

function analisarCredito(renda: number, valorParcela: number): boolean {
  let limitePermitido = renda * 0.3; // 30% da renda

  if (renda > 5000) {
    limitePermitido += 500; // Bônus de R$ 500
  }

  return valorParcela <= limitePermitido;
}

function exibirStatus(resultado: boolean): void {
  if (resultado) {
    console.log("\n✓ Crédito Aprovado!");
  } else {
    console.log("\n✗ Crédito Negado!");
  }
}

function simularCredito(): void {
  console.log("=== SIMULADOR DE APROVAÇÃO DE CRÉDITO ===\n");

  const renda = solicitarRendaMensal();
  const valorParcela = Number(prompter("Digite o valor da parcela desejada (R$): "));

  const aprovado = analisarCredito(renda, valorParcela);
  exibirStatus(aprovado);

  // Informações adicionais
  let limite = renda * 0.3;
  if (renda > 5000) {
    limite += 500;
  }

  console.log(`\nRenda: R$ ${renda.toFixed(2)}`);
  console.log(`Valor da parcela: R$ ${valorParcela.toFixed(2)}`);
  console.log(`Limite permitido: R$ ${limite.toFixed(2)}`);
}

// Exemplos
console.log("Exemplos de análise de crédito:\n");

console.log("Teste 1: Renda R$ 3000, Parcela R$ 500");
let teste1 = analisarCredito(3000, 500);
exibirStatus(teste1);

console.log("\nTeste 2: Renda R$ 6000, Parcela R$ 1500");
let teste2 = analisarCredito(6000, 1500);
exibirStatus(teste2);

console.log("\nTeste 3: Renda R$ 2000, Parcela R$ 800");
let teste3 = analisarCredito(2000, 800);
exibirStatus(teste3);

console.log("\n--- Modo interativo ---\n");
simularCredito();


\nexport {};\n
