"use strict";
//--------------- ANY -----------------
//Use apenas quando você precisar abrir mão da verificação de tipos (o que é desencorajado).
// Exemplo 01 => Type Any
const number = 30;
const nombre = ['MrBreaks'];
const result = number + nombre;
console.log(result);
// Exemplo 02 => Quando devemos usar o tipo any?
const formulario = {
    nome: 'Thiago',
    sobrenome: 'Hens',
    idade: 21
};
console.log(formulario);
