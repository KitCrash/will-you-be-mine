// =================================================================
// WEB AUDIO API SYNTHESIZER
// 100% Self-Contained, Zero External Audio Files, No Broken URLs
// =================================================================

class AudioSynthesizer {
  constructor() {
    this.ctx = null;
    this.bgmTimer = null;
    this.isBgmPlaying = false;
    this.bgmStep = 0;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Cute pop sound on tap / interaction
  playPop(pitch = 520) {
    try {
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      const now = this.ctx.currentTime;
      osc.frequency.setValueAtTime(pitch * 0.7, now);
      osc.frequency.exponentialRampToValueAtTime(pitch * 1.5, now + 0.08);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.12);
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }

  // Playful pleading sound when NO is clicked
  playAww() {
    try {
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(360, now);
      osc.frequency.exponentialRampToValueAtTime(240, now + 0.25);

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.28);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.3);
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }

  // Romantic celebration chime fanfare on YES!
  playCelebration() {
    try {
      this.init();
      if (!this.ctx) return;

      const notes = [
        { f: 523.25, d: 0.18, delay: 0 },    // C5
        { f: 659.25, d: 0.18, delay: 0.12 }, // E5
        { f: 783.99, d: 0.22, delay: 0.24 }, // G5
        { f: 987.77, d: 0.26, delay: 0.36 }, // B5
        { f: 1046.50, d: 0.6, delay: 0.48 }, // C6
        { f: 1318.51, d: 0.8, delay: 0.62 }  // E6 high flourish
      ];

      notes.forEach(({ f, d, delay }) => {
        const start = this.ctx.currentTime + delay;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, start);

        gain.gain.setValueAtTime(0, start);
        gain.gain.linearRampToValueAtTime(0.28, start + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, start + d);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(start);
        osc.stop(start + d);
      });
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }

  // Romantic gentle music-box loop (pentatonic soft chimes)
  startRomanticBgm() {
    this.init();
    if (!this.ctx || this.isBgmPlaying) return;
    this.isBgmPlaying = true;

    const melody = [
      523.25, 659.25, 783.99, 659.25,
      880.00, 783.99, 659.25, 523.25,
      587.33, 659.25, 783.99, 880.00,
      1046.50, 783.99, 880.00, 659.25
    ];

    const playStep = () => {
      if (!this.isBgmPlaying || !this.ctx) return;
      const freq = melody[this.bgmStep % melody.length];
      this.bgmStep++;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.06, now + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.65);

      this.bgmTimer = setTimeout(playStep, 500);
    };

    playStep();
  }

  stopRomanticBgm() {
    this.isBgmPlaying = false;
    if (this.bgmTimer) {
      clearTimeout(this.bgmTimer);
      this.bgmTimer = null;
    }
  }

  toggleRomanticBgm() {
    if (this.isBgmPlaying) {
      this.stopRomanticBgm();
      return false;
    } else {
      this.startRomanticBgm();
      return true;
    }
  }
}

export const soundFx = new AudioSynthesizer();
