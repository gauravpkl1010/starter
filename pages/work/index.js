import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
const Work = () => {
  return (
    <div className="bg-primary/60 h-full flex items-center justify-center">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="text-center text-2xl text-white/60 z-30 animate-pulse"
      >
        Coming Soon.
      </motion.div>
    </div>
  );
};

export default Work;
