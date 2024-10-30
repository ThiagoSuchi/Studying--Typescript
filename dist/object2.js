"use strict";
const filha = {
    nome: 'Lavínia',
    sobrenome: 'Barros Dávilla',
    idade: 23
};
console.log(filha);
const usuario = {
    nome: 'Thiago',
    email: 'thiago@gmail.com'
};
const admin = {
    nome: 'Thiago',
    email: 'thiago@gmail.com',
    admin: true
};
function acessarSistema(usuario) {
    return usuario;
}
console.log(acessarSistema(usuario));
console.log(acessarSistema(admin));
