import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto px-4 pt-24 pb-16"
    >
      <h1 className="text-3xl font-light mb-8">hi, i'm jeevan karandikar</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
          i am a bioengineering student passionate about neural interfaces, neuromorphic systems, medical devices, robotics, and xr.
        </p>

        <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
          i also find myself captivated by the nuances of nutritional science and endocrinology, human psychology, and the awe-inspiring reign of dinosaurs. quantum computing and fusion are also cool.
        </p>

        <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
          ultimately i love to learn, and i aspire to solve problems that enable people to unleash their distinct talents upon the world, contributing to the greater mosaic of human potential.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:jkarandikar@ucsd.edu"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            email
          </a>
          <a
            href="https://github.com/jeevankarandikar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            github
          </a>
          <a
            href="https://linkedin.com/in/jeevankarandikar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            linkedin
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Home; 