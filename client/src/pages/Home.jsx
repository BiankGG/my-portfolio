import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import "../App.css";

const rainbowStyles = `
  bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-purple-500 to-pink-500
  bg-clip-text text-transparent
  animate-gradient-text
`;

const Home = () => {
  const [dropLenguaje, setDropLenguaje] = useState(false);

  const toggleDrop = () => {
    setDropLenguaje(!dropLenguaje);
  };
  return (
    <section id="home" className="min-h-screen flex items-center pt-header">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 px-8 text-center sm:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 2.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col justify-center items-center md:items-start text-center md:text-left"
          >
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                Hello, I&apos;m{" "}
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                Bianca G. Griffin
              </span>
              <br />
            </h1>
            <div className="text-4xl sm:text-5xl lg:text-6xl mb-6 p-6">
              <TypeAnimation
                sequence={[
                  "I'm a Full Stack Developer",
                  1000,
                  "I'm a Front-end Developer",
                  1000,
                  "I'm a Back-end Developer",
                  1000,
                  "I'm a Database Specialist",
                  1000,
                  "I'm a Node.js Expert",
                  1000,
                  "I'm a Express.js Enthusiast",
                  1000,
                  "I'm a React Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className={`transition-all duration-900 ${rainbowStyles} hover:bg-gradient-to-r hover:from-red-500 hover:via-yellow-500 hover:to-pink-500`}
              />
            </div>
            <div className="p-4 bg-home shadow-lg rounded-xl">
              <p className="text-2xl sm:text-2xl mb-6 text-white">
                Passionate about web development and ready to continue learning
                and growing with a team that values professional evolution
              </p>
            </div>

            <div>
              <li className="relative list-none">
                <button
                  onClick={toggleDrop}
                  className="px-16 py-5 w-full sm:w-fit rounded-full mr-4 mt-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white text-xl border-1"
                >
                  Download CV
                </button>
                {dropLenguaje && (
                  <div className="absolute right-0 mt-2 w-36 bg-gradient-to-r from-primary-400 to-secondary-600 0 shadow-lg rounded-lg">
                    <a
                      href="/cv/biancaGgriffinEnglish.pdf"
                      download
                      className="block px-8 py-4 text-white text-xl hover:bg-pink-100 hover:text-pink-500"
                    >
                      English
                    </a>
                    <a
                      href="/cv/BiancaGGriffinSpanish.pdf"
                      download
                      className="block px-8 py-4 text-white text-xl hover:bg-pink-100 hover:text-pink-500"
                    >
                      Spanish
                    </a>
                  </div>
                )}
              </li>
            </div>
          </motion.div>
        </div>
        <div className="col-span-5 px-8 mt-4 lg:mt-0 flex justify-center">
          <div className="image-container w-[400px] h-[400px] relative">
            <img
              src="/homepic.jpg"
              alt="home image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
            <div className="animate-borderColor"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
