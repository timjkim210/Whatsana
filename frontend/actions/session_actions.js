import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const REMOVE_SESSION_ERRORS = 'REMOVE_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => {
    return {type: RECEIVE_CURRENT_USER,
    currentUser}
};

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    } 
};

export const removeErrors = () => {
    return {
        type: REMOVE_SESSION_ERRORS,
        
    }
}

export const signup = user => dispatch => {
    return APIUtil.signup(user)
        .then(user => dispatch(receiveCurrentUser(user)
        ), err => {
            return dispatch(receiveErrors(err.responseJSON))
        }    
        )
};

export const login = user => dispatch => {
    return APIUtil.login(user)
        .then(user => dispatch(receiveCurrentUser(user)
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
};

export const logout = () => dispatch => {
    return APIUtil.logout()
        .then(() => dispatch(logoutCurrentUser()))
};
