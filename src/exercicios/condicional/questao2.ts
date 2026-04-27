/**
 * Questão 2: Determinar estação do ano baseada no mês
 */

const prompter = (question: string) => prompt(question) ?? "";

function determinarEstacao(): void {
  const mes = Number(prompter("Digite um número entre 1 e 12 (mês): "));

  if (mes < 1 || mes > 12) {
    console.log("Mês inválido! Digite um número entre 1 e 12.");
    return;
  }

  let estacao: string;

  if (mes >= 1 && mes <= 3) {
    estacao = "Verão";
  } else if (mes >= 4 && mes <= 6) {
    estacao = "Outono";
  } else if (mes >= 7 && mes <= 9) {
    estacao = "Inverno";
  } else {
    estacao = "Primavera";
  }

  console.log(`A estação do ano correspondente ao mês ${mes} é ${estacao}`);
}

// Executar
determinarEstacao();

\nexport {};\n
