import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi2";

const Education = () => {
  const [selectedCard, setSelectedCard] = useState(0);

  const educationData = [
    {
      schoolName: "Centurion University of Technology and Management",
      degree: "Bachelor of Technology",
      branch: "Computer Science and Engineering",
      Image:
        "https://cutm.ac.in/wp-content/uploads/Centurion_University_of_Technology_and_Management_Logo.webp",
      grade: "8.7 CGPA",
      year: "2021 - 2025",
    },
    {
      schoolName: "Sri Chaitanya Junior College",
      degree: "Intermediate",
      branch: "Science",
      Image:
        "https://srichaitanyacolleges.com/neet-repeater/images/srichaitanyalogo.webp",
      grade: "8.03 CGPA",
      year: "2019 - 2021",
    },
    {
      schoolName: "Gitanjali Public School",
      degree: "SSC",
      branch: "Science",
      Image:
        "https://www.gitanjalischools.com/images/bb00bb7cb3172d28c77a6c4a29f23ba5.png",
      grade: "9.2 CGPA",
      year: "2013 - 2019",
    },
  ];

  const slideCard = (direction) => {
    const newIndex = selectedCard + direction;
    if (newIndex >= 0 && newIndex < educationData.length) {
      setSelectedCard(newIndex);
    }
  };

  return (
    <div className="edu-container p-4 bg-gray-900 h-screen">
      <motion.h1
        className="skills-title text-white text-3xl text-center mb-4 font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Education
      </motion.h1>
      <motion.div
        className="bar text-center w-20 h-[1px] bg-primary mx-auto mb-8"
        initial={{ width: 0 }}
        animate={{ width: "80px" }}
        transition={{ duration: 1 }}
      />
      <div className="cards-container flex justify-center items-center h-full relative">
        {educationData.map((item, index) => (
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
            <img
              src={item.Image}
              alt={item.schoolName}
              className="w-full h-52 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-white text-lg font-bold">{item.schoolName}</h2>
            <p className="text-white text-sm">{item.degree}</p>
            <p className="text-white text-sm">{item.branch}</p>
            <p className="text-white text-sm">{item.grade}</p>
            {item.year && <p className="text-white text-sm">{item.year}</p>}
          </motion.div>
        ))}
      </div>
      <div className="buttons text-white flex text-2xl gap-4 justify-center mt-4">
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

export default Education;
