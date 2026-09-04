import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONFIG } from '../config';
import { soundFx } from '../utils/audioSynthesizer';
import { spawnFloatingHeart } from '../utils/celebrationEffects';

export default function ActionButtons({
  noClickCount,
  onNoClick,
  onYesClick
}) {
  const [isShaking, setIsShaking] = useState(false);

  // Math for dynamic scaling
  // Capped at 2.15x so on mobile it looks delightfully prominent without breaking layout
  const yesScale = Math.min(2.15, 1 + noClickCount * 0.20);
  
  // NO scales down progressively
  const noScale = Math.max(0.2, 1 - noClickCount * 0.15);
  const noOpacity = Math.max(0.3, 1 - noClickCount * 0.12);

  const isNoDisappeared = noClickCount >= CONFIG.maxNoClicks;

  const handleNoClick = (e) => {
    // Sound effect
    soundFx.playAww();

    // Trigger shake animation
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 450);

    // Spawn cute heart near YES button to nudge the user
    const yesBtn = document.getElementById('yes-btn');
    if (yesBtn) {
      const rect = yesBtn.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      spawnFloatingHeart(x, y, '💖');
    }

    onNoClick();
  };

  const handleYesClick = (e) => {
    // Sound effect
    soundFx.playCelebration();

    // Spawn hearts at click position
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    spawnFloatingHeart(x, y, '❤️');
    spawnFloatingHeart(x + 15, y - 10, '💖');
    spawnFloatingHeart(x - 15, y - 10, '✨');

    onYesClick();
  };

  return (
    <div className="buttons-container" id="buttons-container">
      {/* YES Button */}
      <motion.button
        id="yes-btn"
        className={`btn btn-yes ${isNoDisappeared ? 'solo-invitation' : ''}`}
        onClick={handleYesClick}
        animate={{
          scale: yesScale,
        }}
        whileHover={{ scale: yesScale * 1.05 }}
        whileTap={{ scale: yesScale * 0.94 }}
        transition={{
          type: 'spring',
          stiffness: 350,
          damping: 22
        }}
        aria-label="Yes, I love you"
      >
        <span className="btn-glow" aria-hidden="true" />
        <span className="btn-content">
          <span className="btn-text">{CONFIG.yesBtnText}</span>
          <motion.span 
            className="btn-icon"
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
          >
            {CONFIG.yesBtnIcon}
          </motion.span>
        </span>
      </motion.button>

      {/* NO Button (Progressively shrinks & disappears) */}
      <AnimatePresence>
        {!isNoDisappeared && (
          <motion.button
            id="no-btn"
            className="btn btn-no"
            onClick={handleNoClick}
            initial={{ scale: 1, opacity: 1 }}
            animate={{
              scale: isShaking ? [noScale, noScale * 0.9, noScale * 1.1, noScale] : noScale,
              opacity: noOpacity,
              x: isShaking ? [-6, 6, -4, 4, 0] : 0,
            }}
            exit={{
              scale: 0,
              opacity: 0,
              transition: { duration: 0.35, ease: "easeInOut" }
            }}
            whileHover={{ scale: noScale * 1.02 }}
            whileTap={{ scale: noScale * 0.92 }}
            transition={{
              type: 'spring',
              stiffness: 380,
              damping: 24
            }}
            aria-label="No"
          >
            <span className="btn-content">
              <span className="btn-text">{CONFIG.noBtnText}</span>
              <span className="btn-icon">{CONFIG.noBtnIcon}</span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
