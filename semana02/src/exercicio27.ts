import leia from "readline-sync"

export default function exercicio27(){
    
    let controle;
    let cont = 0
    do{
        controle = leia.questionInt("Digite um numero: ")
        if(controle > 100 && controle < 200){
            cont++
        }
    }while(controle !== 0);
    console.log(`Foram digitados ${cont} numeros entre 100 e 200!`)

}