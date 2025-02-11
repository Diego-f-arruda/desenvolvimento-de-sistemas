import leia from "readline-sync"

export default function exercicio10(){
    let numero = leia.questionInt("Informe um numero: ");

    if(numero % 2 === 0 ){
        console.log("Numero é par!!");
    }else{
        console.log("É impar")
    }
}