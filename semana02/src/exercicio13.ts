import leia from "readline-sync"

export default function exercicio13(){

    let valorTotal = 0;
    let qtdCliente = 0;
    let clientes = [];
    let cliente;
    let media;
    for(let i = 0; i < 2; i++){
        cliente = leia.question("Informe o Cliente: ");
        let valorCliente = leia.questionFloat("Informe o valor da compra: ")
        valorTotal = valorTotal + valorCliente
        qtdCliente++
        if(valorCliente > 20){
            clientes[i] = cliente
        }
        media = valorTotal / qtdCliente
    
    }
    
    console.log(`o valor medio das compras foi de ${media}`)
    console.log(`Os clientes que compraram acima de R$20,00 foram: ${clientes}`)

}