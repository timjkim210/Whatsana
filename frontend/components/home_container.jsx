import { connect } from 'react-redux';
import Home from './home';
import { logout, updateUser } from '../actions/session_actions';
import { createProject, fetchProjects } from '../actions/project_actions'
import { allProjects } from '../reducers/selectors';

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        projects: allProjects(state)
    }
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    createProject: (proj) => dispatch(createProject(project)),
    fetchProjects: () => dispatch(fetchProjects()),
    updateUser: (user) => dispatch(updateUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);