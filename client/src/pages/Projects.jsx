import React, { useState, useEffect } from "react";
import ProjectsCard from "../componentes/ProjectsCard";
import ProjectTag from "../componentes/projectTag";
import "../App.css";

const projectData = [
  {
    id: 1,
    title: "CarwashShop",
    description: "Proyect Car Wash business",
    image: "/images/projects/IMG1.png",
    tag: ["All", "Web", "BootCamp"],
    gitUrl: "https://github.com/BiankGG/CarWash-Shop.git",
    previewUrl: "https://carwash-shop-1.onrender.com/",
  },
  {
    id: 2,
    title: "My Portfolio",
    description: "Portfolio using React",
    image: "/images/projects/IMG2.png",
    tag: ["All"],
    gitUrl: "https://github.com/BiankGG/my-portfolio.git",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Pokemon React",
    description: "Find Your Pokemon",
    image: "/images/projects/pokemon.png",
    tag: ["Front-end", "All", "BootCamp"],
    gitUrl: "https://github.com/BiankGG/react-poke.git",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "SPB-Store",
    description: "Small Store using back-end and MongoDB",
    image: "/images/projects/backend-store.png",
    tag: ["All", "Back-end", "BootCamp"],
    gitUrl: "https://github.com/BiankGG/PB2-store.git",
    previewUrl: "https://pb2-store.onrender.com",
  },
  {
    id: 5,
    title: "SQL work out",
    description: "SQL",
    image: "/images/projects/sql.png",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "React Crypto",
    description: "React coin crypto",
    image: "/images/projects/React-Coin.png",
    tag: ["All", "Front-end"],
    gitUrl: "https://github.com/BiankGG/react-coin-CHALLENGE3-SPINT20.git",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Ricky & Morty ",
    description: "Api Rick & Morty",
    image: "/images/projects/rick&morty.png",
    tag: ["All", "BootCamp"],
    gitUrl: "https://github.com/BiankGG/rick-and-morty-characters.git",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Find Characters",
    description: "username: portfolio , password: portfolio ",
    image: "/images/projects/findrick.png",
    tag: ["All", "BootCamp"],
    gitUrl:
      "https://github.com/BiankGG/API-con-LOGIN-TEAM-CHALLENGE-SPRINT-13.git",
    previewUrl: "/",
  },
];

const Projects = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectData.filter((project) =>
    project.tag.includes(tag)
  );

  useEffect(() => {
    const element = document.querySelector(".projects-container");
    if (element) {
      element.classList.add("slide-in");
    }
  }, []);

  return (
    <>
      <h1
        id="projects"
        className="projects-header flex flex-wrap justify-center sm:justify-start px-4 sm:px-8 lg:px-16"
      >
        My Projects
      </h1>
      <div className="projects-tag-container flex flex-wrap justify-center sm:justify-start px-4 sm:px-8 lg:px-16">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="BootCamp"
          isSelected={tag === "BootCamp"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Back-end"
          isSelected={tag === "Back-end"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Front-end"
          isSelected={tag === "Front-end"}
        />
      </div>
      <div className="projects-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map((project) => (
            <ProjectsCard
              key={project.id}
              imgURL={project.image}
              title={project.title}
              description={project.description}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
