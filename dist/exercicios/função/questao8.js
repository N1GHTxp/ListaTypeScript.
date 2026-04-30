"use strict";
// Controle de Estoque de Loja (Loop e Relatório)
// Faça um programa que gerencie a entrada de produtos em um estoque. O programa deve solicitar o preço unitário do produto e a quantidade comprada.
// Crie uma função que recebe preço e quantidade. Se a quantidade for maior que 10 unidades, aplica 5% de desconto sobre o valor total daquele item. Retorna o valor final.
// O programa deve repetir a solicitação até que o preço informado seja zero.
// Ao encerrar, exiba o total geral investido no estoque e a média de preço dos produtos cadastrados.
function calcularValorFinal(precoUnitario, quantidade) {
    let valorTotal = precoUnitario * quantidade;
    if (quantidade > 10) {
        valorTotal *= 0.95; // Aplica 5% de desconto
    }
    return valorTotal;
}
let totalInvestido = 0;
let totalProdutos = 0;
while (true) {
    let precoUnitario = parseFloat(prompt("Digite o preço unitário do produto (ou 0 para encerrar):"));
    if (precoUnitario === 0) {
        break;
    }
    let quantidade = parseInt(prompt("Digite a quantidade comprada:"));
    if (quantidade > 0) {
        const valorFinal = calcularValorFinal(precoUnitario, quantidade);
        totalInvestido += valorFinal;
        totalProdutos += quantidade;
    }
    else {
        console.log("Por favor, digite uma quantidade positiva.");
    }
}
if (totalProdutos > 0) {
    const mediaPrecos = totalInvestido / totalProdutos;
    console.log(`Total investido no estoque: R$ ${totalInvestido.toFixed(2)}`);
    console.log(`Média de preço dos produtos cadastrados: R$ ${mediaPrecos.toFixed(2)}`);
}
else {
    console.log("Nenhum produto foi cadastrado.");
}
