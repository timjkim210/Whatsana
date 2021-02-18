import { connect } from 'react-redux';
import Home from './home';
import { logout } from '../actions/session_actions';
import { createProject, fetchProjects } from '../actions/project_actions'
import { allProjects } from '../reducers/selectors';

const mapStateToProps = (state) => ({
    currentUser: state.session.currentUser,
    projects: allProjects(state)
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    createProject: (proj) => dispatch(createProject(project)),
    fetchProjects: () => dispatch(fetchProjects())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);