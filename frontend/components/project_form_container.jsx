import { connect } from 'react-redux';
import { createProject } from '../actions/project_actions';
import CreateProjectForm from './create_project_form'

const mapDispatchToProps = dispatch => {
    return {
        createProject: (proj) => dispatch(createProject(proj))
    }
};

export default connect(null, mapDispatchToProps)(CreateProjectForm);

