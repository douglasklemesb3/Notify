import React from 'react';
import IconesSec from './IconesSec';
import confi from '../imagens/icone-confi.png'
import estrela from '../imagens/icone-estr.png'

const Section = () => {
  return (
    <div className="section">
      <IconesSec  titulo="osufhgoserhj" texto="sveqrveav" icones={confi}/>
      <IconesSec  titulo="osufhgoserhj" texto="sveqrveav" icones={estrela}/>
    </div>
  );
}

export default Section;