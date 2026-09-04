import React from 'react';
import { motion } from 'framer-motion';

// Collection of ultra-cute, 100% standalone animated SVG chibi stickers
export default function CuteAnimatedSticker({ type = 'pleading', size = 150 }) {
  switch (type) {
    case 'pleading':
    case 'stage0':
      // 🥺👉👈 Pleading Chibi Bear tapping paws together
      return (
        <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Floating Hearts */}
          <g className="svg-float-heart-1">
            <path d="M40 38 C40 32 46 28 51 33 C56 28 62 32 62 38 C62 47 51 55 51 55 C51 55 40 47 40 38 Z" fill="#ff758c" opacity="0.85" />
          </g>
          <g className="svg-float-heart-2">
            <path d="M110 32 C110 27 115 24 119 28 C123 24 128 27 128 32 C128 39 119 45 119 45 C119 45 110 39 110 32 Z" fill="#ff4d6d" opacity="0.8" />
          </g>

          {/* Ears */}
          <circle cx="48" cy="52" r="19" fill="#fff0f3" stroke="#f8bbd0" strokeWidth="3.5" />
          <circle cx="48" cy="52" r="11" fill="#ffb3c1" />
          <circle cx="112" cy="52" r="19" fill="#fff0f3" stroke="#f8bbd0" strokeWidth="3.5" />
          <circle cx="112" cy="52" r="11" fill="#ffb3c1" />

          {/* Head */}
          <ellipse cx="80" cy="85" rx="52" ry="46" fill="#fff9fb" stroke="#f8bbd0" strokeWidth="3.5" />

          {/* Cheeks Blush */}
          <circle cx="50" cy="94" r="10" fill="#ff8fa3" opacity="0.65" className="svg-pulse-blush" />
          <circle cx="110" cy="94" r="10" fill="#ff8fa3" opacity="0.65" className="svg-pulse-blush" />

          {/* Sparkly Pleading Eyes */}
          <g className="svg-blink-eyes">
            {/* Left Eye */}
            <circle cx="62" cy="82" r="11" fill="#3a1c28" />
            <circle cx="65" cy="79" r="4.5" fill="#ffffff" />
            <circle cx="60" cy="86" r="2.2" fill="#ffffff" />

            {/* Right Eye */}
            <circle cx="98" cy="82" r="11" fill="#3a1c28" />
            <circle cx="101" cy="79" r="4.5" fill="#ffffff" />
            <circle cx="96" cy="86" r="2.2" fill="#ffffff" />
          </g>

          {/* Cute Nose & Pleading Mouth */}
          <ellipse cx="80" cy="90" rx="4" ry="3" fill="#ff4d6d" />
          <path d="M75 96 Q80 94 85 96" stroke="#4a1525" strokeWidth="2.5" strokeLinecap="round" fill="none" />

          {/* Tapping Paws 👉👈 */}
          <g className="svg-paw-left">
            <ellipse cx="68" cy="116" rx="11" ry="8" fill="#fff0f3" stroke="#f8bbd0" strokeWidth="2.5" />
          </g>
          <g className="svg-paw-right">
            <ellipse cx="92" cy="116" rx="11" ry="8" fill="#fff0f3" stroke="#f8bbd0" strokeWidth="2.5" />
          </g>
        </svg>
      );

    case 'stage1':
      // 🥹💗 Pleading with glistening eyes & glowing heart
      return (
        <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Ears */}
          <circle cx="48" cy="52" r="19" fill="#fff0f3" stroke="#f8bbd0" strokeWidth="3.5" />
          <circle cx="48" cy="52" r="11" fill="#ffb3c1" />
          <circle cx="112" cy="52" r="19" fill="#fff0f3" stroke="#f8bbd0" strokeWidth="3.5" />
          <circle cx="112" cy="52" r="11" fill="#ffb3c1" />

          {/* Head */}
          <ellipse cx="80" cy="85" rx="52" ry="46" fill="#fff9fb" stroke="#f8bbd0" strokeWidth="3.5" />

          {/* Cheeks Blush */}
          <circle cx="50" cy="95" r="11" fill="#ff8fa3" opacity="0.75" />
          <circle cx="110" cy="95" r="11" fill="#ff8fa3" opacity="0.75" />

          {/* Glistening Teary Eyes */}
          <circle cx="62" cy="82" r="12" fill="#2d121c" />
          <circle cx="65" cy="78" r="5" fill="#ffffff" />
          <circle cx="59" cy="86" r="2.5" fill="#a0c4ff" />
          <circle cx="67" cy="86" r="2" fill="#ffffff" />

          <circle cx="98" cy="82" r="12" fill="#2d121c" />
          <circle cx="101" cy="78" r="5" fill="#ffffff" />
          <circle cx="95" cy="86" r="2.5" fill="#a0c4ff" />
          <circle cx="103" cy="86" r="2" fill="#ffffff" />

          {/* Pouting mouth */}
          <ellipse cx="80" cy="91" rx="3.5" ry="2.5" fill="#ff4d6d" />
          <path d="M74 97 Q80 100 86 97" stroke="#4a1525" strokeWidth="2.5" strokeLinecap="round" fill="none" />

          {/* Holding Big Beating Heart in hands */}
          <g className="svg-beating-heart">
            <path d="M68 116 C68 108 76 104 80 109 C84 104 92 108 92 116 C92 127 80 135 80 135 C80 135 68 127 68 116 Z" fill="#ff3366" />
            <circle cx="75" cy="113" r="2.5" fill="#ffffff" opacity="0.8" />
          </g>
          {/* Paws holding heart */}
          <ellipse cx="64" cy="120" rx="8" ry="7" fill="#fff0f3" stroke="#f8bbd0" strokeWidth="2" />
          <ellipse cx="96" cy="120" rx="8" ry="7" fill="#fff0f3" stroke="#f8bbd0" strokeWidth="2" />
        </svg>
      );

    case 'stage2':
      // 😭🥺 Crying tears cute chibi
      return (
        <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Ears */}
          <circle cx="48" cy="54" r="19" fill="#fff0f3" stroke="#f8bbd0" strokeWidth="3.5" />
          <circle cx="48" cy="54" r="11" fill="#ffb3c1" />
          <circle cx="112" cy="54" r="19" fill="#fff0f3" stroke="#f8bbd0" strokeWidth="3.5" />
          <circle cx="112" cy="54" r="11" fill="#ffb3c1" />

          {/* Head */}
          <ellipse cx="80" cy="87" rx="52" ry="46" fill="#fff9fb" stroke="#f8bbd0" strokeWidth="3.5" />

          {/* Crying streaming tears */}
          <path d="M60 84 Q58 105 55 125" stroke="#70d6ff" strokeWidth="5" strokeLinecap="round" fill="none" className="svg-tear-stream" />
          <path d="M100 84 Q102 105 105 125" stroke="#70d6ff" strokeWidth="5" strokeLinecap="round" fill="none" className="svg-tear-stream" />

          {/* Eyes crying */}
          <path d="M52 82 Q62 76 72 82" stroke="#4a1525" strokeWidth="4" strokeLinecap="round" fill="none" />
          <path d="M88 82 Q98 76 108 82" stroke="#4a1525" strokeWidth="4" strokeLinecap="round" fill="none" />

          {/* Cheeks */}
          <circle cx="48" cy="95" r="9" fill="#ff8fa3" opacity="0.6" />
          <circle cx="112" cy="95" r="9" fill="#ff8fa3" opacity="0.6" />

          {/* Trembling mouth */}
          <ellipse cx="80" cy="92" rx="3" ry="2" fill="#ff4d6d" />
          <path d="M73 99 Q76 96 80 98 Q84 96 87 99" stroke="#4a1525" strokeWidth="2.5" strokeLinecap="round" fill="none" />

          {/* Paws */}
          <ellipse cx="64" cy="120" rx="9" ry="8" fill="#fff0f3" stroke="#f8bbd0" strokeWidth="2" />
          <ellipse cx="96" cy="120" rx="9" ry="8" fill="#fff0f3" stroke="#f8bbd0" strokeWidth="2" />
        </svg>
      );

    case 'stage3':
      // 💔🥹 Heartbroken with band-aid
      return (
        <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Ears */}
          <circle cx="48" cy="52" r="19" fill="#fff0f3" stroke="#f8bbd0" strokeWidth="3.5" />
          <circle cx="48" cy="52" r="11" fill="#ffb3c1" />
          <circle cx="112" cy="52" r="19" fill="#fff0f3" stroke="#f8bbd0" strokeWidth="3.5" />
          <circle cx="112" cy="52" r="11" fill="#ffb3c1" />

          {/* Head */}
          <ellipse cx="80" cy="85" rx="52" ry="46" fill="#fff9fb" stroke="#f8bbd0" strokeWidth="3.5" />

          {/* Droopy sad eyes */}
          <ellipse cx="62" cy="82" rx="10" ry="12" fill="#2d121c" />
          <circle cx="65" cy="78" r="4" fill="#ffffff" />
          <circle cx="60" cy="87" r="2" fill="#ffffff" />

          <ellipse cx="98" cy="82" rx="10" ry="12" fill="#2d121c" />
          <circle cx="101" cy="78" r="4" fill="#ffffff" />
          <circle cx="96" cy="87" r="2" fill="#ffffff" />

          {/* Mouth */}
          <ellipse cx="80" cy="91" rx="3" ry="2" fill="#ff4d6d" />
          <path d="M75 99 Q80 95 85 99" stroke="#4a1525" strokeWidth="2.5" strokeLinecap="round" fill="none" />

          {/* Broken Heart with Band-Aid */}
          <g transform="translate(0, 5)">
            <path d="M68 114 C68 106 76 102 80 107 C84 102 92 106 92 114 C92 125 80 133 80 133 C80 133 68 125 68 114 Z" fill="#e63946" />
            {/* Crack */}
            <path d="M80 108 L78 115 L82 121 L79 127" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
            {/* Cute Band-aid */}
            <rect x="71" y="115" width="18" height="6" rx="2" fill="#ffe3e0" stroke="#ff758c" strokeWidth="1" transform="rotate(-15 80 118)" />
          </g>

          <ellipse cx="62" cy="120" rx="8" ry="7" fill="#fff0f3" stroke="#f8bbd0" strokeWidth="2" />
          <ellipse cx="98" cy="120" rx="8" ry="7" fill="#fff0f3" stroke="#f8bbd0" strokeWidth="2" />
        </svg>
      );

    case 'stage4':
    case 'stage5':
      // 😭😭❤️🩹 Waterfall of tears comic-style crying
      return (
        <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Waterfall Tears splashing on sides */}
          <path d="M58 84 C40 85 20 110 25 140 C28 125 45 115 58 100" fill="#a0c4ff" opacity="0.8" className="svg-tear-splash-left" />
          <path d="M102 84 C120 85 140 110 135 140 C132 125 115 115 102 100" fill="#a0c4ff" opacity="0.8" className="svg-tear-splash-right" />

          {/* Ears */}
          <circle cx="48" cy="54" r="19" fill="#fff0f3" stroke="#f8bbd0" strokeWidth="3.5" />
          <circle cx="48" cy="54" r="11" fill="#ffb3c1" />
          <circle cx="112" cy="54" r="19" fill="#fff0f3" stroke="#f8bbd0" strokeWidth="3.5" />
          <circle cx="112" cy="54" r="11" fill="#ffb3c1" />

          {/* Head */}
          <ellipse cx="80" cy="87" rx="52" ry="46" fill="#fff9fb" stroke="#f8bbd0" strokeWidth="3.5" />

          {/* Dramatic Crying Eyes > < */}
          <path d="M54 78 L65 84 L54 90" stroke="#4a1525" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M106 78 L95 84 L106 90" stroke="#4a1525" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />

          {/* Wide open crying mouth */}
          <path d="M72 96 Q80 94 88 96 Q80 112 72 96 Z" fill="#e63946" stroke="#4a1525" strokeWidth="2.5" />

          {/* Paws */}
          <ellipse cx="60" cy="120" rx="9" ry="8" fill="#fff0f3" stroke="#f8bbd0" strokeWidth="2" />
          <ellipse cx="100" cy="120" rx="9" ry="8" fill="#fff0f3" stroke="#f8bbd0" strokeWidth="2" />
        </svg>
      );

    case 'stage6':
      // 🥺👉👈💖 Sole Survivor with glowing heart aura
      return (
        <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Radiant Heart Aura */}
          <circle cx="80" cy="85" r="62" fill="none" stroke="#ff758c" strokeWidth="3" strokeDasharray="6 6" opacity="0.7" className="svg-spin-aura" />

          {/* Floating mini hearts */}
          <path d="M30 40 C30 35 35 32 39 36 C43 32 48 35 48 40 C48 47 39 53 39 53 C39 53 30 47 30 40 Z" fill="#ff4d6d" />
          <path d="M120 40 C120 35 125 32 129 36 C133 32 138 35 138 40 C138 47 129 53 129 53 C129 53 120 47 120 40 Z" fill="#ff4d6d" />

          {/* Ears */}
          <circle cx="48" cy="52" r="19" fill="#fff0f3" stroke="#f8bbd0" strokeWidth="3.5" />
          <circle cx="48" cy="52" r="11" fill="#ffb3c1" />
          <circle cx="112" cy="52" r="19" fill="#fff0f3" stroke="#f8bbd0" strokeWidth="3.5" />
          <circle cx="112" cy="52" r="11" fill="#ffb3c1" />

          {/* Head */}
          <ellipse cx="80" cy="85" rx="52" ry="46" fill="#fff9fb" stroke="#f8bbd0" strokeWidth="3.5" />

          {/* Blushing cheeks */}
          <circle cx="50" cy="94" r="11" fill="#ff8fa3" opacity="0.8" />
          <circle cx="110" cy="94" r="11" fill="#ff8fa3" opacity="0.8" />

          {/* Ultra huge shiny puppy eyes */}
          <circle cx="62" cy="82" r="13" fill="#2d121c" />
          <circle cx="66" cy="77" r="5.5" fill="#ffffff" />
          <circle cx="58" cy="87" r="2.8" fill="#ffffff" />
          <circle cx="69" cy="87" r="2.2" fill="#ffd166" />

          <circle cx="98" cy="82" r="13" fill="#2d121c" />
          <circle cx="102" cy="77" r="5.5" fill="#ffffff" />
          <circle cx="94" cy="87" r="2.8" fill="#ffffff" />
          <circle cx="105" cy="87" r="2.2" fill="#ffd166" />

          {/* Cute Smile */}
          <ellipse cx="80" cy="90" rx="3.5" ry="2.5" fill="#ff4d6d" />
          <path d="M74 96 Q80 102 86 96" stroke="#4a1525" strokeWidth="2.5" strokeLinecap="round" fill="none" />

          {/* Paws */}
          <ellipse cx="68" cy="116" rx="10" ry="8" fill="#fff0f3" stroke="#f8bbd0" strokeWidth="2" />
          <ellipse cx="92" cy="116" rx="10" ry="8" fill="#fff0f3" stroke="#f8bbd0" strokeWidth="2" />
        </svg>
      );

    case 'celebration':
      // 🥰🎉💃 Joyful Jumping Chibi Hugging a Heart with Party Confetti
      return (
        <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Confetti & Sparkles */}
          <circle cx="28" cy="35" r="4" fill="#ffd166" />
          <circle cx="135" cy="42" r="4.5" fill="#06d6a0" />
          <circle cx="32" cy="120" r="3.5" fill="#118ab2" />
          <circle cx="130" cy="115" r="4" fill="#ff758c" />
          
          {/* Party Sparkles */}
          <path d="M80 15 L82 23 L90 25 L82 27 L80 35 L78 27 L70 25 L78 23 Z" fill="#ffd166" />

          {/* Ears with party flowers */}
          <circle cx="48" cy="52" r="19" fill="#fff0f3" stroke="#f8bbd0" strokeWidth="3.5" />
          <circle cx="48" cy="52" r="11" fill="#ffb3c1" />
          <circle cx="112" cy="52" r="19" fill="#fff0f3" stroke="#f8bbd0" strokeWidth="3.5" />
          <circle cx="112" cy="52" r="11" fill="#ffb3c1" />

          {/* Head */}
          <ellipse cx="80" cy="85" rx="52" ry="46" fill="#fff9fb" stroke="#f8bbd0" strokeWidth="3.5" />

          {/* Happy Closed Smiling Eyes ^ ^ */}
          <path d="M52 82 Q62 72 72 82" stroke="#4a1525" strokeWidth="4" strokeLinecap="round" fill="none" />
          <path d="M88 82 Q98 72 108 82" stroke="#4a1525" strokeWidth="4" strokeLinecap="round" fill="none" />

          {/* Blushing Cheeks */}
          <circle cx="48" cy="92" r="12" fill="#ff4d6d" opacity="0.65" />
          <circle cx="112" cy="92" r="12" fill="#ff4d6d" opacity="0.65" />

          {/* Happy Big Smile */}
          <path d="M72 94 Q80 110 88 94 Z" fill="#e63946" stroke="#4a1525" strokeWidth="2.5" />

          {/* Glowing Big Celebration Heart in Paws */}
          <g className="svg-beating-heart">
            <path d="M66 112 C66 102 76 98 80 104 C84 98 94 102 94 112 C94 125 80 135 80 135 C80 135 66 125 66 112 Z" fill="#ff0054" />
            <circle cx="73" cy="108" r="3" fill="#ffffff" opacity="0.8" />
          </g>

          {/* Joyful raised paws */}
          <ellipse cx="56" cy="116" rx="9" ry="8" fill="#fff0f3" stroke="#f8bbd0" strokeWidth="2" />
          <ellipse cx="104" cy="116" rx="9" ry="8" fill="#fff0f3" stroke="#f8bbd0" strokeWidth="2" />
        </svg>
      );

    default:
      return null;
  }
}
