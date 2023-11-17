import { NavLink } from 'react-router-dom';
import { IoMdMenu } from 'react-icons/io';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className={`hidden sm:flex justify-between items-center sm:px-18 px-7 py-4 w-full sm:max-w-7xl mx-auto absolute top-0 bg-transparent z-10 right-0 left-0 text-15px`}
      >
        <NavLink
          to="/"
          className="w-10 h-10 rounded-lg bg-white flex items-center justify-center font-bold shadow-md "
        >
          <p className="blue-gradient_text text-[20px]">BA</p>
        </NavLink>

        <nav className="flex text-[15px] sm:text-lg gap-3 sm:gap-7 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-blue-500' : 'text-black'
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about-me"
            className={({ isActive }) =>
              isActive ? 'text-blue-500' : 'text-black'
            }
          >
            About me
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? 'text-blue-500' : 'text-black'
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'text-blue-500' : 'text-black'
            }
          >
            Contact
          </NavLink>
        </nav>
      </header>

      {/* mobile screen */}
      <header className="sm:hidden flex justify-between items-center px-7 py-4 w-full max-w-7xl mx-auto absolute top-0 bg-transparent z-10 right-0 left-0 text-15px">
        <NavLink
          to="/"
          className="w-10 h-10 rounded-lg bg-white flex items-center justify-center font-bold shadow-md "
        >
          <p className="blue-gradient_text text-[20px]">BA</p>
        </NavLink>

        {open ? (
          <IoMdClose
            size={30}
            className="cursor-pointer text-violet-900"
            onClick={() => setOpen(!open)}
          />
        ) : (
          <IoMdMenu
            size={30}
            className=" cursor-pointer text-violet-900 "
            onClick={() => setOpen(!open)}
          />
        )}
      </header>

      {open && (
        <div className="absolute top-[60px] right-7 bg-white w-[180px] min-h-[40px] p-3 rounded-md z-50">
          <nav className="flex flex-col text-[15px] sm:text-lg gap-3 sm:gap-7 font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-blue-500' : 'text-black'
              }
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/about-me"
              className={({ isActive }) =>
                isActive ? 'text-blue-500' : 'text-black'
              }
              onClick={() => setOpen(false)}
            >
              About me
            </NavLink>

            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? 'text-blue-500' : 'text-black'
              }
              onClick={() => setOpen(false)}
            >
              Projects
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'text-blue-500' : 'text-black'
              }
              onClick={() => setOpen(false)}
            >
              Contact
            </NavLink>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
