import { Task as TaskPrisma } from "@prisma/client";
import { prisma } from "../prisma/client";

class TaskService {
    public async create(text: string, userId: string): Promise<void> {
        const task: TaskPrisma = {
            id: crypto.randomUUID(),
            text: text,
            userId: userId,
            completed: false,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        console.log(task)
        await prisma.task.create({ data: task });
    
    }


    public async getAll(userId: string): Promise<TaskPrisma[]> {
        const tasks = await prisma.task.findMany({
            orderBy: { createdAt: 'desc' },
            where: { userId: userId},
            include: {
                tagTask: {
                    include: {
                        tag: true
                    }
                }
            }
        });

        const tasksMap = tasks.map(task => ({
            id: task.id,
            text: task.text,
            completed: task.completed,
            userId: task.userId,
            tags: task.tagTask.map(relation => ({ tag: relation.tag.name, id: relation.tag.id}))
        } as any))

        return tasksMap
    }

    public async updateCompleted(id: string): Promise<TaskPrisma> {
        const task = await prisma.task.findUnique({ where: { id } })
        if (task == null) {
            throw new Error("Tarefa não foi encontrada")
        }

        const taskUpdate = {
            completed: !task.completed,
            updatedAt: new Date()
        }

        return await prisma.task.update({
            where: { id },  //sempre passar com where
            data: taskUpdate
        })
    }

    public async deleteTask(id: string) {
        return await prisma.task.delete({ where: { id: id }})
    }

}

export const taskService = new TaskService();