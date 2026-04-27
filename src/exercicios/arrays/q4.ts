/**
 * Questão 4: Calculadora de Média do ENEM
 * Um professor de cursinho pré-ENEM precisa de uma ferramenta para calcular a média de seus alunos.
 */

const prompter = (question: string) => prompt(question) ?? "";

function calcularMedia(notas: number[]): number {
  if (notas.length === 0) return 0;

  const soma = notas.reduce((acc, nota) => acc + nota, 0);
  const media = soma / notas.length;

  // Arredondar para 2 casas decimais
  return Math.round(media * 100) / 100;
}

function inputNotas(): void {
  console.log("=== CALCULADORA DE MÉDIA ENEM ===\n");

  const quantidadeNotas = Number(prompter("Quantas disciplinas? "));
  const notas: number[] = [];

  for (let i = 1; i <= quantidadeNotas; i++) {
    const nota = Number(prompter(`Digite a nota da disciplina ${i}: `));
    notas.push(nota);
  }

  const media = calcularMedia(notas);
  console.log(`\nMédia do aluno: ${media}`);
}

// Exemplos
console.log("Exemplos de cálculo de média:\n");

console.log("Teste 1: Notas [7.5, 8.5, 9.0]");
const notas1 = [7.5, 8.5, 9.0];
const media1 = calcularMedia(notas1);
console.log(`Média: ${media1}`);

console.log("\nTeste 2: Notas [6.0, 7.0, 8.0, 9.0]");
const notas2 = [6.0, 7.0, 8.0, 9.0];
const media2 = calcularMedia(notas2);
console.log(`Média: ${media2}`);

console.log("\nTeste 3: Notas [5.5, 6.75, 7.25, 8.5, 9.0]");
const notas3 = [5.5, 6.75, 7.25, 8.5, 9.0];
const media3 = calcularMedia(notas3);
console.log(`Média: ${media3}`);

console.log("\n--- Modo interativo ---");
inputNotas();


\nexport {};\n
