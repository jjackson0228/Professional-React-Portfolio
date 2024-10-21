export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-grow">
      <div className="text-center">
        <img
          src="/images/avatar.jpg"
          alt="Your Avatar"
          className="object-cover rounded-full shadow-lg mx-auto mb-6"
        />
        <h2 className="text-4xl font-bold font-serif mb-4">About Me</h2>
        <p className="text-lg font-sans text-gray-600 max-w-xl">
          Hello! I am a web developer passionate about building responsive and
          engaging applications. I specialize in creating user-friendly and
          aesthetically pleasing experiences for all users.
        </p>
      </div>{' '}
    </div>
  );
}
