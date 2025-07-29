import React from "react";

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-7 rounded-2xl shadow-lg w-[90%] max-w-md relative">

        {/* Close Button */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onClose();
          }}
          className="absolute top-1 right-3 bg-[#00b2a9] text-black px-3 py-1 hover:bg-orange-500 rounded-md text-sm"
        >
          Close
        </a>

        {/* Modal Content Centered */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
          <h3 className="text-lg font-medium mb-2">{project.projectType}</h3>
          <p className="text-sm text-gray-700 mb-4">{project.description}</p>

          {/* GitHub Button */}
          <a
            href={project.github || "https://github.com/dummy-project-link"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black bg-[#00b2a9] px-4 py-2 rounded text-sm hover:bg-orange-500 transition"
          >
            View on GitHub
          </a>
        </div>

        {/* Contributors List */}
        <h3 className="font-semibold text-sm mt-4 mb-1">Contributors:</h3>
        <ol className="list-decimal pl-5 text-sm text-gray-800">
          {project.contributors.map((name, idx) => (
            <li key={idx}>{name}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ProjectModal;

