import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import TabButton from "../componentes/TabButton";

const TAB_INFO = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>React</li>
        <li>Redux</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>SQL</li>
        <li>Unit Testing (Jest)</li>
        <li>JWT/Bcrypt</li>
        <li>Creating REST API</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Git</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "Education",
    content: (
      <ul className="list-disc pl-2">
        <li>Battery Creek High School, South Carolina</li>
        <li>
          IES castillo de luna,High School Diploma Social Sciences, Cadiz/Spain
        </li>
        <li>The Bridge, Bootcamp Fullstack Developer, Seville/Spain</li>
      </ul>
    ),
  },
  {
    title: "Certificacion",
    id: "Certificacion",
    content: (
      <div className="flex items-center">
      <div className="w-48 h-48 bg-cover bg-center rounded-lg" 
           style={{ backgroundImage: "url('/certificados/linkDiploma.png')" }}>
      </div>
      <a
        href="/certificados/linkDiploma.png"
        download
        className="ml-4 text-white bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg"
      >
        Download Certificacion
      </a>
    </div>
    ),
  },{
    title: "Academic Badges",
    id: "Academic Badges",
    content: (
      <div className="flex items-center">
      <div className="w-48 h-48 bg-cover bg-center rounded-lg" 
           style={{ backgroundImage: "url('/images/projects/badgesTB.png')" }}>
      </div>
      <a
        href="/certificados/badges.pdf"
        download
        className="ml-4 text-white bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg"
      >
        Academic FS Badges
      </a>
    </div>
    ),
  },
  {
    title: "Experience",
    id: "Experience",
    content: (
      <ul className="list-disc pl-2">
        <li>
          I led a sales team and a loss prevention department at Game Store
          Iberia, overseeing daily operations and ensuring delegating tasks,
          setting priorities, facilitating clear communication, and managing
          resource allocation.
        </li>
        <li>
          I managed the loss prevention and theft department, conducting regular
          inventories using mobile devices (PDAs) and computer systems to verify
          stock and prevent losses.
        </li>
        <li>
          I maintained constant communication with the headquarters, sending
          reports, emails, and updates on the store's status and ongoing
          initiatives.
        </li>
      </ul>
    ),
  },
  {
    title: "language",
    id: "language",
    content: (
      <ul className="list-disc pl-2">
        <li>English (native)</li>
        <li>Spanish (native)</li>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  const handleTabChange = (id) => {
    setTab(id);
  };

  return (
    <section id="about" className="text-white">
      <div
        className={`about-container ${
          isVisible ? "slide-in" : ""
        } md:grid md:grid-cols-2 gap-8 items-center py-8 px4 xl:gap-16 sm:py-16 xl:px-16`}
        ref={aboutRef}
      >
        <div className="flex justify-center items-center">
          <img
            src="/images/about2.jpg"
            width={500}
            height={500}
            alt="About me"
            className="w-full max-w-4xl mx-auto"
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            About Me
          </h2>
          <p className="text-base md:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start my-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Education")}
              active={tab === "Education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Certificacion")}
              active={tab === "Certificacion"}
            >
              Certificacion
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Academic Badges")}
              active={tab === "Academic Badges"}
            >
              Academic FS Badges
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Experience")}
              active={tab === "Experience"}
            >
              Experience
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("language")}
              active={tab === "language"}
            >
              Language
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_INFO.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
