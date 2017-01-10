import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { TaskService } from '../../../services/task.service';
import { Task } from '../../../models/task.model';

@Component({
    selector: 'page-TaskDetail',
    templateUrl: 'TaskDetail.html',
    providers: [TaskService, Task]
})

export class TaskDetailPage {
    task: Task;
    constructor(private taskService: TaskService,
                public params: NavParams,
                public ViewCtrl: ViewController) {
        // this.taskService.get
        this.task = params.get('task');
     }

     close() {
         this.ViewCtrl.dismiss();
     }
}