import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

const filterCategories = [
  "All",
  "React",
  "Laravel",
  "Node.js",
  "Flutter",
  "AI",
];

export const ProjectFilter = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {filterCategories.map((category) => (
        <motion.button
          key={category}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onFilterChange(category)}
          className={cn(
            "px-6 py-2.5 rounded-full font-medium transition-all border",
            activeFilter === category
              ? "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white border-transparent shadow-lg shadow-blue-500/30"
              : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
          )}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
};
