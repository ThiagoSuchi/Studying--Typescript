// Exercício 5

enum Prioridade {  
    BAIXA = "Baixa",  
    MEDIA = "Média",  
    ALTA = "Alta"  
}  

function descricaoPrioridade(prioridade: Prioridade): string {  
    if (prioridade === Prioridade.BAIXA) {  
        return "Essa tarefa pode ser feita depois.";  
    } else if (prioridade === Prioridade.MEDIA) {  
        return "Essa tarefa deve ser feita em breve.";  
    } else if (prioridade === Prioridade.ALTA) {  
        return "Essa tarefa é urgente!";  
    } else {  
        return "Prioridade inválida.";  
    }  
}  
 
const prioridade: Prioridade = Prioridade.MEDIA;  
console.log(descricaoPrioridade(prioridade));