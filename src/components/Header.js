import React from "react";

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1 className="notes-header">Notes📜</h1>
      <button
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
        className="save"
      >
        Toggle Mode ☀
      </button>
    </div>
  );
};

export default Header;
