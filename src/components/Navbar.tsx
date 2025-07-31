import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router";
import DarkModeToggle from "./DarkModeToggle";
import { ThemeProvider } from "../contexts/theme";

export function Navbar() {
  const isDark = localStorage.getItem("darkMode");
  const [darkMode, setdarkMode] = useState(() => {
    return isDark === "true";
  });

  const toggleDarkMode = () => {
    setdarkMode((prev) => !prev);
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
    <div className='sticky top-0 bg-amber-200 dark:bg-slate-800 z-10'>
      <div className='flex items-center justify-between px-8 py-4'>
        <Link to='/'>
        {isDark === "false" ? (
          <img src='/favicon.ico' alt='ryanmoehs logo' className='w-12' />
        ) : (
          <img src='/logo_black.webp' alt='ryanmoehs logo' className='w-12' />
        )}
        </Link>
        <ThemeProvider value={{darkMode, toggleDarkMode}}>
          <div className='flex gap-x-6'>
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
        </ThemeProvider>
      </div>
    </div>
  );
}
