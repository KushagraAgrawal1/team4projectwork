import React from "react";

const ProjectCard = ({ project, onClick }) => {
  return (
    <div className="bg-white shadow-md rounded p-4">
      <h2 className="text-lg font-semibold">{project.title}</h2>
      <p className="text-sm text-gray-600 mb-2">{project.description}</p>

      <div className="flex flex-wrap gap-2 text-xs">
        <span className="bg-gray-200 px-2 py-1 rounded">
          {project.domain}
        </span>
        <span className="bg-blue-200 px-2 py-1 rounded">
          {project.type}
        </span>
        <span className="bg-yellow-200 px-2 py-1 rounded">
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
