/**
 * Questão 6: Array de nomes
 * Crie um Array vazio que irá armazenar 15 nomes de pessoas (usando laço de repetição);
 * a) Pedir os nomes das pessoas usando o Prompt e o método push();
 * b) Apresentar os nomes digitados;
 * c) Ordenar o vetor usando o sort();
 * d) Apresentar os nomes inseridos de forma ordenada.
 */

const prompter = (question: string) => prompt(question) ?? "";

function arrayNomes(): void {
  const nomes: string[] = [];

  console.log("Digite 15 nomes:\n");

  // a) Pedir os nomes usando push()
  for (let i = 1; i <= 15; i++) {
    const nome = prompter(`Nome ${i}: `);
    if (nome.trim()) {
      nomes.push(nome);
    } else {
      console.log("Nome inválido! Digite novamente.");
      i--; // Repetir a iteração
    }
  }

  // b) Apresentar os nomes digitados
  console.log("\nNomes digitados:");
  nomes.forEach((nome, index) => {
    console.log(`${index + 1} - ${nome}`);
  });

  // c) Ordenar o vetor usando sort()
  nomes.sort();

  // d) Apresentar os nomes ordenados
  console.log("\nNomes ordenados alfabeticamente:");
  nomes.forEach((nome, index) => {
    console.log(`${index + 1} - ${nome}`);
  });
}

// Executar
arrayNomes();


\nexport {};\n
