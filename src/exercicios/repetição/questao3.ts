/**
 * Questão 3: Folha de pagamento de operários
 * Faça um programa que leia nome, horas trabalhadas, salário-hora e sexo de um grupo de
 * operários. Ao final de cada solicitação pergunte se o usuário quer continuar ou não o programa.
 */

const prompter = (question: string) => prompt(question) ?? "";

interface Funcionario {
  nome: string;
  horasTrabalhadas: number;
  salarioHora: number;
  sexo: string;
}

function folhaPagamento(): void {
  let funcionarios: Funcionario[] = [];
  let continuar = true;

  while (continuar) {
    const funcionario: Funcionario = {
      nome: prompter("Nome do funcionário: "),
      horasTrabalhadas: Number(prompter("Horas trabalhadas: ")),
      salarioHora: Number(prompter("Salário por hora (R$): ")),
      sexo: prompter("Sexo (M/F): ").toUpperCase(),
    };

    funcionarios.push(funcionario);

    const resp = prompter("Deseja cadastrar outro funcionário? (S/N): ");
    continuar = resp.toUpperCase() === "S";
  }

  // Cálculos
  let salarioTotal = 0;
  let maiorSalario = 0;
  let nomeMaiorSalario = "";
  let countMasculino = 0;
  let countFeminino = 0;

  for (let funcionario of funcionarios) {
    const salario = funcionario.horasTrabalhadas * funcionario.salarioHora;
    salarioTotal += salario;

    if (salario > maiorSalario) {
      maiorSalario = salario;
      nomeMaiorSalario = funcionario.nome;
    }

    if (funcionario.sexo === "M") {
      countMasculino++;
    } else if (funcionario.sexo === "F") {
      countFeminino++;
    }
  }

  const totalFuncionarios = countMasculino + countFeminino;
  const percentualMasculino = totalFuncionarios > 0 ? (countMasculino / totalFuncionarios) * 100 : 0;
  const percentualFeminino = totalFuncionarios > 0 ? (countFeminino / totalFuncionarios) * 100 : 0;

  console.log("\n=== RELATÓRIO ===");
  console.log(`Salário total dos funcionários: R$ ${salarioTotal.toFixed(2)}`);
  console.log(`Maior salário: R$ ${maiorSalario.toFixed(2)} (${nomeMaiorSalario})`);
  console.log(`Funcionários masculinos: ${countMasculino}`);
  console.log(`Funcionários femininos: ${countFeminino}`);
  console.log(`Percentual masculino: ${percentualMasculino.toFixed(2)}%`);
  console.log(`Percentual feminino: ${percentualFeminino.toFixed(2)}%`);
}

// Executar
folhaPagamento();

\nexport {};\n
