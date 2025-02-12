import leia from "readline-sync"

export default function exercicio20(){
    let numeroDigitado = leia.questionInt("Informe o numero final: ")

    for(let i = numeroDigitado; i >= 0; i--){
        console.log(i)
    }

}