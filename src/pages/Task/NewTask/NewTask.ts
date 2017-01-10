import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Task } from '../../../models/task.model';
import { TaskService } from '../../../services/task.service';

@Component({
    selector: 'page-NewTask',
    templateUrl: 'NewTask.html',
    providers: [TaskService]
})
export class NewTask {
    task: Task;
    constructor(public ViewCtrl: ViewController,
                public taskService: TaskService) {
        this.task = new Task();
        this.task.date = new Date();
     }

    close() {
        this.ViewCtrl.dismiss();
    }
    save() {
        //if task complete
        this.taskService.newTask(this.task).then(
            (id_task: number) => {
                this.task.id_task = id_task;
                this.ViewCtrl.dismiss(this.task);
            }
        );
    }
}
