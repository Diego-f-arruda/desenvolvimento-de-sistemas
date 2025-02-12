import leia from "readline-sync"

export default function exercicio23(){
    for(let i = 0; i < 500; i++){
        console.log(`O valor de ${i + 1} xerox é ${((i + 1) * 0.33).toFixed(2)}`)
    }
}