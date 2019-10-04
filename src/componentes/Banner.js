import React from 'react';
import "./Banner.scss";
import Icone from './Icone';
import android from '../imagens/icone-android.png';
import apple from '../imagens/icone-ios.png';
import windows from '../imagens/icone-windows.png';
import mao from '../imagens/hand.png';

const Banner = () => {
  return (
    <div className="Banner">
      <header className="banner">

        <div className="texto">

          <h1>Notify <span>.</span></h1>
          <p>A great new free psd theme to showcase</p>
          <p>your new application.</p>
          <div className="icone">
          <Icone destino="https://android.com" icone={android} />
          <Icone destino="https://apple.com" icone={apple} />
          <Icone destino="https://windows.com" icone={windows} />
          </div>

        </div>
        <div className="mao">

          <img src={mao} alt="mao" />

        </div>
      </header>
    </div>
  );
}

export default Banner;
