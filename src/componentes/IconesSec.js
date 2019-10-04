import React from "react";
import './IconesSec.scss';


const IconesSec = ({icones, titulo,texto}) => {
    return (
        <div className="IconeSec">
            <div>
                <img src={icones} alt="icone" />
                
            </div>
            <h1><samp>{titulo}</samp></h1>
            <p>{texto}</p>
        </div> 
      );
    }
    
export default IconesSec;