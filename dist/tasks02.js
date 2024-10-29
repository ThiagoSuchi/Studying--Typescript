"use strict";
function calcularIdade(anoNascimento, anoAtual = 2024) {
    const idade = anoAtual - anoNascimento;
    return `Você tem ${idade} anos.`;
}
const idadE = calcularIdade(2003);
console.log(idadE);
