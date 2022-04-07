import React, { useState, useEffect } from 'react';
import sound from "./images/sound.png";

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
      <div>
        <p>{phonetics.text}</p>
        <div>
          <img
            src={sound}
            alt="sound"
            onClick={playAudio}
          />
        </div>
      </div>
    );
};

export default Phonetics;