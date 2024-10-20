// Exercício 4
enum Nota {
    A,
    B,
    C, 
    D,
    F
}
function notaAluno(nota: Nota) {
    if(nota == Nota.A){
        return `Excelente!`
    } else if(nota == Nota.B){
        return `Bom`
    } else if(nota == Nota.C) {
        return `Satisfatório`
    } else if(nota == Nota.D) {
        return `Insatisfatório`
    } else {
        return `Reprovado`
    }
}


console.log(notaAluno(Nota.F));

