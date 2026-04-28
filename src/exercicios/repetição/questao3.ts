// 3. Faça um programa que leia nome, horas trabalhadas, salário-hora e sexo de um grupo de
// operários. Ao final de cada solicitação pergunte se o usuário quer continuar ou não o
// programa.
// Calcule e imprima:
// ● Salário total dos funcionários, o maior salário, juntamente com o nome de quem o
// recebeu;
// ● O número de funcionários do sexo masculino e feminino cadastrado;
// ● O percentual de funcionários homens e mulheres cadastrados.

interface Funcionario {
    nome: string;
    horasTrabalhadas: number;
    salarioHora: number;
    sexo: string;
}

let funcionarios: Funcionario[] = [];

while (true) {
    const nome: string = prompt("Digite o nome do funcionário:") || "";
    const horasTrabalhadas: number = parseFloat(prompt("Digite as horas trabalhadas:") || "0");
    const salarioHora: number = parseFloat(prompt("Digite o salário por hora:") || "0");
    const sexo: string = prompt("Digite o sexo do funcionário (M/F):") || "";
    if (nome === "" || isNaN(horasTrabalhadas) || isNaN(salarioHora) || (sexo.toUpperCase() !== "M" && sexo.toUpperCase() !== "F")) {
        console.log("Por favor, preencha todos os campos corretamente.");
        continue;
    }
    funcionarios.push({ nome, horasTrabalhadas, salarioHora, sexo: sexo.toUpperCase() });

    const continuar: string = prompt("Deseja cadastrar outro funcionário? (S/N):") || "";
    if (continuar.toUpperCase() !== "S") {
        break;
    }
}

let salarioTotal: number = 0;
let maiorSalario: number = 0;
let nomeMaiorSalario: string = "";
let countMasculino: number = 0;
let countFeminino: number = 0;
for (const funcionario of funcionarios) {
    const salarioFuncionario = funcionario.horasTrabalhadas * funcionario.salarioHora;
    salarioTotal += salarioFuncionario;
    if (salarioFuncionario > maiorSalario) {
        maiorSalario = salarioFuncionario;
        nomeMaiorSalario = funcionario.nome;
    }
    if (funcionario.sexo === "M") {
        countMasculino++;
    }
    else if (funcionario.sexo === "F") {
        countFeminino++;
    }
}

const totalFuncionarios = countMasculino + countFeminino;
const percentualMasculino = totalFuncionarios > 0 ? (countMasculino / totalFuncionarios) * 100 : 0;
const percentualFeminino = totalFuncionarios > 0 ? (countFeminino / totalFuncionarios) * 100 : 0;

console.log(`Salário total dos funcionários: R$ ${salarioTotal.toFixed(2)}`);
console.log(`Maior salário: R$ ${maiorSalario.toFixed(2)}, recebido por: ${nomeMaiorSalario}`);
console.log(`Número de funcionários do sexo masculino: ${countMasculino}`);
console.log(`Número de funcionários do sexo feminino: ${countFeminino}`);
console.log(`Percentual de funcionários homens: ${percentualMasculino.toFixed(2)}%`);
console.log(`Percentual de funcionários mulheres: ${percentualFeminino.toFixed(2)}%`);
