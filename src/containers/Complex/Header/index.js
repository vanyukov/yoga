import React from 'react';
import {NavLink} from "react-router-dom";
import Button from "react-bootstrap/es/Button";

import { routesMap } from '~/routes';
import withStore from '~/hocs/withStore';
import SelectedModalList from "./Selected";
import LitterSpecial from "~/components/btn/LitterSpecial";
import SaveList from './Selected/SaveList/index';

class HeaderInitial extends React.Component {

    state={
        type: 'view',
        show: false,
        savedLists: this.props.stores.selected.getSavedLists(),
        wasSaved: false,
        wasLoaded: false
    };

    setType = (type) => this.setState({ type });
    setTypeSave = () => {
        this.setType('save');
        this.setLoadedFalse()
    }
    setTypeLoad = () => {
        this.setType('load');
        this.setLoadedFalse()
    }
    setTypeView = () => {
        this.setType('view')
        this.setState({ wasSaved: false });
    };

    setShow = (show)=>{
        this.setState({'show': show});
        if( !show ){
            this.setLoadedFalse();
            this.setTypeView();
            this.wasSaved(false);
       }
    };

    setLoaded = (loaded) => this.setState({ wasLoaded: loaded });
    setLoadedTrue = () => this.setLoaded(true);
    setLoadedFalse = () => this.setLoaded(false);

    setWasSaved = (saved)=>{
        this.setState({
            wasSaved: saved
        })
    };

    handleClose = () => this.setShow(false);
    handleShow = () => this.setShow(true);

    cleanList = () => {
        this.props.stores.selected.cleanSelected();
        this.setLoadedFalse();
    }
    addListToSave = (name) => {
        this.props.stores.selected.addListToSave(name);
        this.setWasSaved(true);
        this.setState({
            savedLists: this.props.stores.selected.getSavedLists()
        })
   };
    removeSavedItem = (id) =>{
        this.props.stores.selected.removeSavedItem(id);
        this.setState({
            savedLists: this.props.stores.selected.getSavedLists()
        })
    }

    loadList = (id) => this.props.stores.selected.loadList(id);

    render() {

        return (
            <header className="navbar-light">
                <div className="container">
                    <div className="row mt-2  justify-content-between">
                        <div className="col-4">
                            <p className="h4 text-secondary mt-1">
                                <span className="d-none d-sm-inline">
                                    Выбрано: 
                                </span>
                                {this.props.stores.selected.items.length}
                            </p>
                        </div>
                        <div className="col-8">
                            <Button
                                onClick={this.handleShow}
                                className="navbar-toggler float-right"
                                variant="light"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </Button>
                           <NavLink 
                                to={routesMap.Training} 
                                exact 
                                className="btn btn-primary mr-2 float-right" 
                                >
                                Начать
                                <LitterSpecial letter="" className="icon-play3" />
                            </NavLink>
                        </div>
                    </div>
                </div>

                <SelectedModalList
                    type={this.state.type}
                    show={this.state.show}
                    wasSaved={this.state.wasSaved}
                    wasLoaded={this.state.wasLoaded}
                    setTypeView={this.setTypeView.bind(this)}
                    setTypeSave={this.setTypeSave.bind(this)}
                    setTypeLoad={this.setTypeLoad.bind(this)}
                    handleClose = {this.handleClose.bind(this)}
                    list = {this.props.stores.selected.items}
                    cleanList = { this.cleanList.bind(this) }
                    addListToSave={this.addListToSave.bind(this) }
                    savedLists={this.state.savedLists }
                    removeSavedItem={this.removeSavedItem.bind(this) }
                    loadList={this.loadList.bind(this) }
                    setLoadedTrue={this.setLoadedTrue.bind(this)}
                    setLoadedFalse={this.setLoadedFalse.bind(this)}
                />

            </header>
        );
    }
}

export default withStore( HeaderInitial );