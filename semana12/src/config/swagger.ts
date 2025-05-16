export const swaggerConfig = {
    openapi: {
        info: {
            title: "API task ToDoList",
            description: "Essa API é do projeto de tarefas",
            version: "1.0.1"
        }, 
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                }
            }
        }
    },
    exposeRoute: true
}