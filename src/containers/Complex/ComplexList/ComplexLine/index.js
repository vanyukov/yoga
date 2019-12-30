import React from 'react';

import ExerciseList from "~/containers/Complex/ExerciseList";
import BtnMinus from "~/components/btn/minus";
import BtnPlus from "~/components/btn/plus";

import style from '~/containers/Complex/Complex.module.css';
import {observer} from "mobx-react/dist/mobx-react";
import LitterSpecial from "~/components/btn/LitterSpecial";

@observer export default class ComplexLine extends React.Component {

    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    componentDidUpdate(prevProps){
        if ( prevProps.openItemId != this.props.openItemId
            && this.props.openItemId == this.props.complex.id ){
            this.ref.current.scrollIntoView({ behavior: "smooth"});
        }
    }

    selectedAddComplex(){
        this.props.selected.addComplex( this.props.complex )
    }

    selectedDelComplex(){
        this.props.selected.delComplex( this.props.complex )
    }

    render() {

        let exerciseList = ''
            ,arrow = ''
            ,btnMinus = ''
            ,btnPlus = ''
        ;
        if ( this.props.openItemId == this.props.complex.id){
            arrow = <LitterSpecial letter="" className="icon-play3 rotate270"/>
        } else {
            arrow = <LitterSpecial letter="" className="icon-play3 rotate90" />
        }

        if ( this.props.openItemId == this.props.complex.id){
            exerciseList = <ExerciseList list={ this.props.exercises.getExercisesByComplex( this.props.complex ) }
                                        showExercise={ this.props.showExercise }
                                        arrow={<>
                                            <LitterSpecial letter="" className="icon-redo2 rotate90 d-inline-block d-sm-none" />
                                            <LitterSpecial letter="" className="icon-arrow-right d-none d-sm-inline-block" />
                                        </>}
            />
        }

        switch ( this.props.selected.isComplexSelected( this.props.complex ) ){
            case 'none':
                btnPlus = <BtnPlus onClick={this.selectedAddComplex.bind(this)} />;
                break;
            case 'full':
                btnMinus = <BtnMinus onClick={this.selectedDelComplex.bind(this)} />;
                break;
            default:
                btnMinus = <BtnMinus onClick={this.selectedDelComplex.bind(this)} />;
                btnPlus = <BtnPlus onClick={this.selectedAddComplex.bind(this)} />;
        }

        return (
            <li className="position-relative list-group-item"
                ref={this.ref}
                >
                {btnMinus}

                <div className={style.complex_title}
                     onClick={() => {this.props.changeOpenLine(this.props.complex.id);}}
                >
                    {arrow}

                    {this.props.complex.title}
                </div>

                {exerciseList}

                {btnPlus}
            </li>
        );
    }
}