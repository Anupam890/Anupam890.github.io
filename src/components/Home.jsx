import React from 'react';
import image from "../components/assets/image.png";
import { motion } from "framer-motion";
import { HiDocumentText } from "react-icons/hi2";
import { FaLinkedin } from "react-icons/fa";
import resume from "../components/assets/Anupam_CSE_PKD_172.pdf";

const strokeVariants = {
  animate: {
    strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
    rotate: [0, 360],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    backgroundColor: "#04b07a",
    boxShadow: "0px 4px 15px rgba(6, 210, 147, 0.5)",
    transition: {
      duration: 0.3,
    },
  },
};

const Home = () => {
  return (
    <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-6 py-12">
      
      {/* Left Section */}
      <div className="left-container w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
        <div className="intro flex items-center space-x-3">
          <div className="w-6 h-[2px] bg-[#06D293]"></div>
          <p className="text-[#06D293] text-lg font-semibold">Hello 👋</p>
        </div>
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Anupam Mandal</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mt-2">Fullstack Developer</h2>
          <p className="text-gray-400 mt-4 leading-relaxed">
            I am a motivated and versatile individual, always eager to take on new challenges.
            With a passion for learning, a positive attitude, and a growth mindset, I’m ready to make
            a meaningful contribution and achieve great things.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
          <motion.a
            className="bg-[#06D293] text-white py-2 px-5 rounded-xl flex items-center gap-2 text-sm font-medium shadow-md"
            variants={buttonVariants}
            whileHover="hover"
            href={resume}
            target='_blank'
          >
            <HiDocumentText size={20} />
            Resume
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/anupam-mandal71/"
            target="_blank"
            className="bg-[#06D293] text-white py-2 px-5 rounded-xl flex items-center gap-2 text-sm font-medium shadow-md"
            variants={buttonVariants}
            whileHover="hover"
          >
            <FaLinkedin size={20} />
            LinkedIn
          </motion.a>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-container w-full md:w-1/2 flex justify-center items-center p-4 relative">
        <div className="relative w-48 h-48 md:w-64 md:h-64">
          <motion.div
            className="absolute inset-0"
            variants={strokeVariants}
            animate="animate"
          >
            <svg
              className="w-full h-full"
              fill="transparent"
              viewBox="0 0 506 506"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.circle
                cx="253"
                cy="253"
                r="250"
                stroke="#06D293"
                strokeWidth="4"
              />
              <motion.circle
                cx="253"
                cy="253"
                r="250"
                stroke="#00ff99"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={strokeVariants}
                animate="animate"
              />
            </svg>
          </motion.div>
          <img
            className="rounded-full object-cover shadow-xl w-full h-full border-4 border-[#06D293] backdrop-blur-xl"
            src={image}
            alt="Anupam Mandal"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
