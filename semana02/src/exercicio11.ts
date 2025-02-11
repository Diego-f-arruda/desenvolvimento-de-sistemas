import leia from "readline-sync"

export default function exercicio11(){
    let placa = leia.question("Informe a placa: ");
    const ultimoCaractere = placa.charAt(placa.length - 1);

    if(ultimoCaractere === '0' || ultimoCaractere === '1'){
        console.log("Não pode rodar na Segunda-Feira!!")
    }else  if(ultimoCaractere === '2' || ultimoCaractere === '3'){
        console.log("Não pode rodar na Terça-Feira!!")
    }else  if(ultimoCaractere === '4' || ultimoCaractere === '5'){
        console.log("Não pode rodar na Quarta-Feira!!")
    }else  if(ultimoCaractere === '6' || ultimoCaractere === '7'){
        console.log("Não pode rodar na Quinta-Feira!!")
    }else if(ultimoCaractere === '8' || ultimoCaractere === '9'){
        console.log("Não pode rodar na Sexta-Feira!!")
    }

}