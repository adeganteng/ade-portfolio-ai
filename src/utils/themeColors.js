export const colorPresets = [
  {
    name: "Blue",
    colors: {
      primary: "#3b82f6",
      secondary: "#8b5cf6",
      accent: "#ec4899",
    },
  },
  {
    name: "Green",
    colors: {
      primary: "#10b981",
      secondary: "#059669",
      accent: "#84cc16",
    },
  },
  {
    name: "Purple",
    colors: {
      primary: "#8b5cf6",
      secondary: "#a855f7",
      accent: "#ec4899",
    },
  },
  {
    name: "Orange",
    colors: {
      primary: "#f97316",
      secondary: "#fb923c",
      accent: "#fbbf24",
    },
  },
  {
    name: "Pink",
    colors: {
      primary: "#ec4899",
      secondary: "#f472b6",
      accent: "#fb7185",
    },
  },
  {
    name: "Cyan",
    colors: {
      primary: "#06b6d4",
      secondary: "#0891b2",
      accent: "#22d3ee",
    },
  },
];

export const getColorValue = (color) => {
  return color.startsWith("#") ? color : `#${color}`;
};
