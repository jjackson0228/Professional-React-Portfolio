// components/Project.jsx
import { motion } from 'framer-motion';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Project({ project }) {
  return (
    <a
      href={project.deployed}
      target="_blank"
      rel="noopener noreferrer"
      className="no-underline"
    >
      <motion.div
        className="flex flex-col justify-between border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Project Image */}
        <img
          src={project.imgPath}
          alt={project.title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />

        {/* Project Title */}
        <h3 className="text-xl text-stone-800 font-semibold font-serif mb-4">
          {project.title}
        </h3>

        {/* Links Section */}
        <div className="mt-auto text-center">
          <a
            href={project.deployed}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-800 hover:text-violet-700 hover:text-xl"
          >
            View App
          </a>
          <span className="mx-2">|</span>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-800 hover:text-violet-700 hover:text-xl"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </a>
  );
}

// Prop types for validation
Project.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    deployed: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    imgPath: PropTypes.string.isRequired,
  }).isRequired,
};
