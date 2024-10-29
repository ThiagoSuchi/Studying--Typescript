"use strict";
var Nota;
(function (Nota) {
    Nota[Nota["A"] = 0] = "A";
    Nota[Nota["B"] = 1] = "B";
    Nota[Nota["C"] = 2] = "C";
    Nota[Nota["D"] = 3] = "D";
    Nota[Nota["F"] = 4] = "F";
})(Nota || (Nota = {}));
function notaAluno(nota) {
    if (nota == Nota.A) {
        return `Excelente!`;
    }
    else if (nota == Nota.B) {
        return `Bom`;
    }
    else if (nota == Nota.C) {
        return `Satisfatório`;
    }
    else if (nota == Nota.D) {
        return `Insatisfatório`;
    }
    else {
        return `Reprovado`;
    }
}
console.log(notaAluno(Nota.F));
