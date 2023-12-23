import React, { useState , useEffect } from 'react';
import { Howl } from 'howler';

const Audio = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const sound = new Howl({
    src: [src],
    html5: true,
    volume: 1,
    debug: true,
    preload: true,
  });
  
  const handlePlayPause = () => {
    if (isPlaying) {
      sound.pause();
    } else {
      sound.play();
    }
  
    setIsPlaying(!isPlaying);
  };
  useEffect(() => {
    return () => {
      sound.unload();
    };
  }, [sound]);

  return (
    <div>
        
      <button onClick={handlePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default Audio;
