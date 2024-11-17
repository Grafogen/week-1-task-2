import React from 'react';
import './style.css';
import LogoutIcon from '@mui/icons-material/Logout';
import {NavLink, useNavigate} from "react-router-dom";
import UserAvatar from "../userAvatar/UserAvatar";



const NavBar: React.FC<{ setLoggedIn: (value: boolean) => void }> = ({ setLoggedIn }) => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        localStorage.removeItem('score');
        localStorage.removeItem('aiScore');
        localStorage.removeItem('noWinner');
        navigate('/login');
        setLoggedIn(false)
    };

    return (
        <div className="topbar">
            <div className="topbar__container">
                <div className="topbar__user-info">
                    <div className="topbar__username">
                        <NavLink className="topbar__button" to="/profile"><UserAvatar/></NavLink>
                    </div>
                </div>
                <nav className="topbar__nav">
                    <ul className="topbar__menu">
                        <li><NavLink className="topbar__button" to="/ai">Game</NavLink></li>
                        <li><NavLink className="topbar__button" to="/statistics">Statistics</NavLink></li>
                    </ul>
                </nav>
                <div className="topbar__profile">
                    <button className="topbar__logout" onClick={handleLogout}><LogoutIcon/></button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;