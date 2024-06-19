import { motion } from "framer-motion";

const Skills = () => {
  const backend = [
    {
      Image: "https://img.icons8.com/color/48/000000/nodejs.png",
      Name: "Node.js",
    },
    {
      Image: "https://img.icons8.com/color/48/000000/mongodb.png",
      Name: "MongoDB",
    },
    {
      Image: "https://img.icons8.com/color/48/000000/mysql-logo.png",
      Name: "MySQL",
    },
    {
      Image: "https://img.icons8.com/color/48/000000/firebase.png",
      Name: "Firebase",
    },
  ];

  const frontend = [
    {
      Image: "https://img.icons8.com/color/48/000000/react-native.png",
      Name: "React.js",
    },
    {
      Image: "https://img.icons8.com/color/48/000000/html-5.png",
      Name: "HTML",
    },
    {
      Image: "https://img.icons8.com/color/48/000000/css3.png",
      Name: "CSS",
    },
    {
      Image: "https://img.icons8.com/color/48/000000/javascript.png",
      Name: "JavaScript",
    },
    {
      Image: "https://img.icons8.com/color/48/000000/tailwindcss.png",
      Name: "Tailwind CSS",
    },
  ];

  return (
    <div className="skills-container mt-10 h-screen bg-gray-900 p-4">
      <div className="mb-8">
        <h2 className="text-white text-xl font-semibold mb-4">Backend Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {backend.map((item, index) => (
            <motion.div
              key={index}
              className="item flex items-center gap-2 border-2 border-white p-2 rounded-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={item.Image} className="w-10 h-10" alt={item.Name} />
              <p className="text-white">{item.Name}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-white text-xl font-semibold mb-4">Frontend Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {frontend.map((item, index) => (
            <motion.div
              key={index}
              className="item flex items-center gap-2 border-2 border-white p-2 rounded-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={item.Image} className="w-10 h-10" alt={item.Name} />
              <p className="text-white">{item.Name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
