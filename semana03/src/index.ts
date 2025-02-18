import leia from "readline-sync"
import exercicio42 from "./exercicio42";
import exercicio43 from "./exercicio43";
import exercicio48 from "./exercicio48";

var opcao = leia.keyInSelect(["Exercicio 42", "Exercicio 43", "Exercicio 48", "", "", "", "", "", ""]) + 1;



const exercicios = {
    1:exercicio42,
    2:exercicio43,
    3:exercicio48
} as { [key: number]: () => void}

exercicios[opcao]();

