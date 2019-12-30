import React from 'react';
import {NavLink} from "react-router-dom";
import Button from "react-bootstrap/es/Button";

import { routesMap } from '~/routes';
import withStore from '~/hocs/withStore';
import SelectedModalList from "./Selected";
import LitterSpecial from "~/components/btn/LitterSpecial";

class HeaderInitial extends React.Component {

    state={
        'show': false
    };
    setShow = (show)=>{
        this.setState({'show': show})
    };

    handleClose = () => this.setShow(false);
    handleShow = () => this.setShow(true);

    cleanList = () => this.props.stores.selected.cleanSelected();

    render() {

        const countSelected = this.props.stores.selected.items.length;
        return (
            <header className="navbar-light">
                <div className="container">
                    <div className="row mt-2  justify-content-between">
                        <div className="col-4">
                            <p className="h4 text-secondary mt-1">
                                {countSelected}
                            </p>
                        </div>
                        <div className="col-7">
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
                    show={this.state.show}
                    handleClose = {this.handleClose.bind(this)}
                    list = {this.props.stores.selected.items}
                    cleanList = { this.cleanList.bind(this) }
                />

            </header>
        );
    }
}

export default withStore( HeaderInitial );