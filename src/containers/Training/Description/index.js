import React from 'react';
import parse from "html-react-parser";
import style from '~/containers/Complex/Description/Description.module.css'
import { Row, Col } from 'react-bootstrap';

export default class DescriptionTraining extends React.Component {

    render() {
        if ( this.props.expercise == null ){
            return <></>
        }
        return (
            <Row
                className="justify-content-md-center"
            >
                <Col
                    md={10}
                >
                    <p className="h5 text-center">
                        {this.props.expercise.title}
                    </p>
                    <p className="text-center">
                        {this.props.expercise.photo == '' ?
                            '' :
                            <img src={"/" + this.props.expercise.photo} className={style.description__pic} />
                        }
                    </p>
                    <br />
                    {parse(this.props.expercise.content)}
               </Col>
            </Row>
        );
    }
}