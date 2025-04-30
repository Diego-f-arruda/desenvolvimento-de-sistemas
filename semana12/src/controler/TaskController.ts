import { FastifyInstance } from "fastify";
//import { Task } from "../entity/Task";
import { taskService } from "../services/TaskService";


export async function taskController(app: FastifyInstance) {



    app.post("/task", (request, response) => {  //tanto faz response ou reply no fastify
        //Pegar a informação do front de quem chamar a rota (text)
        const body = request.body as { text: string };
        console.log(body)
        taskService.create(body.text)

        //Retorna a informação
        return (response.code(201).send())



    })

    app.get("/tasks", (_, reply) => { //rota que retorna toda a lista
        const list = taskService.getAll();
        return reply.code(200).send(list)
    })
}