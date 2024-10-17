"use strict";
// -------------- TUPLA --------------
// Exe01 ==> Uso simples de Tuplas em TypeScript
let pessoas;
pessoas = ['Jão', 'Leticía', 12];
console.log(pessoas);
// Exe02 ==> Acessando o valor da Tupla 
let pessoa;
pessoa = ['Jão', 'Leticía', 12];
console.log(pessoa[1]);
// Exe03 ==> Outra forma de usar Tuplas em TypeScript(com labels)
let pessoa2;
pessoa2 = ['Luana Vasquez', 'Design UI/UX', 22];
console.log(pessoa2);
// Exe04 ==> Usando Tuplas com Spread Operator
let listaFrutas = ['🍉', '🍈', '🍓', '🍒', '🍍', '🥝'];
console.log(...listaFrutas);
// Exe05 ==> Lista Heterogênea de Tupla
let fruitNinja = [23, true, ...listaFrutas];
console.log(fruitNinja);
// Exe06 ==> Uso de função com Tuplas
function listaNomes(nome, idade) {
    return [...nome, ...idade];
}
let nomesIdade = listaNomes(['Thiago', 'Júlia'], [22, 23]);
console.log(nomesIdade);
function anotarNomes(...nome) {
    return [...nome];
}
console.log(anotarNomes('Thiago', 'Suchi'));
console.log(anotarNomes('Thiago', 'Hens', 'Suchi'));
