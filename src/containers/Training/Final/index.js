import React from 'react';
import {NavLink} from "react-router-dom";
import { routesMap } from '~/routes';

export default class Final extends React.Component {

    render() {
        return (
            <>
                <h3 className="mt-5 text-center">
                    Комплекс выполнен
                </h3>

                <p className="text-center">
                    <NavLink to={routesMap.home}
                             className="btn btn-primary mt-4"
                    >
                        На главную
                    </NavLink>
                </p>
            </>
        );
    }
}