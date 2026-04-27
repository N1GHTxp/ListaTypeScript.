/**
 * Questão 3: Triângulo de asteriscos
 * Crie uma função que recebe um número (ex: 5) e em seguida utilize loops aninhados
 * para desenhar um triângulo de asteriscos no console.
 * Exemplo para entrada 3:
 * *
 * **
 * ***
 */

const prompter = (question: string) => prompt(question) ?? "";

function desenharTriangulo(linhas: number): void {
  for (let i = 1; i <= linhas; i++) {
    let linha = "";
    for (let j = 0; j < i; j++) {
      linha += "*";
    }
    console.log(linha);
  }
}

function executar(): void {
  const numero = Number(prompter("Digite um número para desenhar o triângulo: "));

  if (numero < 1) {
    console.log("Por favor, digite um número positivo!");
    return;
  }

  console.log(`\nTriângulo com ${numero} linhas:\n`);
  desenharTriangulo(numero);
}

// Exemplos
console.log("Teste de triângulo com 3 linhas:");
desenharTriangulo(3);

console.log("\nTeste de triângulo com 5 linhas:");
desenharTriangulo(5);

console.log("\n--- Modo interativo ---");
executar();


\nexport {};\n
