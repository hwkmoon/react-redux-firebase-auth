import React from 'react'
import "../assets/css/Home.css"
import { useHistory, Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/login">
            <button className="btn btn-danger">Logout</button>
            </Link>
        </div>
    )
}
