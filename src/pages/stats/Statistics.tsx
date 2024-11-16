import React from 'react';
import './statistics.css';

const Statistics: React.FC = () => {
    // Хардкодим данные о игроках
    const players = [
        { username: localStorage.getItem('username'), wins: Number(localStorage.getItem('score')), losses: 5 },
        { username: 'player2', wins: 7, losses: 8 },
        { username: 'player3', wins: 12, losses: 2 },
        { username: 'player4', wins: 5, losses: 10 },
        { username: 'player5', wins: 8, losses: 5 },
    ];


    const sortedPlayers = [...players].sort((a, b) => b.wins - a.wins);

    return (
        <div className="statistics">
            <h2>Statistics</h2>
            <table>
                <thead>
                <tr>
                    <th>Username</th>
                    <th>Количество побед</th>
                    <th>Количество поражений</th>
                    <th>Общее количество игр</th>
                </tr>
                </thead>
                <tbody>
                {sortedPlayers.map((player, index) => (
                    <tr key={index}>
                        <td>{player.username}</td>
                        <td>{player.wins}</td>
                        <td>{player.losses}</td>
                        <td>{player.wins + player.losses}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Statistics;