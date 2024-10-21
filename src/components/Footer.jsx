export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-lg p-8 text-center font-serif">
      <p>
        <a href="https://github.com/jjackson0228" className="hover:text-xl">
          GitHub
        </a>{' '}
        |
        <a
          href="https://linkedin.com/in/james-jackson-aa6b7498/e"
          className="hover:text-xl"
        >
          {' '}
          LinkedIn{' '}
        </a>
        |
        <a
          href="https://stackoverflow.com/users/25086732/james-jackson"
          className="hover:text-xl"
        >
          {' '}
          Stack Overflow
        </a>
      </p>
    </footer>
  );
}
