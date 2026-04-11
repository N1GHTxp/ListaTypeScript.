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

function cadastrarFuncionario(): void {
    let funcionario: Funcionario = {
        nome: prompt("Nome do funcionário: ") || "",
        horasTrabalhadas: Number(prompt("Horas trabalhadas: ")) || 0,
        salarioHora: Number(prompt("Salário por hora: ")) || 0,
        sexo: prompt("Sexo (M/F): ") || ""
    };
    funcionarios.push(funcionario);
    let continuar = prompt("Deseja cadastrar outro funcionário? (S/N): ");
    if (continuar?.toUpperCase() === "S") {
        cadastrarFuncionario();
    }
}

function calcularResultados(): void {
    let salarioTotal = 0;
    let maiorSalario = 0;
    let nomeMaiorSalario = "";
    let countMasculino = 0;
    let countFeminino = 0;

    for (let funcionario of funcionarios) {
        let salario = funcionario.horasTrabalhadas * funcionario.salarioHora;
        salarioTotal += salario;
        if (salario > maiorSalario) {
            maiorSalario = salario;
            nomeMaiorSalario = funcionario.nome;
        }
        if (funcionario.sexo.toUpperCase() === "M") {
            countMasculino++;
        } else if (funcionario.sexo.toUpperCase() === "F") {
            countFeminino++;
        }
    }

    let totalFuncionarios = countMasculino + countFeminino;
    let percentualMasculino = (countMasculino / totalFuncionarios) * 100;
    let percentualFeminino = (countFeminino / totalFuncionarios) * 100;

    document.writeln("Salário total dos funcionários: " + salarioTotal + "<br>");
    document.writeln("Maior salário: " + maiorSalario + " (Funcionário: " + nomeMaiorSalario + ")<br>");
    document.writeln("Número de funcionários masculinos: " + countMasculino + "<br>");
    document.writeln("Número de funcionários femininos: " + countFeminino + "<br>");
    document.writeln("Percentual de funcionários masculinos: " + percentualMasculino + "%<br>");
    document.writeln("Percentual de funcionários femininos: " + percentualFeminino + "%<br>");
}

cadastrarFuncionario();
calcularResultados();