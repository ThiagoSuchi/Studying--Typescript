"use strict";
var Cores;
(function (Cores) {
    Cores["Amarelo"] = "#f1c40f";
    Cores["Verde"] = "#27ae60";
    Cores["Azul"] = " #3498db ";
    Cores["Vermelho"] = "#e74c3c";
})(Cores || (Cores = {}));
let coresPrimarias = Cores.Verde;
console.log(`A cor é indicada pelo objeto: ${coresPrimarias}`);
var Idiomas;
(function (Idiomas) {
    Idiomas[Idiomas["Portugues"] = 0] = "Portugues";
    Idiomas[Idiomas["Ingles"] = 1] = "Ingles";
    Idiomas[Idiomas["Frances"] = 2] = "Frances";
    Idiomas[Idiomas["Espanhol"] = 3] = "Espanhol";
})(Idiomas || (Idiomas = {}));
console.log(Idiomas);
var Dia;
(function (Dia) {
    Dia["Segunda"] = "Seg";
    Dia["Terca"] = "Ter";
    Dia["Quarta"] = "Qua";
    Dia["Quinta"] = "Qui";
    Dia["Sexta"] = "Sex";
    Dia["Sabado"] = "Sab";
    Dia["Domingo"] = "Dom";
})(Dia || (Dia = {}));
console.log(Dia);
var tarefas;
(function (tarefas) {
    tarefas[tarefas["ToDo"] = 0] = "ToDo";
    tarefas[tarefas["Progress"] = 1] = "Progress";
    tarefas[tarefas["Done"] = 2] = "Done";
})(tarefas || (tarefas = {}));
const concluidaTarefa = {
    id: 1,
    status: tarefas.Done,
    descricao: 'Tarefa concluída com sucesso!'
};
if (concluidaTarefa.status === tarefas.Done) {
    console.log(concluidaTarefa.descricao);
}
