import React, { useEffect, useRef } from 'react';

export default function BackgroundCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle Classes
    const hearts = [];
    const sparkles = [];

    const heartColors = [
      'rgba(255, 117, 140, 0.45)',
      'rgba(255, 143, 163, 0.5)',
      'rgba(255, 179, 193, 0.55)',
      'rgba(255, 204, 213, 0.6)',
      'rgba(247, 37, 133, 0.35)',
      'rgba(255, 94, 126, 0.4)'
    ];

    // Helper to draw a heart shape
    function drawHeart(x, y, size, color, alpha) {
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.fillStyle = color;
      ctx.translate(x, y);
      ctx.beginPath();
      const topCurveHeight = size * 0.3;
      ctx.moveTo(0, topCurveHeight);
      // top left curve
      ctx.bezierCurveTo(
        -size / 2, -topCurveHeight,
        -size, size / 3,
        0, size
      );
      // top right curve
      ctx.bezierCurveTo(
        size, size / 3,
        size / 2, -topCurveHeight,
        0, topCurveHeight
      );
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    // Initialize floating hearts
    const heartCount = Math.min(24, Math.floor(width / 22));
    for (let i = 0; i < heartCount; i++) {
      hearts.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 10 + Math.random() * 16,
        speed: 0.5 + Math.random() * 1.1,
        color: heartColors[Math.floor(Math.random() * heartColors.length)],
        alpha: 0.25 + Math.random() * 0.5,
        wobbleSpeed: 0.015 + Math.random() * 0.02,
        wobbleAmp: 15 + Math.random() * 25,
        wobbleOffset: Math.random() * Math.PI * 2
      });
    }

    // Initialize sparkles
    const sparkleCount = Math.min(30, Math.floor(width / 20));
    for (let i = 0; i < sparkleCount; i++) {
      sparkles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 1 + Math.random() * 2.5,
        alpha: 0.2 + Math.random() * 0.8,
        pulseSpeed: 0.02 + Math.random() * 0.03,
        pulseOffset: Math.random() * Math.PI * 2
      });
    }

    let time = 0;

    const render = () => {
      time += 0.03;
      ctx.clearRect(0, 0, width, height);

      // Render Sparkles
      sparkles.forEach((s) => {
        const currentAlpha = Math.max(0.1, (Math.sin(time * 2 + s.pulseOffset) + 1) * 0.5 * s.alpha);
        ctx.save();
        ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha})`;
        ctx.shadowColor = 'rgba(255, 215, 0, 0.6)';
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Render Floating Hearts
      hearts.forEach((h) => {
        h.y -= h.speed;
        const currentX = h.x + Math.sin(time * h.wobbleSpeed * 50 + h.wobbleOffset) * h.wobbleAmp;

        drawHeart(currentX, h.y, h.size, h.color, h.alpha);

        // Reset to bottom when floating off-screen
        if (h.y < -30) {
          h.y = height + 20;
          h.x = Math.random() * width;
        }
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="bg-canvas" aria-hidden="true" />;
}
