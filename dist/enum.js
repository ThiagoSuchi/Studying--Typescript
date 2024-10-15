"use strict";
let idade = 20;
let nome = "ThiagoHS";
let pagamentoEfetuado = false;
idade = 20;
nome = "Thiago Hens Suchi";
pagamentoEfetuado = true;
console.log(`O cliente: ${nome}`);
// ENUM
var Cores;
(function (Cores) {
    Cores["Amarelo"] = "#f1c40f";
    Cores["Verde"] = "#27ae60";
    Cores["Azul"] = " #3498db ";
    Cores["Vermelho"] = "#e74c3c";
})(Cores || (Cores = {}));
let coresPrimarias = Cores.Verde;
console.log(`A cor é indicada pelo objeto: ${coresPrimarias}`);
