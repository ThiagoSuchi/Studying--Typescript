"use strict";
let hoje = new Date();
console.log(hoje);
console.log(hoje.toString());
console.log(hoje.toUTCString());
console.log('-------------------------------------------------');
console.log(hoje.getDate());
console.log(hoje.getMonth());
console.log(hoje.getFullYear());
console.log('-------------------------------------------------');
console.log(`Hoje: ${hoje.getDate()}/${hoje.getMonth() + 1}/${hoje.getFullYear()}`);
console.log('-------------------------------------------------');
let dataNascimento = new Date('2010-10-02');
console.log(dataNascimento);
console.log('-------------------------------------------------');
let dataAtualizadaDoSoftware = new Date('2024-11-05T10:30:00');
console.log(dataAtualizadaDoSoftware);
console.log(dataAtualizadaDoSoftware.toString());
var logradouro;
(function (logradouro) {
    logradouro["Avenida"] = "Av Major Amarante";
    logradouro["Rua"] = "Rua Jo\u00E3o Vasquez";
})(logradouro || (logradouro = {}));
let estudanteAluno = {
    nome: 'Júlia Da Silva',
    endereco: {
        logradouro: [logradouro.Avenida, logradouro.Rua],
        numero: 'Número 504b',
        bairro: 'Bairro Jardim América'
    },
    cidade: ['Vilhena'],
    UF: ['Rôndonia'],
    dataNascimento: new Date('2003-11-4'),
    dataCadastro: new Date('2022-09-13T13:30:00')
};
console.log(`
Nome: ${estudanteAluno.nome}
Endereço: ${estudanteAluno.endereco.logradouro}, ${estudanteAluno.endereco.bairro}, ${estudanteAluno.endereco.numero}
Cidade: ${estudanteAluno.cidade}
Estado: ${estudanteAluno.UF}
Nascimento: ${estudanteAluno.dataNascimento.getDate()}/${estudanteAluno.dataNascimento.getMonth() + 1}/${estudanteAluno.dataNascimento.getFullYear()}
Data de cadastro: ${estudanteAluno.dataCadastro.toUTCString()}`);
