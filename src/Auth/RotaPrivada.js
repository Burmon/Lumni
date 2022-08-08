import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthCont } from './AuthContext'; 

export const RotaPrivada = (props) => {
    const { component: RouteComponent, ...other } = props;
    const { usuario } = useContext(AuthCont);

    return(

        <Route
            {...other}
            render = {(routeProps) =>
                !!usuario ? (
                    <RouteComponent {...routeProps} />
            ) : (
                <Redirect to="/"/>
            )
            
            }
        />
    );



};