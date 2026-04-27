/**
 * Questão 5: Análise de desempenho de vendas
 * Analisador de Desempenho de Vendas (Relatório de Equipe)
 * Imagine que você está gerindo uma equipe de 5 vendedores.
 */

const prompter = (question: string) => prompt(question) ?? "";

function classificarVenda(valor: number): string {
  if (valor < 1000) {
    return "Bronze";
  } else if (valor >= 1000 && valor <= 5000) {
    return "Prata";
  } else {
    return "Ouro";
  }
}

function analisarVendas(): void {
  const numVendedores = 5;
  let totalVendas = 0;
  let maiorVenda = 0;
  let countOuro = 0;

  console.log(`\nDigite o valor da venda de cada um dos ${numVendedores} vendedores:\n`);

  for (let i = 1; i <= numVendedores; i++) {
    const venda = Number(prompter(`Venda do vendedor ${i} (R$): `));
    const classificacao = classificarVenda(venda);

    totalVendas += venda;
    if (venda > maiorVenda) {
      maiorVenda = venda;
    }
    if (classificacao === "Ouro") {
      countOuro++;
    }

    console.log(`  → Classificação: ${classificacao}`);
  }

  console.log("\n=== RELATÓRIO DE VENDAS ===");
  console.log(`Total de vendas da equipe: R$ ${totalVendas.toFixed(2)}`);
  console.log(`Maior venda: R$ ${maiorVenda.toFixed(2)}`);
  console.log(`Vendedores na categoria "Ouro": ${countOuro}`);
}

// Executar
analisarVendas();


\nexport {};\n
