import { useContext } from "react";

import { ThemeContext } from "../../themes/ThemeContext";

import { LuSun, LuMoon } from "react-icons/lu";

const ThemeToggler = () => {
  const { themeName, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      style={{ borderRadius: "8px" }}
      className="glassy"
      onClick={toggleTheme}
      title="Alternar tema"
    >
      {themeName == "light" ? (
        <LuSun color="black" size={20} />
      ) : (
        <LuMoon color="white" size={20} />
      )}
    </button>
  );
};

export { ThemeToggler };
