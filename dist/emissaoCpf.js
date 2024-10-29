"use strict";
let cpf = "05190229203";
function estadoEmissor(Cpf) {
    let convertido = Cpf.split("").map(Number);
    let numEstado = {
        num0: "RS",
        num1: "DF, GO, MS, MT e TO",
        num2: "AC, AM, AP, PA, RO e RR",
        num3: "CE, MA e PI",
        num4: "AL, PB, PE, RN",
        num5: "BA e SE",
        num6: "MG",
        num7: "ES e RJ",
        num8: "SP",
        num9: "PR e SC"
    };
    if (convertido[8] === 0) {
        return `Seu Estado de emissão é ${numEstado.num0}`;
    }
    else if (convertido[8] === 1) {
        return `Seu Estado de emissão é ${numEstado.num1}`;
    }
    else if (convertido[8] === 2) {
        return `Seu Estado de emissão é ${numEstado.num2}`;
    }
    else if (convertido[8] === 3) {
        return `Seu Estado de emissão é ${numEstado.num3}`;
    }
    else if (convertido[8] === 4) {
        return `Seu Estado de emissão é ${numEstado.num4}`;
    }
    else if (convertido[8] === 5) {
        return `Seu Estado de emissão é ${numEstado.num5}`;
    }
    else if (convertido[8] === 6) {
        return `Seu Estado de emissão é ${numEstado.num6}`;
    }
    else if (convertido[8] === 7) {
        return `Seu Estado de emissão é ${numEstado.num7}`;
    }
    else if (convertido[8] === 8) {
        return `Seu Estado de emissão é ${numEstado.num8}`;
    }
    else if (convertido[8] === 9) {
        return `Seu Estado de emissão é ${numEstado.num9}`;
    }
}
console.log(estadoEmissor(cpf));
