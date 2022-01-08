import  { auth, googleAuthProvider, facebookAuthProvider }   from "../firebase"

export const registerStart = () => ({
    type: "REGISTER_START"
})

export const registerSuccess = (user) => ({
    type: "REGISTER_SUCCESS",
    payload: user
})

export const registerFail = (error) => ({
    type: "REGISTER_FAIL",
    payload: error
})

export const loginStart = () => ({
    type: "LOGIN_START"
})

export const loginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user
})

export const loginFail = (error) => ({
    type: "LOGIN_FAIL",
    payload: error
})

export const logoutStart = () => ({
    type: "LOGOUT_START"
})

export const logoutSuccess = () => ({
    type: "LOGOUT_SUCCESS"
})

export const logoutFail = (error) => ({
    type: "LOGOUT_FAIL",
    payload: error
})

export const setUser = (user) => ({
    type: "SET_USER",
    payload: user
})

export const googleSignInStart = () => ({
    type: "GOOGLE_SIGNIN_START"
})

export const googleSignInSuccess = (user) => ({
    type: "GOOGLE_SIGNIN_SUCCESS",
    payload: user
})
export const googleSignInFail = (error) => ({
    type: "GOOGLE_SIGNIN_FAIL",
    payload: error
})

export const facebookSignInStart = () => ({
    type: "FACEBOOK_SIGNIN_START"
})

export const facebookSignInSuccess = (user) => ({
    type: "FACEBOOK_SIGNIN_SUCCESS",
    payload: user
})
export const facebookSignInFail = (error) => ({
    type: "FACEBOOK_SIGNIN_FAIL",
    payload: error
})

export const registerInitiate = (email, password, displayName) => {
    return function (dispatch) {
        dispatch(registerStart);
        auth.createUserWithEmailAndPassword(email, password).then(({user}) => {
            user.updateProfile({
                displayName
            })
            dispatch(registerSuccess(user))
        }).catch((error) => dispatch(registerFail(error.message)))
    }
}

export const loginInitiate = (email, password) => {
    return function (dispatch) {
        dispatch(loginStart);
        auth.signInWithEmailAndPassword(email, password).then(({user}) => {
            dispatch(loginSuccess(user))
        }).catch((error) => dispatch(loginFail(error.message)))
    }
}

export const logoutInitiate = () => {
    return function (dispatch) {
        dispatch(logoutStart);
        auth
            .signOut()
            .then((resp) => dispatch(logoutSuccess()))
            .catch((error) => dispatch(logoutFail(error.message)))
    }
}

export const googleSignInInitiate = () => {
    return function (dispatch) {
        dispatch(googleSignInStart);
        auth
            .signInWithPopup(googleAuthProvider)
            .then(({user}) => {
                dispatch(googleSignInSuccess(user))
            })
            .catch((error) => dispatch(googleSignInFail(error.message)))
    }
}

export const facebookSignInInitiate = () => {
    return function (dispatch) {
        dispatch(facebookSignInStart);
        auth
            .signInWithPopup(facebookAuthProvider)
            .then(({user}) => {
                dispatch(facebookSignInSuccess(user))
            })
            .catch((error) => dispatch(facebookSignInSuccess(error.message)))
    }
}