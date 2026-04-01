export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg absolute inset-0">
        <svg
          viewBox="0 0 1920 1080"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id="hero-glow" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#1a1a2e" />
              <stop offset="50%" stopColor="#0f0f1a" />
              <stop offset="100%" stopColor="#0a0a0f" />
            </radialGradient>
            <radialGradient id="hero-accent" cx="50%" cy="40%" r="30%">
              <stop offset="0%" stopColor="#2e3a5c" stopOpacity="0.3" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <rect width="1920" height="1080" fill="url(#hero-glow)" />
          <rect width="1920" height="1080" fill="url(#hero-accent)" />
          {/* Subtle vertical lines suggesting confinement */}
          <line x1={500} y1="0" x2={500} y2="1080" stroke="#2e3a5c" strokeWidth="0.5" opacity={0.1} />
          <line x1={600} y1="0" x2={600} y2="1080" stroke="#2e3a5c" strokeWidth="0.5" opacity={0.12} />
          <line x1={700} y1="0" x2={700} y2="1080" stroke="#2e3a5c" strokeWidth="0.5" opacity={0.11} />
          <line x1={800} y1="0" x2={800} y2="1080" stroke="#2e3a5c" strokeWidth="0.5" opacity={0.13} />
          <line x1={900} y1="0" x2={900} y2="1080" stroke="#2e3a5c" strokeWidth="0.5" opacity={0.1} />
          <line x1={1000} y1="0" x2={1000} y2="1080" stroke="#2e3a5c" strokeWidth="0.5" opacity={0.12} />
          <line x1={1100} y1="0" x2={1100} y2="1080" stroke="#2e3a5c" strokeWidth="0.5" opacity={0.11} />
          <line x1={1200} y1="0" x2={1200} y2="1080" stroke="#2e3a5c" strokeWidth="0.5" opacity={0.13} />
          <line x1={1300} y1="0" x2={1300} y2="1080" stroke="#2e3a5c" strokeWidth="0.5" opacity={0.1} />
          <line x1={1400} y1="0" x2={1400} y2="1080" stroke="#2e3a5c" strokeWidth="0.5" opacity={0.12} />
        </svg>
      </div>
      <div className="hero-content">
        <h1>The Conversion</h1>
        <p className="author">J. Neil Garcia</p>
        <p className="hero-summary">
          A child is dragged from a dead mother's cabinet and plunged into a
          metal drum filled with cold water. The father and uncles hold the child
          under, again and again, asking the same question: Girl or Boy. Years
          later, the child has become a man, with a wife, four sons, and a
          violence he inherited from the men who drowned him. But every night,
          the girl they killed resurfaces in his dreams. This poem traces the
          irreversible cost of conversion, how patriarchy reproduces itself
          through love, violence, and the families who look the other way.
        </p>
        <p className="scroll-cue">
          Scroll down
          <span className="scroll-cue-arrow">&#8595;</span>
        </p>
      </div>
    </section>
  );
}
