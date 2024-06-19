import { Outlet, Link } from "react-router-dom";
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
    <div className="resume-container w-full flex flex-col-reverse md:flex-row items-center justify-center gap-2 bg-gray-900 p-4 ">
      <div className="left-container h-screen flex items-center ">
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
          <ul className="text-white space-y-2 flex items-center justify-center flex-col">
            <motion.li variants={linkVariants} className="text-[#06D293] hover:text-white text-2xl">
              <Link to="skills">Skills</Link>
            </motion.li>
            <motion.li variants={linkVariants} className="text-[#06D293] hover:text-white text-2xl">
              <Link to="education">Education</Link>
            </motion.li>
            <motion.li variants={linkVariants} className="text-[#06D293] hover:text-white text-2xl">
              <Link to="experience">Experience</Link>
            </motion.li>
          </ul>
        </motion.div>
      </div>
      <div className="right-container flex-2 p-4 w-full md:w-2/3 mt-4 md:mt-0 md:h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default Resume;
