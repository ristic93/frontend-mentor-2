import React, { useState } from "react";
import CountUp from "react-countup";

const Navbar = () => {

  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    const body = document.querySelector("body");

    if (darkMode) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }

    if (darkMode) {
      body.classList.add("bg-dark-darkBg")
    } else {
      body.classList.remove("bg-dark-darkBg")
    }

    setDarkMode(!darkMode);
  };

  return (
    <nav className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl md:text-4xl font-bold text-light-blackText dark:text-light-white">
          Social Media Dashboard
        </h1>
        <p className="text-main-text font-bold">
          Tottal followers: <CountUp end={23004} duration={5} />
        </p>
      </div>

      <div className="toggle">
        <label
          htmlFor="checkbox"
          className="font-bold text-main-text text-sm cursor-pointer"
        >
          {`${darkMode ? "Light mode" : "Dark mode"}`}
        </label>
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          checked={!darkMode}
          onChange={toggleTheme}
        />
        <label htmlFor="checkbox" className="label">
          <div className="ball"></div>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
