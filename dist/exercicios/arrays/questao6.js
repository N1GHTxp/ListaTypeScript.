"use strict";
//  Crie um Array vazio que irá armazenar 15 nomes de pessoas (usando laço de repetição);
// Pedir os nomes das pessoas usando o Prompt e o método push();
// Apresentar os nomes digitados;
// Ordenar o vetor usando o sort();
// Apresentar os nomes inseridos de forma ordenada.
let nomes = [];
for (let i = 0; i < 15; i++) {
    let nome = prompt("Digite o nome da pessoa:");
    nomes.push(nome);
}
console.log("Nomes digitados:");
nomes.forEach(nome => console.log("- " + nome));
nomes.sort();
console.log("Nomes ordenados:");
nomes.forEach(nome => console.log("- " + nome));
