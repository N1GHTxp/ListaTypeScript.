/**
 * Questão 1: Soma até N com laço
 * Crie uma função somarAte que recebe um número inteiro positivo.
 * Use um laço de repetição para calcular a soma de todos os números de 1 até o número fornecido.
 * (Ex: somarAte(4) deve retornar 10, pois 1+2+3+4 = 10).
 */

const prompter = (question: string) => prompt(question) ?? "";

function somarAte(numero: number): number {
  let soma = 0;
  for (let i = 1; i <= numero; i++) {
    soma += i;
  }
  return soma;
}

function executar(): void {
  const numero = Number(prompter("Digite um número inteiro positivo: "));

  if (numero < 1) {
    console.log("Por favor, digite um número inteiro positivo!");
    return;
  }

  const resultado = somarAte(numero);
  console.log(`\nA soma de 1 até ${numero} é: ${resultado}`);
}

// Exemplos
console.log("Teste da função somarAte:");
console.log(`somarAte(4) = ${somarAte(4)}`); // 10
console.log(`somarAte(5) = ${somarAte(5)}`); // 15
console.log(`somarAte(10) = ${somarAte(10)}`); // 55

executar();


\nexport {};\n
