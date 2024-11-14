import React from 'react';
import {Game} from "./game/Game";
import BasicTabs from "./navbar/Navbar";

function App() {
    return (
        <div>
            <BasicTabs/>
            <Game/>
        </div>
    );
}

export default App;
