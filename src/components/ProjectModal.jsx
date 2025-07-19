import React from "react";

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-[90%] max-w-md relative">
        <a
  href="#"
  onClick={(e) => {
    e.preventDefault();
    onClose();
  }}
  className="absolute top-2 right-3 bg-orange-500 text-white px-3 py-1 rounded-md text-sm hover:bg-orange-600 transition duration-200"
>
  Close
</a>


        <h2 className="text-xl font-bold mb-2">{project.title}</h2>
        <h2 className="text-xl mb-2">{project.projectType}</h2>
        <p className="text-sm text-gray-700 mb-4">{project.description}</p>
           {/* GitHub Link Button */}
    <a
      href={project.github || "https://github.com/dummy-project-link"}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white bg-black px-3 py-1 rounded hover:bg-gray-800 text-sm"
    >
      View on GitHub
    </a>
        <h3 className="font-semibold text-sm mb-1">Contributors:</h3>
        <ul className="list-disc pl-5 text-sm text-gray-800">
          {project.contributors.map((name, idx) => (
            <li key={idx}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectModal;
