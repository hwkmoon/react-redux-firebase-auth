const initialState = {
    loading: false,
    currentUser: null,
    error: null,
};

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case "REGISTER_START":
        case "LOGIN_START":
        case "LOGOUT_START":
        case "GOOGLE_SIGNIN_START":
        case "FACEBOOK_SIGNIN_START":
            return {
                ...state, 
                loading: true
            }
        case "REGISTER_SUCCESS":
        case "LOGIN_SUCCESS":
        case "GOOGLE_SIGNIN_SUCCESS":
        case "FACEBOOK_SIGNIN_SUCCESS":
            return {
                ...state,
                loading: false,
                currentUser: action.payload
            }
        case "LOGOUT_SUCCESS":
            return {
                ...state,
                currentUser: null
            }
        case "REGISTER_FAIL":
        case "LOGIN_FAIL":
        case "LOGOUT_FAIL":
        case "GOOGLE_SIGNIN_FAIL":
        case "FACEBOOK_SIGNIN_FAIL":
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case "SET_USER":
            return {
                ...state,
                loading: false,
                currentUser: action.payload
            }
        default:
            return state;
    }
};

export default userReducer;