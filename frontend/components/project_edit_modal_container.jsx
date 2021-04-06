import { connect } from 'react-redux';
import { fetchProject, updateProject } from '../actions/project_actions';
import ProjectEditModal from './project_edit_modal';

componentDidMount() {
    fetchProject(this.props.match.params.projectId)
}

const mapStateToProps = (state, ownProps) => ({
    project: state.projects[ownProps.match.params.projectId],
})

const mapDispatchToProps = dispatch => ({
        updateProject: (project) => dispatch(updateProject(project))
    })


export default connect(mapStateToProps, mapDispatchToProps)(ProjectEditModal);
