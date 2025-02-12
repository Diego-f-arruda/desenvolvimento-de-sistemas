import leia from "readline-sync"

export default function exercicio24(){
    let valor = leia.questionInt("De qual numero deseja a tabuada? ")

    for(let i = 1; i <= 10; i++){
        console.log(`${valor} X ${i} = ${valor * i}`)
    }
}