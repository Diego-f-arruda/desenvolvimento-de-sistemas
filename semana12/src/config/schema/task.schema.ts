export const generalTaskSchema = {
    tags: ['Task'],
    security: [{ bearerAuth: []}]
}

export const createTaskScheme = {
    tags: ['Task'],
    security: [{ bearerAuth: []}],
    body: {
        type: 'object',
        required: ['text'],
        properties: {
            text: { type: 'string'}
        }
    }
}