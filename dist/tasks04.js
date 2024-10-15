"use strict";
// Exercício 4
var Nota;
(function (Nota) {
    Nota[Nota["A"] = 10] = "A";
    Nota[Nota["B"] = 8] = "B";
    Nota[Nota["C"] = 5] = "C";
    Nota[Nota["D"] = 3] = "D";
    Nota[Nota["F"] = 0] = "F";
})(Nota || (Nota = {}));
function notaAluno(nota) {
    if (nota == Nota.A) {
        return `A: Excelente!`;
    }
    else if (nota == Nota.B) {
        return `B: Bom`;
    }
    else if (nota == Nota.C) {
        return `C: Satisfatório`;
    }
    else if (nota == Nota.D) {
        return `D: Insatisfatório`;
    }
    else {
        return `F: Reprovado`;
    }
}
console.log(notaAluno(Nota.F));
