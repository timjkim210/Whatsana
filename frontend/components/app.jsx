import React from 'react';
import SignupContainer from './signup_container';
import { Route, Switch } from 'react-router-dom';
import Splash from './splash'
import LoginContainer from './login_container';
import HomeContainer from './home_container';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';




export default () => (
    <div>
            <Route exact path="/" component={Splash} />
            <AuthRoute exact path="/signup" component={SignupContainer} />
            <AuthRoute exact path="/login" component={LoginContainer} />
            <Route exact path="/home" component={HomeContainer} />
    </div>
)