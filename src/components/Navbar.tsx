import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router";
import DarkModeToggle from "./DarkModeToggle";
import { ThemeProvider } from "../contexts/theme";

export function Navbar() {
  const isDark = localStorage.getItem("darkMode");
  const [darkMode, setdarkMode] = useState(() => {
    return isDark === "true";
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setdarkMode((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());

    const bodyEl = document.body;

    if (bodyEl) {
      if (darkMode) {
        bodyEl.classList.add("dark");
      } else {
        bodyEl.classList.remove("dark");
      }
    }
  }, [darkMode]);

  return (
    <div className='sticky top-0 bg-amber-200 dark:bg-slate-800 z-50 w-full'>
      <div className='flex items-center justify-between px-4 md:px-8 py-4'>
        {/* Logo */}
        <Link to='/'>
          {isDark === "false" ? (
            <img src='/favicon.ico' alt='ryanmoehs logo' className='w-10 md:w-12' />
          ) : (
            <img src='/logo_black.webp' alt='ryanmoehs logo' className='w-10 md:w-12' />
          )}
        </Link>

        {/* Desktop Navigation */}
        <ThemeProvider value={{darkMode, toggleDarkMode}}>
          <div className='hidden md:flex gap-x-6 items-center'>
            <ul className='font-semibold flex place-items-center gap-x-4 text-black dark:text-white'>
              <NavLink to='/'>
                <li>/home</li>
              </NavLink>
              <NavLink to='/project'>
                <li>/projects</li>
              </NavLink>
              <NavLink to='/experience'>
                <li>/experiences</li>
              </NavLink>
              <NavLink to='/contact'>
                <li>/contacts</li>
              </NavLink>
              <li>|</li>
              <NavLink to='/playground'>
                <li>/play</li>
              </NavLink>
            </ul>
            <DarkModeToggle />
          </div>

          {/* Mobile Hamburger Button */}
          <div className='md:hidden flex items-center gap-x-3'>
            <DarkModeToggle />
            <button 
              onClick={toggleMobileMenu}
              className='text-black dark:text-white p-2 focus:outline-none'
            >
              <div className='w-6 h-6 flex flex-col justify-between'>
                <span className={`h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                <span className={`h-0.5 w-full bg-current transition duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </ThemeProvider>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-amber-200 dark:bg-slate-800 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <ul className='font-semibold flex flex-col gap-y-2 p-4 text-black dark:text-white'>
          <NavLink to='/' onClick={() => setIsMobileMenuOpen(false)}>
            <li className='py-2 px-2 hover:bg-amber-300 dark:hover:bg-slate-700 rounded'>/home</li>
          </NavLink>
          <NavLink to='/project' onClick={() => setIsMobileMenuOpen(false)}>
            <li className='py-2 px-2 hover:bg-amber-300 dark:hover:bg-slate-700 rounded'>/projects</li>
          </NavLink>
          <NavLink to='/experience' onClick={() => setIsMobileMenuOpen(false)}>
            <li className='py-2 px-2 hover:bg-amber-300 dark:hover:bg-slate-700 rounded'>/experiences</li>
          </NavLink>
          <NavLink to='/contact' onClick={() => setIsMobileMenuOpen(false)}>
            <li className='py-2 px-2 hover:bg-amber-300 dark:hover:bg-slate-700 rounded'>/contacts</li>
          </NavLink>
          <NavLink to='/playground' onClick={() => setIsMobileMenuOpen(false)}>
            <li className='py-2 px-2 hover:bg-amber-300 dark:hover:bg-slate-700 rounded'>/play</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}
