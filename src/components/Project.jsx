import React, { useState } from 'react';
import Modal from 'react-modal';
import project from "../components/assets/project1.png";
import { motion } from 'framer-motion';
import '../components/style.css';

Modal.setAppElement('#root');

const Project = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const data = [
    {
      projectImage: project,
      projectTitle: "Pinfluence",
      projectDesc: "A Pinterest-inspired application built with MongoDB, Express, and Node.js.",
      tags: ["MongoDB", "Express", "Node.js"],
      url: "https://github.com/Anupam890/Pinfluence-Web-Application"
    },
    {
      projectImage: "http://www.pngall.com/wp-content/uploads/5/Website-PNG-Image.png",
      projectTitle: "SafetyNet",
      projectDesc: "SafetyNet is a web application designed to provide users with notifications of alerts in their nearby region. Users can register on the website to receive timely updates about any safety concerns or alerts in their area.",
      tags: ["SpringBoot", "React js", "MySql"],
      url: "https://github.com/Anupam890/SafetyNet/tree/main/SafetyNet"
    },
    {
      projectImage: "http://www.pngall.com/wp-content/uploads/5/Website-PNG-Image.png",
      projectTitle: "Facial Emotion Recognition",
      projectDesc: "A project that uses machine learning to recognize human emotions from facial expressions.",
      tags: ["Python", "OpenCV", "NumPy", "Pandas"],
      url: "https://github.com/Anupam890/FacialEmotionRecognition/tree/main/Facial%20Emotion%20Recognition"
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="project-container bg-gray-900">
      <motion.h1
        className="skills-title text-white text-3xl text-center mb-4 font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h1>
      <motion.div
        className="bar text-center w-20 h-[1px] bg-primary mx-auto mb-8"
        initial={{ width: 0 }}
        animate={{ width: "80px" }}
        transition={{ duration: 1 }}
      />
      <div className="project-card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6 px-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="project-card bg-gray-800/50 rounded-lg shadow-md p-4 backdrop-filter backdrop-blur-lg bg-opacity-50 border border-white/20 cursor-pointer"
            onClick={() => openModal(item)}
          >
            <img src={item.projectImage} alt="" className="project-image rounded-lg mb-4" />
            <div className="project-content text-white">
              <h4 className="project-title text-xl font-bold mb-2">{item.projectTitle}</h4>
              <p className="project-desc text-sm mb-4">{item.projectDesc}</p>
              <div className="project-tags flex space-x-2">
                {item.tags.map((tag, index) => (
                  <span key={index} className="bg-blue-500 text-white py-1 px-2 rounded-md text-xs">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Project Details"
          className="bg-white text-white p-6 rounded-lg border-2 shadow-md mx-auto my-10 w-3/4 md:w-1/2 lg:w-1/3 glass-effect"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center"
        >
          <h2 className="text-2xl font-bold mb-4">{selectedProject.projectTitle}</h2>
          <img src={selectedProject.projectImage} alt="" className="project-image rounded-lg mb-4" />
          <p className="mb-4">{selectedProject.projectDesc}</p>
          <div className="project-tags flex space-x-2 mb-4">
            {selectedProject.tags.map((tag, index) => (
              <span key={index} className="bg-blue-500 text-white py-1 px-2 rounded-md text-xs">{tag}</span>
            ))}
          </div>
          <div className="flex justify-center">
            <button
              className="bg-[#06D293] text-white py-2 px-4 rounded-lg hover:bg-[#04b07a] transition duration-300"
              onClick={closeModal}
            >
              Close
            </button>
            {selectedProject.url && (
              <a
                href={selectedProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#06D293] text-white py-2 px-4 mx-2 rounded-lg hover:bg-[#04b07a] transition duration-300"
              >
                View
              </a>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Project;
