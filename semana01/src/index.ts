import leia from "readline-sync"
import exercicio01 from "./exercicio01";
import exercicio02 from "./exercicio02";
import exercicio03 from "./exercicio03";
import exercicio04 from "./exercicio04";
var opcao = leia.keyInSelect(["Exercicio 01", "Exercicio 02", "Exercicio 03", "Exercicio 04"]) + 1;

switch(opcao){
    case 1:
        exercicio01();
        break;
    case 2:
        exercicio02();
        break;    
    case 3:
        exercicio03();
        break;    
    case 4:
        exercicio04();
        break;
}