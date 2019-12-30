import React from 'react';
import Modal from "react-bootstrap/es/Modal";
import Button from "react-bootstrap/es/Button";

import ExerciseList from "~/containers/Complex/ExerciseList";

export default class SelectedModalList extends React.Component {

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Выбраны:</Modal.Title>
                </Modal.Header>
                <Button variant="primary"
                        onClick={this.props.cleanList}
                >
                    Очистить
                </Button>
                <Modal.Body>
                    <ExerciseList
                        list={this.props.list}
                    />
                </Modal.Body>
            </Modal>

        );
    }
}