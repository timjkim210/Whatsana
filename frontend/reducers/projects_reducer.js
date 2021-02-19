import {RECEIVE_PROJECT, RECEIVE_PROJECTS, REMOVE_PROJECT, PROJECT_ERROR } from '../actions/project_actions';

const projectsReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_PROJECTS:
            return action.projects
        case RECEIVE_PROJECT:
            const newProject = {[action.project.id]: action.project};
            return Object.assign({}, state, newProject);
        case REMOVE_PROJECT:
            nextState = Object.assign({}, state);
            delete nextState[action.project.id];
            return nextState;
        case PROJECT_ERROR:
            alert(action.error);
        default:
            return state;
    }
}

export default projectsReducer;