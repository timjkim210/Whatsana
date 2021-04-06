import { connect } from 'react-redux';
import { fetchProject, deleteProject, updateProject } from '../actions/project_actions';
import ProjectShow from './project_show';

/*
Export a container component for the `EventShow` that maps in the appropriate
event from the store as an `event` prop. Additionally, it should map in
a function that will dispatch `requestEvent` to the store as a prop of the same
name.
*/

const mSTP = (state, ownProps) => {
    return {
            project: state.entities.projects[ownProps.match.params.id]
    }
}

const mDTP = dispatch => ({
    fetchProject: projectId => dispatch(fetchProject(projectId)),
    deleteProject: projectId => dispatch(deleteProject(projectId)),
    updateProject: (project) => dispatch(updateProject(project))

});

export default connect(mSTP, mDTP)(ProjectShow);