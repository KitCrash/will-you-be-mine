import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONFIG } from '../config';
import ReactionSticker from './ReactionSticker';
import ActionButtons from './ActionButtons';
import CelebrationView from './CelebrationView';

export default function ProposalCard({
  noClickCount,
  onNoClick,
  onYesClick,
  isCelebrated,
  onOpenLetter,
  currentReaction,
  pleaText
}) {
  const isNoDisappeared = noClickCount >= CONFIG.maxNoClicks;

  return (
    <motion.div
      id="proposal-card"
      className="glass-card"
      initial={{ scale: 0.9, opacity: 0, y: 20 }}
      animate={{ 
        scale: 1, 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }
      }}
    >
      {/* Card Floating Corner Sparkles */}
      <div className="card-sparkle sparkle-tl" aria-hidden="true">✨</div>
      <div className="card-sparkle sparkle-br" aria-hidden="true">💖</div>

      <AnimatePresence mode="wait">
        {!isCelebrated ? (
          <motion.div
            key="proposal"
            className="proposal-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.25 } }}
          >
            {/* Cute Sticker/GIF/Emoji Area */}
            <ReactionSticker reaction={currentReaction} isCelebration={false} />

            {/* Main Question */}
            <h1 className="main-question">
              {CONFIG.question} <span className="heart-beat">{CONFIG.heartIcon}</span>
            </h1>

            {/* Dynamic Pleading Badge */}
            <div className="plea-badge-container">
              <AnimatePresence mode="wait">
                <motion.div
                  key={pleaText}
                  className="plea-badge"
                  initial={{ scale: 0.8, opacity: 0, y: 5 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.8, opacity: 0, y: -5 }}
                  transition={{ type: 'spring', stiffness: 450, damping: 22 }}
                >
                  <span className="badge-icon">✨</span>
                  <span className="badge-text">{pleaText}</span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Action Buttons: YES / NO */}
            <ActionButtons
              noClickCount={noClickCount}
              onNoClick={onNoClick}
              onYesClick={onYesClick}
            />

            {/* Note when NO disappears */}
            {isNoDisappeared && (
              <motion.div
                className="final-no-note"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <p>{CONFIG.noDisappearedMessage}</p>
              </motion.div>
            )}
          </motion.div>
        ) : (
          <CelebrationView key="celebration" onOpenLetter={onOpenLetter} />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
