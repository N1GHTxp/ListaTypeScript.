// 5. Analisador de Desempenho de Vendas (Relatório de Equipe)
// Imagine que você está gerindo uma equipe de 5 vendedores.
//  Função classificarVenda(valor):
// o Se valor &lt; 1000: Retorna &quot;Bronze&quot;
// o Se valor entre 1000 e 5000: Retorna &quot;Prata&quot;
// o Se valor &gt; 5000: Retorna &quot;Ouro&quot;
//  O Programa:
// 1. Use um laço for para pedir o valor da venda de cada um dos 5 vendedores.
// 2. Dentro do laço, chame a função de classificação.
// 3. Ao final, o programa deve exibir:
//  O total de vendas da equipe (soma).
//  Quem foi o vendedor com a maior venda (maior valor digitado).
//  Quantos vendedores atingiram a categoria &quot;Ouro&quot;.

function classificarVenda(valor: number): string {
    if (valor < 1000) {
        return "Bronze";
    }
    else if (valor >= 1000 && valor <= 5000) {
        return "Prata";
    }
    else {
        return "Ouro";
    }
}

let totalVendas: number = 0;
let maiorVenda: number = 0;
let vendedorMaiorVenda: number = 0;
let countOuro: number = 0;

for (let i = 1; i <= 5; i++) {
    const valorVenda: number = parseFloat(prompt(`Digite o valor da venda do vendedor ${i}:`) || "0");
    if (isNaN(valorVenda)) {
        console.log("Por favor, digite um valor de venda válido.");
        i--;
        continue;
    }
    totalVendas += valorVenda;

    if (valorVenda > maiorVenda) {
        maiorVenda = valorVenda;
        vendedorMaiorVenda = i;
    }
    const categoria: string = classificarVenda(valorVenda);
    if (categoria === "Ouro") {
        countOuro++;
    }
}

console.log(`Total de vendas da equipe: ${totalVendas}`);
console.log(`O vendedor com a maior venda é o vendedor ${vendedorMaiorVenda} com uma venda de ${maiorVenda}.`);
console.log(`Quantidade de vendedores que atingiram a categoria "Ouro": ${countOuro}.`);
