import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from "react-bootstrap/es/ListGroup";
import BtnMinus from "~/components/btn/minus";
import BtnPlus from "~/components/btn/plus";
import style from '~/containers/Complex/Complex.module.css';
import withStore from "~/hocs/withStore";
import LitterSpecial from "~/components/btn/LitterSpecial";

class ExerciseList extends React.Component {
    render() {
        return (
        <ListGroup as="ul">
            {
            this.props.list.map((item, i) => {
                const addSelectedItem = this.props.stores.selected.addItem.bind(this.props.stores.selected, item );
                const delSelectedItem = this.props.stores.selected.delItem.bind(this.props.stores.selected, item );
                const isItemSelected = this.props.stores.selected.isItemSelected( item );

                let btnPl = '',
                    btnMin = ''
                ;
                if ( isItemSelected ){
                    btnMin = <BtnMinus onClick={ delSelectedItem } />;
                } else {
                    btnPl = <BtnPlus onClick={ addSelectedItem }/>;
                }

                return (
                    <ListGroup.Item as="li"
                                    className="position-relative"
                                    key={ item.id }>
                        {btnMin}

                        <div className={style.complex_title}
                             onClick={() => this.props.showExercise(item.id)}>

                            {item.title}

                            {this.props.arrow}

                        </div>

                        {btnPl}

                    </ListGroup.Item>
                )
            })
            }
        </ListGroup>
        );
    }
}

ExerciseList.propTypes = {
    list: PropTypes.array.isRequired,
    showExercise: PropTypes.func,
    arrow: PropTypes.string
};

ExerciseList.defaultProps = {
    showExercise: ()=>{},
    arrow: ''
};

export default withStore( ExerciseList );