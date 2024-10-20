// Exercício 5

enum Prioridade {  
    BAIXA,  
    MEDIA,  
    ALTA   
}  

function descricaoPrioridade(prioridade: Prioridade): string {  
    if (prioridade === Prioridade.BAIXA) {  
        return "Essa tarefa pode ser feita depois.";  
    } else if (prioridade === Prioridade.MEDIA) {  
        return "Essa tarefa deve ser feita em breve.";  
    } else {  
        return "Essa tarefa é urgente!";  
    } 
}  
 
const prioridade = Prioridade.MEDIA;  
console.log(descricaoPrioridade(prioridade));