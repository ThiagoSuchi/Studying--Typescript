"use strict";
// Exercício 5
var Prioridade;
(function (Prioridade) {
    Prioridade["BAIXA"] = "Baixa";
    Prioridade["MEDIA"] = "M\u00E9dia";
    Prioridade["ALTA"] = "Alta";
})(Prioridade || (Prioridade = {}));
function descricaoPrioridade(prioridade) {
    if (prioridade === Prioridade.BAIXA) {
        return "Essa tarefa pode ser feita depois.";
    }
    else if (prioridade === Prioridade.MEDIA) {
        return "Essa tarefa deve ser feita em breve.";
    }
    else if (prioridade === Prioridade.ALTA) {
        return "Essa tarefa é urgente!";
    }
    else {
        return "Prioridade inválida.";
    }
}
const prioridade = Prioridade.MEDIA;
console.log(descricaoPrioridade(prioridade));
