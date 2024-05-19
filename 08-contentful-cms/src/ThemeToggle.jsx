import React from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { useGlobalContext } from "./context";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();

  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <BsMoonFill className="toggle-icon" />
        ) : (
          <BsSunFill className="toggle-icon" />
        )}
      </button>
    </section>
  );
};

export default ThemeToggle;
