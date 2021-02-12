import React from 'react';
import SignupContainer from './signup_container';
import { Route, Switch, Redirect } from 'react-router-dom';
import Splash from './splash'
import LoginContainer from './login_container';
import HomeContainer from './home_container';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import FourOhFour from './four_oh_four';




export default () => (
    <div>
        <Switch>
            <Route exact path="/" component={Splash} />
            <AuthRoute exact path="/signup" component={SignupContainer} />
            <AuthRoute exact path="/login" component={LoginContainer} />
            <ProtectedRoute exact path="/home" component={HomeContainer} />
            <Route path='*' component={FourOhFour} />
        </Switch>
    </div>
)