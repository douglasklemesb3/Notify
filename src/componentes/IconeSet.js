import React from "react";
import './IconeSet.scss'


const IconeSet = ({ icone, titulo, texto }) => {
    return (
        <div className="Icone">
            <div>
                <img src={icone} alt="icone" />
            </div>
            <h4>{titulo}</h4>
            <p>{texto}</p>
        </div>
    );
}

export default IconeSet;
