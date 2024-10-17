export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Platform</h1>
        <p className="text-lg mb-6">
          Discover amazing content and learn more about what we do.
        </p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition">
          Get Started
        </button>
      </section>

      {/* About Section */}
      <section className="container mx-auto p-8">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
          velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia
          nisi ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex.
          Cras non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna
          imperdiet ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum
          tortor.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Cras rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci,
          in tristique ex. Donec nec ornare elit. Vestibulum molestie hendrerit
          massa non consequat. In elementum ultricies tempus. Interdum et
          malesuada fames ac ante ipsum primis in faucibus.
        </p>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-gray-200 text-center py-8">
        <h3 className="text-xl font-semibold mb-4">Join Us Today!</h3>
        <button className="bg-blue-600 text-white px-8 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
          Sign Up Now
        </button>
      </section>
    </div>
  );
}
