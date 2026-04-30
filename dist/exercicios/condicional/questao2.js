"use strict";
// Crie um programa chamado Estações. Este programa deve ler uma data e armazenar na
// variável mês, um número entre 1 e 12, correspondendo a um dos meses do ano. No final,
// você deve imprimir uma mensagem conforme o exemplo: &quot;A estação do ano correspondente
// ao mês 3 é Verão&quot; Considere a estação prevalente para cada mês:
// a) Janeiro (1): Verão
// b) Fevereiro (2): Verão
// c) Março (3): Verão
// d) Abril (4): Outono
// e) Maio (5): Outono
// f) Junho (6): Outono
// g) Julho (7): Inverno
// h) Agosto (8): Inverno
// i) Setembro (9): Inverno
// j) Outubro (10): Primavera
// k) Novembro (11): Primavera
// l) Dezembro (12): Primavera
const mes = Number(prompt("informe um numero: "));
let estacao;
switch (mes) {
    case 1:
        estacao = "verão";
        break;
    case 2:
        estacao = "verão";
        break;
    case 3:
        estacao = "verão";
        break;
    case 4:
        estacao = "outono";
        break;
    case 5:
        estacao = "outono";
        break;
    case 6:
        estacao = "outono";
        break;
    case 7:
        estacao = "inverno";
        break;
    case 8:
        estacao = "inverno";
        break;
    case 9:
        estacao = "inverno";
        break;
    case 10:
        estacao = "primavera";
        break;
    case 11:
        estacao = "primavera";
        break;
    case 12:
        estacao = "primavera";
        break;
    default:
        estacao = "mês inválido";
}
console.log("A estação do ano correspondente ao mês " + mes + " é " + estacao + ".");
