import { useState } from "react";
// import { toggleTheme } from "../theme";
import { Sun, Moon} from "lucide-react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };
  return (
    <button onClick={toggleTheme} className="cursor-pointer text-2xl">
      {darkMode ? <Sun /> : <Moon />}
    </button>
  );
};

export default ThemeToggle;
