/**
 * Questão 6: Folha de pagamento
 * Faça um programa para o cálculo de uma folha de pagamento fictício com descontos
 */

const prompter = (question: string) => prompt(question) ?? "";

function calcularIR(salarioBruto: number): number {
  if (salarioBruto <= 2428.80) {
    return 0;
  } else if (salarioBruto <= 2826.65) {
    return salarioBruto * 0.075;
  } else if (salarioBruto <= 3751.05) {
    return salarioBruto * 0.15;
  } else if (salarioBruto <= 4664.68) {
    return salarioBruto * 0.225;
  } else {
    return salarioBruto * 0.275;
  }
}

function calcularFolhaPagamento(): void {
  const valorHora = Number(prompter("Digite o valor da hora (R$): "));
  const horasTrabalhadas = Number(prompter("Digite a quantidade de horas trabalhadas: "));

  const salarioBruto = valorHora * horasTrabalhadas;
  const ir = calcularIR(salarioBruto);
  const inss = salarioBruto * 0.1;
  const sindicato = salarioBruto * 0.03;
  const alimentacao = salarioBruto * 0.08;
  const transporte = salarioBruto * 0.06;
  const fgts = salarioBruto * 0.11;

  const totalDescontos = ir + inss + sindicato + alimentacao + transporte;
  const salarioLiquido = salarioBruto - totalDescontos;

  console.log("\n=== FOLHA DE PAGAMENTO ===");
  console.log(`Salário Bruto: (${valorHora.toFixed(2)} * ${horasTrabalhadas})        : R$ ${salarioBruto.toFixed(2)}`);
  console.log(`(-) IR (${(calcularIR(salarioBruto) / salarioBruto * 100).toFixed(2)}%)                       : R$ ${ir.toFixed(2)}`);
  console.log(`(-) INSS (10%)                           : R$ ${inss.toFixed(2)}`);
  console.log(`(-) SINDICATO (3%)                       : R$ ${sindicato.toFixed(2)}`);
  console.log(`(-) V. ALIMENTAÇÃO (8%)                  : R$ ${alimentacao.toFixed(2)}`);
  console.log(`(-) V. TRANSPORTE (6%)                   : R$ ${transporte.toFixed(2)}`);
  console.log(`FGTS (11%)                               : R$ ${fgts.toFixed(2)}`);
  console.log(`Total de descontos                       : R$ ${totalDescontos.toFixed(2)}`);
  console.log(`Salário Líquido                          : R$ ${salarioLiquido.toFixed(2)}`);
}

// Exemplo do exercício
console.log("Exemplo: R$ 15,00/hora com 220 horas");
const salarioBruto = 15 * 220; // 3300
const ir = salarioBruto * 0.15; // 495
const inss = salarioBruto * 0.1; // 330
const sindicato = salarioBruto * 0.03; // 99
const alimentacao = salarioBruto * 0.08; // 264
const transporte = salarioBruto * 0.06; // 198
const fgts = salarioBruto * 0.11; // 121
const totalDescontos = ir + inss + sindicato + alimentacao + transporte; // 1386
const salarioLiquido = salarioBruto - totalDescontos; // 1914

console.log("\n=== FOLHA DE PAGAMENTO ===");
console.log(`Salário Bruto: (15 * 220)        : R$ ${salarioBruto.toFixed(2)}`);
console.log(`(-) IR (15%)                     : R$ ${ir.toFixed(2)}`);
console.log(`(-) INSS (10%)                   : R$ ${inss.toFixed(2)}`);
console.log(`(-) SINDICATO (3%)               : R$ ${sindicato.toFixed(2)}`);
console.log(`(-) V. ALIMENTAÇÃO (8%)          : R$ ${alimentacao.toFixed(2)}`);
console.log(`(-) V. TRANSPORTE (6%)           : R$ ${transporte.toFixed(2)}`);
console.log(`FGTS (11%)                       : R$ ${fgts.toFixed(2)}`);
console.log(`Total de descontos               : R$ ${totalDescontos.toFixed(2)}`);
console.log(`Salário Líquido                  : R$ ${salarioLiquido.toFixed(2)}`);

console.log("\n--- Modo interativo ---");
calcularFolhaPagamento();


\nexport {};\n
