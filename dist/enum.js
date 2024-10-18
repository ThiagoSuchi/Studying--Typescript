"use strict";
//----------------- ENUM ------------------
var Cores;
(function (Cores) {
    Cores["Amarelo"] = "#f1c40f";
    Cores["Verde"] = "#27ae60";
    Cores["Azul"] = " #3498db ";
    Cores["Vermelho"] = "#e74c3c";
})(Cores || (Cores = {}));
let coresPrimarias = Cores.Verde;
console.log(`A cor é indicada pelo objeto: ${coresPrimarias}`);
/*
 Tipos de Enums
  ==> Numeric Enum
  ==> Sting Enum
 */
// Enum Numeric 
var Idiomas;
(function (Idiomas) {
    Idiomas[Idiomas["Portugues"] = 0] = "Portugues";
    Idiomas[Idiomas["Ingles"] = 1] = "Ingles";
    Idiomas[Idiomas["Frances"] = 2] = "Frances";
    Idiomas[Idiomas["Espanhol"] = 3] = "Espanhol";
})(Idiomas || (Idiomas = {}));
console.log(Idiomas);
