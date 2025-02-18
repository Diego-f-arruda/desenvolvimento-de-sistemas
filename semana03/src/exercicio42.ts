import leia from "readline-sync"

export default function exercicio42(){

    let v1: number[] = [];
    let v2: number[] = [];
    let v3: number[] = [];
    let result: number[] = [];

    for(let i = 0; i < 9; i++){
        v1.push(Math.trunc(Math.random() * 100) + 1)
        v2.push(Math.trunc(Math.random() * 100) + 1)
        v3.push(Math.trunc(Math.random() * 100) + 1)
    }

    for(let i = 0; i < 9; i++){
        if(i < 3){
            result[i] = v1[i];
        }else if(i >= 3 && i < 6){
            result[i] = v2[i];
        }else{
            result[i] = v3[i];
        }
    }
console.log("--------------------------------------")
console.log(v1)
console.log(v2)
console.log(v3)
console.log("--------------------------------------")
console.log(result)

}