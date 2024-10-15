"use strict";
let texto = 'Hellow World, Thiago Hens';
console.log(texto);
// ==> Variáveis [Type Annotations]
let nomeE = 'Ana Beatriz';
console.log(nome);
// ==> Array [Type Annotations]
let animais = ['Cavalo', 'Girafa', 'Elefante', 'Leão'];
console.log('Animais ==>' + ' ' + animais);
// ==> Objeto [Type Annotations]
let carro;
carro = { marca: 'Chevrolet', ano: 2018, modelo: 'Onix Lts', preco: 50.000 };
console.log(carro);
// ==> Função [Type Annotations]
function adcionarNum(num1, num2) {
    return num1 + num2;
}
let numeros = adcionarNum(2, 4);
console.log('O número da vez é:' + ' ' + numeros);
