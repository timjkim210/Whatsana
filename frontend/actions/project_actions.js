import * as APIUtil from '../util/project_api_util';


export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';
export const PROJECT_ERROR = 'PROJECT_ERROR';

export const receiveProjects = projects => ({
    type: RECEIVE_PROJECTS,
    projects,
});

export const receiveProject = project => {
    return {
        type: RECEIVE_PROJECT,
        project,
    }
};

export const removeProject = projectId => ({
    type: REMOVE_PROJECT,
    projectId,
});

export const projectError = error => ({
    type: PROJECT_ERROR,
    error,
});

export const createProject = project => dispatch => {
    return APIUtil.createProject(project)
        .then(project => dispatch(receiveProject(project)))
}

export const fetchProjects = () => dispatch => {
    return APIUtil.fetchProjects()
        .then(projects => {
            return dispatch(receiveProjects(projects))
        })
    }

export const fetchProject = (projectId) => dispatch => {
    return APIUtil.fetchProject(projectId)
        .then(project => {
            return dispatch(receiveProject(project))
})}

export const deleteProject = projectId => dispatch => {
    return APIUtil.destroyProject(projectId)
        .then(() => dispatch(removeProject(projectId)))
};

export const updateProject = project => dispatch => {
    return APIUtil.updateProject(project)
        .then(project => {
            return dispatch(receiveProject(project))
})};
