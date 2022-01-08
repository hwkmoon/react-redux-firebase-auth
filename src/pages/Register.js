import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from "react-router-dom";
import "../assets/css/Register.css"
import { registerInitiate } from '../store/actions';

export default function Register() {
    const [state, setState] = useState({
        displayName: "",
        email: "",
        password: "",
        passwordConfirm: ""
    })
    const {currentUser} = useSelector(state => state.user);

    const history = useNavigate();

    useEffect(() => {
        if (currentUser) {
            history.push("/")
        }
    },[currentUser, history])

    const dispatch = useDispatch();

    const {displayName, email, password, passwordConfirm} = state;
    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== passwordConfirm) {
            return;
        }
        dispatch(registerInitiate(email, password, displayName))
        setState({displayName: "", email: "", password: "", passwordConfirm: "" })
    }

    const handleChange = (e) => {
        let {name, value} = e.target;
        setState({...state, [name]: value})
    }   
    return (
        <div>
            <div id="register-form">
                <form className="form-signup" onSubmit={handleSubmit} >
                    <h1 className="h3 mb-3 font-weight-normal" style={{textAlign: 'center'}}>Sign Up</h1>
                    <input type="text" id="displayName" className="form-control" placeholder="Full Name" name="displayName" onChange={handleChange} value={displayName} required />
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email Address" name="email" onChange={handleChange} value={email} required />
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" name="password" onChange={handleChange} value={password} required />
                    <input type="password" id="inputRePassword" className="form-control" placeholder="Repeat Password" name="passwordConfirm" onChange={handleChange} value={passwordConfirm} required />
                    <button className="btn btn-primary btn-block" type="submit"><i className="fas fa-user-plus"></i>  Sign Up</button>
                    <hr />
                    <p>Already have an account</p>
                    <Link to="/login">
                        <button className="btn btn-secondary btn-block" type="button" id="btn-signup"><i className="fas fa-angle-left"></i> Back</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}
