import React, { Component } from 'react';
import Form from 'react-bootstrap/FormGroup';
import { Button } from 'react-bootstrap';

export default class SaveList extends Component {

  render() {
    return (
    <Form className="p-3">
        <div className="form-row mb-3">
          <div className="col">
            <input 
              type="text" 
              className="form-control" 
              placeholder={!this.props.wasSaved && "Введите название"}
              value={this.props.listName}
              onChange={this.props.setName}
              disabled={this.props.wasSaved}
            />
          </div>
        </div>

        {!this.props.wasSaved ?
          <Button
            variant="primary"
            type="submit"
            className="mr-2"
            onClick={this.props.addListToSave}
          >
            Сохранить
          </Button>
          :
          <span className="mr-1">
            Сохранено
          </span>
        }
        <Button 
          variant="primary" 
          type="submit"
          onClick={this.props.setTypeView}
        >
          Назад
        </Button>
    </Form>
    );
  }
}
