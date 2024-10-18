const projects = [
  { title: 'Project 1', deployed: '#', github: '#' },
  { title: 'Project 2', deployed: '#', github: '#' },
  { title: 'Project 3', deployed: '#', github: '#' },
  { title: 'Project 4', deployed: '#', github: '#' },
  { title: 'Project 5', deployed: '#', github: '#' },
  { title: 'Project 6', deployed: '#', github: '#' },
];

export default function Portfolio() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-screen">
      {projects.map((project, index) => (
        <div key={index} className="border p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <a href={project.deployed} className="text-blue-600 hover:underline">
            View App
          </a>{' '}
          |
          <a href={project.github} className="text-blue-600 hover:underline">
            {' '}
            GitHub
          </a>
        </div>
      ))}
    </div>
  );
}
