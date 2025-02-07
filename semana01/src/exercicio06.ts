import leia from "readline-sync"

export default function exercicio06(){
    let total = 0;

    for(var i = 0; i < 5; i++){
        let corrida = leia.questionFloat("Informe o valor da corrida: ")
        
        total = total + corrida
    }

    let desconto = total * 0.25
    let totalLiquido = total - desconto
    
    console.log(`O valor ganho pelo motorista foi de ${totalLiquido}`)
}