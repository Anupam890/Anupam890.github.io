import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="bg-white">
      <motion.h1
        className="skills-title text-white text-3xl text-center mb-4 font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Experience
      </motion.h1>
      <motion.div
        className="bar text-center w-20 h-[1px] bg-primary mx-auto mb-8"
        initial={{ width: 0 }}
        animate={{ width: "80px" }}
        transition={{ duration: 1 }}
      />
    </div>
  );
};

export default Experience;
