import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import React, { useCallback } from "react";

const ParticlesContainer = () => {
  const ParticleInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles
      className="w-full h-full absolute z-0"
      id="tsparticles"
      init={ParticleInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "" } },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: { enable: false, mode: "push" },
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            push: { quantity: 90 },
            repulse: { distance: 200, duration: 0.4 },
          },
        },
        particles: {
          color: { value: ["#4285F4", "#0fdb78", "#F4B400", "#0fc4db"] },
          links: {
            color: "#A4A4A4",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 0,
          },
          collisions: { enable: true },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: false,
            speed: 1,
            straight: false,
          },
          number: { density: { enable: true, area: 800 }, value: 80 },
          opacity: { value: 0.7 },
          shape: {
            type: ["circle", "triangle", "star", "image"],
            image: {
              src: "/heart.png",
              width: 20,
              height: 20,
            },
          },
          size: { value: { min: 3, max: 6 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;
