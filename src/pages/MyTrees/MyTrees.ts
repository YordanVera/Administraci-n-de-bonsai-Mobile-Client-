import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-MyTrees',
  templateUrl: 'MyTrees.html'
})
export class MyTreesPage {

    private myTrees = [
        {
            name    : 'Bonsai 1',
            style   : 'Chokkan',
            type    : 'Arce'
        },
        {
            name    : 'Bonsai 2',
            style   : 'Moyogi',
            type    : 'Ficus'
        }
    ];
    constructor(public navCtrl: NavController) {
    }

}
