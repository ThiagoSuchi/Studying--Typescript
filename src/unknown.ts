//----------- Unknown ------------
// OBS: O tipo unknown é semelhante ao any no sentido de que ele também pode armazenar qualquer valor, mas ele é muito mais seguro. O TypeScript exige que você faça uma verificação de tipo explícita antes de realizar qualquer operação com uma variável do tipo unknown.

let valorVariavel: unknown;

valorVariavel = true;
console.log(valorVariavel);
valorVariavel = 'Abacaxi';
console.log(valorVariavel);
valorVariavel = 232;
console.log(valorVariavel);
valorVariavel = []
console.log(valorVariavel);

// Exemplo 02 => Não é possível chamar métodos diretamente em `unknown` sem verificação de tipo
let valorDesconhecido: unknown;
valorDesconhecido = 10;
valorDesconhecido = "Texto";
valorDesconhecido = true;

// valorDesconhecido.toUpperCase(); - Erro: Object is of type 'unknown'

// Para usar o valor, é necessário fazer uma verificação de tipo
if (typeof valorDesconhecido === 'string') {
    valorDesconhecido.toUpperCase();  // Isso agora é seguro
}

console.log(valorDesconhecido);
