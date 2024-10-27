function validarCpf(cpf: string):boolean {
    let conversor = cpf.split("").map(Number)

    let digitoVerificador: number = 0
    let digitoVerificador2: number = 0

    if (conversor.length == 11) {

        // Primeiro dígito verificador
        let arrayMultiplicado: Array<number> = []
        let multiplicando: number = 10
        let soma: number = 0

        // Aqui eu iterei os 9 primeiros numeros e multipliquei de 10 - 2
        for (let i = 0; i < 9; i++) {
            arrayMultiplicado.push(conversor[i] * multiplicando)
            multiplicando--
        }

        // Somei todos os numeros do arrayMultiplicado
        for (let j = 0; j < arrayMultiplicado.length; j++) {
            soma += arrayMultiplicado[j]
        }

        // Verificando o primero DV
        digitoVerificador = soma % 11


        //-------------------------------------------------------------------------    

        // Segundo dígito verificador
        let arrayMultiplicado2: Array<number> = []
        let multiplicando2: number = 11
        let soma2: number = 0

        for (let i = 0; i < 10; i++) {
            arrayMultiplicado2.push(parseInt(cpf[i]) * multiplicando2)
            multiplicando2--
        }

        for (let j = 0; j < arrayMultiplicado2.length; j++) {
            soma2 += arrayMultiplicado2[j]
        }

        // Aqui como o segundo DV não foi 0 nem 1, logo se subtraí por 11
        let resto2: number = soma2 % 11
        digitoVerificador2 = 11 - resto2

        if (digitoVerificador2 == conversor[10] && digitoVerificador == conversor[9]) {
            return true
        } else {
            return false
        }

    } else {
        return false
    }

}


console.log(validarCpf("76731503606"));
 

