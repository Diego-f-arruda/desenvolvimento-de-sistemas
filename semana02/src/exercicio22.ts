import leia from "readline-sync"

export default function exercicio22(){
    let valores; 
    let maiorValor = Number.MIN_VALUE;
    let menorValor = Number.MAX_VALUE;

    for(let i = 0; i < 5; i++){
        valores = leia.questionInt(`Digite o ${i + 1}º numero: `)

        if(i === 0){
            menorValor = valores;
            maiorValor = valores;
        }

        if(valores > maiorValor){
            maiorValor = valores
        }
        
        if(valores < menorValor ){
            menorValor = valores

        }
    }

    console.log(`O menor valor informado foi ${menorValor}`)
    console.log(`O maior valor informado foi ${maiorValor}`)

}