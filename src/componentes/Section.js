import React from 'react';
import "./Section.scss";
import IconeSet from './IconeSet';
import config from '../imagens/icone-conf.png';
import estrela from '../imagens/icone-estrela.png';
import mundo from '../imagens/icone-mundo.png';

 
const Section = () => {
  return (
    <div className="Section">
        <IconeSet  titulo=" Editable Theme"  texto="Loren inpsum dolor sit amet,consectetur adipiscing elit. Suspendisse fringilla"  icone={config}/>
        <IconeSet  titulo="Flat Desing"  texto="Loren inpsum dolor sit amet,consectetura dipiscing elit. Suspendisse fringilla" icone={estrela}/>
        <IconeSet  titulo=" Reach Your Audience"  texto="Loren inpsum dolor sit amet,consectetur adipiscing elit. Suspendisse fringilla"  icone= {mundo}/>
    </div>
  );
}

export default Section;