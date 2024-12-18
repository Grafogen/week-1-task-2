import React, { useState} from "react";
import {Board} from "./board";
import "./tic-tac-toe.css";
import {getCleverMoves} from "./util";

type BoardArray = Array<Array<string | null>>;

const checkWinner = (board: BoardArray): string | null => {
    const lines = [
        //Rows
        [board[0][0], board[0][1], board[0][2]],
        [board[1][0], board[1][1], board[1][2]],
        [board[2][0], board[2][1], board[2][2]],
        //columns
        [board[0][0], board[1][0], board[2][0]],
        [board[0][1], board[1][1], board[2][1]],
        [board[0][2], board[1][2], board[2][2]],

        //Diagonals
        [board[0][0], board[1][1], board[2][2]],
        [board[0][2], board[1][1], board[2][0]],
    ];
    for (const line of lines) {
        if (line[0] && line[0] === line[1] && line[1] === line[2]) {
            return line[0];
        }
    }
    return null;
};

export const AITicTacToe = () => {
    const initialBoard = Array.from({length: 3}, () =>
        Array.from({length: 3}, () => null)
    );
    const [board, setBoard] = useState<BoardArray>(initialBoard);
    const [points, setPoints]=useState(Number(localStorage.getItem('score')) | 0)
    const [aipoints, setAipoints]=useState(Number(localStorage.getItem('aiScore')) | 0)
    const [noWinnerpoints, setNoWinnerpoints]=useState(Number(localStorage.getItem('noWinner')) | 0)

    const [player, setPlayer] = useState<string>("X");
    const [winner, setWinner] = useState<string | null>(null);
    const [isNoWinner, setIsNoWinner] = useState<boolean>(false);

    localStorage.setItem('score',String(points))
    localStorage.setItem('aiScore',String(aipoints))
    localStorage.setItem('noWinner',String(noWinnerpoints))


    const handleOnClick = (row: number, col: number) => {
        if (board[row][col] || winner) {
            return;
        }

        const updatedPlayerBoard = board.map((newRow, rowIndex) =>
            newRow.map((cell, cellIndex) =>
                rowIndex === row && cellIndex === col ? player : cell
            )
        );
        setBoard(updatedPlayerBoard);
        const newWinner = checkWinner(updatedPlayerBoard);
        console.log(newWinner)
        if(newWinner === "X") {
            setPoints(prevState => prevState + 1)
            console.log(newWinner)
        }else if (newWinner === "O") { // Теперь проверяем, если победил AI
            setAipoints(prevState => prevState + 1);
        }


        setWinner(newWinner);

        setPlayer("X");

        // No Winner
        const hasNullValue = updatedPlayerBoard.some((row) =>
            row.some((cell) => cell === null)
        );

        if (!winner && !hasNullValue) {
            setIsNoWinner(true);
            setNoWinnerpoints(prevState => prevState+1)
            return;
        }

        // Computer's move
        if (!newWinner) {
            const nextPlayer = player === "X" ? "O" : "X";
            const bestMove = getCleverMoves(
                updatedPlayerBoard,
                nextPlayer,
                checkWinner
            );

            setTimeout(() => {
                const aiBoard = updatedPlayerBoard.map((r, rowIndex) =>
                    r.map((c, colIndex) =>
                        rowIndex === bestMove?.[0] && colIndex === bestMove[1]
                            ? nextPlayer
                            : c
                    )
                );
                setBoard(aiBoard);
                const aiWinner = checkWinner(aiBoard);
                setWinner(checkWinner(aiBoard));
                if (aiWinner === "O") { // Если AI победил
                    setAipoints(prevState => prevState + 1);
                }
                console.log(winner)
            }, 200); // delay
        }
    };

    const restartGame = () => {
        setBoard(initialBoard);
        setPlayer("X");
        setWinner(null);
        setIsNoWinner(false);
    };

    return (
        <div className='game'>
            <div className='board'>
                <h1> Tic-Tac-Toe</h1>
                <h1>Your score: {points}</h1>
                <Board board={board} handleClick={handleOnClick}/>
                {winner  && <p className='p'>{winner === "X" ? "You Win" : "AI Wins"}</p>}
                {isNoWinner && <p className='p'> No one wins</p>}
                <button className='reset' type='button' onClick={() => restartGame()}>
                    Start new Game
                </button>
            </div>
        </div>
    );
};
