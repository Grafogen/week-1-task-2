import React, {useEffect, useState} from 'react';
import {Game} from "./pages/game/Game";
import {
    Navigate,
    Route,
    Routes,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login-registration/Login";
import {AITicTacToe} from "./pages/tic-tac-toe/ai-tic-tac-toe";
import Statistics from "./pages/stats/Statistics";


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
                    <Route path="*" element={<Navigate to="/login"/>}/>
                </Routes>
            </div>
        );
    }


    return (
        <div>
            <Navbar setLoggedIn={setLoggedIn}/>
            <Routes>
                <Route path="/login" element={<Navigate to="/ai"/>}/>
                <Route path="/ai" element={<AITicTacToe/>}/>
                <Route path="/statistics" element={<Statistics/>}/>
                <Route path="*" element={<Navigate to="/ai"/>}/>
            </Routes>
        </div>
    );
}

export default App;
