import leia from "readline-sync"

export default function exercicio09(){
    const SENHAVALIDA = "1234"
    let senha = leia.question("Informe a senha: ")

    while(senha === SENHAVALIDA){
        console.log("Acesso Permitido!!!")

    }
        console.log("A senha esta errada!!!")

}

/*import leia from "readline-sync"

export default function exercicio09(){
    
}*/