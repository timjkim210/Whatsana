import React from 'react';
import SignupContainer from './Auth/signup_container';
import { Route, Switch } from 'react-router-dom';
import SplashContainer from './Splash/splash_container'
import LoginContainer from './Auth/login_container';
import HomeContainer from './home_container';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import FourOhFour from './Splash/four_oh_four';
import ProjectFormContainer from './project_form_container';




export default () => (
    <div>
        <Switch>
            <Route exact path="/" component={SplashContainer} />
            <AuthRoute exact path="/signup" component={SignupContainer} />
            <AuthRoute exact path="/login" component={LoginContainer} />
            <ProtectedRoute exact path="/home" component={HomeContainer} />
            <Route exact path="/projects/new" component={ProjectFormContainer} />
            <Route path='*' component={FourOhFour} />
        </Switch>
    </div>
)