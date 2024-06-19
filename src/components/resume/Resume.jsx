import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
    <div className="resume-container w-full h-screen flex items-center justify-center bg-gray-900 p-4 mt-4">
      <motion.div
        className="left-container bg-gray-100 p-4 rounded-lg shadow-lg"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="card bg-white p-4 shadow-md rounded-lg w-full md:w-80">
          <ul className="space-y-4">
            <motion.li variants={linkVariants}>
              <Link to="skills" className="text-blue-500 hover:text-blue-700">Skills</Link>
            </motion.li>
            <motion.li variants={linkVariants}>
              <Link to="education" className="text-blue-500 hover:text-blue-700">Education</Link>
            </motion.li>
            <motion.li variants={linkVariants}>
              <Link to="experience" className="text-blue-500 hover:text-blue-700">Experience</Link>
            </motion.li>
          </ul>
        </div>
      </motion.div>
      <div className="right-container flex-1 bg-gray-50 p-4  rounded-lg shadow-lg w-full md:w-1/2 mt-4 md:mt-0">
        <Outlet />
      </div>
    </div>
  );
};

export default Resume;
