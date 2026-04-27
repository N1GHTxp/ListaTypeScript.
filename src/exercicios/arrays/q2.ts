/**
 * Questão 2: Estatísticas de notas
 * Faça um programa que leia um número indeterminado de notas ou -1 para encerrar.
 */

const prompter = (question: string) => prompt(question) ?? "";

function estatisticasNotas(): void {
  const notas: number[] = [];

  console.log("Digite as notas (ou -1 para encerrar):\n");

  while (true) {
    const nota = Number(prompter("Digite uma nota: "));

    if (nota === -1) {
      break;
    }

    if (nota >= 0 && nota <= 10) {
      notas.push(nota);
    } else {
      console.log("Nota inválida! Digite um valor entre 0 e 10.");
    }
  }

  if (notas.length === 0) {
    console.log("Nenhuma nota foi informada.");
    return;
  }

  // a) Quantidade de notas
  console.log(`\na) Quantidade de notas: ${notas.length}`);

  // b) Todas as notas na ordem informada
  console.log("b) Notas na ordem informada:", notas);

  // c) Notas na ordem inversa
  const notasInversas = [...notas].reverse();
  console.log("c) Notas em ordem inversa:", notasInversas);

  // d) Soma das notas
  const soma = notas.reduce((acc, nota) => acc + nota, 0);
  console.log(`d) Soma das notas: ${soma.toFixed(2)}`);

  // e) Média das notas
  const media = soma / notas.length;
  console.log(`e) Média das notas: ${media.toFixed(2)}`);

  // f) Quantidade de notas acima da média
  const notasAcimaMedia = notas.filter((nota) => nota > media);
  console.log(`f) Notas acima da média: ${notasAcimaMedia.length}`);
}

// Executar
estatisticasNotas();


\nexport {};\n
