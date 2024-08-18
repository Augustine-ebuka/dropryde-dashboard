const navigationReducer = (state: boolean = false, action: {type: String, payload: string}) => {
    switch(action.type) {
        case 'TOGGLE_MENU':
            return !state;
        default:
            return state;
    }
}

export default navigationReducer;