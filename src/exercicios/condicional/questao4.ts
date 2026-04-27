/**
 * Questão 4: Comparar dois números
 * Ler dois valores e imprimir uma das três mensagens a seguir:
 * - 'Números iguais', caso os números sejam iguais;
 * - 'Primeiro é maior', caso o primeiro seja maior que o segundo;
 * - 'Segundo maior', caso o segundo seja maior que o primeiro.
 */

const prompter = (question: string) => prompt(question) ?? "";

function compararNumeros(): void {
  const num1 = Number(prompter("Digite o primeiro número: "));
  const num2 = Number(prompter("Digite o segundo número: "));

  let resultado: string;

  if (num1 === num2) {
    resultado = "Números iguais";
  } else if (num1 > num2) {
    resultado = "Primeiro é maior";
  } else {
    resultado = "Segundo maior";
  }

  console.log(resultado);
}

// Executar
compararNumeros();

\nexport {};\n
