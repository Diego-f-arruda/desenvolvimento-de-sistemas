import leia from "readline-sync"

export default function exercicio21(){
    for( let i = 1000; i < 1999; i++){
        if(i % 11 === 5){
            console.log(i)
        }
    }
}