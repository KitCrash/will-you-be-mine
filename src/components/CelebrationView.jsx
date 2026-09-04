import React from 'react';
import { motion } from 'framer-motion';
import { CONFIG } from '../config';
import ReactionSticker from './ReactionSticker';
import { soundFx } from '../utils/audioSynthesizer';

export default function CelebrationView({ onOpenLetter }) {
  const handleOpenLetter = () => {
    soundFx.playPop(650);
    onOpenLetter();
  };

  return (
    <motion.div
      className="celebration-view"
      initial={{ opacity: 0, scale: 0.88, y: 15 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        y: 0,
        transition: { type: 'spring', stiffness: 350, damping: 25 }
      }}
    >
      {/* Cute Celebration Sticker */}
      <ReactionSticker
        reaction={{
          emoji: CONFIG.celebration.emoji,
          gifUrl: CONFIG.celebration.gifUrl
        }}
        isCelebration={true}
      />

      {/* Main Celebration Heading */}
      <motion.h1 
        className="celebration-title"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.15, type: 'spring', stiffness: 400 }}
      >
        {CONFIG.celebration.title}
      </motion.h1>

      {/* Romantic Subtitle */}
      <motion.p 
        className="celebration-subtitle"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.28 }}
      >
        {CONFIG.celebration.subtitle}
      </motion.p>

      {/* Row of Sparkles */}
      <div className="celebration-sparkles-row" aria-hidden="true">
        <span>✨</span>
        <span>💖</span>
        <span>💍</span>
        <span>💖</span>
        <span>✨</span>
      </div>

      {/* "One More Thing..." Letter Trigger Button */}
      <motion.div 
        className="letter-trigger-wrapper"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <motion.button
          id="open-letter-btn"
          className="btn btn-letter"
          onClick={handleOpenLetter}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.96 }}
        >
          <span className="btn-content">
            <span>{CONFIG.celebration.buttonText}</span>
            <span className="letter-icon">💌</span>
          </span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
