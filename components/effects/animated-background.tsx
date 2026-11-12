export default function AnimatedBackground() {
  // Generate an array of particles with randomized positions & animation durations
  const particles = [
    { id: 1, left: "10%", size: "3px", duration: "14s", delay: "0s" },
    { id: 2, left: "25%", size: "2px", duration: "18s", delay: "-3s" },
    { id: 3, left: "40%", size: "4px", duration: "12s", delay: "-5s" },
    { id: 4, left: "60%", size: "2px", duration: "20s", delay: "-2s" },
    { id: 5, left: "75%", size: "3px", duration: "16s", delay: "-7s" },
    { id: 6, left: "90%", size: "2px", duration: "15s", delay: "-4s" },
  ];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Structural Animated Grid & Radial Vignette */}
      <div className="mesh-background" />

      {/* Dynamic Floating Atmospheric Orbs */}
      <div className="floating-orb orb-one" />
      <div className="floating-orb orb-two" />
      <div className="floating-orb orb-three" />

      {/* Moving Particles */}
      <div className="particle-field">
        {particles.map((p) => (
          <span
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animationDuration: p.duration,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>
    </div>
  );
}