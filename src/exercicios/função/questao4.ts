// Crie uma função que recebe um valor de saque (inteiro).
// A função deve dizer quantas notas de 50, 20 e 10 são necessárias para o saque (priorizando as maiores). Use um laço while para ir subtraindo do valor total.

function calcularNotas(saque: number): void {
    let notas50 = 0;
    let notas20 = 0;
    let notas10 = 0;
    
    while (saque > 0) {
        if (saque >= 50) {
            notas50++;
            saque -= 50;
        } else if (saque >= 20) {
            notas20++;
            saque -= 20;
        } else if (saque >= 10) {
            notas10++;
            saque -= 10;
        }
    }

    console.log(`Notas de 50: ${notas50}`);
    console.log(`Notas de 20: ${notas20}`);
    console.log(`Notas de 10: ${notas10}`);
}

let valorSaque = parseInt(prompt("Digite o valor do saque (inteiro):"));
if (valorSaque > 0) {
    calcularNotas(valorSaque);
} else {
    console.log("Por favor, digite um valor de saque inteiro positivo.");
}