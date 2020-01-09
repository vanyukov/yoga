import { array } from "prop-types";

function getSelectedId(){
    return _getLocalItem('yogaAppSelected')
}

function setSelectedId(item){ 
    _setLocalItem('yogaAppSelected', item);
}

function getSavedLists(){
    return _getLocalItem('yogaAppSavedLists');
}

function addListToSave(name){
    const savedLists = getSavedLists();
    savedLists.push({
        name,
        items:getSelectedId(),
        id: Date.now()
    });
    _setLocalItem('yogaAppSavedLists', savedLists);
}

function removeSavedItem(id){
    const oldLists = getSavedLists();
    const newList = oldLists.filter( (item) => item.id != id );
    _setLocalItem('yogaAppSavedLists', newList);
}

function _setLocalItem(name='', item){

    if ( !Array.isArray(item) ) return;
    if ( name == '' ) return;

    localStorage.setItem(name, JSON.stringify(item));
}

function _getLocalItem(name){

    const item = localStorage.getItem(name);
    if (item == null) {
        return [];
    };

    return JSON.parse(item);
}

export { getSelectedId, setSelectedId, getSavedLists, addListToSave, removeSavedItem };