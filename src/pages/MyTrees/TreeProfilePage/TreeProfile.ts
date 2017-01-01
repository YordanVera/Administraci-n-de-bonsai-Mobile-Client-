import { Component }    from '@angular/core';
import { NavParams }    from 'ionic-angular';
import { TaskService }  from '../../../services/task.service';
import { Task }         from '../../../models/task.model';

@Component({
    selector    : 'TreeProfile',
    templateUrl : 'TreeProfile.html',
    providers   : [TaskService, Task]
})
export class TreeProfilePage{
    private tree;
    taskList: Task[] = [];
    private option: string;

    constructor(params: NavParams,
                private taskService: TaskService) {
        this.tree = params.data.tree;
        this.option = "info";
        this.taskService.getTasks()
        .then(tasks => this.taskList = tasks);
     }
}