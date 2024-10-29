"use strict";
function validarCpf(cpf) {
    let conversor = cpf.split("").map(Number);
    let digitoVerificador = 0;
    let digitoVerificador2 = 0;
    if (conversor.length == 11) {
        let arrayMultiplicado = [];
        let multiplicando = 10;
        let soma = 0;
        for (let i = 0; i < 9; i++) {
            arrayMultiplicado.push(conversor[i] * multiplicando);
            multiplicando--;
        }
        for (let j = 0; j < arrayMultiplicado.length; j++) {
            soma += arrayMultiplicado[j];
        }
        digitoVerificador = soma % 11;
        let arrayMultiplicado2 = [];
        let multiplicando2 = 11;
        let soma2 = 0;
        for (let i = 0; i < 10; i++) {
            arrayMultiplicado2.push(parseInt(cpf[i]) * multiplicando2);
            multiplicando2--;
        }
        for (let j = 0; j < arrayMultiplicado2.length; j++) {
            soma2 += arrayMultiplicado2[j];
        }
        let resto2 = soma2 % 11;
        digitoVerificador2 = 11 - resto2;
        if (digitoVerificador2 == conversor[10] && digitoVerificador == conversor[9]) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}
console.log(validarCpf("76731503606"));
