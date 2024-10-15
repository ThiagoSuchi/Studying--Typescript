let idade: number = 20;
let nome: string = "ThiagoHS";
let pagamentoEfetuado: boolean = false;

idade = 20;
nome = "Thiago Hens Suchi"
pagamentoEfetuado = true

 console.log(`O cliente: ${nome}`);

// ENUM
enum Cores {
    Amarelo = "#f1c40f",
    Verde = "#27ae60",
    Azul = " #3498db ",
    Vermelho = "#e74c3c"
}
let coresPrimarias: Cores = Cores.Verde

console.log(`A cor é indicada pelo objeto: ${coresPrimarias}`);
