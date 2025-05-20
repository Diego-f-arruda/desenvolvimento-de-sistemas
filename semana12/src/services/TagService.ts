
import { Tag } from "@prisma/client";
import { prisma } from "../prisma/client";

class TagService {
    public async create(name: string): Promise<void> {
        const tag: Tag = {
            id: crypto.randomUUID(),
            name: name,
            createdAt: new Date(),
            updatedAt: new Date()
        }

        await prisma.tag.create({ data: tag});
    }

    public async relation(taskId: string, tagId: string): Promise<void> { //manter a mesma ordem dos parametros em tagControler
        const task = await prisma.task.findUnique({ where: { id: taskId}})
        if (!task) {
            throw new Error("Tarefa informada não existe")
        }

        const tag = await prisma.tag.findUnique({ where: { id: tagId}})
        if (!tag) {
            throw new Error("Tag informada não existe")
        }

        await prisma.taskTag.create({
            data: {
                taskId: taskId,
                tagId: tagId
            }
        })
    }
}

export const tagService = new TagService();