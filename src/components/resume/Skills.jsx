import { motion } from 'framer-motion';
import Education from './Education';

const Skills = () => {
  const backend = [
    {
      Image: "https://img.icons8.com/color/48/000000/nodejs.png",
      Name: "Node.js"
    },
    {
      Image: "https://img.icons8.com/color/48/000000/mongodb.png",
      Name: "MongoDB"
    },
    {
      Image: "https://img.icons8.com/color/48/000000/mysql-logo.png",
      Name: "MySQL"
    },
    {
      Image: "https://img.icons8.com/color/48/000000/firebase.png",
      Name: "Firebase"
    }
  ];

  const frontend = [
    {
      Image: "",
      Name: "React.js"
    },
    {
      Image: "https://img.icons8.com/color/48/000000/html.png",
      Name: "HTML"
    },
    {
      Image: "https://img.icons8.com/color/48/000000/css3.png",
      Name: "CSS"
    },
    {
      Image: "https://img.icons8.com/color/48/000000/javascript.png",
      Name: "JavaScript"
    },
    {
      Image: "https://img.icons8.com/color/48/000000/tailwindcss.png",
      Name: "Tailwind CSS"
    }
  ];

  return (
    <>
      <div className="skills-container max-h-screen bg-gray-900 p-4">
        <motion.h1 
          className="skills-title text-white text-3xl text-center mb-4 font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Skills
        </motion.h1>
        <motion.div 
          className="bar text-center w-20 h-[1px] bg-primary mx-auto mb-8"
          initial={{ width: 0 }}
          animate={{ width: '80px' }}
          transition={{ duration: 1 }}
        />
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="backend-card space-y-4 p-6 rounded-xl bg-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-white text-2xl text-center mb-4">Backend</h2>
            {
              backend.map((item, index) => {
                return (
                  <motion.div 
                    className="skill-card flex items-center space-x-4"
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <img src={item.Image} alt={item.Name} className="skill-image" />
                    <h3 className="text-white text-xl">{item.Name}</h3>
                  </motion.div>
                )
              })
            }
          </motion.div>
          
          <motion.div 
            className="frontend-card space-y-4 p-6 rounded-xl bg-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-white text-2xl text-center mb-4">Frontend</h2>
            {
              frontend.map((item, index) => {
                return (
                  <motion.div 
                    className="skill-card flex items-center space-x-4"
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <img src={item.Image} alt={item.Name} className="skill-image" />
                    <h3 className="text-white text-xl">{item.Name}</h3>
                  </motion.div>
                )
              })
            }
          </motion.div>
        </div>
      </div>
      {/* <Education /> */}
    </>
  );
};

export default Skills;
