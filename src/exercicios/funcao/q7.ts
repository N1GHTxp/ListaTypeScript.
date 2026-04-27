/**
 * Questão 7: Sistema de Eficiência de Combustível
 * Crie um programa que ajude um motorista a saber a autonomia do seu carro.
 */

const prompter = (question: string) => prompt(question) ?? "";

function calcularConsumoMedio(distancia: number, combustivel: number): number {
  return distancia / combustivel;
}

function calcularAutonomia(consumoMedio: number, capacidadeTanque: number): number {
  return consumoMedio * capacidadeTanque;
}

function executar(): void {
  console.log("=== SISTEMA DE EFICIÊNCIA DE COMBUSTÍVEL ===\n");

  const distancia = Number(prompter("Digite a distância percorrida (km): "));
  const combustivel = Number(prompter("Digite o combustível gasto (litros): "));

  const consumoMedio = calcularConsumoMedio(distancia, combustivel);
  console.log(`\nConsumo médio: ${consumoMedio.toFixed(2)} km/l`);

  const capacidadeTanque = Number(prompter("\nDigite a capacidade total do tanque (litros): "));
  const autonomia = calcularAutonomia(consumoMedio, capacidadeTanque);

  console.log(`\nAutonomia com tanque cheio: ${autonomia.toFixed(2)} km`);
}

// Exemplos
console.log("Exemplos:\n");

console.log("Teste 1: 100 km com 5 litros");
const consumo1 = calcularConsumoMedio(100, 5);
console.log(`Consumo: ${consumo1.toFixed(2)} km/l`);
const autonomia1 = calcularAutonomia(consumo1, 50);
console.log(`Autonomia (tanque 50l): ${autonomia1.toFixed(2)} km`);

console.log("\nTeste 2: 250 km com 10 litros");
const consumo2 = calcularConsumoMedio(250, 10);
console.log(`Consumo: ${consumo2.toFixed(2)} km/l`);
const autonomia2 = calcularAutonomia(consumo2, 60);
console.log(`Autonomia (tanque 60l): ${autonomia2.toFixed(2)} km`);

console.log("\n--- Modo interativo ---");
executar();


\nexport {};\n
