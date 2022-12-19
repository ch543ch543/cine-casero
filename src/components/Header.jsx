import React from 'react';
import audio from '../assets/audio.png';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-logo"></div>
        <div className="header-nav">
          <a href="#">Contact</a>
          <a href="#">Colaborator</a>
          <button className="header-audio">
            <img src={audio}></img>
          </button>
        </div>
      </div>
      <audio id="music"></audio>
    </header>
  );
};

export default Header;
