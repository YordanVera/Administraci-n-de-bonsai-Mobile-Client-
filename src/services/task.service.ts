import { Injectable } from '@angular/core';
import { TASKS } from './mock-tasks';

@Injectable()
export class TaskService {

    protected list = TASKS;

    getTasksByTree(id_tree: number) {
        return Promise.resolve(this.list);
    }

    newTask(task) {
        var promise = new Promise((resolve) => {
            if(this.list.length>0){
                task.id_task = this.list[this.list.length-1].id_task + 1;
            }else {
                task.id_task = 1;
            }
            this.list.push(task);
            resolve(task.id_task);
        });
        return promise;
    }

    deleteTask() {

    }

    updateTask() {
        //upda
    }

    getTaskDetail(id_task: number) {
        
    }
}