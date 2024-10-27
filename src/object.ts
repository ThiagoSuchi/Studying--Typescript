// Exemplo 01 --> Uso básico do tipo object
const pessoA = {
    nome: 'Thiago',
    sobrenome: 'Hens',
    idade: '21',
    funcao: 'Estudante'
}

console.log(pessoA);


// Exemplo 02 --> object com parâmetros de função (eles podem ser anônimos)
function onboarding01(funcionario: {nome: string}) {
    return 'Seja bem vindo(a)'+ ' ' + funcionario.nome
}

console.log(onboarding01({nome: 'Larissa Souza'}));


// Exemplo 03 --> Object nomeados
interface Pessoa {
    nome: string,
    funcao: string
}

function onboarding02(pessoa: Pessoa) {
    return (
        'Seja bem-vindo ' +
        pessoa.nome + '! ' +
        'Sua função aqui na empresa será ' +
        pessoa.funcao + '.'
    )
}

console.log(onboarding02({nome: 'Laura Lemos', funcao: 'Front-end'}));


// Exemplo 04 --> Uso do object com type Alias

type Aluno = {
    nome: string,
    turma: number
}


function alunoTurma(aluno: Aluno) {
    return (
        'Olá aluno(a) ' +
        aluno.nome + ', seja bem vindo(a) a turma ' +
        aluno.turma
    )
}

console.log(alunoTurma({nome: 'João Guilherme', turma: 2}));


// Exemplo 05 --> Usando optional(?) no object
interface Cinema {
    filme: string,
    hoario: string,
    valor?: number // quando não queremos que uma propriedade seja obrigatória, permitindo que o objeto seja criado sem a necessidade de especificar todos os campos.
}
const cinema: Cinema = {
    filme: 'Som da liberdade', 
    hoario: '19:30'
}
console.log(cinema);

