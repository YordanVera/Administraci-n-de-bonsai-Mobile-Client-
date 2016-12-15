import { Component } from '@angular/core';

import { NavController, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-MyTrees',
  templateUrl: 'MyTrees.html'
})
export class MyTreesPage {

    private myTrees

    constructor(public navCtrl: NavController, public menuCtrl: MenuController) {
        this.myTrees = [
            {
                name    : 'Bonsai 1',
                style   : 'Chokkan',
                type    : 'Arce'
            },
            {
                name    : 'Bonsai 2',
                style   : 'Moyogi',
                type    : 'Ficus'
            }];
    }
    openMenu(){
        this.menuCtrl.enable(true, 'MyTreesMenu');
        this.menuCtrl.toggle('MyTreesMenu');
    }
}
