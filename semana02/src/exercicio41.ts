import leia from "readline-sync"

export default function exercicio41(){

    let pai: number[] = [];
    let mae: number[] = [];
    let filho: number[] = [];

    for(let i = 0; i < 50; i++){
        pai[i] = Math.trunc(Math.random() * 100)
        mae[i] = Math.trunc(Math.random() * 100)

        if(i % 2 === 0){
            filho.push(pai[i])
        }else{
            filho.push(mae[i])
        }
    }
    console.log(`Pai   ${pai}`)
    console.log(`Filho ${filho}`)
    console.log(`Mae   ${mae}`)
}