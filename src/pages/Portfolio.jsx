import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const projects = [
  {
    title: 'Answer Hive',
    deployed: 'https://answer-hive-1.onrender.com/',
    github: 'https://github.com/otekolste/answer-hive',
    imgPath: '/images/answer-hive.png',
  },
  {
    title: 'Film Fetcher',
    deployed: 'https://ckisi.github.io/film-fetcher/',
    github: 'https://github.com/ckisi/film-fetcher',
    imgPath: '/images/film-fetcher.png',
  },
  {
    title: 'Employee Tracker',
    deployed: '#',
    github: 'https://github.com/jjackson0228/Employee-Tracker',
    imgPath: '/images/employee-tracker.png',
  },
  {
    title: 'Weather Dashboard',
    deployed: 'https://jjackson0228.github.io/Weather-app/',
    github: 'https://github.com/jjackson0228/Weather-app',
    imgPath: '/images/weather-dashboard.png',
  },
  {
    title: 'E-Commerce',
    deployed: '#',
    github: 'https://github.com/jjackson0228/E-commerce',
    imgPath: '/images/e-commerce.png',
  },
  {
    title: 'Note Taker',
    deployed: 'https://note-pad-ga2a.onrender.com',
    github: 'https://github.com/jjackson0228/Note-Pad',
    imgPath: '/images/note-pad.png',
  },
];

export default function Portfolio() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-screen px-4 py-8">
      {projects.map((project, index) => (
        <a
          key={index}
          href={project.deployed}
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline"
        >
          <motion.div
            key={index}
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
            <h3 className="text-xl font-semibold font-serif mb-4">
              {project.title}
            </h3>

            {/* Links Section */}
            <div className="mt-auto text-center">
              <a
                href={project.deployed}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View App
              </a>
              <span className="mx-2">|</span>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </a>
      ))}
    </div>
  );
}
