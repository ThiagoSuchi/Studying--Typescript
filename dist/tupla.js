"use strict";
let pessoas;
pessoas = ['Jão', 'Leticía', 12];
console.log(pessoas);
let pessoa;
pessoa = ['Jão', 'Leticía', 12];
console.log(pessoa[1]);
let pessoa2;
pessoa2 = ['Luana Vasquez', 'Design UI/UX', 22];
console.log(pessoa2);
let listaFrutas = ['🍉', '🍈', '🍓', '🍒', '🍍', '🥝'];
console.log(...listaFrutas);
let fruitNinja = [23, true, ...listaFrutas];
console.log(fruitNinja);
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
