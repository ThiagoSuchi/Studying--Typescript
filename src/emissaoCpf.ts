let cpf = "05190229203"

function estadoEmissor(Cpf: string) {

    let convertido = Cpf.split("").map(Number)

    // Criei um objeto para listar os Estados em seus respectivos números
    let numEstado: {
        num0: string; num1: string; num2: string; num3: string; num4:
        string; num5: string; num6: string; num7: string; num8: string; num9: string
    } = {
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
    }

    // Condição para filtrar qual Estado emitiu o cpf, de acordo com o número
    switch (convertido[8]) {
        case 0:
            return `Seu estado de emissão é: ${numEstado.num0}`;
        case 1:
            return `Seu estado de emissão é: ${numEstado.num1}`;
        case 2:
            return `Seu estado de emissão é: ${numEstado.num2}`;
        case 3:
            return `Seu estado de emissão é: ${numEstado.num3}`;
        case 4:
            return `Seu estado de emissão é: ${numEstado.num4}`;
        case 5:
            return `Seu estado de emissão é: ${numEstado.num5}`;
        case 6:
            return `Seu estado de emissão é: ${numEstado.num6}`;
        case 7:
            return `Seu estado de emissão é: ${numEstado.num7}`;
        case 8:
            return `Seu estado de emissão é: ${numEstado.num8}`;
        case 9:
            return `Seu estado de emissão é: ${numEstado.num9}`
        default: 
            return `Cpf inválido!`
    }
}

console.log(estadoEmissor(cpf));

