import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-12">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold font-serif">James Jackson</h1>
        <nav className="space-x-6 text-lg font-serif">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'text-xl font-serif text-blue-400'
                : 'text-white hover:text-xl'
            }
          >
            About Me
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive ? 'text-xl text-blue-400' : 'text-white hover:text-xl'
            }
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'text-xl text-blue-400' : 'text-white hover:text-xl'
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              isActive ? 'text-xl text-blue-400' : 'text-white hover:text-xl'
            }
          >
            Resume
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
