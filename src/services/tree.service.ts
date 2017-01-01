import { Injectable } from '@angular/core';
import { TREES } from './mock-trees';

@Injectable()
export class TreeService {
    protected list = TREES;
    /**
     * Obtiene la lista de árboles
     * 
     * @returns Promesa
     * 
     * @memberOf TreeService
     */
    getTrees(){
        return Promise.resolve(this.list);
    }
    /** 
     * Agrega un árbol a la lista de árboles
     * 
     * @param {tree} any
     * 
     * @memberOf TreeService
     */
    newTree(tree){
        this.list.push(tree);
    }
    /**
     * Obtiene los datos de un árbol a partir de su identificador
     * 
     * @param {any} id_tree
     * @returns 
     * 
     * @memberOf TreeService
     */
    getDataTree(id_tree){
        return Promise.resolve();
    }
    deleteTree(){

    }
    updateTree(){

    }
}