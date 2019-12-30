import { configure } from 'mobx';

import complexStore from './complex';
import exercisesStore from './exercises';
import selectedStore from './selected';
import deviceStore from './device';

import * as complex from '~/api/complex';
import * as exercises from '~/api/exercises';
import * as selected from '~/api/selected';

class RootStore{
    constructor(){
        this.api = {
            complex,
            exercises,
            selected
        };

        this.storage    = localStorage;

        this.complex    = new complexStore(this);
        this.exercises  = new exercisesStore(this);
        this.selected   = new selectedStore(this);
        this.device     = new deviceStore(this);
    }
}

export default new RootStore();