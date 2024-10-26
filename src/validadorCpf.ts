function validarCpf(cpf: string) {
    // Primeiro dígito verificador
    let arrayMultiplicado: Array<number> = []
    let multiplicando: number = 10
    let soma: number = 0
   

    // Aqui eu iterei os 9 primeiros numeros e multipliquei por 10 - 2
    for (let i = 0; i < 9; i++) {
        arrayMultiplicado.push(parseInt(cpf[i]) * multiplicando)
        multiplicando--
    }

    // Somei todos os numeros do arrayMultiplicado
    for (let j = 0; j < arrayMultiplicado.length; j++) {
        soma += arrayMultiplicado[j]
    }

    // Verificando o primero DV
    let resto = soma % 11
    console.log(`O primeiro dígito verificador é -> ${resto}`);

//-------------------------------------------------------------------------    

    // Segundo dígito verificador
    let arrayMultiplicado2: Array<number> = []
    let multiplicando2: number = 11
    let soma2:number = 0
    
    
    
    for (let i = 0; i < 10; i++) {
        arrayMultiplicado2.push(parseInt(cpf[i]) * multiplicando2)
        multiplicando2--
    }

    for (let j = 0; j < arrayMultiplicado2.length; j++) {
        soma2 += arrayMultiplicado2[j]
    }

    // Aqui como o segundo DV não foi 0 nem 1, logo se subtraí por 11
    let resto2:number = soma2 % 11
    let subtracao:number = 11 - resto2
    console.log(`O segundo dígito verificador é -> ${subtracao}`);
    
}


validarCpf("05190229203")

