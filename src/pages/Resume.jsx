export default function About() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center flex-grow">
      <div className="text-center">
        <img
          src="/images/avatar.jpg"
          alt="Your Avatar"
          className="w-40 h-40 object-cover rounded-full shadow-lg mx-auto mb-6"
        />
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Hello! I am a web developer passionate about building responsive and
          engaging applications. I specialize in creating user-friendly and
          aesthetically pleasing experiences.
        </p>
      </div>
    </div>
  );
}
