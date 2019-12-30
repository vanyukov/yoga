import {observable, computed, action} from 'mobx';
import StoreClass from "./StoreClass";
import * as selectedApi from "~/api/selected";

export default class SelectedStore extends StoreClass {

    @action load() {
        const selectedId = selectedApi.getSelectedId()
            ,elem = this
            ,items = []
        ;
        selectedId.forEach(function (id, i) {
            items.push(elem.rootStore.exercises.getById(id));
        });
        this.items = items;
    }

    @action addItem(item) {
        if (!this.isItemSelected(item)) {
            this.items.push(item);
            this.save();
        }
    }

    @action delItem(itemDel) {
        this.items = this.items.filter(item => item != itemDel);
        this.save();
    }

    @action addComplex(complex) {

        const selectedStore = this;
        const complexItems = selectedStore.rootStore.exercises.getExercisesByComplex(complex);
        complexItems.forEach(function (item,) {
            if (!selectedStore.isItemSelected(item)) {
                selectedStore.addItem(item);
            }
        });
    }

    @action delComplex(complex) {

        const selectedStore = this;
        const complexItems = selectedStore.rootStore.exercises.getExercisesByComplex(complex);
        complexItems.forEach(function (item,) {
            if (selectedStore.isItemSelected(item)) {
                selectedStore.delItem(item);
            }
        });
    }

    @action save() {
        const selectedId = [];
        this.items.forEach(function (item, i) {
            selectedId.push(item.id);
        });
        selectedApi.setSelectedId(selectedId);
    }

    @action cleanSelected(){
        this.items = [];
        this.save();
    }

    isItemSelected(itemCheck) {
        return this.items.some(item => item == itemCheck);
    }

    isComplexSelected(complex) {
        let countSelected = 0;
        const selectedStore = this;
        const complexItems = selectedStore.rootStore.exercises.getExercisesByComplex(complex);
        complexItems.forEach(function (item) {
            if (selectedStore.isItemSelected(item)) {
                countSelected++;
            }
        });

        switch (countSelected) {
            case 0:
                return 'none';
            case complexItems.length:
                return 'full';
            default:
                return 'part';
        }
    }

}

