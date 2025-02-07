import leia from "readline-sync"

export default function exercicio08(){
    let opcao = leia.keyInSelect(["Para Doar R$10,00", "Para doar R$25,00", "Para doar R$50,00", "Outros Valores"]) + 1

    if(opcao === 1){
        console.log("Voçe doou R$10,00!")
    }else if(opcao === 2){
        console.log("Voçe doou R$25,00!")
    }else if(opcao === 3){
        console.log("Voçe doou R$50,00!")
    }else {
        let valor = leia.questionFloat("Informe o valor da doação: ")
        console.log(`Voce Fez uma doação de R$${valor.toFixed(2)}`)
    }
}