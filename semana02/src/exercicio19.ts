import leia from "readline-sync"

export default function exercicio19(){
    let numeroDigitado = leia.questionInt("Informe o numero final: ")

    for(let i = 0; i <= numeroDigitado; i++){
        console.log(i)
    }

}