//--------------- ARRAY -----------------

/*
 Nos exemplos abaixo, podemos ver formas diferentes de declarar um array.
*/

// Exemplo 01 - Uso de Colchetes:
let  frutas: string[] = ['🍉','🍈','🍓','🍒','🍍','🥝'];
console.log(frutas[0]);

// Exemplo 02 - Array Object (Objeto Array):
let fruits: Array<string> = ['🍉','🍈','🍓','🍒','🍍','🥝'];
console.log(fruits[2]);

// Exemplo 03 - Uso de new Array():
let nomes: string[] = new Array('Lucas', 'Laura', 'Thiago', 'Thayla');
console.log(nomes);


/*
 Declarando arrays com métodos diferentes 
*/

// Array com push
let cachorrosRaca: Array<string> = ['Pastor-alemão','Buldogue','Rottweiler','Husky siberiano'];
cachorrosRaca.push('Pinscher')
console.log(cachorrosRaca);


// Array com length
let idiomas: Array<string> = ['Português', 'Francês', 'Inglês', 'Latim', 'Espanhol'];
let tamanhoArrayIdiomas = idiomas.length;
console.log('(' + tamanhoArrayIdiomas + ') - ' + 'é o tamanho do Array idiomas, ou seja, é a quantidade de itens dentro do Array');


// Array com Spread Operator
let listaNumeros: Array<number> = [0,1,2,3,4,5]
listaNumeros = [...listaNumeros, 6,7,8,9]
console.log(listaNumeros);


// Array com laço de iteração
let produtosLoja: string[] = new Array('Bola de basquete', 'Lanterna', 'Controle de PS4', 'Raquete elétrica')

function funcaoIterar(produtos: string[]){
    for(let i = 0; i < produtos.length; i++){
        console.log(produtos[i]);
    }
}

funcaoIterar(produtosLoja);
