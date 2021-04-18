import { RECEIVE_TASKS, RECEIVE_TASK, REMOVE_TASK } from '../actions/task_actions';

const tasksReducer = (state = {}, action) => {
    let nextState;
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_TASKS:
            nextState = Object.assign({}, state);
            return Object.values(action.tasks)
        case RECEIVE_TASK:
            const newTask = {[action.task.id]: action.task};
            return Object.assign({}, state, newTask);
        case REMOVE_TASK:
            nextState = Object.assign({}, state);
            let keys = Object.keys(nextState)
            keys.forEach(key => {
                if (nextState[key].id === action.taskId) {
                    delete nextState[key]
                }
            })
            return nextState
        default:
            return state;
    }
};

export default tasksReducer;