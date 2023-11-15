import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <motion.div
      animate={{ x: position.x, y: position.y }}
      className="w-[30px] h-[30px] fixed border-[1px] border-red rounded-full z-50 hidden xl:block"
    />
  );
};

export default Cursor;
