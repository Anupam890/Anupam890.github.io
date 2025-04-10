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
      Image: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000",
      Name: "Express js",
    },
    {
      Image: "https://img.icons8.com/?size=100&id=90519&format=png&color=000000",
      Name: "Spring Boot"
    }
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
      Image: "https://img.icons8.com/color/48/000000/tailwindcss.png",
      Name: "Tailwind CSS",
    },
  ];

  const Others = [
    {
      Image: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000",
      Name: "Git"
    },
    {
      Image: "https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000",
      Name: "Github"
    },
    {
      Image: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png",
      Name: "Postman"
    },
    {
      Image: "https://img.icons8.com/?size=100&id=y7WGoWNuIWac&format=png&color=000000",
      Name: "Vs Code"
    }
  ]
  const Languages = [
    {
      Image: "https://w7.pngwing.com/pngs/578/816/png-transparent-java-class-file-java-platform-standard-edition-java-development-kit-java-runtime-environment-coffee-jar-text-class-orange-thumbnail.png",
      Name: "Java"
    },
    {
      Image: "https://w7.pngwing.com/pngs/646/751/png-transparent-the-c-programming-language-computer-programming-programmer-others-blue-class-logo-thumbnail.png",
      Name: "C++"
    },
    {
      Image: "https://img.icons8.com/color/48/000000/javascript.png",
      Name: "JavaScript",
    },
  ]

  return (
    <div className="skills-container mt-10 h-full bg-gray-900 p-4">
      <div className="mb-8">
        <motion.h1
          className="skills-title text-white text-3xl text-center mb-4 font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Skills
        </motion.h1>

        <motion.div
          className="bar text-center w-20 h-[1px] bg-primary mx-auto mb-4"
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ duration: 1 }}
        />
        <h2 className="text-white text-xl font-semibold mb-4">Backend Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {backend.map((item, index) => (
            <motion.div
              key={index}
              className="item flex items-center gap-2 border-2 cursor-pointer border-white p-2 rounded-md"
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
              className="item flex items-center gap-2 cursor-pointer border-2 border-white p-2 rounded-md"
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
        <h2 className="text-white text-xl font-semibold mb-4">Others</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {Others.map((item, index) => (
            <motion.div
              key={index}
              className="item flex items-center gap-2 cursor-pointer border-2 border-white p-2 rounded-md"
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
        <h2 className="text-white text-xl font-semibold mb-4">Programming Languages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {Languages.map((item, index) => (
            <motion.div
              key={index}
              className="item flex items-center gap-2 cursor-pointer border-2 border-white p-2 rounded-md"
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
