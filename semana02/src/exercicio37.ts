import leia from "readline-sync"

export default function exercicio37(){

    let numero: number[] = []
    let nPares: number[] = []

    for(let i = 0; i < 10; i++){

        numero.push(leia.questionInt("Informe um numero aleatorio: "))

        if(numero[i] % 2 === 0){
            nPares.push(numero[i])
        }
    }

    //let pares2 = numero.filter((numero) => numero% 2 === 0)
    

    console.log(nPares)
}