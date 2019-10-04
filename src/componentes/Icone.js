import React from "react";
import './Icone.scss'


const Icone = ({icone, destino}) => {
    return (
        <div className="Icone">
           <a href={destino}>
               <img src={icone} alt="icone" />
           </a>
        </div> 
      );
    }
    
export default  Icone;
    