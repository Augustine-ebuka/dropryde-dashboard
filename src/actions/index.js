export const toggleMenu = () => {
    return {
        type: 'TOGGLE_MENU'
    }
}
export const loginUser = () => {
    return {
        type: 'SIGN_IN',
    }
}
export const logoutUser = () => {
    localStorage.removeItem("authToken");
    return {
        type: 'SIGN_OUT',
    }
}
export const loginStatus = () => {
    return {
        type: 'LOGIN_STATUS',
    }
}
export const saveToken = (token) => {
    return {
        type: 'SAVE_TOKEN',
        payload: token
    }
}
export const getToken = () => {
    return {
        type: 'GET_TOKEN'
    }
}
export const getUser = () => {
    return {
        type: 'GET_USER'
    }
}
export const setUser = (userData) => {
    return {
        type: 'SET_USER',
        payload: userData
    }
}