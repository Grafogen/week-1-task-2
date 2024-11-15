import React from 'react';
import './style.css';
import LogoutIcon from '@mui/icons-material/Logout';
import {NavLink} from "react-router-dom";
//
// interface TopBarProps {
//     username: string;
//     onLogout: () => void;
// }

const NavBar = () => {
    return (
        <div className="topbar">
            <div className="topbar__container">
                <div className="topbar__user-info">
                    <span className="topbar__username">
                        <NavLink className="topbar__button" to="/profile">user</NavLink>
                    </span>
                </div>
                <nav className="topbar__nav">
                    <ul className="topbar__menu">
                        <li><NavLink className="topbar__button" to="/game">Game</NavLink></li>
                        <li><NavLink className="topbar__button" to="/statistics">Statistics</NavLink></li>
                        {/* Добавьте другие страницы здесь */}
                    </ul>
                </nav>
                <div className="topbar__profile">
                    <button className="topbar__logout" onClick={() => {
                    }}><LogoutIcon/></button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;