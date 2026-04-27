/**
 * Questão 3: Gerador de Lista de Compras Personalizada
 * Sua mãe pediu para você fazer uma lista de compras para o supermercado.
 */

const prompter = (question: string) => prompt(question) ?? "";

function gerarListaCompras(): void {
  const listaCompras: { item: string; quantidade: number }[] = [];

  let menu = true;

  while (menu) {
    console.log("\n=== LISTA DE COMPRAS ===");
    console.log("1 - Adicionar item");
    console.log("2 - Remover item");
    console.log("3 - Exibir lista");
    console.log("4 - Total de itens");
    console.log("5 - Sair");

    const opcao = Number(prompter("\nEscolha uma opção (1-5): "));

    switch (opcao) {
      case 1:
        const item = prompter("Digite o item: ");
        const quantidade = Number(prompter("Digite a quantidade: "));

        if (item && quantidade > 0) {
          listaCompras.push({ item, quantidade });
          console.log(`✓ "${item}" adicionado à lista`);
        } else {
          console.log("Dados inválidos!");
        }
        break;

      case 2:
        if (listaCompras.length === 0) {
          console.log("Lista vazia!");
          break;
        }

        listaCompras.forEach((obj, index) => {
          console.log(`${index} - ${obj.item} (${obj.quantidade})`);
        });

        const index = Number(prompter("Digite o número do item a remover: "));

        if (index >= 0 && index < listaCompras.length) {
          const removido = listaCompras.splice(index, 1);
          console.log(`✓ "${removido[0].item}" removido da lista`);
        } else {
          console.log("Índice inválido!");
        }
        break;

      case 3:
        if (listaCompras.length === 0) {
          console.log("Lista vazia!");
        } else {
          console.log("\n--- LISTA DE COMPRAS ---");
          listaCompras.forEach((obj) => {
            console.log(`• ${obj.item} - Qtd: ${obj.quantidade}`);
          });
        }
        break;

      case 4:
        const totalItens = listaCompras.reduce((acc, obj) => acc + obj.quantidade, 0);
        console.log(`Total de itens na lista: ${totalItens}`);
        break;

      case 5:
        menu = false;
        console.log("Até logo!");
        break;

      default:
        console.log("Opção inválida!");
    }
  }
}

// Executar
gerarListaCompras();


\nexport {};\n
