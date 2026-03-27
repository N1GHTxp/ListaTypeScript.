// 1. Crie um programa que receba um número e informe se ele é positivo, negativo ou zero.

function verificarNumero(num: number): string {
  if (num > 0) {
    return "O número é positivo.";
  } else if (num < 0) {
    return "O número é negativo.";
  } else {
    return "O número é zero.";
  }
}

console.log(verificarNumero(5));
console.log(verificarNumero(-3));
console.log(verificarNumero(0));