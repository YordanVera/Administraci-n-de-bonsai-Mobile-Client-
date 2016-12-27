import { Component } from '@angular/core';

import { NavController, MenuController } from 'ionic-angular';

@Component({
    selector: 'page-Calendar',
    templateUrl: 'Calendar.html'
})
export class CalendarPage {

    constructor(public navCtrl: NavController, public menuCtrl: MenuController) {
    }

}
