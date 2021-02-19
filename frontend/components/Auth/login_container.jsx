import { connect } from 'react-redux';
import { login, removeErrors } from '../../actions/session_actions';
import Login from './login';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeErrors: () => dispatch(removeErrors()),
        login: user => dispatch(login(user))}
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);