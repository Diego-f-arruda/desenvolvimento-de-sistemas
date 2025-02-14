import leia from "readline-sync"

export default function exercicio38(){

    let numero: number[] = []
    let mDez: number[] = []

    for(let i = 0; i < 15; i++){

        numero.push(leia.questionInt("Informe um numero aleatorio: "))

        if(numero[i] >= 10){
            mDez.push(numero[i])
        }
    }

    console.log(mDez)
}