/* eslint-disable arrow-body-style */
import { connect } from 'react-redux';
import { fetchProject, deleteProject, updateProject } from '../actions/project_actions';
import { fetchTasks, createTask, deleteTask } from '../actions/task_actions';
import { fetchUsers } from '../actions/session_actions';
import ProjectShow from './project_show';

/*
Export a container component for the `EventShow` that maps in the appropriate
event from the store as an `event` prop. Additionally, it should map in
a function that will dispatch `requestEvent` to the store as a prop of the same
name.
*/

const mSTP = (state, ownProps) => {
    return {
            project: state.entities.projects[ownProps.match.params.id],
            tasks: Object.values(state.entities.tasks),
            projectId: ownProps.match.params.id,
            currentUser: state.entities.users[state.session.id],
            users: Object.values(state.entities.users)
    }
}

const mDTP = dispatch => ({
    fetchProject: projectId => dispatch(fetchProject(projectId)),
    deleteProject: projectId => dispatch(deleteProject(projectId)),
    updateProject: (project) => dispatch(updateProject(project)),
    fetchTasks: projectId => dispatch(fetchTasks(projectId)),
    createTask: (projectId, task) => dispatch(createTask(projectId, task)),
    fetchUsers: () => dispatch(fetchUsers()),
    deleteTask: (projectId, taskId) => dispatch(deleteTask(projectId, taskId))
});

export default connect(mSTP, mDTP)(ProjectShow);