/**
 * Questão 5: Múltiplos de 3 no intervalo
 * Crie uma função que recebe dois números: início e fim.
 * Depois use um laço para percorrer esse intervalo e imprimir apenas os números que são múltiplos de 3.
 */

const prompter = (question: string) => prompt(question) ?? "";

function imprimirMultiplosDe3(inicio: number, fim: number): void {
  console.log(`\nMúltiplos de 3 entre ${inicio} e ${fim}:`);
  let encontrados = 0;

  for (let i = inicio; i <= fim; i++) {
    if (i % 3 === 0) {
      console.log(i);
      encontrados++;
    }
  }

  if (encontrados === 0) {
    console.log("Nenhum múltiplo de 3 encontrado neste intervalo.");
  }
}

function executar(): void {
  const inicio = Number(prompter("Digite o número inicial: "));
  const fim = Number(prompter("Digite o número final: "));

  if (inicio > fim) {
    console.log("O número inicial deve ser menor ou igual ao final!");
    return;
  }

  imprimirMultiplosDe3(inicio, fim);
}

// Exemplos
console.log("Exemplos de múltiplos de 3:\n");

console.log("Teste 1: Entre 1 e 30");
imprimirMultiplosDe3(1, 30);

console.log("\nTeste 2: Entre 10 e 50");
imprimirMultiplosDe3(10, 50);

console.log("\nTeste 3: Entre -15 e 15");
imprimirMultiplosDe3(-15, 15);

console.log("\n--- Modo interativo ---");
executar();


\nexport {};\n
