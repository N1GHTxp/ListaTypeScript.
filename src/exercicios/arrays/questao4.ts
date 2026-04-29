// Calculadora de Média do ENEM
// Um professor de cursinho pré-ENEM precisa de uma ferramenta para calcular a média de seus alunos em diferentes disciplinas. Ele quer que a média seja arredondada para duas casas decimais.
// Crie uma função chamada calcular_media(notas) que receba um array de notas como argumento. A função deve:
// Calcular a média das notas.
// Arredondar a média para duas casas decimais.
// Retornar o valor da média.

function calcular_media(notas: number[]): number {
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    const media = soma / notas.length;
    return parseFloat(media.toFixed(2));
}

let notasAluno: number[] = [];
let entrada: number;

do {
    entrada = parseFloat(prompt("Digite uma nota do aluno (ou -1 para encerrar):"));
    if (entrada !== -1) {
        notasAluno.push(entrada);
    }
} while (entrada !== -1);

if (notasAluno.length > 0) {
    const mediaAluno = calcular_media(notasAluno);
    console.log("Média do aluno:", mediaAluno);
} else {
    console.log("Nenhuma nota foi informada.");
}