export default function Resume() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-4xl font-bold font-serif mb-4">Resume</h2>
      <p className="text-xl text-gray-600 mb-6">
        Currently working on my resume. Check back soon!
      </p>
      <div className="p-6 rounded-lg shadow-md bg-stone-300 w-full max-w-lg">
        <h3 className="text-2xl font-semibold font-serif mb-4 text-center">
          Proficiencies and Skills
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Front-End Proficiencies */}
          <div>
            <h4 className="text-xl font-semibold mb-2">Front-End</h4>
            <ul className="list-disc list-inside">
              <li>JavaScript (ES6+)</li>
              <li>React.js (with Hooks & Context)</li>
              <li>HTML5 & CSS3</li>
              <li>Tailwind CSS / Bootstrap</li>
              <li>Client-Side Routing (react-router-dom)</li>
              <li>Responsive Design & Accessibility</li>
            </ul>
          </div>

          {/* Back-End Proficiencies */}
          <div>
            <h4 className="text-xl font-semibold mb-2">Back-End</h4>
            <ul className="list-disc list-inside">
              <li>Node.js / Express.js</li>
              <li>MongoDB (NoSQL) / Mongoose</li>
              <li>RESTful APIs / GraphQL</li>
              <li>Authentication (JWT & bcrypt)</li>
              <li>SQL / MySQL</li>
              <li>Version Control (Git & GitHub)</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 text-center">
          <a
            href="#"
            className="group relative inline-block py-2 px-4 rounded-lg text-yellow-200 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-stone-600 to-lime-900 transition-all duration-300 group-hover:opacity-0"></span>
            <span className="absolute inset-0 bg-gradient-to-r from-lime-900 to-violet-200 opacity-0 transition-all duration-300 group-hover:opacity-100"></span>
            <span className="relative">Download My Resume (Coming Soon!)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
