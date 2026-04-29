// Organizador de Tarefas Diárias
// Você quer organizar suas tarefas de casa e da escola para não esquecer nada. Crie uma função chamada gerenciar_tarefas() que não receba argumentos. A função deve:
// Permitir que o usuário adicione tarefas a um vetor.
// Permitir que o usuário marque tarefas como concluídas (removendo-as da lista, por exemplo).
// Permitir que o usuário exiba todas as tarefas pendentes.
// Utilize um menu interativo com opções (adicionar, concluir, exibir, sair) e um laço while para manter o programa rodando até o usuário escolher sair.

function gerenciar_tarefas(): void {
    let tarefas: string[] = [];
    let opcao: string;

    do {
        opcao = prompt("Escolha uma opção: (1) Adicionar tarefa, (2) Concluir tarefa, (3) Exibir tarefas, (4) Sair");
        switch (opcao) {
            case "1":
                let novaTarefa = prompt("Digite a nova tarefa:");
                tarefas.push(novaTarefa);
                console.log("Tarefa adicionada.");
                break;
            case "2":
                let tarefaConcluida = prompt("Digite a tarefa que deseja concluir:");
                tarefas = tarefas.filter(tarefa => tarefa !== tarefaConcluida);
                console.log("Tarefa concluída.");
                break;
            case "3":
                console.log("Tarefas pendentes:");
                tarefas.forEach(tarefa => console.log("- " + tarefa));
                break;
            case "4":
                console.log("Saindo do gerenciador de tarefas.");
                break;
            default:
                console.log("Opção inválida. Por favor, escolha uma opção válida.");
        }
    } while (opcao !== "4");
}

gerenciar_tarefas();