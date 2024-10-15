"use strict";
// Exercício 3
function verificarAcesso(ehAdmin) {
    if (ehAdmin === true) {
        return `Acesso concedido. Bem-vindo ao sistema administrativo.`;
    }
    else {
        return `Acesso negado. Você não tem permissão para acessar o sistema.`;
    }
}
let acesso = verificarAcesso(true);
console.log(acesso);
