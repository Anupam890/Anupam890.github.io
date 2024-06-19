import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [Toggler, setToggler] = useState(false);

  const handleToggle = () => {
    setToggler(!Toggler);
  };

  return (
    <>
      <div className="navbar w-full h-20 bg-[#0E1630] text-white flex items-center justify-between px-4 md:px-10 lg:px-20">
        <div className="logo">
          <h2 className="text-2xl text-white">
            <span className="text-[#06D293] text-xl font-bold">{`<`}</span>
            Anupam
            <span className="text-[#06D293] text-xl font-bold"> / </span>
            Mandal
            <span className="text-[#06D293] text-xl font-bold">{`>`}</span>
          </h2>
        </div>

        <div className="hidden md:flex nav-links">
          <ul className="flex items-center justify-center gap-5 text-xl">
            <li>
              <NavLink
                exact
                to="/"
                activeClassName="text-[#06D293]"
                className="hover:text-[#06D293] transition-colors duration-300"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resume"
                activeClassName="text-[#06D293]"
                className="hover:text-[#06D293] transition-colors duration-300"
              >
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                activeClassName="text-[#06D293]"
                className="hover:text-[#06D293] transition-colors duration-300"
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                activeClassName="text-[#06D293]"
                className="hover:text-[#06D293] transition-colors duration-300"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex github">
          <a
            href="https://github.com/Anupam890"
            target="_blank"
            className="px-5 py-3 bg-[#06D293] hover:bg-green-800 rounded-3xl"
          >
            Github Profile
          </a>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={handleToggle} className="text-2xl z-0">
            ☰
          </button>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-[#0E1630] text-white transform ${
          Toggler ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-40`}
      >
        <button
          onClick={handleToggle}
          className="text-2xl absolute top-4 right-4 z-50"
        >
          ✕
        </button>
        <ul className="flex flex-col items-center gap-5 text-xl py-20">
          <li>
            <NavLink
              exact
              to="/"
              activeClassName="text-[#06D293]"
              className="hover:text-[#06D293] transition-colors duration-300"
              onClick={handleToggle}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              activeClassName="text-[#06D293]"
              className="hover:text-[#06D293] transition-colors duration-300"
              onClick={handleToggle}
            >
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              activeClassName="text-[#06D293]"
              className="hover:text-[#06D293] transition-colors duration-300"
              onClick={handleToggle}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              activeClassName="text-[#06D293]"
              className="hover:text-[#06D293] transition-colors duration-300"
              onClick={handleToggle}
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <a
              href="https://github.com/Anupam890"
              target="_blank"
              className="px-9 py-3 bg-[#06D293] hover:bg-green-800 rounded-3xl"
              onClick={handleToggle}
            >
              Github Profile
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
