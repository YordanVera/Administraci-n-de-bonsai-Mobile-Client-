import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
    selector: 'TreeProfile',
    templateUrl: 'TreeProfile.html'
})
export class TreeProfilePage implements OnInit {
    private tree;
    private isShowTask: boolean;
    private isShowRecord: boolean;
    constructor(params: NavParams) {
        this.tree = params.data.tree;
        this.isShowTask = false;
        this.isShowRecord = false;
     }

    ngOnInit() { }

    showTask() {
        this.isShowTask = !this.isShowTask;
    }
    showRecord() {
        this.isShowRecord = !this.isShowRecord;
    }
}