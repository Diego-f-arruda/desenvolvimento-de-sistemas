import leia from "readline-sync"

export default function exercicio35(){

    let vetor: number[] = []
    let multiplicacao: number[] = []
    for(let i = 0; i < 10; i++){
        vetor.push(leia.questionInt("Informe um numero: "))
    }

    let j = 0
    while(j < vetor.length){
        multiplicacao[j] = vetor[j] * 5;

        j++
    }

    console.table(vetor)
    console.log("O primeiro vetor multiplicado por 5 ficara da seguinte forma!")
    console.table(multiplicacao)

}