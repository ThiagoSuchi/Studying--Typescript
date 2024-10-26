let cpf = "05190229203"

function estadoEmissor(Cpf:string) {
    
    let converter = Cpf.split("").map(Number)

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

    for(let i = 0; i < converter.length; i++){
        switch
    }

   
    
} 

console.log(estadoEmissor(cpf));
