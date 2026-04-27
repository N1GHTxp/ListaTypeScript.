/**
 * Questão 2: Desenvolver tabuada com for
 * Desenvolva a tabuada de um número usando for.
 */

const prompter = (question: string) => prompt(question) ?? "";

function tabuada(): void {
  const numero = Number(prompter("Digite um número para ver a tabuada: "));

  console.log(`\nTabuada do ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

// Executar
tabuada();


\nexport {};\n
