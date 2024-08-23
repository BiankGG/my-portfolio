import React from "react";

const rainbowStyles = `
  bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-purple-500 to-pink-500
  bg-clip-text text-transparent
  animate-gradient-text
`;

const Header = () => {
  return (
    <section className="fixed w-full top-0 left-0 bg-gradient-to-br from-white via-transparent to-black shadow-lg z-50 p-6 flex flex-col md:flex-row md:items-center md:justify-between">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className={`text-4xl font-bold ${rainbowStyles}`}>My Portfolio</h1>
        <nav className="mt-4 md:mt-0">
          <ul className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
            <li>
              <a
                href="#home"
                className={`text-3xl ${rainbowStyles} hover:text-pink-500`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={`text-3xl ${rainbowStyles} hover:text-pink-500`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`text-3xl ${rainbowStyles} hover:text-pink-500`}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`text-3xl ${rainbowStyles} hover:text-pink-500`}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Header;