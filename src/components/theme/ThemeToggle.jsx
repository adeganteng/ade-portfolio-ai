import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export const ThemeToggle = () => {
  const { theme, toggleMode } = useTheme();
  const isDark = theme.mode === "dark";

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleMode}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </motion.button>
  );
};
