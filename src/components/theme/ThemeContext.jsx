import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const defaultTheme = {
  mode: "light",
  colors: {
    primary: "#3b82f6",
    secondary: "#8b5cf6",
    accent: "#ec4899",
  },
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("portfolio-theme");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return defaultTheme;
      }
    }

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return {
      ...defaultTheme,
      mode: prefersDark ? "dark" : "light",
    };
  });

  useEffect(() => {
    // Save to localStorage
    localStorage.setItem("portfolio-theme", JSON.stringify(theme));

    // Apply dark class to html element
    const root = document.documentElement;

    if (theme.mode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // Apply CSS variables
    root.style.setProperty("--color-primary", theme.colors.primary);
    root.style.setProperty("--color-secondary", theme.colors.secondary);
    root.style.setProperty("--color-accent", theme.colors.accent);

    // Debug log
    console.log(
      "Theme applied:",
      theme.mode,
      "Classes:",
      root.classList.toString()
    );
  }, [theme]);

  const toggleMode = () => {
    setTheme((prev) => {
      const newMode = prev.mode === "light" ? "dark" : "light";
      console.log("Toggling theme to:", newMode);
      return {
        ...prev,
        mode: newMode,
      };
    });
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
