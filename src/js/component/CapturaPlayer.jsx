import React, { useState } from "react";
import Game from "./Game";

const CapturaPlayer = () => {

    const [player1, setPlayer1] = useState({ name: '', symbol: '' });
    const [player2, setPlayer2] = useState({ name: '', symbol: '' });
    const [gameStarted, setgameStarted] = useState(false);

    const handlePlayer1Change = (e) => {  //al igual que en una funcion normal (event (e) es el parametro)
        setPlayer1({ ...player1, [e.target.name]: e.target.value });
    }

    const handlePlayer2Change = (e) => {
        setPlayer2({ ...player2, [e.target.name]: e.target.value });
    }

    const handleSymbolSelect = (symbol) => {
        if (player1.symbol === '') {
            setPlayer1({ ...player1, symbol  });
            setPlayer2({ ...player2, symbol: symbol === 'O' ? 'X' : 'O'});
            if (player1.name&& player2.name){
                setgameStarted(true)
            }
            
        }

    };

    return (
        <div>
            {gameStarted ? (<Game player1={player1} player2={player2} />
            ) : (
                <div className="container">
                    <div className="titulos">
                        <h1>Tic Tac Toe</h1>
                        <br />
                        <h2>Pick a Weapon</h2>
                    </div>
                    <div className="choose">
                        <h3>CHOOSE YOUR WEAPON</h3>

                        <input type="text" name="name" placeholder="Name player 1 " value={player1.name} onChange={handlePlayer1Change} />
                        <input type="text" name="name" placeholder="Name player 2" value={player2.name} onChange={handlePlayer2Change} />

                        <br />
                        <div className="players">
                            <button className="buttonX" name="symbol"  onClick={() => handleSymbolSelect('X')}>X</button>
                            <button className="buttonO" name="symbol"  onClick={() => handleSymbolSelect('O')}>O</button>
                        </div>
                        
                    </div>
                </div>

            )}
        </div>
    );

}
export default CapturaPlayer