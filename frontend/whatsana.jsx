import React from "react";
import ReactDOM from "react-dom";
import { signup, login, logout } from './util/session_api_util';
import configureStore from './store/store'
import Root from './components/root'
import { allProjects } from './reducers/selectors'
import { createProject, fetchProjects } from './actions/project_actions'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: {[window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    ReactDOM.render(<Root store={store}/>, root);
    window.store = store
    window.signup = signup
    window.login = login
    window.logout = logout
    window.getState = window.store.getState;
    window.dispatch = store.dispatch;
    window.allProjects = allProjects
    window.createProject = createProject
    window.fetchProjects = fetchProjects
});


