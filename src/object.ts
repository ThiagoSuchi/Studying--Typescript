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
