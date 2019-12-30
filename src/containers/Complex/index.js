import React from 'react';
import withStore from '~/hocs/withStore';
import HeaderInitial from '~/containers/Complex/Header/';

import style from './Complex.module.css';
import ComplexList from "./ComplexList";
import Description from "./Description";
import LitterSpecial from "~/components/btn/LitterSpecial";

class Complex extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            openItemId: null,
            title: 'Комплексы йоги',
            expercise: null
        };
    }

    changeOpenLine(id){
        const newId = this.state.openItemId != id ? id : null;
        this.setState({
            openItemId: newId
        });
    }

    showExercise(newId){
        this.setState({
            expercise: this.props.stores.exercises.getById( newId )
        });
    }
    

    render(){
        let complexList = this.props.stores.complex.items;

        return (
            <>
                <HeaderInitial />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-center m-4">
                                {this.state.title}
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className={"col-md-4 col-sm-6 " + style.info_box_left }>
                            <h2 className="text-center mb-3">
                                Упражнения:
                            </h2>
                            <ComplexList list={complexList}
                                         openItemId={this.state.openItemId}
                                         changeOpenLine={this.changeOpenLine.bind(this)}
                                         showExercise={this.showExercise.bind(this)}
                            />
                        </div>
                        <div className="separator d-sm-none">
                            <LitterSpecial letter="" className="icon-embed rotate90" />
                            <LitterSpecial letter="" className="icon-embed rotate90" />
                        </div>
                        <div className={"col-md-8 col-sm-6 " + style.info_box_right}>
                            <Description expercise={this.state.expercise}/>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default withStore(Complex);