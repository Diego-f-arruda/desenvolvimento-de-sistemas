import fastify from "fastify";
import { taskController } from "./controler/TaskController";
import cors from "@fastify/cors"
import { userController } from "./controler/UserController";
import authJwt from "./middleware/authJwt";
import fastifySwagger from "@fastify/swagger";
import { swaggerConfig } from "./config/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { tagController } from "./controler/TagControler";

const app = fastify();

app.register(cors, {
    origin: true,
    methods: ["GET", "POST", "PATCH", "DELETE"]
})

app.register(fastifySwagger, swaggerConfig as any)
app.register(fastifySwaggerUi, { routePrefix: "/docs", uiConfig: { docExpansion: "list" } })
app.register(authJwt)
app.register(taskController)
app.register(userController)
app.register(tagController)

app.listen({ port: 3333 }).then(() => { //listen para ficar ouvindo e o then faz a função do await
    console.log("Backend rodando na porta 3333!!!")
})


