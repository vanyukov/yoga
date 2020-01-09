import React, { Component } from 'react';
import { Modal, Col, Button } from 'react-bootstrap';
import ExerciseList from "~/containers/Complex/ExerciseList";
import LitterSpecial from '~/components/btn/LitterSpecial';

export default class SelectedList extends Component {
  render() {
    return (
      <Col>
        <Modal.Header
          closeButton
          className="border-bottom-0"
        >
          <Modal.Title>
            Выбраны:
            {this.props.list.length}
          </Modal.Title>
        </Modal.Header>

        <div className="d-flex flex-wrap justify-content-around">
          <Button variant="primary"
            className="mb-2"
            onClick={this.props.setTypeSave}
          >
            <LitterSpecial letter="" className="icon-upload mr-1" />
            Сохранить
          </Button>

          <Button variant="primary"
            className="mb-2"
            onClick={this.props.setTypeLoad}
          >
            <LitterSpecial letter="" className="icon-download mr-1" />
            Загрузить
          </Button>

          <Button variant="primary"
            className="mb-2"
            onClick={this.props.cleanList}
          >
            <LitterSpecial letter="" className="icon-ungroup mr-1" />
            Очистить
          </Button>
        </div>

        <Modal.Body>
          {
            this.props.wasLoaded &&
            <p>
              Загружено:
            </p>
          }
          <ExerciseList
              list={this.props.list}
            />
        </Modal.Body>
        
      </Col>
    );
  }
}
