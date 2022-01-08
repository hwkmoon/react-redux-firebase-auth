import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from "react-router-dom";
import "../assets/css/Login.css"
import { facebookSignInInitiate, googleSignInInitiate, loginInitiate } from '../store/actions';

export default function Login() {
    const [state, setState] = useState({
        email: "",
        password: ""
    })
    const {currentUser} = useSelector(state => state.user);

    const {email, password} = state;

    const navigate = useNavigate();

    useEffect(() => {
        console.log(currentUser);
        if (currentUser) {
            navigate("/")
        }
    },[currentUser, navigate])

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            return;
        }
        dispatch(loginInitiate(email, password));
        setState({email: "", password: ""})
    }
    const handleGoogleSignIn = () => {
        dispatch(googleSignInInitiate());
    }
    const handleFacebookSignIn = () => {
        dispatch(facebookSignInInitiate());
    }
    const handleChange = (e) => {
        let {name, value} = e.target;
        setState({...state, [name]: value})
    }  
    return (
        <div>
            <div id="logreg-forms">
                <form className="form-signin" onSubmit={handleSubmit} >
                    <h1 className="h3 mb-3 font-weight-normal" style={{textAlign: 'center'}}>Sign In</h1>
                    <div className='social-login'>
                        <button className="btn google-btn social-btn" type="button" onClick={handleGoogleSignIn}>
                            <span>
                                <i className="fab fa-google"> Sign in with Google</i>
                            </span>
                        </button>
                        <button className="btn facebook-btn social-btn" type="button" onClick={handleFacebookSignIn}>
                            <span>
                                <i className="fab fa-facebook"> Sign in with Facebook</i>
                            </span>
                        </button>
                    </div>
                    <p style={{textAlign: 'center'}}>OR</p>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email Address" name="email" onChange={handleChange} value={email} required />
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" name="password" onChange={handleChange} value={password} required />
                    <button className="btn btn-secondary btn-block" type="submit"><i className="fas fa-sign-in-alt"></i>  Sign In</button>
                    <hr />
                    <p>Don't have an account</p>
                    <Link to="/register">
                        <button className="btn btn-primary btn-block" type="button" id="btn-signup"><i className="fas fa-user-plus"></i> Sign Up New Account</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}
