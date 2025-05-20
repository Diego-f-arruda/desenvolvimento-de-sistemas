import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { taskService } from "../services/TaskService";
import { User } from "@prisma/client";
import { createTaskScheme, generalTaskSchema } from "../config/schema/task.schema";

export async function taskController(app: FastifyInstance) {

    app.addHook("onRequest", app.authenticate) //para se aplicar a todas as rotas deve ser no inicio da função

    app.post("/task", { schema: createTaskScheme}, async (request: FastifyRequest, reply) => {
        const body = request.body as { text: string, };
        const { id } = request.user as User

        try {
            await taskService.create(body.text, id);
            return reply.code(201).send();
        } catch (error: any) {
            return reply.code(409).send({ erro: error.message })
        }
    })

    app.get("/task", { schema: generalTaskSchema }, async (request: FastifyRequest, reply) => {
        const { id } = request.user as User
        
        const list = await taskService.getAll(id);
        return reply.code(200).send(list);
    })

    app.patch("/task/:id/completed", { schema: generalTaskSchema }, async(request, reply) => {
        // CAPTURA INFORMAÇÃO
        const { id } = request.params as { id: string };
        
        try {
            // RAPASSA INFO RECEBIDA E RECEBE INFORMAÇÃO PROCESSADA
            const task = await taskService.updateCompleted(id);
            // RETORNA UMA RESPONSE PARA QUEM CHAMOU A ROTA
            return reply.code(200).send(task);
        }catch(error: any) {
            return reply.code(404).send({ error: error.message})
        }
    });

    app.delete("/task/:id", { schema: generalTaskSchema }, async (request, reply) => {
        const { id } = request.params as { id: string};
        await taskService.deleteTask(id)
        return reply.code(200).send();
    })

    
}