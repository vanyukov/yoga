import React, { Component } from 'react';
import { Col, ListGroup, Button } from 'react-bootstrap';
import LitterSpecial from '~/components/btn/LitterSpecial';
import style from './LoadList.module.css'


export default class LoadList extends Component {
  render() {
    return (
      <Col>
        <p className="h3">Сохраненные:</p>
        <ListGroup 
          as="ul"
          className={style.list_group}
        >
          {
            this.props.savedLists.map((item, i) => 
            {
              return (
                <ListGroup.Item as="li"
                  className="d-flex justify-content-between "
                  key={i}
                >

                    {item.name}

                    <span className="text-right">
                    <Button variant="primary"
                      className="mb-1"
                      onClick={() => { 
                        this.props.loadList(item.items);
                        this.props.setLoadedTrue();
                        this.props.setTypeView();
                      }}
                    >
                      <LitterSpecial letter="" className="icon-download mr-1" />
                    </Button>

                    <Button variant="primary"
                      onClick={()=>{this.props.removeSavedItem(item.id)}}
                      className="mb-1 ml-1"
                    >
                      <LitterSpecial letter="X" className="mr-1" />
                    </Button>
                    </span>

                </ListGroup.Item>
              )
            })
          }
        </ListGroup>
        <p className="text-right mt-2 mb-3">
          <Button
            variant="primary"
            type="submit"
            onClick={this.props.setTypeView}
          >
            Назад
        </Button>
        </p>
     </Col>
    );
  }
}
