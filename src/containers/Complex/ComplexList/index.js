import React from 'react';
import ListGroup from "react-bootstrap/es/ListGroup";

import withStore from '~/hocs/withStore';
import ComplexLine from  './ComplexLine'

class ComplexList extends React.Component {

    render() {
        return (
            <ListGroup as="ul">
                {this.props.list.map((complex, i) => {
                    return (
                        <ComplexLine openItemId={this.props.openItemId}
                                     exercises={this.props.stores.exercises}
                                     selected={this.props.stores.selected}
                                     device={this.props.stores.device}
                                     complex={complex}
                                     changeOpenLine={this.props.changeOpenLine}
                                     showExercise={ this.props.showExercise }
                                     key={complex.id }
                        />
                    );
                })}
            </ListGroup>

        );
    }
}

export default withStore( ComplexList );