// pages/Portfolio.jsx
import Project from '../components/Project'; // Import the Project component

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-screen w-screen flex flex-grow">
      {projects.map((project, index) => (
        <Project key={index} project={project} /> // Use the Project component
      ))}
    </div>
  );
}
