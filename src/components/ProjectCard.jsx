import React from "react";

const ProjectCard = ({ project, onClick }) => {
  return (
    <div className="bg-white shadow-md rounded-3xl p-4 cursor-pointer transition duration-300 transform hover:scale-105 hover:shadow-3xl">

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
  <div className="flex flex-wrap justify-center gap-2 text-sm font-semibold">
    <span className="px-3 py-1 rounded text-white" style={{ backgroundColor: '#00b2a9' }}>
      {project.domain}
    </span>
    <span className="px-3 py-1 rounded text-white" style={{ backgroundColor: '#a144f2' }}>
      {project.type}
    </span>
    <span className="px-3 py-1 rounded text-white" style={{ backgroundColor: '#f26c3d' }}>
      {project.difficulty}
    </span>
  </div>

  <button
    onClick={onClick}
    className="mt-3 text-sm font-medium hover:underline"
    style={{ color: '#00b2a9' }}
    onMouseOver={(e) => (e.target.style.color = '#f26c3d')}
    onMouseOut={(e) => (e.target.style.color = '#00b2a9')}
  >
    View Details
  </button>
</div>

      
    </div>
  );
};

export default ProjectCard;

