import leia from "readline-sync"
import {differenceInDays} from 'date-fns'  

export default function exercicio03(){
let dataNasc = leia.question("Informe a data de Nascimento: ");
let dataFormat = new Date(dataNasc);
let dataAtual = new Date();

let diasVividos = differenceInDays(dataAtual, dataFormat)
console.log(`Voce possue ${diasVividos} de dias totais!`)
}