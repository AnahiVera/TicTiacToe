import React from "react";

const Square = ({value, onClick}) => {  // destructuring to extract from the props passed to it

    
    return (
        <button className= "square" onClick={onClick}>{value}</button>
    )
}

export default Square



