export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      {/* Left Section: Avatar and Heading */}
      <div className="w-1/2 flex flex-col items-center text-center">
        <img
          src="/images/avatar.jpg"
          alt="Your Avatar"
          className="object-cover rounded-full shadow-lg w-48 h-48 mb-6"
        />
        <h2 className="text-4xl font-bold font-serif mb-4">About Me</h2>
      </div>

      {/* Right Section: Paragraph */}
      <div className="w-1/2 pl-8 text-left">
        <p className="text-lg font-sans font-medium text-gray-600 mb-4">
          Hello! My name is James Jackson and I am a web developer passionate
          about building responsive and engaging applications. I specialize in
          creating user-friendly and aesthetically pleasing experiences for all
          users.
        </p>
        <p className="text-lg font-sans font-medium text-gray-600 mb-4">
          I am currently based in Trenton, North Carolina, and I am pursuing a
          degree in software development and programming. I enjoy learning new
          technologies and building applications that make a positive impact.
        </p>
        <p className="text-lg font-sans font-medium text-gray-600 mb-4">
          Some of my recent projects include web apps, dashboards, and APIs. I
          believe in continuous learning and self-improvement, and I’m excited
          to get better with every line of code I write.
        </p>
        <p className="text-lg font-sans font-medium text-gray-600 mb-4">
          Feel free to explore my portfolio using the navigation links at the
          top right corner of the page. At the bottom, you’ll find my GitHub,
          LinkedIn, and Stack Overflow profiles.
        </p>
        <p className="text-lg font-sans font-medium text-gray-600">
          Let’s connect if you want to collaborate or chat about tech!
        </p>
      </div>
    </div>
  );
}
