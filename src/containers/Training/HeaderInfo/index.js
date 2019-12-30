import React from 'react';
import Col from "react-bootstrap/es/Col";
import Row from "react-bootstrap/es/Row";

import style from './HeaderInfo.module.css'

export default class HeaderInfo extends React.Component {

    render() {
        return (
            <Row>
                <Col
                    xs='auto'
                > 
                    <p className={style.text_ml + ""}>
                        Повторений:
                        <br />
                        Сек:
                    </p>
                </Col>
                <Col
                    xs='auto'
                    className={style.numbers_box + " text-left"}
                >
                    <p className={style.numbers + " h5"}>
                        <span className="badge badge-light">
                            {(this.props.expercise.kol - this.props.currentRepeat)}
                        </span>
                    </p>
                    <p className={style.numbers + " h5"}>
                        <span className="badge badge-light">
                            {(this.props.expercise.sec - this.props.currentTime)}
                        </span>
                    </p>
               </Col>
            </Row>
        );
    }
}