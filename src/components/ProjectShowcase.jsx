import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const dummyProjects = [
  {
    title: "AI Chatbot",
    projectType:"Uptoskills Company Project",
    description: "Built with Python and TensorFlow.",
    domain: "Ai/ML",
    type: "Group",
    difficulty: "Medium",
    contributors: ["Kushagra", "Shikhar", "Akshit"],
  },
  
  {
    title: "Portfolio Website",
    projectType:"Open Source",
    description: "Show Candidate's profile using React and TailwindCSS.",
    domain: "Web",
    type: "Individual",
    difficulty: "Easy",
    contributors: ["Kushagra"],
  },
   {
    title: "Airbnb Clone",
    projectType:"Open Source",
    description: "Made using React,Nodejs and TailwindCSS.",
    domain: "Web",
    type: "Individual",
    difficulty: "Easy",
    contributors: ["Kushagra"],
  },
    {
    title: "Netflix Clone",
    projectType:"Open Source",
    description: "Made using React,Nodejs and TailwindCSS.",
    domain: "Web",
    type: "Group",
    difficulty: "Medium",
    contributors: ["Kushagra","Nandani","Jahnavi","Nitu"],
  },
   {
    title: "Resume Builder",
    projectType:"Open Source",
    description: "Made using React.",
    domain: "Web",
    type: "Group",
    difficulty: "Easy",
    contributors: ["Kushagra","Harnish"],
  },
  {
    title: "Hack Prevention",
    projectType:"Open Source",
    description: "Prevent hacking activities using cryptography.",
    domain: "Cyber",
    type: "Group",
    difficulty: "Easy",
    contributors: ["Nandani","Jahanvi","Kushagra"],
  },
   {
    title: "ChatGPT Clone",
    projectType:"Open Source",
    description: "Generative AI built using HTML,CSS,Javascript.",
    domain: "Web",
    type: "Group",
    difficulty: "Hard",
    contributors: ["Kushagra","Harnish"],
  },
  {
    title: "IoT Plant Monitor",
    projectType:"Open Source",
    description: "Monitors soil moisture and temp using NodeMCU.",
    domain: "IoT",
    type: "Group",
    difficulty: "Hard",
    contributors: ["Shikhar", "Rizwan","Kushagra"],
  },
  {
    title: "IoT Water Purifier",
    projectType:"Open Source",
    description: "Purifies Water with Advanced Techniques.",
    domain: "IoT",
    type: "Group",
    difficulty: "Hard",
    contributors: ["Shikhar", "Rizwan","Kushagra"],
  },
];

const ProjectShowcase = () => {
  const [projects, setProjects] = useState([]);
  const [filters, setFilters] = useState({
    domain: "All",
    type: "All",
    difficulty: "All",
  });
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    setProjects(dummyProjects);
    // In Future we can use : fetch('/api/projects')
  }, []);

  const filtered = projects.filter((p) => {
    const domainMatch =
      filters.domain === "All" || p.domain === filters.domain;
    const typeMatch = filters.type === "All" || p.type === filters.type;
    const diffMatch =
      filters.difficulty === "All" || p.difficulty === filters.difficulty;
    return domainMatch && typeMatch && diffMatch;
  });

  const handleFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h3 className="text-2xl  mb-6 text-center">Here you will find the list of company-led or open source projects student have contributed!</h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {/* Domain Filter */}
        <select
          onChange={(e) => handleFilter("domain", e.target.value)}
          className="border p-2 rounded"
        >
          <option value="All">All Domains</option>
          <option value="Web">Web</option>
          <option value="Ai/ML">AI/ML</option>
          <option value="IoT">IoT</option>
          <option value="Cyber">Cyber Security</option>
        </select>

        {/* Team/Individual Filter */}
        <select
          onChange={(e) => handleFilter("type", e.target.value)}
          className="border p-2 rounded"
        >
          <option value="All">All Types</option>
          <option value="Individual">Individual</option>
          <option value="Group">Group</option>
        </select>

        {/* Difficulty Filter */}
        <select
          onChange={(e) => handleFilter("difficulty", e.target.value)}
          className="border p-2 rounded"
        >
          <option value="All">All Difficulties</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((proj, idx) => (
          <ProjectCard
            key={idx}
            project={proj}
            onClick={() => setSelectedProject(proj)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default ProjectShowcase;
