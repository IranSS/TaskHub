import { createContext, useState, useEffect } from "react";
import { ThemeProvider as StyledProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [themeName, setThemeName] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", themeName);
  }, [themeName]);

  const toggleTheme = () => {
    setThemeName(themeName === "light" ? "dark" : "light");
  };

  const currentTheme = themeName === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <StyledProvider theme={currentTheme}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
};
