// Exercício 4
enum Nota {
    A = 10,
    B = 8,
    C = 5, 
    D = 3,
    F = 0
}
function notaAluno(nota: Nota) {
    if(nota == Nota.A){
        return `A: Excelente!`
    } else if(nota == Nota.B){
        return `B: Bom`
    } else if(nota == Nota.C) {
        return `C: Satisfatório`
    } else if(nota == Nota.D) {
        return `D: Insatisfatório`
    } else {
        return `F: Reprovado`
    }
}


console.log(notaAluno(Nota.F));

