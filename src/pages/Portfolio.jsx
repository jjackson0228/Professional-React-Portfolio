const projects = [
  {
    title: 'Answer Hive',
    deployed: 'https://answer-hive-1.onrender.com/',
    github: 'https://github.com/otekolste/answer-hive',
  },
  {
    title: 'Film Fetcher',
    deployed: 'https://ckisi.github.io/film-fetcher/',
    github: 'https://github.com/ckisi/film-fetcher',
  },
  {
    title: 'Employee Tracker',
    deployed: '#',
    github: 'https://github.com/jjackson0228/Employee-Tracker',
  },
  {
    title: 'Weather Dashboard',
    deployed: 'https://jjackson0228.github.io/Weather-app/',
    github: 'https://github.com/jjackson0228/Weather-app',
  },
  {
    title: 'E-Commerce',
    deployed: '#',
    github: 'https://github.com/jjackson0228/E-commerce',
  },
  {
    title: 'Note Taker',
    deployed: 'https://note-pad-ga2a.onrender.com',
    github: 'https://github.com/jjackson0228/Note-Pad',
  },
];

export default function Portfolio() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-screen px-4 py-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col justify-between border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          {/* Project Title */}
          <h3 className="text-xl font-semibold mb-4">{project.title}</h3>

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
        </div>
      ))}
    </div>
  );
}
