import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SnowEffect = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Return null during server-side rendering
  }

  const numSnowflakes = 50;

  const getRandomNumber = (min, max) => Math.random() * (max - min) + min;

  const snowflakes = Array.from({ length: numSnowflakes }).map((_, index) => ({
    id: index,
    x: getRandomNumber(0, window.innerWidth),
    y: getRandomNumber(0, window.innerHeight),
    size: getRandomNumber(2, 8),
    opacity: getRandomNumber(0.3, 1),
    duration: getRandomNumber(5, 15),
  }));

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 1000,
      }}
    >
      {snowflakes.map((snowflake) => (
        <motion.div
          key={snowflake.id}
          initial={{ y: -10, x: snowflake.x }}
          animate={{
            y: window.innerHeight + 10,
            x: snowflake.x,
            rotate: getRandomNumber(0, 360),
          }}
          transition={{
            duration: snowflake.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            width: snowflake.size,
            height: snowflake.size,
            background: "white",
            borderRadius: "50%",
            opacity: snowflake.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default SnowEffect;
