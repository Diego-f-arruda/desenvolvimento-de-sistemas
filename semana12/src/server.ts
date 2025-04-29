import fastify from "fastify";

const app = fastify();

app.get("/home", () => {
    console.log("Entrou no endpoint home!!")
    return "Olá Mundo"
})

app.listen({port:3333}).then(() => { //listen para ficar ouvindo e o then faz a função do await
    console.log("Backend rodando na porta 3333!!!")}
)
