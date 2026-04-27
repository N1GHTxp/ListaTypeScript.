/**
 * Questão 2: Monitor de temperatura
 * O IF tem uma estufa e o professor de biologia quer um sistema simples para monitorar a temperatura.
 */

const prompter = (question: string) => prompt(question) ?? "";

function lerTemperatura(): number {
  const temperatura = Number(prompter("Digite a temperatura lida pelo sensor (°C): "));
  return temperatura;
}

function verificarAlertaTemperatura(temperatura: number): boolean {
  return temperatura < 10 || temperatura > 30;
}

function emitirMensagemAlerta(statusAlerta: boolean): void {
  if (statusAlerta) {
    console.log("ALERTA: Temperatura fora da faixa ideal!");
  } else {
    console.log("Temperatura dentro da faixa normal.");
  }
}

function monitorarTemperatura(): void {
  const temperatura = lerTemperatura();
  const alerta = verificarAlertaTemperatura(temperatura);
  emitirMensagemAlerta(alerta);
}

// Exemplos
console.log("Sistema de Monitoramento de Temperatura\n");

// Teste 1: Temperatura normal
console.log("Teste 1: 22°C");
emitirMensagemAlerta(verificarAlertaTemperatura(22));

// Teste 2: Temperatura muito baixa
console.log("\nTeste 2: 5°C");
emitirMensagemAlerta(verificarAlertaTemperatura(5));

// Teste 3: Temperatura muito alta
console.log("\nTeste 3: 35°C");
emitirMensagemAlerta(verificarAlertaTemperatura(35));

// Executar interativo
console.log("\n--- Modo interativo ---");
monitorarTemperatura();


\nexport {};\n
