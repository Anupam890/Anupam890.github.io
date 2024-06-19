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
    <div className="resume-container w-full h-screen flex flex-col-reverse md:flex-row items-center justify-center bg-gray-900 p-4 mt-4">
      <div className="left-container">
      <motion.div
        className=" p-4 rounded-full md:rounded-lg shadow-lg flex items-center justify-center w-40 h-40 md:w-auto md:h-auto md:w-1/4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="card bg-white p-4 w-full flex items-center justify-center md:block">

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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.p
            className="text-center text-white text-sm font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Navigate to different sections of my resume
            <br />
            using the links below
            <br />
            </motion.p>

          <ul className="space-y-4 text-center md:text-left">
            <motion.li variants={linkVariants}>
              <Link to="skills" className="text-blue-500 hover:text-blue-700">
                Skills
              </Link>
            </motion.li>
            <motion.li variants={linkVariants}>
              <Link to="education" className="text-blue-500 hover:text-blue-700">
                Education
              </Link>
            </motion.li>
            <motion.li variants={linkVariants}>
              <Link to="experience" className="text-blue-500 hover:text-blue-700">
                Experience
              </Link>
            </motion.li>
          </ul>
        </div>
      </motion.div>
      </div>
      <div className="right-container flex-1 p-4  w-full md:w-1/2 mt-4 md:mt-0">
        <Outlet />
      </div>
    </div>
  );
};

export default Resume;
