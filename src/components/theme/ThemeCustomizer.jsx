import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, X } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const colorPresets = [
  { name: "Blue", primary: "#3b82f6", secondary: "#8b5cf6", accent: "#ec4899" },
  {
    name: "Green",
    primary: "#10b981",
    secondary: "#14b8a6",
    accent: "#f59e0b",
  },
  {
    name: "Purple",
    primary: "#8b5cf6",
    secondary: "#ec4899",
    accent: "#f43f5e",
  },
  {
    name: "Orange",
    primary: "#f97316",
    secondary: "#ef4444",
    accent: "#eab308",
  },
];

export const ThemeCustomizer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, updateColors, resetTheme } = useTheme();

  return (
    <>
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 p-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
        style={{ display: isOpen ? "none" : "flex" }}
        aria-label="Open theme customizer"
      >
        <Palette size={24} />
      </motion.button>

      {/* Customizer Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-40"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: 400 }}
              animate={{ x: 0 }}
              exit={{ x: 400 }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed right-0 top-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl z-50 overflow-y-auto"
            >
              {/* Header */}
              <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 p-4 flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Theme Customizer
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <X className="text-gray-700 dark:text-gray-300" size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Current Theme */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Current Colors
                  </h4>
                  <div className="flex gap-3">
                    <div
                      className="flex-1 h-12 rounded-lg shadow-inner"
                      style={{ backgroundColor: theme.colors.primary }}
                    />
                    <div
                      className="flex-1 h-12 rounded-lg shadow-inner"
                      style={{ backgroundColor: theme.colors.secondary }}
                    />
                    <div
                      className="flex-1 h-12 rounded-lg shadow-inner"
                      style={{ backgroundColor: theme.colors.accent }}
                    />
                  </div>
                </div>

                {/* Color Presets */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Color Presets
                  </h4>
                  <div className="space-y-3">
                    {colorPresets.map((preset) => (
                      <button
                        key={preset.name}
                        onClick={() =>
                          updateColors({
                            primary: preset.primary,
                            secondary: preset.secondary,
                            accent: preset.accent,
                          })
                        }
                        className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors bg-white dark:bg-gray-800"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-900 dark:text-white">
                            {preset.name}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <div
                            className="flex-1 h-8 rounded"
                            style={{ backgroundColor: preset.primary }}
                          />
                          <div
                            className="flex-1 h-8 rounded"
                            style={{ backgroundColor: preset.secondary }}
                          />
                          <div
                            className="flex-1 h-8 rounded"
                            style={{ backgroundColor: preset.accent }}
                          />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Reset Button */}
                <button
                  onClick={resetTheme}
                  className="w-full py-3 px-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors font-medium"
                >
                  Reset to Default
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
