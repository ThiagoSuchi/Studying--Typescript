//----------------- ENUM ------------------
enum Cores {
    Amarelo = "#f1c40f",
    Verde = "#27ae60",
    Azul = " #3498db ",
    Vermelho = "#e74c3c"
}
let coresPrimarias: Cores = Cores.Verde

console.log(`A cor é indicada pelo objeto: ${coresPrimarias}`);



/*
 Tipos de Enums
  ==> Numeric Enum 
  ==> Sting Enum
 */

// Enum Numeric 
enum Idiomas {
    Portugues,
    Ingles,
    Frances,
    Espanhol,
}

console.log(Idiomas);

// String Enums
enum Dia {
    Segunda = 'Seg',
    Terca = 'Ter',
    Quarta = 'Qua',
    Quinta = 'Qui',
    Sexta = 'Sex',
    Sabado = 'Sab',
    Domingo = 'Dom'
}
console.log(Dia);

// Quando usar Enums?
enum tarefas {
    ToDo,
    Progress,
    Done
}
const concluidaTarefa = {
    id: 1,
    status: tarefas.Done,
    descricao: 'Tarefa concluída com sucesso!'
}

if(concluidaTarefa.status === tarefas.Done){
    console.log(concluidaTarefa.descricao);
}
