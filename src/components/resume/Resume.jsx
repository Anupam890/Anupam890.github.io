import { Outlet, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaTools, FaGraduationCap, FaBriefcase } from "react-icons/fa";

const linkVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const Resume = () => {
  return (
    <div className="resume-container w-full flex flex-col-reverse md:flex-row items-center justify-center gap-2 bg-gray-900 p-4">
      <div className="left-container h-full ">
        <motion.div
          className="inner-box text-white"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="skills-title text-white text-3xl text-center mb-4 font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Resume
          </motion.h1>
          <motion.div
            className="bar text-center w-20 h-[1px] bg-primary mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 1 }}
          />
          <ul className="text-white space-y-2 flex flex-row items-center justify-center gap-2 md:flex-col">
            <motion.li
              variants={linkVariants}
              className="text-[#06D293] hover:text-2xl"
            >
              <Link to="skills">
                <div className="flex items-center justify-center md:hidden w-10 h-10 rounded-full bg-[#06D293] text-black">
                  <FaTools />
                </div>
                <span className="hidden md:inline">Skills</span>
              </Link>
            </motion.li>
            <motion.li
              variants={linkVariants}
              className="text-[#06D293] hover:text-2xl"
            >
              <Link to="education">
                <div className="flex items-center justify-center md:hidden w-10 h-10 rounded-full bg-[#06D293] text-black">
                  <FaGraduationCap />
                </div>
                <span className="hidden md:inline">Education</span>
              </Link>
            </motion.li>
            <motion.li
              variants={linkVariants}
              className="text-[#06D293] hover:text-2xl"
            >
              <Link to="experience">
                <div className="flex items-center justify-center md:hidden w-10 h-10 rounded-full bg-[#06D293] text-black">
                  <FaBriefcase />
                </div>
                <span className="hidden md:inline">Experience</span>
              </Link>
            </motion.li>
          </ul>
        </motion.div>
      </div>
      <div className="right-container flex-2 p-4 w-full mt-4 md:mt-0 md:h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default Resume;
