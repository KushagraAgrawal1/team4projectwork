import React from "react";

const ProjectCard = ({ project, onClick }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 cursor-pointer transition duration-300 transform hover:scale-105 hover:shadow-3xl">

      {/* Project Icon */}
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="w-24 h-24 object-cover mb-2 mx-auto rounded-full border"
        />
      )}

      {/* Title and Description */}
      <h2 className="text-2xl font-semibold text-center">{project.title}</h2>
      <p className="text-sm text-gray-600 mb-2 text-center">{project.description}</p>

      {/* Tags + Button Centered */}
      <div className="flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-2 text-sm">
          <span className="bg-blue-600 px-2 py-1 rounded text-white">
            {project.domain}
          </span>
          <span className="bg-purple-600 px-2 py-1 rounded text-white">
            {project.type}
          </span>
          <span className="bg-orange-500 px-2 py-1 rounded text-white">
            {project.difficulty}
          </span>
        </div>
        <button
          onClick={onClick}
          className="mt-3 text-sm text-#00b2a9-600 hover:text-orange-500 hover:underline"
        >
          View Details
        </button>
      </div>
      
    </div>
  );
};

export default ProjectCard;

