import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Layout from '../Components/Layout'

const PrivateRoute = ({ component: Component, ...rest }) => {
    const token = localStorage.getItem('token');

    return <Layout>
        <Route {...rest} render={props => token ? <Component {...props} /> : alert('Please Authenticate')} />
    </Layout>
}


export default PrivateRoute;