import leia from "readline-sync"

export default function exercicio04(){
let eleitores = leia.questionInt("Informe o numero total de eleitores: ");
let brancos = leia.questionInt("Informe quantos votos brancos teve: ");
let nulos = leia.questionInt("Informe quantos votos nulos teve: ");

let validos = eleitores - brancos - nulos

let precValidos = validos / (eleitores/100)
let precBrancos = brancos / (eleitores/100)
let precNulos = nulos / (eleitores/100)

console.log(`Do total de ${eleitores} eleitores, possuem ${validos} votos validos, representando um total de ${precValidos}%`)
console.log(`Votos Brancos sendo um total de ${precBrancos}% e nulos sendo ${precNulos}%`)

}