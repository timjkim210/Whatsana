import { connect } from 'react-redux';
import Splash from './splash';
import { signup, login } from '../../actions/session_actions';

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.id
    }
};

const mapDispatchToProps = dispatch => ({
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash)