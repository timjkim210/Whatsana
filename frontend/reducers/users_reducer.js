import { RECEIVE_CURRENT_USER, RECEIVE_ALL_USERS } from '../actions/session_actions';

export const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, { [action.currentUser.id]: action.currentUser })
        case RECEIVE_ALL_USERS:
            return action.users
        default:
            return oldState;
    }
};

export default usersReducer;
