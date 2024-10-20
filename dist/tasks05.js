"use strict";
// Exercício 5
var Prioridade;
(function (Prioridade) {
    Prioridade[Prioridade["BAIXA"] = 0] = "BAIXA";
    Prioridade[Prioridade["MEDIA"] = 1] = "MEDIA";
    Prioridade[Prioridade["ALTA"] = 2] = "ALTA";
})(Prioridade || (Prioridade = {}));
function descricaoPrioridade(prioridade) {
    if (prioridade === Prioridade.BAIXA) {
        return "Essa tarefa pode ser feita depois.";
    }
    else if (prioridade === Prioridade.MEDIA) {
        return "Essa tarefa deve ser feita em breve.";
    }
    else {
        return "Essa tarefa é urgente!";
    }
}
const prioridade = Prioridade.MEDIA;
console.log(descricaoPrioridade(prioridade));
