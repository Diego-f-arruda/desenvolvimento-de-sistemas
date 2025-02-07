import leia from "readline-sync"

export default function exercicio02(){
    let largura = leia.questionFloat("Informe a largura: ");
    let altura = leia.questionFloat("Informe a Altura: ");

    let area = largura * altura
    
    console.log(`A area de seu retangulo é de ${area}m²`)
}