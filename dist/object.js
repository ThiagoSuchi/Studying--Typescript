"use strict";
const pessoA = {
    nome: 'Thiago',
    sobrenome: 'Hens',
    idade: '21',
    funcao: 'Estudante'
};
console.log(pessoA);
function onboarding01(funcionario) {
    return 'Seja bem vindo(a)' + ' ' + funcionario.nome;
}
console.log(onboarding01({ nome: 'Larissa Souza' }));
function onboarding02(pessoa) {
    return ('Seja bem-vindo ' +
        pessoa.nome + '! ' +
        'Sua função aqui na empresa será ' +
        pessoa.funcao + '.');
}
console.log(onboarding02({ nome: 'Laura Lemos', funcao: 'Front-end' }));
function alunoTurma(aluno) {
    return ('Olá aluno(a) ' +
        aluno.nome + ', seja bem vindo(a) a turma ' +
        aluno.turma);
}
console.log(alunoTurma({ nome: 'João Guilherme', turma: 2 }));
const cinema = {
    filme: 'Som da liberdade',
    hoario: '19:30'
};
console.log(cinema);
const cinemaA = {
    filme: 'Som da liberdade',
    hoario: '19:30',
    valor: 15
};
console.log(cinemaA);
