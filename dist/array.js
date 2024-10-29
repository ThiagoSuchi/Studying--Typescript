"use strict";
let frutas = ['🍉', '🍈', '🍓', '🍒', '🍍', '🥝'];
console.log(frutas[0]);
let fruits = ['🍉', '🍈', '🍓', '🍒', '🍍', '🥝'];
console.log(fruits[2]);
let nomes = new Array('Lucas', 'Laura', 'Thiago', 'Thayla');
console.log(nomes);
let cachorrosRaca = ['Pastor-alemão', 'Buldogue', 'Rottweiler', 'Husky siberiano'];
cachorrosRaca.push('Pinscher');
console.log(cachorrosRaca);
let idiomas = ['Português', 'Francês', 'Inglês', 'Latim', 'Espanhol'];
let tamanhoArrayIdiomas = idiomas.length;
console.log('(' + tamanhoArrayIdiomas + ') - ' + 'é o tamanho do Array idiomas, ou seja, é a quantidade de itens dentro do Array');
let listaNumeros = [0, 1, 2, 3, 4, 5];
listaNumeros = [...listaNumeros, 6, 7, 8, 9];
console.log(listaNumeros);
let produtosLoja = new Array('Bola de basquete', 'Lanterna', 'Controle de PS4', 'Raquete elétrica');
function funcaoIterar(produtos) {
    for (let i = 0; i < produtos.length; i++) {
        console.log(produtos[i]);
    }
}
funcaoIterar(produtosLoja);
