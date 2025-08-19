// import { Stack } from "./Stack";

// type User = {
//     name: string;
//     address: string;
//     birthdate: Date;
// }

// const pilha = new Stack<number>();

// pilha.push(10);
// pilha.push(20);
// pilha.push(30);
// pilha.push(40);
// pilha.push(50);
// pilha.push(60);

// pilha.visualize();
// console.log("-----------------");
// pilha.pop();
// pilha.visualize();


// const isEmpty = pilha.isEmpty();

// console.log(pilha.isEmpty());
// console.log(pilha.peek());

import { Queue } from "./Queue";

const fila = new Queue<number>()
fila.enqueue(1)
fila.enqueue(2)
fila.enqueue(3)
fila.enqueue(4)
fila.enqueue(5)

fila.visualize()
fila.dequeue()
console.log(fila.isEmpty())
console.log(fila.peek())
fila.visualize()

fila.dequeue()
fila.dequeue()
fila.dequeue()
fila.dequeue()
fila.visualize()
console.log(fila.isEmpty())
