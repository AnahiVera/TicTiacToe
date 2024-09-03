
import React, { useState } from "react";
import Board from "./Board";


const Game = ({ player1, player2 }) => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);

    const current = history[stepNumber];
    const winner = calculateWinner(current);

    const handleClick = (i) => {
        const historyPoint = history.slice(0, stepNumber + 1);
        const current = historyPoint[stepNumber];
        const squares = [...current];

        if (winner || squares[i]) return;

        squares[i] = xIsNext ? player1.symbol : player2.symbol;
        setHistory([...historyPoint, squares]);
        setStepNumber(historyPoint.length);
        setXIsNext(!xIsNext);
    };

    const jumpTo = (step) => {
        setStepNumber(step);
        setXIsNext(step % 2 === 0);
    };

    const resetGame = () => {
        setHistory([Array(9).fill(null)]);
        setStepNumber(0);
        setXIsNext(true);
    };

    const renderMoves = () => (
        history.map((_step, move) => {
            const desc = move ? `Go to move #${move}` : 'Go to game start';
            return (
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>{desc}</button>
                </li>
            );
        })
    );


    return (
        <div className="game">
            <div className="titulos"><h1>Tic Tac Toe in React.js</h1>
            </div>
            <h2>{player1.name} (playing as {player1.symbol}) vs {player2.name} (playing as {player2.symbol})</h2>

            <div>
                <Board squares={current} onClick={handleClick} />
            </div>
            <div className="game-info">
                <div>{winner ? `Winner: ${winner}` : `Next Player: ${xIsNext ? player1.name : player2.name}`}</div>
                <ol>{renderMoves()}</ol>
            </div>

            <button className="reset" onClick={resetGame} >Reset</button>

        </div>
    );
}


const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}


    export default Game;