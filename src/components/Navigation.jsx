import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">James Jackson</h1>
        <nav className="space-x-6">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'text-blue-400' : 'text-white'
            }
          >
            About Me
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive ? 'text-blue-400' : 'text-white'
            }
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'text-blue-400' : 'text-white'
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              isActive ? 'text-blue-400' : 'text-white'
            }
          >
            Resume
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
