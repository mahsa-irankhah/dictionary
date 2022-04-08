import React, { useState, useEffect } from 'react';
import sound from "./images/sound.png";
import './Phonetics.css';

const Phonetics = (props) => {
    const phonetics = props.phonetics;
    let [isPlaying, setIsPlaying] = useState(false)

    const playAudio = () => {
      const audio = new Audio();
      audio.src = phonetics.audio;
      if (!isPlaying) {
          audio.play();
          setIsPlaying(true);   
      } 
    };

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsPlaying(false);
      }, 1000);
      return () => clearTimeout(timer);
    }, [isPlaying]);


    return (
      <div className="phonetics d-flex">
        <div className="sound-icon">
          <img src={sound} alt="sound" onClick={playAudio} />
        </div>
        <div className="phonetics-text-div">
          <p className="phonetics-text">{phonetics.text}</p>
        </div>
      </div>
    );
};

export default Phonetics;