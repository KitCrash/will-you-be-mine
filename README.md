# 💖 Romantic Proposal Web App ("Do you love me? ❤️")

A cute, romantic, and playful interactive proposal website built entirely with **React** (`react`, `react-dom`, `framer-motion`, and `canvas-confetti`), designed specifically for mobile phones.

---

## ✨ Features

- **🌸 Dreamy Visual Design**:
  - Soft pastel pink and rose gradient background with ambient glowing mesh orbs.
  - Fullscreen dynamic canvas with continuously floating romantic hearts and twinkling sparkles.
  - Modern glassmorphic frosted-glass card with subtle glowing pink/rose borders and backdrop blur.

- **🥺 Interactive Reaction Stickers & Emojis**:
  - Displays cute animated stickers / GIFs above the question.
  - Includes bulletproof fallback to animated 3D emojis (`🥺👉👈`, `🥹💗`, `😭🥺`, `💔🥹`, `😭😭❤️🩹`, `🥺🥀💔`).
  - Reaction changes dynamically on each **NO** click.

- **🎯 Progressive YES / NO Button Mechanics**:
  - **YES ❤️**: Progressively grows in size (`1x -> 1.2x -> 1.4x -> 1.6x -> 1.8x -> 2.15x`) with bouncy spring physics, brighter glow, and floating heart particles.
  - **NO 😭**: Shrinks on every click with a playful wobble animation, decreases opacity, and after 6 clicks disappears completely.
  - Solitary glow surrounds the YES button when NO is gone.
  - Randomized cute pleading phrases appear with each click (e.g. *"Are you sure? 🥺"*, *"Think again… 🥹"*, *"Pleaseee 😭❤️"*).

- **🎉 Fullscreen Heart & Confetti Celebration**:
  - Clicking **YES** triggers an instant multi-cannon celebration with heart confetti and fireworks.
  - Shows the celebratory message: **"I KNEW IT! ❤️🥰"** and *"You just made me the happiest person alive. 💕"*.
  - Celebratory sticker animation with celebratory sparkles.

- **💌 Interactive Romantic Love Letter ("One More Thing…")**:
  - Clicking **"One More Thing… 💌"** smoothly unfolds a realistic love letter on parchment paper with a wax seal.
  - Easy placeholder to write your personal love note.

- **🎵 Zero-Dependency Romantic Sound Synthesizer**:
  - Built-in Web Audio API synthesizer for cute pop sounds, pleading chimes, and celebration fanfare.
  - Ambient music toggle button in the top right corner (`Music: On/Off`).
  - No external audio files needed; works 100% offline without broken links or CORS errors.

- **📱 Mobile-First Responsive Design**:
  - Optimized for iOS Safari, Chrome, and Android browsers.
  - Native `100dvh` handling to avoid mobile address bar jumps.
  - Safe-area insets for iPhone notch / Dynamic Island.

---

## 🛠️ Getting Started

### 1. Run in Development Mode
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) on your phone or desktop browser.

### 2. Build for Production / Deployment
```bash
npm run build
```
The output will be generated inside the `dist/` folder, ready to deploy to **Vercel**, **Netlify**, **GitHub Pages**, or **Cloudflare Pages**!

---

## 🎨 Easy Customization

All texts, buttons, emojis, GIFs, and the love letter can be personalized inside:
👉 **[`src/config.js`](file:///c:/soumya/soumya/roll%20fetcher/loved%20one/src/config.js)**

```javascript
export const CONFIG = {
  // Main Proposal Question
  question: "Do you love me?",
  heartIcon: "❤️",

  // Button Labels
  yesBtnText: "YES",
  noBtnText: "NO",

  // How many NO clicks before the button completely disappears
  maxNoClicks: 6,

  // Love Letter details
  letter: {
    heading: "To My Love,",
    content: `[Write your personal message here ❤️]`,
    signature: "Yours Truly ❤️"
  }
};
```

---

Made with ❤️
