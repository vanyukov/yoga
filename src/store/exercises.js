import {observable, computed, action} from 'mobx';
import StoreClass from "./StoreClass";

export default class ExercisesStore extends StoreClass{

    constructor(rootStore){
        super(rootStore);
        this.api = this.rootStore.api.exercises;
    }

    @action load(){
        return new Promise((resolve, reject) => {
            this.items = Object.values( dataExercise.exercise );
            resolve(true);
        });

        ////////////////////////
        return new Promise((resolve, reject) => {
            this.api.all().then((data) => {
                this.items = data;
                resolve(true);
            });
        });
    }

    getExercisesByComplex( complex ){
        return this.items.filter( item => item.parentId == complex.id )
    }
}

