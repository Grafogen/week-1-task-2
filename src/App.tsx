import React, {useEffect, useState} from 'react';
import {Game} from "./pages/game/Game";
import {
    Navigate,
    Route,
    Routes,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login-registration/Login";


function App() {

    const [loggedIn, setLoggedIn] = useState(false);
    const isLoggedIn = () => {
        return localStorage.getItem('username') !== null && localStorage.getItem('password') !== null;
    };

    const handleLogin = (username: string, password: string) => {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        setLoggedIn(true);
    };

    useEffect(() => {
        setLoggedIn(isLoggedIn())
    },[])

    if (!loggedIn) {
        return (
            <div>
                <Routes>
                    <Route path="/" element={<Navigate to="/login"/>}/>
                    <Route path="/registration" element={<Game/>}/>
                    <Route path="/login" element={<Login onLogin={handleLogin}/>}></Route>
                </Routes>
            </div>
        );
    }


    return (
        <div>
            <Navbar setLoggedIn={setLoggedIn}/>
            <Routes>
                <Route path="/login" element={<Navigate to="/"/>}/>
                <Route path="/" element={<Game/>}/>
                <Route path="/game" element={<Game/>}/>
                <Route path="/statistics" element={<div>Statistics</div>}/>
                <Route path="/profile" element={<div>Profile</div>}/>
            </Routes>
        </div>
    );
}

export default App;
