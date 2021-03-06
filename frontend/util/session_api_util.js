
export const signup = user => {
    return $.ajax({
        url: '/api/users',
        method: 'POST',
        data: {user}
    })
};

export const login = user => {
    return $.ajax({
        url: '/api/session',
        method: 'POST',
        data: {user}
    })
};

export const logout = () => {
    return $.ajax({
        url: '/api/session',
        method: 'DELETE'
    })
};

export const updateUser = user => {
    return $.ajax({
        url: `/api/users/${user.id}`,
        method: 'PATCH',
        data: { user }
    })
};

export const fetchUsers = () => {
    return $.ajax({
        url: '/api/users',
        method: 'GET'
    })
};