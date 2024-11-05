// O tipo Date representa uma data e hora, semelhante ao objeto Date em JavaScript. Ele é usado para trabalhar com datas, horas, e permite criar, manipular e formatar essas informações.

let hoje: Date = new Date()

console.log(hoje); // 2024-11-04 T 23:17:41.638Z
console.log(hoje.toString()); // Mon Nov 04 2024 19:21:49 GMT-0400 (Horário Padrão do Amazonas)
console.log(hoje.toUTCString()); // Mon, 04 Nov 2024 23:22:12 GMT

console.log('-------------------------------------------------');

console.log(hoje.getDate()); // dia -> 4
console.log(hoje.getMonth()); // mês -> 10 obs: o mês começa com [0] logo ele dirá um a menos doque o atual
console.log(hoje.getFullYear()); // ano com 4 dígitos -> 2024

console.log('-------------------------------------------------');

console.log(`Hoje: ${hoje.getDate()}/${hoje.getMonth() + 1}/${hoje.getFullYear()}`);

console.log('-------------------------------------------------');

let dataNascimento:Date = new Date('2010-10-02');
console.log(dataNascimento);

console.log('-------------------------------------------------');

let dataAtualizadaDoSoftware: Date = new Date('2024-11-05T10:30:00')
console.log(dataAtualizadaDoSoftware);
console.log(dataAtualizadaDoSoftware.toString());

// --------------------------------------------------------------------------------------

// Exercício 01: Crie um objeto Estudante com type Data, onde tenha -> nome, endereço, cidade, UF, data de nascimento e data de cadastro.

enum logradouro  {
    Avenida = 'Av Major Amarante',
    Rua = 'Rua João Vasquez'
}

interface Estudante {
    nome: string,
    endereco: {
        logradouro: Array<string>,
        numero: string,
        bairro: string
    } ,
    cidade: string[],
    UF: string[],
    dataNascimento: Date,
    dataCadastro: Date
}

let estudanteAluno: Estudante = {
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
}

console.log(`
Nome: ${estudanteAluno.nome}
Endereço: ${estudanteAluno.endereco.logradouro}, ${estudanteAluno.endereco.bairro}, ${estudanteAluno.endereco.numero}
Cidade: ${estudanteAluno.cidade}
Estado: ${estudanteAluno.UF}
Nascimento: ${estudanteAluno.dataNascimento.getDate()}/${estudanteAluno.dataNascimento.getMonth() + 1}/${estudanteAluno.dataNascimento.getFullYear()}
Data de cadastro: ${estudanteAluno.dataCadastro.toUTCString()}`);