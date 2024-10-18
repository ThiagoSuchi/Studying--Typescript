//----------------- ENUM ------------------
enum Cores {
    Amarelo = "#f1c40f",
    Verde = "#27ae60",
    Azul = " #3498db ",
    Vermelho = "#e74c3c"
}
let coresPrimarias: Cores = Cores.Verde

console.log(`A cor é indicada pelo objeto: ${coresPrimarias}`);



/*
 Tipos de Enums
  ==> Numeric Enum 
  ==> Sting Enum
 */

// Enum Numeric 
enum Idiomas {
    Portugues,
    Ingles,
    Frances,
    Espanhol,
}

console.log(Idiomas);
