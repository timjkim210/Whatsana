import { combineReducers } from 'redux';
import projectsReducer from './projects_reducer';
import usersReducer from './users_reducer';
import tasksReducer from './tasks_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    projects: projectsReducer,
    tasks: tasksReducer
});

export default entitiesReducer;