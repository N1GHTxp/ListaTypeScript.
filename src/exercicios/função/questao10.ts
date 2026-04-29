// Calculadora de IMC com Classificação.	
// Um personal trainer precisa de uma ferramenta para avaliar seus alunos.
// Função calcular_imc(peso, altura): Retorna o resultado da fórmula IMC = peso/altura².
// Função classificar_imc(valor_imc): Recebe o IMC e retorna uma string:
// Abaixo de 18.5: "Abaixo do peso"
// Entre 18.5 e 24.9: "Peso Normal"
// 25 ou mais: "Sobrepeso"
// Função exibir_laudo(nome, classificacao): Imprime: "Paciente: [nome] - Status: [classificacao]".
// Uso: Peça o nome, peso e altura, processe os dados e exiba o laudo.

function calcularIMC(peso: number, altura: number): number {
    return peso / (altura * altura);
}

function classificarIMC(valorIMC: number): string {
    if (valorIMC < 18.5) {
        return "Abaixo do peso";
    } else if (valorIMC >= 18.5 && valorIMC <= 24.9) {
        return "Peso Normal";
    } else {
        return "Sobrepeso";
    }
}

function exibirLaudo(nome: string, classificacao: string): void {
    console.log(`Paciente: ${nome} - Status: ${classificacao}`);
}

const nome = prompt("Digite o nome do paciente:");
const peso = parseFloat(prompt("Digite o peso do paciente (em kg):"));
const altura = parseFloat(prompt("Digite a altura do paciente (em metros):"));

const imc = calcularIMC(peso, altura);
const classificacao = classificarIMC(imc);
exibirLaudo(nome, classificacao);