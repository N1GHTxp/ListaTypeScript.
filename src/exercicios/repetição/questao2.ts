// 2. Desenvolva a tabuada de um número usando for.

const numero: number = parseInt(prompt("Digite um número para ver a tabuada:") || "0");
if (isNaN(numero)) {
    console.log("Por favor, digite um número válido.");
}
else {
    console.log(`Tabuada de ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
