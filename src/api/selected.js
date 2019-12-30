function getSelectedId(){
    const items = localStorage.getItem('meruSelected');
    if ( items == null ){
        return [];
    };

    return JSON.parse(items);
}

function setSelectedId(items){
    localStorage.setItem('meruSelected', JSON.stringify(items));
}

export { getSelectedId, setSelectedId };