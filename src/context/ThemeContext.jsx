import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const defaultTheme = {
  mode: "light", // light or dark
  colors: {
    primary: "#3b82f6", // blue-500
    secondary: "#8b5cf6", // violet-500
    accent: "#ec4899", // pink-500
  },
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("portfolio-theme");
    return saved ? JSON.parse(saved) : defaultTheme;
  });

  useEffect(() => {
    localStorage.setItem("portfolio-theme", JSON.stringify(theme));

    // Apply theme to document
    if (theme.mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Apply custom colors as CSS variables
    document.documentElement.style.setProperty(
      "--color-primary",
      theme.colors.primary
    );
    document.documentElement.style.setProperty(
      "--color-secondary",
      theme.colors.secondary
    );
    document.documentElement.style.setProperty(
      "--color-accent",
      theme.colors.accent
    );
  }, [theme]);

  const toggleMode = () => {
    setTheme((prev) => ({
      ...prev,
      mode: prev.mode === "light" ? "dark" : "light",
    }));
  };

  const updateColors = (colors) => {
    setTheme((prev) => ({
      ...prev,
      colors: { ...prev.colors, ...colors },
    }));
  };

  const resetTheme = () => {
    setTheme(defaultTheme);
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleMode, updateColors, resetTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};
