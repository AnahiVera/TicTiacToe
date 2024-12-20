import React from "react";

const Square = ({ value, onClick }) => {  // destructuring to extract from the props passed to it

    const className = value === "X" ? "square x" : value === "O" ? "square o" : "square";

    return (
        <button className={className} onClick={onClick}>{value}</button>
    )
}

export default Square



