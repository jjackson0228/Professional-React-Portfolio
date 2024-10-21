export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-stone-600 to-lime-900 ... text-white text-xl p-10 text-center font-serif">
      <p>
        <a
          href="https://github.com/jjackson0228"
          className="text-yellow-200 hover:text-violet-200"
        >
          GitHub
        </a>{' '}
        |
        <a
          href="https://linkedin.com/in/james-jackson-aa6b7498/e"
          className="text-yellow-200 hover:text-violet-200"
        >
          {' '}
          LinkedIn{' '}
        </a>
        |
        <a
          href="https://stackoverflow.com/users/25086732/james-jackson"
          className="text-yellow-200 hover:text-violet-200"
        >
          {' '}
          Stack Overflow
        </a>
      </p>
    </footer>
  );
}
