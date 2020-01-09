import React from 'react';
import { Modal, Col, Button } from 'react-bootstrap';
import ViewList from "./ViewList";
import SaveList from "./SaveList";
import LoadList from './LoadList';

export default class SelectedModalList extends React.Component {

    state = {
        listName: ''
    };

    setName = (event) => this.setState({ listName: event.target.value});

    addListToSave = () => { 
        this.props.addListToSave(this.state.listName);
        this.setState({ 
                        listName: ''
                    });
    };

    render() {

        let modalBody = '';
        switch( this.props.type ){
            case 'view':
                modalBody = <ViewList
                            list={this.props.list}
                            cleanList={this.props.cleanList}
                            wasLoaded={this.props.wasLoaded}
                            setTypeSave={this.props.setTypeSave}
                            setTypeLoad={this.props.setTypeLoad}
                        />
                break;
            case 'save':
                modalBody = <SaveList
                            list={this.props.list}
                            listName={this.state.listName}
                            setTypeView={this.props.setTypeView}
                            wasSaved={this.props.wasSaved}
                            setName={this.setName.bind(this)}
                            addListToSave={this.addListToSave.bind(this)}
                        />
                break;
            case 'load':
               modalBody = <LoadList
                            setTypeView={this.props.setTypeView}
                            savedLists={this.props.savedLists}
                            loadList={this.props.loadList}
                            setLoadedTrue={this.props.setLoadedTrue}
                            removeSavedItem={this.props.removeSavedItem}
                        />

                break;
       }

        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                {modalBody}
            </Modal>

        );
    }
}