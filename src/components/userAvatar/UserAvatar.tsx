import React from 'react';
import './UserAvatar.css'; // Импортируем стили

const UserAvatar: React.FC = () => {
    const username = localStorage.getItem('username');
    const initial = username ? username.charAt(0).toUpperCase() : '?'; // Получаем первую букву

    return (
        <div className="user-avatar">
            {initial}
        </div>
    );
};

export default UserAvatar;