import { Component } from '@angular/core';
import { NavController, MenuController, ModalController } from 'ionic-angular';
import { NewBonsaiModal } from './NewBonsaiModal/NewBonsaiModal';
import { TreeService } from '../../services/tree.service';
import { Tree } from '../../models/tree.model';
@Component({
  selector      : 'page-MyTrees',
  templateUrl   : 'MyTrees.html',
  providers     : [TreeService, Tree]
})
export class MyTreesPage {
    myTrees: Tree[] = [];

    constructor(public navCtrl: NavController, 
                public menuCtrl: MenuController, 
                public modalCtrl: ModalController,
                private treeService: TreeService) {
                    this.treeService.getTrees()
                    .then(trees => this.myTrees = trees);
    }
    openMenu(){
        this.menuCtrl.enable(true, 'MyTreesMenu');
        this.menuCtrl.toggle('MyTreesMenu');
    }
    addBonsai(){
        let modal = this.modalCtrl.create(NewBonsaiModal);
        modal.present();
        modal.onDidDismiss((data) => {
            this.treeService.newTree(data);
            this.treeService.getTrees()
            .then(trees => this.myTrees = trees);
        });
    }
}
