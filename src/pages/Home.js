import React from 'react'
import "../assets/css/Home.css"
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logoutInitiate } from '../store/actions';

export default function Home() {
    const {currentUser} = useSelector(state => state.user);
    const dispatch = useDispatch();
    const handleAuth = () => {
        if (currentUser) {
            dispatch(logoutInitiate());
        }
    }
    return (
        <div>
            <h1>Home</h1>
            <Link to="/login">
            <button className="btn btn-danger" onClick={handleAuth}>Logout</button>
            </Link>
        </div>
    )
}
