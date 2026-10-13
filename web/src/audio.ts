// Closing-room sound palette, synthesised on demand. A small factory returns
// plain functions; no class, no samples. Bells use inharmonic partials with
// long exponential tails; the key turn is filtered noise bursts plus a thunk.

export interface Chimes {
  bell(pitch?: number): void;
  keyTurn(): void;
  tick(): void;
  refusal(): void;
  setMuted(m: boolean): void;
  muted(): boolean;
}

export function createChimes(): Chimes {
  let ac: AudioContext | undefined;
  let bus: GainNode | undefined;
  let silent = false;

  const ready = (): [AudioContext, GainNode] | null => {
    if (silent) return null;
    if (!ac) {
      const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!Ctor) return null;
      ac = new Ctor();
      bus = ac.createGain();
      bus.gain.value = 0.55;
      const warmth = ac.createBiquadFilter();
      warmth.type = 'lowpass';
      warmth.frequency.value = 5200;
      bus.connect(warmth).connect(ac.destination);
    }
    if (ac.state === 'suspended') void ac.resume();
    return [ac, bus!];
  };

  const partial = (freq: number, level: number, decay: number, delay = 0) => {
    const r = ready();
    if (!r) return;
    const [ctx, out] = r;
    const t = ctx.currentTime + delay;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(level, t + 0.006);
    g.gain.exponentialRampToValueAtTime(0.0001, t + decay);
    o.connect(g).connect(out);
    o.start(t);
    o.stop(t + decay + 0.05);
  };

  const noise = (dur: number, centre: number, level: number, delay = 0) => {
    const r = ready();
    if (!r) return;
    const [ctx, out] = r;
    const t = ctx.currentTime + delay;
    const len = Math.ceil(ctx.sampleRate * dur);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / len) ** 2;
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = centre;
    bp.Q.value = 6;
    const g = ctx.createGain();
    g.gain.value = level;
    src.connect(bp).connect(g).connect(out);
    src.start(t);
  };

  return {
    bell(pitch = 660) {
      // struck-bell ratios: hum, prime, tierce, quint, nominal
      [0.5, 1, 1.183, 1.506, 2].forEach((ratio, i) => partial(pitch * ratio, 0.16 / (i + 1), 2.4 - i * 0.35));
    },
    keyTurn() {
      noise(0.03, 3400, 0.5);
      noise(0.04, 2600, 0.45, 0.07);
      noise(0.05, 1800, 0.6, 0.15);
      partial(92, 0.3, 0.18, 0.16);
    },
    tick() {
      noise(0.012, 4200, 0.35);
    },
    refusal() {
      partial(196, 0.18, 0.5);
      partial(185, 0.14, 0.6, 0.12);
    },
    setMuted(m) {
      silent = m;
    },
    muted: () => silent,
  };
}
