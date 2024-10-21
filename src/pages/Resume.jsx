export default function Resume() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-4xl font-bold font-serif mb-4">Resume</h2>
      <p className="text-xl text-gray-600 mb-6">
        Currently working on my resume. Check back soon!
      </p>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold font-serif mb-4">
          Proficiencies:
        </h3>
        <ul className="list-disc list-inside mb-6">
          <li>JavaScript (ES6+)</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>HTML & CSS</li>
          <li>Tailwind CSS</li>
          <li>Git & GitHub</li>
          <li>APIs and RESTful services</li>
          {/* Add any other relevant skills or technologies you know */}
        </ul>
        <a
          href="#"
          className="bg-gradient-to-r from-stone-600 to-lime-900 text-white py-2 px-4 rounded-lg hover:bg-gradient-to-r from-stone-600 to-lime-900 transition"
        >
          Download My Resume (Coming Soon!)
        </a>
      </div>
    </div>
  );
}
