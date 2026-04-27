/**
 * Questão 8: Boletim Híbrido
 * 1. Crie um array chamado notasSemestre que possa receber number ou a string "N.A" (Não Avaliado).
 * 2. Insira os valores: 8.5, 10, "N.A", 7.2.
 * 3. Crie uma lógica que percorra o array e:
 *    - Se for um número, imprima: "Nota: [valor]".
 *    - Se for "N.A", imprima: "O aluno não realizou a prova".
 */

function boletimHibrido(): void {
  // 1. Criar array que aceita number ou string "N.A"
  const notasSemestre: (number | "N.A")[] = [];

  // 2. Inserir os valores
  notasSemestre.push(8.5);
  notasSemestre.push(10);
  notasSemestre.push("N.A");
  notasSemestre.push(7.2);

  // 3. Percorrer e imprimir
  console.log("Boletim do semestre:");
  notasSemestre.forEach((nota, index) => {
    if (typeof nota === "number") {
      console.log(`Avaliação ${index + 1}: Nota: ${nota}`);
    } else if (nota === "N.A") {
      console.log(`Avaliação ${index + 1}: O aluno não realizou a prova`);
    }
  });
}

// Executar
boletimHibrido();
\nexport {};\n
