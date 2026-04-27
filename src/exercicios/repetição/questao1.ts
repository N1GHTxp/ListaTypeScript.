/**
 * Questão 1: Contar e somar números até 0
 * Crie um programa que peça números até o usuário digitar 0 e mostre:
 * - Quantidade de números digitados
 * - Soma total
 */

const prompter = (question: string) => prompt(question) ?? "";

function contarESomar(): void {
  let numero: number;
  let quantidade: number = 0;
  let soma: number = 0;

  do {
    numero = Number(prompter("Digite um número (0 para sair): "));

    if (numero !== 0) {
      quantidade++;
      soma += numero;
    }
  } while (numero !== 0);

  console.log(`\nQuantidade de números digitados: ${quantidade}`);
  console.log(`Soma total: ${soma}`);
}

// Executar
contarESomar();

\nexport {};\n
