import React, { useState } from 'react';
import { CONFIG } from './config';
import BackgroundCanvas from './components/BackgroundCanvas';
import AmbientGlow from './components/AmbientGlow';
import AudioToggle from './components/AudioToggle';
import ProposalCard from './components/ProposalCard';
import LoveLetterModal from './components/LoveLetterModal';
import MomentsModal from './components/MomentsModal';
import { launchHeartCelebration } from './utils/celebrationEffects';
import './styles/App.css';

export default function App() {
  const [noClickCount, setNoClickCount] = useState(0);
  const [isCelebrated, setIsCelebrated] = useState(false);
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [isMomentsOpen, setIsMomentsOpen] = useState(false);
  const [pleaText, setPleaText] = useState(CONFIG.reactions[0].message);

  // Reaction progression based on NO clicks
  const reactionIndex = Math.min(noClickCount, CONFIG.reactions.length - 1);
  const currentReaction = CONFIG.reactions[reactionIndex];

  // Handler for NO click
  const handleNoClick = () => {
    const nextCount = noClickCount + 1;
    setNoClickCount(nextCount);

    // Pick dynamic playful pleading message
    if (nextCount < CONFIG.maxNoClicks) {
      // Pick random from pool or stage message
      const randomPool = CONFIG.randomPleadingMessages;
      const randomMsg = randomPool[Math.floor(Math.random() * randomPool.length)];
      const nextReaction = CONFIG.reactions[Math.min(nextCount, CONFIG.reactions.length - 1)];
      setPleaText(Math.random() > 0.35 ? randomMsg : nextReaction.message);
    } else {
      setPleaText("Only YES left! 🥰❤️");
    }
  };

  // Handler for YES click
  const handleYesClick = () => {
    setIsCelebrated(true);
    document.title = "I KNEW IT! ❤️🥰";
    launchHeartCelebration();
  };

  return (
    <>
      {/* Background Floating Hearts & Twinkling Sparkles Canvas */}
      <BackgroundCanvas />

      {/* Ambient Dreamy Background Glow */}
      <AmbientGlow />

      {/* Sound / Romantic Music Synthesizer Toggle */}
      <AudioToggle />

      {/* Central Interactive Glassmorphic Card */}
      <main className="main-container">
        <ProposalCard
          noClickCount={noClickCount}
          onNoClick={handleNoClick}
          onYesClick={handleYesClick}
          isCelebrated={isCelebrated}
          onOpenLetter={() => setIsLetterOpen(true)}
          currentReaction={currentReaction}
          pleaText={pleaText}
        />
      </main>

      {/* Romantic Love Letter Modal */}
      <LoveLetterModal
        isOpen={isLetterOpen}
        onClose={() => setIsLetterOpen(false)}
        onOpenMoments={() => {
          setIsLetterOpen(false);
          setIsMomentsOpen(true);
        }}
      />

      {/* Special Moments & Photos Modal */}
      <MomentsModal
        isOpen={isMomentsOpen}
        onClose={() => setIsMomentsOpen(false)}
        onBackToLetter={() => {
          setIsMomentsOpen(false);
          setIsLetterOpen(true);
        }}
      />
    </>
  );
}
