import { Component }                    from '@angular/core';
import { NavParams, ModalController }   from 'ionic-angular';
import { TaskService }                  from '../../../services/task.service';
import { Task }                         from '../../../models/task.model';
import { TaskDetailPage }               from '../../Task/TaskDetail/TaskDetail';
import { NewTask }                      from '../../Task/NewTask/NewTask';

@Component({
    selector    : 'TreeProfile',
    templateUrl : 'TreeProfile.html',
    providers   : [TaskService, Task]
})
export class TreeProfilePage{
    public tree;
    taskList: Task[] = [];
    public option: string;

    constructor(params: NavParams,
                public taskService: TaskService,
                public modalCtrl: ModalController) {
        this.tree = params.data.tree;
        this.option = "info";
        this.taskService.getTasksByTree(this.tree.id_tree)
        .then(tasks => this.taskList = tasks);
     }

     openMoreModal(task) {
         let modal = this.modalCtrl.create(TaskDetailPage, {task: task});
         modal.present();
     }

     newTask() {
         let modal = this.modalCtrl.create(NewTask);
         modal.present();
         modal.onDidDismiss(task => {
             if(typeof task !== 'undefined'){
                console.log(task);
             }
         });
     }

     deleteTask(task) {
         let index = this.taskList.findIndex((tsk)=>{
             return task.id_task === tsk.id_task;
         });
         if(index>-1){
             this.taskList.splice(index,1);
         }
     }
}