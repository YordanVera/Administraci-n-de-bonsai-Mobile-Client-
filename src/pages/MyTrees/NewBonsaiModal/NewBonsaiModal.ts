import { Component } from '@angular/core';
import { Platform, NavParams, ViewController } from 'ionic-angular';
import { Tree } from '../../../models/tree.model'

@Component({
    templateUrl: 'NewBonsaiModal.html',
    providers: [Tree]
})
export class NewBonsaiModal {
    public styleSelected;

    constructor(
        public platform: Platform,
        public params: NavParams,
        public viewCtrl: ViewController,
        public newTree: Tree) { }

    dismiss() {
        this.viewCtrl.dismiss();
    }
    save() {
        this.viewCtrl.dismiss(this.newTree);
    }
}