import leia from "readline-sync"

export default function exercicio01(){
let numero = leia.questionInt("Informe um numero: ")
let antecessor = numero - 1
console.log(`O numero indicado é ${numero} e seu antecessor é ${antecessor}`)
}