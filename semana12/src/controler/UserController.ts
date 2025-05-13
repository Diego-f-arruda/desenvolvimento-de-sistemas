import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { userService } from "../services/UserService";

export async function userController(app: FastifyInstance) {
    app.post("/user/register", async (request: FastifyRequest, reply: FastifyReply) => {
        const body = request.body as CreateUserType;

        try {
            await userService.register(body);
            return reply.code(201).send();
        } catch (error: any) {
            return reply.code(400).send({ erro: error.message })
        }
    })

    

    
}