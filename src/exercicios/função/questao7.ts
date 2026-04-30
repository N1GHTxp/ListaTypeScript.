// Sistema de Eficiência de Combustível
// Crie um programa que ajude um motorista a saber a autonomia do seu carro.

// Função 1: Recebe a distância percorrida e a quantidade de combustível gasta, retornando o consumo médio (km/l).
// Função 2: Recebe o consumo médio e a capacidade total do tanque, retornando quantos quilômetros o carro percorre com o tanque cheio.

function calcularConsumoMedio(distancia: number, combustivelGasto: number): number {
    return distancia / combustivelGasto;
}

function calcularAutonomia(consumoMedio: number, capacidadeTanque: number): number {
    return consumoMedio * capacidadeTanque;
}

let distancia = parseFloat(prompt("Digite a distância percorrida (em km):"));
let combustivelGasto = parseFloat(prompt("Digite a quantidade de combustível gasta (em litros):"));
let capacidadeTanque = parseFloat(prompt("Digite a capacidade total do tanque (em litros):"));

if (distancia > 0 && combustivelGasto > 0 && capacidadeTanque > 0) {
    const consumoMedio = calcularConsumoMedio(distancia, combustivelGasto);
    const autonomia = calcularAutonomia(consumoMedio, capacidadeTanque);
    console.log(`Consumo médio: ${consumoMedio.toFixed(2)} km/l`);
    console.log(`Autonomia com tanque cheio: ${autonomia.toFixed(2)} km`);
} else {
    console.log("Por favor, digite valores positivos para distância, combustível gasto e capacidade do tanque.");
}


