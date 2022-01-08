import  { auth }   from "../firebase"

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

export const registerInitiate = (email, password, displayName) => {
    return function (dispatch) {
        dispatch(registerStart);
        auth.createUserWithEmailAndPassword(email, password).then(({user}) => {
            user.updateProfile({
                displayName
            })
            dispatch(registerSuccess)
        }).catch((error) => displayName(registerFail(error.message)))
    }
}