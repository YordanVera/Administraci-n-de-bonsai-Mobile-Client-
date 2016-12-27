import { Injectable } from '@angular/core';
import { TREES } from './mock-trees';

@Injectable()
export class TreeService {
    protected list = TREES;
    getTrees(){
        return Promise.resolve(this.list);
    }
    newTree(tree){
        this.list.push(tree);
    }
}