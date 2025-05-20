import { User } from "@prisma/client";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { tagService } from "../services/TagService";



export async function tagController(app: FastifyInstance) {

    app.addHook("onRequest", app.authenticate) //para se aplicar a todas as rotas deve ser no inicio da função

    app.post("/tag", async (request: FastifyRequest, reply) => {
        const body = request.body as { name: string };

        try {
            await tagService.create(body.name);
            return reply.code(201).send();
        } catch (error: any) {
            return reply.code(409).send({ erro: error.message })
        }
    })

    app.post("/tag/relation", async (request: FastifyRequest, reply: FastifyReply) => {
        const { taskId, tagId } = request.body as { taskId: string, tagId: string };

        try {
            await tagService.relation(taskId, tagId) //manter a mesma ordem dos parametros em tagService
            return reply.code(200).send();
        } catch (error: any) {
            return reply.code(400).send({ error: error.message })
        }
    })
}