import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
//import { Task } from "../entity/Task";
import { taskService } from "../services/TaskService";
//faz a chamada e retorna 

export async function taskController(app: FastifyInstance) {



    app.post("/task", (request, response) => {  //tanto faz response ou reply no fastify
        //Pegar a informação do front de quem chamar a rota (text)
        const body = request.body as { text: string };
        console.log(body)
        
        
        try {
            taskService.create(body.text)
        //Retorna a informação
        return (response.code(201).send())
        } catch(error:any){
            return response.code(409).send({ erro: error.message })
        }
    })

    app.get("/task", (_, reply) => { //rota que retorna toda a lista
        const list = taskService.getAll();
        return reply.code(200).send(list)
    })

    //rota para buscar informação pelo ID
    app.get("/task/:id", (request: FastifyRequest, reply: FastifyReply) =>{
        const { id } = request.params as { id: string};
        const task = taskService.getById(id);
        return task;
    })

    //rota para modificar informação
    app.patch("/task/:id", (request, reply) => {
        //captura a informação
        const { id } = request.params as { id: string};
        const { completed } = request.body as { completed: boolean }
        //repassa info recebida e recebe info processada
        const task = taskService.updateCompleted(id, completed)
        //retorna uma response para quem chamou a rota
        return reply.code(200).send(task) 
    })
}