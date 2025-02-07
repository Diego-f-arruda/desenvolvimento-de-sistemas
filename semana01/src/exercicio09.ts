import leia from "readline-sync"

export default function exercicio09(){
    const senhaValida = 1234
    let senha = leia.questionInt("Informe a senha: ")

    while(senha != senhaValida){
        console.log("A senha esta errada!!!")
    }

    console.log("Acesso Permitido!!!")
}

/*import leia from "readline-sync"

export default function exercicio09(){
    
}*/