import leia from "readline-sync"

import exercicio09 from "./exercicio09";
import exercicio10 from "./exercicio10";
import exercicio11 from "./exercicio11";
import exercicio12 from "./exercicio12";
import exercicio13 from "./exercicio13";
import exercicio14 from "./exercicio14";
import exercicio15 from "./exercicio15";
import exercicio16 from "./exercicio16";
import exercicio17 from "./exercicio17";
import exercicio18 from "./exercicio18";
import exercicio19 from "./exercicio19";
import exercicio28 from "./exercicio28";
import exercicio20 from "./exercicio20";
import exercicio21 from "./exercicio21";
import exercicio22 from "./exercicio22";
import exercicio23 from "./exercicio23";
import exercicio24 from "./exercicio24";
import exercicio25 from "./exercicio25";
import exercicio26 from "./exercicio26";
import exercicio27 from "./exercicio27";
var opcao = leia.keyInSelect(["Senha Acesso", "Numero Par ou Impar", "Final da Placa", "Valor das maças", "Media de compras", 
"teste", "Quantidade de moedas", "", "", "", 
"Contagem ate o numero do usuario","Contagem do numero ate 0", "Resto 5", "Maior e menor numero", "Xerox",
"Tabuada", "Contagem", "", "Entre 100 e 200 "]) + 1;



const exercicios = {
    1:exercicio09,
    2:exercicio10,
    3:exercicio11,
    4:exercicio12,
    5:exercicio13,
    6:exercicio14,
    7:exercicio15,
    8:exercicio16,
    9:exercicio17,
    10:exercicio18,
    11:exercicio19,
    12:exercicio20,
    13:exercicio21,
    14:exercicio22,
    15:exercicio23,
    16:exercicio24,
    17:exercicio25,
    18:exercicio26,
    19:exercicio27
    
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