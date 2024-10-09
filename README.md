## Guia do artigo:
- Boolean
- Number
- String
- Array
- Tuple
- Enum
- Any
- Void
- Null e Undefined
- Never
- Object

A linguagem possui 12 tipos de dados básicos.


## BOOLEAN
O tipo boolean ou booleano é o tipo mais básico presente no TypeScript, pois ele é utilizado para armazenar apenas os valores true ou false.

## NUMBER
Assim como no JavaScript, todos os números no TypeScript são valores de ponto flutuante e recebem o tipo number. Além de suportar valores decimais e hexadecimais, o tipo number também suporta valores octais e binários que foram introduzidos no ECMAScript 2015.

## STRING
Parte fundamental do trabalho para quem desenvolve programas JavaScript para Web ou Servidores é o uso de dados textuais. Assim como em outras linguagens, o TypeScript utiliza o tipo string para se referir a conteúdos textuais. O TypeScript dá suporte ao uso de aspas simples (') e aspas duplas (") na declaração de variáveis do tipo string, do mesmo modo que o JavaScript.

## ARRAY
Da mesma forma que no JavaScript, o TypeScript também permite o uso de array de valores e eles podem escritos de duas formas: 
01 - let numeros: number[] = [3, 6, 0];
02 - let numeros: Array<number> = [3, 6, 0];

## TUPLE
O tipo tuple permite declarar uma variável do tipo array cujo o tamanho e o tipo de dado de cada índice é conhecido pelo desenvolvedor. Exemplo:

let x: [string, number];
x = ["Seamus", 10];

## ENUM
Uma adição muito interessante ao padrão de tipos do JavaScript foi o enum, que assim como no C#, permite dar nomes mais amigáveis a valores numéricos, exe:

enum Cor {Vermelho, Verde, Azul};
let corFundo: Cor = Cor.Verde;

## ANY
As vezes durante o processo de desenvolvimento, precisamos declarar variáveis que não conhecemos o tipo de dado, ou que o dado pode ser variável, como o retorno de alguma API externa, por exemplo. Nesse caso, utilizamos o any, que vai aceitar como dado qualquer um dos tipos básicos do TypeScript, exe:

Essa variável é um numero:
let naoIdentificado: any = 4;

naoIdentificado = "Agora é uma string";

Agora é um boolean:
naoIdentificado = false;

## VOID
O tipo void pode ser considerado o oposto do any, pois ele se abstém de qualquer tipo. Normalmente o tipo void é visto em métodos que não possuem retorno, exe:

function aviso(): void {
    console.log("Esta é uma mensagem de aviso!");
}

Usar void no TypeScript ajuda a deixar o código mais claro e seguro, pois indica explicitamente que a função não deve retornar um valor. Isso é útil em casos onde a função apenas realiza um efeito colateral, como:
- Exibir uma mensagem.
- Modificar o estado de algum objeto.
- Registrar logs ou realizar operações assíncronas, sem se preocupar com o retorno.

## NULL e UNDEFINED
No TypeScript, tanto o Null quanto Undefined possuem tipos associados a eles e são chamados pelos seus respectivos nomes:

let u: undefined = undefined;
let n: null = null;

## NEVER

O tipo never em TypeScript representa o tipo de valor que nunca ocorre. Ele é usado em situações onde uma função não pode retornar de forma alguma, seja porque ela lança uma exceção ou porque entra em um loop infinito, tornando impossível chegar ao fim da execução.
Enquanto o tipo void indica que uma função não retorna um valor útil, o tipo never indica que a função nunca retorna.

function infiniteLoop(): never {
  while (true) {
    // Loop infinito
  }
}

## OBJECT
Em TypeScript, object é um tipo que representa qualquer valor que não seja um tipo primitivo, como number, string, boolean, symbol, null, ou undefined. Isso significa que o tipo object pode ser qualquer valor que seja um objeto, incluindo arrays, funções e objetos literais, exe:

let myObject: object = { name: "Thiago", age: 21 };
