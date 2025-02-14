import leia from "readline-sync"

export default function exercicio39(){

    let vetor: number[] = [];
    let invertido: number[] = [];

    for(let i = 0; i < 10; i++){
        vetor[i] = leia.questionInt("Informe um numero: ");
    }

    for(let i = vetor.length - 1; i >= 0; i--){
        invertido.push(vetor[i])

    }
    
    console.log(vetor)
    //invertido = vetor.reverse() // se cria depois de mostrar pois meche no primeiro vetor
    console.log(invertido)
}