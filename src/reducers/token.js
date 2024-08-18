const loginReduder = (state = null, action) => {
    switch(action.type) {
        case 'GET_TOKEN':
            return state;
        case 'SAVE_TOKEN':
            return action.payload;
        default:
            return state;
    }
}

export default loginReduder;