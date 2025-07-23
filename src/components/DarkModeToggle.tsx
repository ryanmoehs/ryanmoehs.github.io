import { FaSun, FaMoon } from "react-icons/fa";
import useTheme from "../contexts/theme";
const DarkModeToggle = () => {
  const {darkMode, toggleDarkMode} = useTheme();
  return (
    <button
      onClick={toggleDarkMode}
      className='p-2 rounded-full bg-amber-400 dark:bg-slate-500 dark:text-white text-amber-800'
    >
        {darkMode ? (
            <FaSun />
        ): (
            <FaMoon />
        )}
    </button>
  );
};

export default DarkModeToggle;
