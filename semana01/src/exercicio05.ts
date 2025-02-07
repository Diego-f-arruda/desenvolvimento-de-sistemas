import leia from "readline-sync"

export default function exercicio05(){
    let celsius = leia.questionFloat("Informe a Temperatura em graus celsius: ")

    let fahrenheit = celsius * 1.8 + 32;
    let kelvin = celsius + 273;

    console.log(`Essa mesma temperatura em Fahrenheit fica ${fahrenheit}`)
    console.log(`Essa mesma temperatura em Kelvin fica ${kelvin}`)
}