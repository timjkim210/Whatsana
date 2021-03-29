import { connect } from 'react-redux';
import { createProject } from '../actions/project_actions';
import CreateProjectForm from './create_project_form';

const mapStateToProps = state => ({
    project: {
            name: '',
        }
})

const mapDispatchToProps = dispatch => ({
        createProject: (proj) => dispatch(createProject(proj))
    })


export default connect(mapStateToProps, mapDispatchToProps)(CreateProjectForm);

