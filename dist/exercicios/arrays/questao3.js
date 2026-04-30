"use strict";
// Gerador de Lista de Compras Personalizada
// Sua mãe pediu para você fazer uma lista de compras para o supermercado. Ela quer que você possa adicionar itens e a quantidade de cada um.
// Crie uma função chamada gerar_lista_compras() que não recebe argumentos. A função deve:
// Permitir que o usuário adicione itens à lista(array) até que ele digite "fim".
// Permitir que o usuário apresente todos os itens da lista.
// Permitir que o usuário apresente quantos itens há na lista.
// Permitir que o usuário remova itens da lista.
function gerar_lista_compras() {
    let listaCompras = [];
    let entrada;
    do {
        entrada = prompt("Digite o item (ou 'fim' para encerrar):");
        if (entrada !== "fim") {
            let quantidade = parseInt(prompt("Digite a quantidade:"));
            listaCompras.push({ item: entrada, quantidade });
        }
    } while (entrada !== "fim");
    console.log("Lista de Compras:", listaCompras);
    console.log("Quantidade de itens na lista:", listaCompras.length);
    let itemParaRemover = prompt("Digite o item que deseja remover:");
    listaCompras = listaCompras.filter(item => item.item !== itemParaRemover);
    console.log("Lista de Compras atualizada:", listaCompras);
}
gerar_lista_compras();
