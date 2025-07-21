import React from "react";

const ProjectCard = ({ project, onClick }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 cursor-pointer transition duration-300 transform hover:scale-105 hover:shadow-3xl">

      {/* Project Icon Update*/}
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="w-24 h-24 object-cover mb-2 mx-auto rounded-full border"
        />
      )}
      <h2 className="text-3xl font-semibold">{project.title}</h2>
      <p className="text-xl text-gray-600 mb-2 ">{project.description}</p>

      <div className="flex flex-wrap gap-2 text-sm ">
        <span className="bg-gray-200 px-2 py-1 rounded">
          {project.domain}
        </span>
        <span className="bg-blue-200 px-2 py-1 rounded">
          {project.type}
        </span>
        <span className="bg-yellow-200 px-2 py-1 rounded ">
          {project.difficulty}
        </span>
      </div>

      <button
        onClick={onClick}
        className="mt-3 text-sm text-blue-600 hover:underline"
      >
        View Details
      </button>
    </div>
  );
};

export default ProjectCard;
