/**
 * Questão 1: Listas derivadas de array
 * Mostre-me as seguintes listas, derivadas de: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
 * a) Números pares
 * b) Números ímpares
 * c) Todos os múltiplos de 2,3 e 4
 * d) Lista reversa
 */

function listasDerivadasDeArray(): void {
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  console.log("Array original:", array);

  // a) Números pares
  const pares = array.filter((num) => num % 2 === 0);
  console.log("\na) Números pares:", pares);

  // b) Números ímpares
  const impares = array.filter((num) => num % 2 !== 0);
  console.log("b) Números ímpares:", impares);

  // c) Múltiplos de 2, 3 e 4
  const multiplos2 = array.filter((num) => num % 2 === 0);
  const multiplos3 = array.filter((num) => num % 3 === 0);
  const multiplos4 = array.filter((num) => num % 4 === 0);

  console.log("c) Múltiplos de 2:", multiplos2);
  console.log("   Múltiplos de 3:", multiplos3);
  console.log("   Múltiplos de 4:", multiplos4);

  // d) Lista reversa
  const reversa = [...array].reverse();
  console.log("d) Lista reversa:", reversa);
}

// Executar
listasDerivadasDeArray();
\nexport {};\n
