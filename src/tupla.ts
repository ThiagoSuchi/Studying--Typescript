// -------------- TUPLA --------------


// Exe01 ==> Uso simples de Tuplas em TypeScript
let pessoas: [string, string, number];
pessoas = ['Jão','Leticía', 12];
console.log(pessoas);


// Exe02 ==> Acessando o valor da Tupla 
let pessoa: [string, string, number];
pessoa = ['Jão','Leticía', 12];
console.log(pessoa[1]);


// Exe03 ==> Outra forma de usar Tuplas em TypeScript(com labels)
let pessoa2: [nome: string, cargo: string, idade: number];
pessoa2 = ['Luana Vasquez','Design UI/UX', 22];
console.log(pessoa2);



// Exe04 ==> Usando Tuplas com Spread Operator
let listaFrutas: [string, ...string[]] = ['🍉','🍈','🍓','🍒','🍍','🥝']
console.log(...listaFrutas);


// Exe05 ==> Lista Heterogênea de Tupla

// Exe06 ==> Uso de função com Tuplas

// Exe07 ==> Labeled Tuples com Spread Operator em uma função 