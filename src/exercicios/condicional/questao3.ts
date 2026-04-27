/**
 * Questão 3: Calculadora com menu e switch
 * Crie um programa que solicite dois números e simule um menu de uma calculadora:
 * 1 - Soma
 * 2 - Subtração
 * 3 - Multiplicação
 * 4 - Divisão
 * Use switch...Case
 */

const prompter = (question: string) => prompt(question) ?? "";

function calculadora(): void {
  const num1 = Number(prompter("Digite o primeiro número: "));
  const num2 = Number(prompter("Digite o segundo número: "));

  console.log("\n1 - Soma");
  console.log("2 - Subtração");
  console.log("3 - Multiplicação");
  console.log("4 - Divisão");

  const operacao = Number(prompter("Escolha uma operação (1-4): "));

  let resultado: number | string;

  switch (operacao) {
    case 1:
      resultado = num1 + num2;
      console.log(`${num1} + ${num2} = ${resultado}`);
      break;
    case 2:
      resultado = num1 - num2;
      console.log(`${num1} - ${num2} = ${resultado}`);
      break;
    case 3:
      resultado = num1 * num2;
      console.log(`${num1} × ${num2} = ${resultado}`);
      break;
    case 4:
      if (num2 === 0) {
        console.log("Erro: Divisão por zero!");
      } else {
        resultado = num1 / num2;
        console.log(`${num1} ÷ ${num2} = ${resultado}`);
      }
      break;
    default:
      console.log("Operação inválida!");
  }
}

// Executar
calculadora();

\nexport {};\n
