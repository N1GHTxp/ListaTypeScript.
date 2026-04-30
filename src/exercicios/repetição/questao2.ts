// 2. Desenvolva a tabuada de um número usando for.

function tabuada(numero: number): void {
    console.log(`Tabuada do ${numero}:<br>`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}<br>`);
    }
}

const numero: number = Number(prompt("Digite um número para ver a tabuada: "));
tabuada(numero);
