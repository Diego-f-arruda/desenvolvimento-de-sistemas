import leia from "readline-sync"

export default function exercicio36(){

    let numeros: number[] = []
    let soma = 0;

    for(let i = 0; i< 5; i++){
        numeros[i] = leia.questionInt("Informe um numero: ")
        soma = soma + numeros[i]
    }
    console.log("----------------------------------------------------------------------------------------")
    console.log(`A soma dos numeros informados é ${soma}`)

    for(let i = 0; i < 5; i++){
        console.log(`O ${i + 1}º numero foi ${numeros[i]}`)
    }
    console.log("----------------------------------------------------------------------------------------")
}