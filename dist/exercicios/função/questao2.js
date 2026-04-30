"use strict";
// O IF tem uma estufa e o professor de biologia quer um sistema simples para monitorar a temperatura.
// Crie uma função ler_temperatura():
// Simula a leitura de um sensor, pedindo ao usuário para digitar uma temperatura (valor inteiro ou float).
// Retorna a temperatura lida.
// Crie uma função verificar_alerta_temperatura(temperatura):
// Recebe a temperatura.
// Se a temperatura for menor que 10 ou maior que 30, retorna True (alerta).
// Caso contrário, retorna False.
// Crie uma função emitir_mensagem_alerta(status_alerta):
// Recebe o status_alerta (True ou False).
// Se status_alerta for True, imprime "ALERTA: Temperatura fora da faixa ideal!".
// Se status_alerta for False, imprime "Temperatura dentro da faixa normal.".
function ler_temperatura() {
    let temperatura = parseFloat(prompt("Digite a temperatura atual (em °C):"));
    return temperatura;
}
function verificar_alerta_temperatura(temperatura) {
    if (temperatura < 10 || temperatura > 30) {
        return true;
    }
    else {
        return false;
    }
}
function emitir_mensagem_alerta(status_alerta) {
    if (status_alerta) {
        document.write("ALERTA: Temperatura fora da faixa ideal!");
    }
    else {
        document.write("Temperatura dentro da faixa normal.");
    }
}
let temperatura_atual = ler_temperatura();
let alerta = verificar_alerta_temperatura(temperatura_atual);
emitir_mensagem_alerta(alerta);
