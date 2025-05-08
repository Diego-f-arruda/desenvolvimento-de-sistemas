import fastify from "fastify";
import { Task } from "./entity/Task";
import { taskController } from "./controler/TaskController";
import cors from "@fastify/cors"

const app = fastify();

app.register(cors, {
    origin: true,
    methods:["GET", "POST", "PATCH", "DELETE"]
})
app.register(taskController)

app.listen({port:3333}).then(() => { //listen para ficar ouvindo e o then faz a função do await
    console.log("Backend rodando na porta 3333!!!")
})



// app.get("/home", (request, response) => {
//     console.log("Entrou no endpoint home!!")
//     console.log(request.method);
//     console.log(request.url)
//     return response.code(500).send("Error")
// })
