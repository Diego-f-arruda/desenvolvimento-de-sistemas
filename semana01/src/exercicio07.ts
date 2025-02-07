import leia from "readline-sync"

export default function exercicio07(){

    let produto = leia.questionFloat("Informe o valor do produto: ")

    if(produto < 20){
        produto = produto * 1.45;
    }else{
        produto *= 1.3;
    }
    
    console.log(`O valor final do produto é de R$${produto.toFixed(2)}`)
}