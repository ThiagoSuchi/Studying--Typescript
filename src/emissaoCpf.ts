let cpf = "76731503606"

function estadoEmissor(Cpf:string) {
    
    let convertido = Cpf.split("").map(Number)

    // Criei um objeto para listar os Estados em seus respectivos números
    let numEstado: { num0: string; num1: string; num2: string; num3: string; num4: 
    string; num5: string; num6: string; num7: string; num8: string; num9: string} = {
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
    if(convertido[8] === 0) {
        return `Seu Estado de emissão é ${numEstado.num0}`;
    } else if(convertido[8] === 1) {
        return `Seu Estado de emissão é ${numEstado.num1}`;
    } else if(convertido[8] === 2) {
        return `Seu Estado de emissão é ${numEstado.num2}`;
    } else if(convertido[8] === 3) {
        return `Seu Estado de emissão é ${numEstado.num3}`;
    } else if(convertido[8] === 4) {
        return `Seu Estado de emissão é ${numEstado.num4}`;
    } else if(convertido[8] === 5) {
        return `Seu Estado de emissão é ${numEstado.num5}`;
    } else if(convertido[8] === 6) {
        return `Seu Estado de emissão é ${numEstado.num6}`;
    } else if(convertido[8] === 7) {
        return `Seu Estado de emissão é ${numEstado.num7}`;
    } else if(convertido[8] === 8) {
        return `Seu Estado de emissão é ${numEstado.num8}`;
    } else if(convertido[8] === 9) {
        return `Seu Estado de emissão é ${numEstado.num9}`;
    } 
} 

console.log(estadoEmissor(cpf));
 
