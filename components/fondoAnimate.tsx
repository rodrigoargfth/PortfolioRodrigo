"use client"

import Particles from "@/src/Backgrounds/Particles/Particles";

const FondoAnimate = () => {
  return (
    <div
    className="absolute top-0 left-0 w-full h-full -z-10"
  >
    <Particles
      particleColors={["#ffffff", "#ffffff"]}
      particleCount={700}
      particleSpread={10}
      speed={0.1}
      particleBaseSize={200}
      moveParticlesOnHover={true}
      alphaParticles={true}
      disableRotation={false}
    />
  </div>
  );
};

export default FondoAnimate;
