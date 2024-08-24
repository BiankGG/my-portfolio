import React from "react";
import { FcFlashOn } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ProjectsCard({
  imgURL,
  title,
  description,
  gitUrl,
  previewUrl,
}) {
  return (
    <div className="relative">
      <div
        className="h-52 md:h-72 bg-cover bg-center rounded-t-xl relative group"
        style={{ backgroundImage: `url(${imgURL})` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center space-x-4">
          <Link
            to={gitUrl}
            className="flex items-center justify-center h-14 w-14 border-2 rounded-full border-white hover:border-yellow-300 bg-white"
          >
            <FaGithub className="h-10 w-10 cursor-pointer text-black" />
          </Link>
          <Link
            to={previewUrl}
            className="flex items-center justify-center h-14 w-14 border-2 rounded-full border-white hover:border-blue-500"
          >
            <FcFlashOn className="h-10 w-10 cursor-pointer" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-bold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
}
