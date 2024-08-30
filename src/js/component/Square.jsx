import React from "react";

const Square = ({value, onClick}) => {  // destructuring to extract from the props passed to it

    const style = value === "X" ? "square x" : "square o";  
    //redactar o eliminar que pasa si value comienza con O?
    
    return (
        <button className={style} onClick={onClick}>{value}</button>
    )
}

export default Square



