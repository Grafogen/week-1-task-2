import React from 'react';
import './style.css';
import LogoutIcon from '@mui/icons-material/Logout';
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
                    <span className="topbar__username">user</span>
                </div>
                <nav className="topbar__nav">
                    <ul className="topbar__menu">
                        <li><a href="/game">Game</a></li>
                        <li><a href="/leaderboard">Лидерборд</a></li>
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