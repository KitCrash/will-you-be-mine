// =================================================================
// CELEBRATION EFFECTS (Confetti, Heart Explosions & Fireworks)
// =================================================================

import confetti from 'canvas-confetti';

export function launchHeartCelebration() {
  const duration = 4.5 * 1000;
  const animationEnd = Date.now() + duration;

  // Custom heart shapes for confetti
  const heartShape = confetti.shapeFromPath({
    path: 'M167 72c19,-38 37,-56 75,-56 42,0 76,33 76,75 0,76 -76,151 -151,227 -75,-76 -151,-151 -151,-227 0,-42 34,-75 76,-75 38,0 57,18 75,56z'
  });

  const colors = ['#ff4d6d', '#ff758c', '#ff8fa3', '#ffccd5', '#ffd166', '#c9184a', '#ffffff'];

  // 1. Initial big center blast
  confetti({
    particleCount: 80,
    spread: 100,
    origin: { y: 0.6 },
    colors: colors,
    shapes: [heartShape, 'circle'],
    scalar: 1.4,
    ticks: 200,
    zIndex: 999
  });

  // 2. Continuous fireworks and side bursts
  const frameInterval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      clearInterval(frameInterval);
      return;
    }

    const particleCount = 40 * (timeLeft / duration);

    // Left cannon
    confetti({
      particleCount: Math.floor(particleCount * 0.5),
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      colors: colors,
      shapes: [heartShape, 'circle'],
      scalar: 1.2,
      zIndex: 999
    });

    // Right cannon
    confetti({
      particleCount: Math.floor(particleCount * 0.5),
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
      colors: colors,
      shapes: [heartShape, 'circle'],
      scalar: 1.2,
      zIndex: 999
    });

    // Occasional center sparkles
    if (Math.random() < 0.3) {
      confetti({
        particleCount: 20,
        spread: 360,
        startVelocity: 25,
        origin: { x: 0.5, y: 0.45 },
        colors: ['#ffb703', '#fb8500', '#ff4d6d', '#ffffff'],
        shapes: ['circle', heartShape],
        scalar: 1.1,
        zIndex: 999
      });
    }
  }, 220);
}

// Spawns small floating hearts rising from a button tap
export function spawnFloatingHeart(x, y, emoji = '💖') {
  const heart = document.createElement('div');
  heart.className = 'btn-floating-heart';
  heart.innerText = emoji;

  // Randomize path slightly
  const randX = (Math.random() - 0.5) * 80;
  const randRot = (Math.random() - 0.5) * 45;
  heart.style.setProperty('--rand-x', `${randX}px`);
  heart.style.setProperty('--rand-rot', `${randRot}deg`);

  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;

  document.body.appendChild(heart);

  setTimeout(() => {
    if (heart && heart.parentNode) {
      heart.parentNode.removeChild(heart);
    }
  }, 1200);
}
