import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONFIG } from '../config';
import { soundFx } from '../utils/audioSynthesizer';

export default function LoveLetterModal({ isOpen, onClose, onOpenMoments }) {
  if (!isOpen) return null;

  const handleClose = () => {
    soundFx.playPop(480);
    onClose();
  };

  const handleOpenMoments = () => {
    soundFx.playPop(620);
    onOpenMoments();
  };

  return (
    <AnimatePresence>
      <div className="letter-modal" role="dialog" aria-modal="true" aria-labelledby="letter-heading">
        {/* Blurred Backdrop */}
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        />

        {/* Parchment Letter Card */}
        <motion.div
          className="letter-card-container"
          initial={{ scale: 0.85, opacity: 0, y: 35 }}
          animate={{ 
            scale: 1, 
            opacity: 1, 
            y: 0,
            transition: { type: 'spring', stiffness: 380, damping: 26 }
          }}
          exit={{ scale: 0.85, opacity: 0, y: 25 }}
        >
          <div className="letter-paper">
            {/* Wax Seal */}
            <div className="letter-wax-seal" aria-hidden="true">❤️</div>

            {/* Close Button */}
            <button
              className="close-modal-btn"
              onClick={handleClose}
              aria-label="Close letter"
            >
              ✕
            </button>

            <div className="letter-inner">
              <div className="letter-header">
                <span className="letter-date">{CONFIG.letter.badge}</span>
                <div className="letter-stamp" aria-hidden="true">{CONFIG.letter.stamp}</div>
              </div>

              <h2 id="letter-heading" className="letter-title">
                {CONFIG.letter.heading}
              </h2>

              <div className="letter-body">
                {CONFIG.letter.content}
              </div>

              <div className="letter-footer">
                <p className="letter-signoff">{CONFIG.letter.signoff}</p>
                <p className="letter-signature">{CONFIG.letter.signature}</p>
              </div>

              {/* Moments & Photos Button */}
              <div className="letter-moments-cta">
                <motion.button
                  className="btn-moments-cta"
                  onClick={handleOpenMoments}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="moments-cta-icon">📸</span>
                  <div className="moments-cta-text">
                    <span className="moments-cta-title">আমাদের মিষ্টি মুহূর্ত ও ছবি 💕</span>
                    <span className="moments-cta-subtitle">Moments I want to spend with you ✨</span>
                  </div>
                  <span className="moments-cta-arrow">➜</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
