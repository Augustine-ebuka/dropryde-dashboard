const userReduder = (state = {
        userId: "",
        email: "",
        username: "",
        firstName: "John",
        lastName: "Doe",
        profileImg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
        stack: "No stack"

}, action) => {
    switch(action.type) {
        case 'GET_USER':
            return state;
        case 'SET_USER':
            return action.payload;
        default:
            return state;
    }
}

export default userReduder;