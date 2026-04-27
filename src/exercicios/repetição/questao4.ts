/**
 * Questão 4: Contar pares e ímpares até -1
 * Faça um programa que leia um conjunto de números (X) e imprima a quantidade de
 * números pares (QPares) e a quantidade de números ímpares (QImpares) lidos.
 * Admita que o valor -1 é utilizado como sentinela para fim de leitura.
 */

const prompter = (question: string) => prompt(question) ?? "";

function contarParesEImpares(): void {
  let qPares = 0;
  let qImpares = 0;
  let numero: number;

  do {
    numero = Number(prompter("Digite um número (-1 para sair): "));

    if (numero !== -1) {
      if (numero % 2 === 0) {
        qPares++;
      } else {
        qImpares++;
      }
    }
  } while (numero !== -1);

  console.log(`\nQuantidade de números pares: ${qPares}`);
  console.log(`Quantidade de números ímpares: ${qImpares}`);
}

// Executar
contarParesEImpares();

\nexport {};\n
