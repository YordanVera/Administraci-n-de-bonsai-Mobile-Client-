import { Injectable } from '@angular/core';
import { TASKS } from './mock-tasks';

@Injectable()
export class TaskService {
    protected list = TASKS;
    getTasks() {
        return Promise.resolve(this.list);
    }
    newTask(){
        console.log('test');
    }
    deleteTask(){

    }
    updateTask(){
        //upda
    }
}