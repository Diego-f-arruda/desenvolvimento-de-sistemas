import { Task } from "../entity/Task";
import { TaskRepository } from "../Repository/TaskRepository";
//services faz a parte das regras de negocios


class TaskService{

      //Fake DataBase
      private taskList:Task[] = [];
      private taskRepository = new TaskRepository();

    public create(text: string): void {
        // /*Regra de negocio (Verificar se ja existe a tarefa informada
        //     se existir - responder com erro
        //     se nao segue o baile*/

        
        // //verifica se foi enviado o text
        // if(text){ //-?- para nao ir como nao indefinido se coloca a interrogação
        //     //return response.code(400).send({error: "Não foi enviada a propriedade text!"})
        // }
    
        // const textJaExiste = this.taskList.find(task => task.getText() === text) //filter retorna o array filtrado, o findo retorna o item que foi filtrado
        // if(textJaExiste){
        //     //return response.code(409).send({error: "Já existe uma tarefa com o texto informado!"})
        // }
        
        //Criar o objeto do tipo Task
        // const newTask = new Task(text)
        // console.log(newTask);
    
        // //Adicionar a lista ou banco de dados
        // this.taskList.push(newTask)

        const newTask = new Task(text)
        console.log(newTask);
    
        //Adicionar a lista ou banco de dados
        this.taskRepository.save(newTask)
    }

    public getAll(): Task[] {
        return this.taskList;
    }

    public getById(id: string): Task | null{
        const task = this.taskList.find(task => task.getId() === id)
        return task ? task : null
    }

    public updateCompleted(id: string, completed: boolean){
        const task = this.getById(id)
        if (task === null){
            throw new Error("Tarefa não encontrada") 
        }

        task.setCompleted()
        return task;
    }

    public updateText(id: string, text: string){
        const task = this.getById(id);
        if(task === null){
            throw new Error("Tarefa não foi encontrada.")
        }

        task.setText(text);
        return task;
    }

    public delete(id: string){
        const task = this.getById(id)
        if(task === null){
            throw new Error("Tarefa não foi encontrada.")
        }

        this.taskList = this.taskList.filter(task => task.getId() !== id)
    }
}

//ja exporta o objeto pronto, sem a necessidade de ter o new TaskService
export const taskService = new TaskService()