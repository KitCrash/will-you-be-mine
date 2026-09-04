import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CuteAnimatedSticker from './CuteAnimatedSticker';

export default function ReactionSticker({ reaction, isCelebration = false }) {
  const stickerType = isCelebration ? 'celebration' : (reaction.stickerType || 'stage0');

  return (
    <div className="sticker-container">
      <div className={`sticker-glow ${isCelebration ? 'success-glow' : ''}`} aria-hidden="true" />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={stickerType}
          className="sticker-wrapper"
          initial={{ scale: 0.72, opacity: 0, y: 12, rotate: -4 }}
          animate={{ 
            scale: 1, 
            opacity: 1, 
            y: 0, 
            rotate: 0,
            transition: { type: 'spring', stiffness: 420, damping: 22 }
          }}
          exit={{ scale: 0.72, opacity: 0, y: -12, rotate: 4 }}
        >
          {reaction.gifUrl ? (
            <img
              src={reaction.gifUrl}
              alt="Cute Reaction"
              className="reaction-img"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          ) : (
            <CuteAnimatedSticker type={stickerType} size={150} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
