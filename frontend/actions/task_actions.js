import * as APIUtil from '../util/task_api_util';

export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const RECEIVE_TASK = 'RECEIVE_TASK';

export const receiveTasks = tasks => {
    return {
        type: RECEIVE_TASKS,
        tasks,
    }
};

export const receiveTask = task => {
    return {
        type: RECEIVE_TASK,
        task
    }
}

export const fetchTasks = (projectId) => dispatch => {
    return APIUtil.fetchTasks(projectId)
        .then(tasks => {
            return dispatch(receiveTasks(tasks))
        })
};

export const createTask = (projectId, task) => dispatch => {
    return APIUtil.createTask(projectId, task)
        .then(task => dispatch(receiveTask(task)))
}