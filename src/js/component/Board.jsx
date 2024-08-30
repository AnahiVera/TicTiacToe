import React, { useState } from "react";
import Square from "./Square";


const Board = ({ board }) => {

    return (
        <div >
            {board.map((value, idx) => {  
                //recordar .map repite sobre un array para aplicar una funcion a cada elemento 
                return <Square value={value} onClick={() => onClick(idx)} />
            })}


        </div>
    );
}

export default Board