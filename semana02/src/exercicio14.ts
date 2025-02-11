import leia from "readline-sync"

export default function exercicio14(){
    let numero = 5
    let resul = 1
    while(numero > 1){
        resul *= numero;
        numero--
    }
    console.log(`o resultado é ${resul}`)
}