import React from 'react';
import parse from 'html-react-parser'

import style from './Description.module.css'
import { Col } from 'react-bootstrap';


export default class Description extends React.Component {

    render() {
        if ( this.props.expercise == null ){
            return <>
                <p className="h3 text-center mt-3">
                    Упражение не выбрано
                </p>
            </>
        }

        return (
            <>
                <h2 className="text-center mb-3">
                    Описание:
                </h2>
                <div className="description text-center">
                    <div className="row">
                        <Col 
                        >
                            <div className="mb-3">
                                <p>
                                    Повторений: 
                                    <strong className="ml-1">
                                        {this.props.expercise.kol}
                                    </strong>
                                </p>
                            </div>
                        </Col>
                        <Col
                        >
                            <div className="mb-3">
                                <p>
                                    Секунд:
                                    <strong className="ml-1">
                                        {this.props.expercise.sec}
                                    </strong>
                                </p>
                            </div>
                        </Col>
                    </div>
                    <p className="h3">
                        {this.props.expercise.title}
                    </p>
                    {this.props.expercise.photo =='' ?
                        '' :
                        <img src={"/" + this.props.expercise.photo} className={style.description__pic}/>
                    }
                    <br/>
                    {parse(this.props.expercise.content)}
                </div>

            </>
        );
    }
}