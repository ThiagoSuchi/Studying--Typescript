"use strict";
function mostrarMensagem() {
    console.log('não retornara nada');
}
let resultado = mostrarMensagem();
console.log(resultado);
function logError(errorMessage) {
    console.log(errorMessage);
}
console.log(logError('Required field - Name!'));
const logErrorExample3 = (errorMessage) => {
    console.log(errorMessage);
};
logErrorExample3('Required field - Name!');
