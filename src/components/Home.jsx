import image from "../components/assets/image.png";
import { motion } from "framer-motion";
import { HiDocumentText } from "react-icons/hi2";

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
    scale: 1.1,
    backgroundColor: "#04b07a",
    transition: {
      duration: 0.3,
    },
  },
};

const Home = () => {
  return (
    <>
      <div className="hero-container w-full h-screen flex flex-col-reverse md:flex-row items-center justify-center bg-gray-900 p-4">
        <div className="left-container w-full md:w-1/2 px-6 mb-8 md:mb-0 flex flex-col items-center md:items-start">
          <div className="intro mb-4 flex items-center space-x-2">
            <div className="line w-2 h-[1px] bg-primary"></div>
            <p className="text-[#06D293]">Hello 👋</p>
          </div>
          <div className="name mb-6 text-center md:text-left">
            <h2 className="text-4xl font-bold text-white">Anupam Mandal</h2>
            <p className="text-2xl text-white">Fullstack Developer</p>
            <p className="text-white mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, saepe. Nesciunt ab voluptas optio in tempore dicta doloremque libero. Cumque officia sed alias soluta omnis fuga inventore facilis animi labore.
            </p>
          </div>
          <div className="button mt-6 flex items-center space-x-2">
            <HiDocumentText className="text-white" size={24} />
            <motion.button
              className="bg-[#06D293] text-white py-2 px-4 rounded-lg hover:bg-[#04b07a] transition duration-300"
              variants={buttonVariants}
              whileHover="hover"
            >
              Resume
            </motion.button>
          </div>
        </div>
        <div className="right-container w-full md:w-1/2 flex justify-center items-center relative p-4 md:p-6 lg:p-8">
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            <motion.div
              className="absolute inset-0 w-full h-full"
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
              className="rounded-full shadow-lg w-full h-full object-cover"
              src={image}
              alt="Anupam Mandal"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
