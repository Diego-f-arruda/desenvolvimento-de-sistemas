import fastify from "fastify";
import { Task } from "./entity/Task";
import { taskController } from "./controler/TaskController";


const app = fastify();

// app.get("/home", (request, response) => {
//     console.log("Entrou no endpoint home!!")
//     console.log(request.method);
//     console.log(request.url)
//     return response.code(500).send("Error")
// })



app.register(taskController)

app.listen({port:3333}).then(() => { //listen para ficar ouvindo e o then faz a função do await
    console.log("Backend rodando na porta 3333!!!")
})
