import { randomUUID } from 'crypto'

export class Task {
    private id: string;
    private text: string;
    private completed: boolean;
    private createAt: Date;
    private updateAt: Date;

    constructor(text: string){
        this.id = randomUUID();
        this.text = text;
        this.completed = false;
        this.createAt = new Date();
        this.updateAt = new Date();
    }
    
    public getId(){
        return this.id;
    }

    public getText(){
        return this.text;
    }    

    public getCompleted(){
        return this.completed;
    }

    public getCreateAt(){
        return this.createAt;
    }

    public getUpdateAt(){
        return this.updateAt;
    }
    
    public setCompleted(){
       this.completed = !this.completed //Não passando o completed como parametro e negando a frente já fara direto a alteração
       this.updateAt = new Date()
    }
    
    public setText(text: string) {
        this.text = text;
        this.updateAt = new Date();
    }

}