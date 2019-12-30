import React from 'react';
import {NavLink} from "react-router-dom";
import Container from "react-bootstrap/es/Container";
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/es/Col";

import { routesMap } from '~/routes';
import LitterSpecial from "~/components/btn/LitterSpecial";

import style from './Header.module.css'

export default class HeaderTraining extends React.Component {

    render() {
        return (
            <header>
                <Container>
                    <Row className="row mt-2 mb-2 justify-content-center">
                        <Col xs={12} 
                            md={5}
                            className = "mb-2"
                            >
                            <div className={" margin0A m-md-0"}>
                                <NavLink to={routesMap.home}
                                    className={"btn btn-dark mr-2 " + style.btn_stop}
                                >
                                    Стоп
                                <LitterSpecial letter="" className="icon-stop2" />
                                </NavLink>
                                <button
                                    type="button"
                                    className="btn btn-info "
                                    onClick={this.props.pauseBtn}
                                    disabled={this.props.disabledExersiseOperation}
                                >
                                    Пауза
                                <LitterSpecial letter="" className="icon-pause2" />
                                </button>
                            </div>
                        </Col>
                        <Col xs={12} 
                            md={7}
                            >
                            <div className="margin0A mr-md-0">
                                <button
                                    type="button"
                                    className="btn btn-primary mr-2"
                                    onClick={this.props.prevExercises}
                                    disabled={this.props.disabledExersiseOperation}
                                >
                                    <LitterSpecial letter="" className='icon-forward3 rotate180 ml-0' />
                                    Предыдущее
                            </button>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={this.props.nextExercises}
                                    disabled={this.props.disabledExersiseOperation}
                                >
                                    Следующее
                                <LitterSpecial letter="" className='icon-forward3 ml-0' />
                                </button>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col
                            xs={6}
                        >
                            <p className={style.text_count + " text-right"}>
                                {this.props.count}
                            </p>
                        </Col>

                        <Col
                            xs={6}
                        >
                            {this.props.children}
                        </Col>
                    </Row>
                </Container>
            </header>
        );
    }
}