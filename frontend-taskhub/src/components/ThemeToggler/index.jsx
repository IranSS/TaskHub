import { useContext } from "react";

import { ThemeContext } from "../../themes/ThemeContext";

import { Button } from "./styles";

import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggler = () => {
  const { themeName, toggleTheme } = useContext(ThemeContext);

  return (
    <Button onClick={toggleTheme} title="Alternar tema">
      {themeName == "light" ? (
        <FaMoon size={20} color="#363537" />
      ) : (
        <FaSun size={20} color="#f1c40f" />
      )}
    </Button>
  );
};

export { ThemeToggler };
