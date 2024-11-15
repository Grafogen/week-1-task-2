import React, { useState } from 'react';
import './style.css'
import {NavLink} from "react-router-dom";

const Login: React.FC<{ onLogin: (username: string, password: string) => void }> = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onLogin(username, password);
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    };

    return (
        <div className="login-form">
            <h2>Вход</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Имя пользователя:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Пароль:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="login-button">Войти</button>
                <p className="register-link">
                    Нет аккаунта? <NavLink to="/register">Зарегистрируйтесь</NavLink>
                </p>
            </form>
        </div>
    );
};

export default Login;