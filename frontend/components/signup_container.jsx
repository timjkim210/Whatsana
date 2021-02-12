import { connect } from 'react-redux';
import { signup, removeErrors } from '../actions/session_actions';
import Signup from './signup';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session
    }
}
const mapDispatchToProps = dispatch => ({
    signup: user => dispatch(signup(user)),
    removeErrors: () => dispatch(removeErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
