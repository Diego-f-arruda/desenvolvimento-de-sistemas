import leia from "readline-sync"

export default function exercicio48(){

    type Pessoa = {
        nome: string;
        idade: number;
    }
    let vetorPessoas: Pessoa [] = []
    let maisJovem: Pessoa [] = { idade: Number.MAX_VALUE, nome:"" }


    for(let i = 0; i < 5; i++){
        let nome = leia.question("Informe o nome: ")
        let idade = leia.questionInt("Informe a idade: ")

        const pessoa = {
            nome: nome,
            idade: idade
        }
        vetorPessoas.push(pessoa)
    }

    for(let i = 0; i < vetorPessoas.length; i++){
        if(vetorPessoas[i].idade < maisJovem.idade){
            maisJovem = vetorPessoas[i]
        }
    }

    console.log(vetorPessoas)
    console.log(maisJovem)
}