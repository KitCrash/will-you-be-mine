import React, { useState } from 'react';
import { soundFx } from '../utils/audioSynthesizer';

export default function AudioToggle() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggle = () => {
    soundFx.playPop(600);
    const state = soundFx.toggleRomanticBgm();
    setIsPlaying(state);
  };

  return (
    <div className="audio-control-wrapper">
      <button
        onClick={handleToggle}
        className={`audio-btn ${isPlaying ? 'playing' : ''}`}
        aria-label="Toggle Romantic Music & Sounds"
        title="Toggle cute background music"
      >
        <span className="audio-icon">{isPlaying ? '💖' : '🎵'}</span>
        <span className="audio-text">{isPlaying ? 'Music: On' : 'Music: Off'}</span>
      </button>
    </div>
  );
}
