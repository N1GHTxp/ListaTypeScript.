"use strict";
// Simulador de Aprovação de Crédito 
// Uma loja quer automatizar a análise de crédito de clientes.
// Função solicitar_renda_mensal(): Pede a renda do usuário. Se o valor for negativo ou zero, pede novamente até ser válido.
// Função analisar_credito(renda, valor_parcela): * A parcela não pode ultrapassar 30% da renda.
// Se a renda for acima de R$ 5.000,00, o cliente ganha um bônus de R$ 500,00 no limite final.
// Retorna true para aprovado ou false para negado.
// Função exibir_status(resultado): Imprime "Crédito Aprovado" ou "Crédito Negado".
// Peça a renda e o valor da parcela que o cliente deseja pagar, processe e mostre o resultado.
function solicitarRendaMensal() {
    let renda;
    do {
        renda = parseFloat(prompt("Digite sua renda mensal (valor positivo):"));
        if (renda <= 0) {
            console.log("Por favor, digite um valor de renda mensal positivo.");
        }
    } while (renda <= 0);
    return renda;
}
function analisarCredito(renda, valorParcela) {
    const limiteParcela = renda * 0.3;
    if (valorParcela > limiteParcela) {
        return false; // Crédito negado
    }
    if (renda > 5000) {
        return true; // Crédito aprovado com bônus
    }
    return true; // Crédito aprovado
}
function exibirStatus(resultado) {
    if (resultado) {
        console.log("Crédito Aprovado");
    }
    else {
        console.log("Crédito Negado");
    }
}
const rendaMensal = solicitarRendaMensal();
const valorParcela = parseFloat(prompt("Digite o valor da parcela que deseja pagar:"));
const resultadoAnalise = analisarCredito(rendaMensal, valorParcela);
exibirStatus(resultadoAnalise);
