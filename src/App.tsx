import React from 'react';
import {Game} from "./pages/game/Game";
import {
    Navigate,
    Route,
    Routes,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login-registration/Login";




function App() {
    let auth=false
    if(!auth){
        return (
            <div>
                <Routes>
                    <Route path="/" element={<Navigate to="/login" />}/>
                    <Route path="/registration" element={<Game/>}/>
                    <Route path="/login" element={<Login onLogin={()=>{}}/>}></Route>
                </Routes>
            </div>
        );
    }

    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Game/>}/>
                <Route path="/game" element={<Game/>}/>
                <Route path="/statistics" element={<div>Statistics</div>}/>
                <Route path="/profile" element={<div>Profile</div>}/>
            </Routes>
        </div>
    );
}

export default App;
