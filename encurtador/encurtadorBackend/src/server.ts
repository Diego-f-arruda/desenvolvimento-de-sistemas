import fastify, { FastifyReply, FastifyRequest } from "fastify";
import { shortenController } from "./controllers/ShortenController";
import cors from '@fastify/cors'
const app = fastify();

app.register(cors, {
    origin: true,
    methods:[ "GET", "POST"]
})

app.register(shortenController);

app.listen({ port: 3333}).then(() => {
    console.log("Backend rodando na porta 3333!!!!")
})