import {observable, computed, action} from 'mobx';
import StoreClass from "./StoreClass";

export default class ComplexStore extends StoreClass{

    constructor(rootStore){
        super(rootStore);
        this.api = this.rootStore.api.complex;
    }

    @action load(){
        return new Promise((resolve, reject) => {
            this.items = Object.values(dataExercise.complex);
            resolve(true);
        });
    }
}

