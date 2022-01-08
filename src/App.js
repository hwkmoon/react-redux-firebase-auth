import React, {useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login"
import Register from "./pages/Register";
import UserRoute from "./components/UserRoute";
import { useDispatch } from 'react-redux';
import {auth} from "./firebase"
import { setUser } from "./store/actions";

function App() {

  const dispatch= useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setUser(authUser))
      } else {
        dispatch(setUser(null))
      }
    })
  }, [dispatch])
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<UserRoute><Home /></UserRoute>} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
