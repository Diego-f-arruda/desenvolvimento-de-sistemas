import leia from "readline-sync"

export default function exercicio12(){
    let qtdMacas = leia.questionInt("Quantas maças deseja comprar? ");
    let valor = (qtdMacas < 12) ? 0.30 : 0.25;
    let valorCompra = qtdMacas * valor;
    console.log(`Voçe vai pagar ${valorCompra.toFixed(2)}`)
}




//     if(qtdMacas < 12){
//         valor = qtdMacas * 0.30
//         console.log(`O valor a pagar fica ${valor}`)
//     }else{
//         valor = qtdMacas * 0.25
//         console.log(`O valor a pagar fica ${valor}`)
//     }