import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-stone-600 to-lime-900 ... text-white p-14">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-5xl font-bold font-serif text-yellow-200">
          James Jackson
        </h1>
        <nav className="space-x-10 text-2xl font-serif">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'text-3xl font-serif text-violet-200 pointer-events-none'
                : 'text-yellow-200 hover:text-violet-200'
            }
          >
            About Me
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive
                ? 'text-3xl text-violet-200 pointer-events-none'
                : 'text-yellow-200 hover:text-violet-200'
            }
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? 'text-3xl text-violet-200 pointer-events-none'
                : 'text-yellow-200 hover:text-violet-200'
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              isActive
                ? 'text-3xl text-violet-200 pointer-events-none'
                : 'text-yellow-200 hover:text-violet-200'
            }
          >
            Resume
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
