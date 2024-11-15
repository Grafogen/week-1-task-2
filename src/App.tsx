import React from 'react';
import {Game} from "./game/Game";
import {
    Route,
    Routes,
} from "react-router-dom";
import Navbar from "./navbar/Navbar";




function App() {
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
