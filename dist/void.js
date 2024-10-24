"use strict";
//------------ Void -------------
// OBS: Você usa void em TypeScript quando cria funções cujo propósito é realizar uma ação (como exibir algo, modificar o estado, ou realizar uma tarefa), mas não é necessário ou esperado que elas retornem um valor. Isso pode ser útil para deixar o código mais claro e intencional, diferenciando funções que executam tarefas daquelas que produzem um valor a ser utilizado mais tarde.
// => Exemplo 01
function mostrarMensagem() {
    console.log('não retornara nada');
}
let resultado = mostrarMensagem();
console.log(resultado);
// => Exemplo 02
function logError(errorMessage) {
    console.log(errorMessage);
}
console.log(logError('Required field - Name!'));
// Exemplo 03 => Usando Arrow function
const logErrorExample3 = (errorMessage) => {
    console.log(errorMessage);
};
logErrorExample3('Required field - Name!');
