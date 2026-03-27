//2. Crie uma função que receba um número e retorne se ele é par ou ímpar.

function verificarParOuImpar(num: number): string {
  if (num % 2 === 0) {
    return "O número é par.";
  } else {
    return "O número é ímpar.";
  }
}

console.log(verificarParOuImpar(4));
console.log(verificarParOuImpar(7));