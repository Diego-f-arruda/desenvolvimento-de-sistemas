import leia from "readline-sync"
import exercicio01 from "./exercicio01";
import exercicio02 from "./exercicio02";
import exercicio03 from "./exercicio03";
import exercicio04 from "./exercicio04";
import exercicio05 from "./exercicio05";
import exercicio06 from "./exercicio06";
import exercicio08 from "./exercicio08";
import exercicio07 from "./exercicio07";
import exercicio09 from "./exercicio09";
var opcao = leia.keyInSelect(["Numero Antecessor", "Calculo de Area", "Dias Vividos", "Eleitores e Votos", "Converter Temperatura", "Valor total das corridas", "Valor do Produto", "Criança Esperança", "Senha Acesso"]) + 1;



const exercicios = {
    1:exercicio01,
    2:exercicio02,
    3:exercicio03,
    4:exercicio04,
    5:exercicio05,
    6:exercicio06,
    7:exercicio07,
    8:exercicio08,
    9:exercicio09,
} as { [key: number]: () => void}

exercicios[opcao]();


// switch(opcao){
//     case 1:
//         exercicio01();
//         break;
//     case 2:
//         exercicio02();
//         break;    
//     case 3:
//         exercicio03();
//         break;    
//     case 4:
//         exercicio04();
//         break;
//     case 5:
//         exercicio05();
//         break;
//     case 6:
//         exercicio06();
//         break;
//     case 7:
//         exercicio07();
//         break;
//     case 8:
//         exercicio08();
//         break;
//     case 9:
//         exercicio09();
//         break;
// }