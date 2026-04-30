// Boletim Híbrido
// Crie um array chamado notasSemestre que possa receber number ou a string "N.A" (Não Avaliado).
// Insira os valores: 8.5, 10, "N.A", 7.2.
// Crie uma lógica que percorra o array e:
// Se for um número, imprima: "Nota: [valor]".
// Se for "N.A", imprima: "O aluno não realizou a prova".

let notasSemestre: (number | string)[] = [8.5, 10, "N.A", 7.2];

for (let nota of notasSemestre) {
    if (typeof nota === "number") {
        console.log(`Nota: ${nota}`);
    }
    else if (nota === "N.A") {
        console.log("O aluno não realizou a prova");
    }
}

