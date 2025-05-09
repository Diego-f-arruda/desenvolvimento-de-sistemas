import { Task } from "@prisma/client";
import { prisma } from "../prisma/client";

class TaskService {

    public async create(text: string): Promise<void> {
        const task: Task = {
            id: crypto.randomUUID(),
            text: text,
            completed: false,
            createAt: new Date(),
            updateAt: new Date()
        }
        await prisma.task.create({ data: task })
    }

    public async getAll(): Promise<Task[]> {
        return await prisma.task.findMany({
            orderBy: {
                createAt: "asc"
            }
        })
    }

    public getById(id: string): Task | null {
        const task = this.taskList.find(task => task.getId() === id);
        return task ? task : null;
    }

    public async updateCompleted(id: string) {
        const task = await prisma.task.findUnique({ where: { id: id } })
        if (task == null) {
            throw new Error("Tarefa não encontrada")
        }

        return await prisma.task.update({
            where: { id: id }
        })
    }

    public updateText(id: string, text: string) {
        const task = this.getById(id);
        if (task === null) {
            throw new Error("Tarefa não foi encontrada.")
        }

        task.setText(text);
        return task;
    }

    public deleteTask(id: string) {
        this.taskList = this.taskList.filter(task => task.getId() !== id)
    }

}

export const taskService = new TaskService();