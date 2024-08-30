
import React, { useState } from "react";
import Board from "./Board";



const Game = ({ player1, player2 }) => {

    //player1.symbol  player2.symbol

    let board = ["", "", "", "", "", "", "", "", ""];



    return (
        <div className="container">
            <div className="titulos"><h1>Tic Tac Toe in React.js</h1>
            </div>
            <h2>{player1.name} (playing as {player1.symbol}) vs {player2.name} (playing as {player2.symbol})</h2>

            <div>
                <Board board ={board} onClick ="null"/>
            </div>
            <button className="reset">Reset</button>

        </div>
    );
}

export default Game