const initialState = {
    loading: false,
    currentUser: null,
    error: null,
};

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case "REGISTER_START":
            return {
                ...state, 
                loading: true
            }
        case "REGISTER_SUCCESS":
            return {
                ...state,
                loading: false,
                currentuser: action.payload
            }
        case "REGISTER_FAIL":
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
};

export default userReducer;