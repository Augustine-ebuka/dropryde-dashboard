const loginReduder = (state = false, action) => {
    switch(action.type) {
        case 'SIGN_IN':
            return true;
        case 'SIGN_OUT':
            return false;
        case 'LOGIN_STATUS':
            return state;
        default:
            return state;
    }
}

export default loginReduder;