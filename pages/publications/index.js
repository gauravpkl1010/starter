import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
const Publications = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="text-center text-3xl z-30"
      >
        No Publications Yet.
      </motion.div>
    </div>
  );
};

export default Publications;
