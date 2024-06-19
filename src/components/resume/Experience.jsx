import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";

const Experience = () => {
  const [selectedCard, setSelectedCard] = useState(0);

  const experienceData = [
    {
      companyName: "Ai certs",
      role: "Front-end Developer",
      duration: "x - 2022",
    },
    {
      companyName: "Ai certs",
      role: "Front-end Developer",
      duration: "x - 2022",
    },
  ];

  const slideCard = (direction) => {
    const newIndex = selectedCard + direction;
    if (newIndex >= 0 && newIndex < experienceData.length) {
      setSelectedCard(newIndex);
    }
  };

  return (
    <div className="edu-container p-4 bg-gray-900">
      <motion.h1
        className="skills-title text-white text-3xl text-center mb-4 font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Experience
      </motion.h1>
      <motion.div
        className="bar text-center w-20 h-[1px] bg-primary mx-auto mb-20"
        initial={{ width: 0 }}
        animate={{ width: "80px" }}
        transition={{ duration: 1 }}
      />
      <div className="cards-container flex justify-center  items-center h-full relative">
        {experienceData.map((item, index) => (
          <motion.div
            key={index}
            className={`card-container bg-white/10 rounded-lg shadow-md p-4 backdrop-filter backdrop-blur-lg bg-opacity-10 border border-white/20 cursor-pointer absolute ${
              selectedCard === index ? "block" : "hidden"
            }`}
            initial={{ opacity: 0, x: selectedCard > index ? 100 : -100 }}
            animate={{ opacity: selectedCard === index ? 1 : 0, x: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ width: "90%", maxWidth: "400px" }}
          >
            <h2 className="text-white text-lg font-bold">{item.companyName}</h2>
            <p className="text-white text-sm">{item.role}</p>
            <p className="text-white text-sm">{item.duration}</p>
          </motion.div>
        ))}
      </div>
      <div className="buttons text-white flex text-2xl gap-4 justify-center  mt-20">
        <div className="left-Btn p-3 bg-primary text-black rounded-md">
          <HiChevronDoubleLeft
            className="font-bold cursor-pointer"
            onClick={() => slideCard(-1)}
          />
        </div>
        <div className="right-Btn p-3 bg-primary text-black rounded-md">
          <HiChevronDoubleRight
            className="font-bold cursor-pointer"
            onClick={() => slideCard(1)}
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
