/**
 * Questão 8: Controle de Estoque de Loja (Loop e Relatório)
 * Faça um programa que gerencie a entrada de produtos em um estoque.
 */

const prompter = (question: string) => prompt(question) ?? "";

function calcularValorFinal(preco: number, quantidade: number): number {
  let total = preco * quantidade;
  if (quantidade > 10) {
    total *= 0.95; // 5% de desconto
  }
  return total;
}

function controleEstoque(): void {
  let totalInvestido = 0;
  let totalProdutos = 0;
  let precos: number[] = [];

  console.log("=== CONTROLE DE ESTOQUE ===\n");

  while (true) {
    const preco = Number(prompter("Digite o preço unitário do produto (0 para encerrar): R$ "));

    if (preco === 0) {
      break;
    }

    const quantidade = Number(prompter("Digite a quantidade comprada: "));
    const valorFinal = calcularValorFinal(preco, quantidade);

    totalInvestido += valorFinal;
    totalProdutos++;
    precos.push(preco);

    console.log(`✓ Produto registrado. Valor total: R$ ${valorFinal.toFixed(2)}\n`);
  }

  if (totalProdutos > 0) {
    const mediaPreco = precos.reduce((a, b) => a + b, 0) / totalProdutos;

    console.log("\n=== RELATÓRIO FINAL ===");
    console.log(`Total geral investido: R$ ${totalInvestido.toFixed(2)}`);
    console.log(`Média de preço dos produtos: R$ ${mediaPreco.toFixed(2)}`);
    console.log(`Total de produtos cadastrados: ${totalProdutos}`);
  } else {
    console.log("Nenhum produto foi cadastrado.");
  }
}

// Executar
controleEstoque();


\nexport {};\n
