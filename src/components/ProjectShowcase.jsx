import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const dummyProjects = [
  {
    title: "AI Chatbot",
    projectType: "Uptoskills Company Project",
    description: "Chatbot Built with Python and TensorFlow.",
    github: "https://github.com/kushagra/project",
    domain: "Ai/ML",
    type: "Group",
    difficulty: "Medium",
    contributors: ["Kushagra", "Shikhar", "Akshit"],
    image:"https://cdn-icons-png.freepik.com/512/1698/1698535.png"
  },
  {
    title: "Portfolio Website",
    projectType: "Open Source",
    description: "Show Candidate's profile using React and TailwindCSS.",
    github: "https://github.com/kushagra/project",
    domain: "Web",
    type: "Individual",
    difficulty: "Easy",
    contributors: ["Kushagra"],
    image:"https://cdn-icons-png.freepik.com/256/7867/7867446.png?semt=ais_hybrid"
  },
  {
    title: "Airbnb Clone",
    projectType: "Open Source",
    description: "Made using React, Nodejs and TailwindCSS.",
    github: "https://github.com/kushagra/project",
    domain: "Web",
    type: "Individual",
    difficulty: "Easy",
    contributors: ["Kushagra"],
    image:"https://img.freepik.com/premium-vector/bubbly-stays-vector-icon-airbnb_720724-3093.jpg"
  },
  {
    title: "Netflix Clone",
    projectType: "Open Source",
    description: "Made using React, Nodejs and TailwindCSS.",
    github: "https://github.com/kushagra/project",
    domain: "Web",
    type: "Group",
    difficulty: "Medium",
    contributors: ["Kushagra", "Nandani", "Janhavi", "Nitu"],
    image:"https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg"
  },
  {
    title: "Resume Builder",
    projectType: "Open Source",
    description: "Helps to build resumes,made using React.",
    github: "https://github.com/kushagra/project",
    domain: "Web",
    type: "Group",
    difficulty: "Easy",
    contributors: ["Kushagra", "Harnish"],
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhcP_S0nBLZhsn6wn4LftrklqpArQLFh_49g&s"
  },
  {
    title: "Hack Prevention",
    projectType: "Open Source",
    description: "Prevent hacking activities using cryptography.",
    github: "https://github.com/kushagra/project",
    domain: "Cyber",
    type: "Group",
    difficulty: "Easy",
    contributors: ["Nandani", "Janhavi","Nitu" ,"Kushagra"],
    image:"https://www.shutterstock.com/shutterstock/photos/758748727/display_1500/stock-vector-stop-hacker-ransomware-forbidden-signal-icon-on-white-background-vector-illustration-cybercrime-758748727.jpg"
  },
  {
    title: "ChatGPT Clone",
    projectType: "Open Source",
    description: "Generative AI built using HTML, CSS, Javascript.",
    github: "https://github.com/kushagra/project",
    domain: "Web",
    type: "Group",
    difficulty: "Hard",
    contributors: ["Kushagra", "Harnish"],
    image:"https://img.icons8.com/?size=512&id=kTuxVYRKeKEY&format=png"
  },
  {
    title: "IoT Plant Monitor",
    projectType: "Open Source",
    description: "Monitors soil moisture and temp using NodeMCU.",
    github: "https://github.com/kushagra/project",
    domain: "IoT",
    type: "Group",
    difficulty: "Hard",
    contributors: ["Shikhar", "Rizwan", "Kushagra"],
    image:"https://play-lh.googleusercontent.com/0iQhGlgBmUqD_CJ1sglSdppVocP0_VXruGrE5nitXotFqlZosvZcJqF_AmgFsmh-W6Q=w240-h480-rw"
  },
  {
    title: "IoT Water Purifier",
    projectType: "Open Source",
    description: "Purifies Water with Advanced Techniques.",
    github: "https://github.com/kushagra/project",
    domain: "IoT",
    type: "Group",
    difficulty: "Hard",
    contributors: ["Shikhar", "Rizwan", "Kushagra"],
    image:"https://cdn-icons-png.flaticon.com/512/4992/4992693.png"
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
    // Future: fetch('/api/projects')
  }, []);

  const filtered = projects.filter((p) => {
    const domainMatch = filters.domain === "All" || p.domain === filters.domain;
    const typeMatch = filters.type === "All" || p.type === filters.type;
    const diffMatch =
      filters.difficulty === "All" || p.difficulty === filters.difficulty;
    return domainMatch && typeMatch && diffMatch;
  });

  const handleFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="p-4">
   <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-6 rounded-xl shadow-2xl mb-10 transition transform hover:scale-105 hover:shadow-2xl duration-500">
  <h3 className="text-2xl text-white text-center font-extrabold tracking-wider animate-pulse">
    🚀 Explore the amazing projects built by students — from open source to company-led innovations!
  </h3>
</div>


      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <select
          onChange={(e) => handleFilter("domain", e.target.value)}
          className="border px-2 py-1 text-sm rounded-md bg-white shadow-sm w-36"
        >
          <option value="All">All Domains</option>
          <option value="Web">Web</option>
          <option value="Ai/ML">AI/ML</option>
          <option value="IoT">IoT</option>
          <option value="Cyber">Cyber Security</option>
        </select>

        <select
          onChange={(e) => handleFilter("type", e.target.value)}
          className="border px-2 py-1 text-sm rounded-md bg-white shadow-sm w-36"
        >
          <option value="All">All Types</option>
          <option value="Individual">Individual</option>
          <option value="Group">Group</option>
        </select>

        <select
          onChange={(e) => handleFilter("difficulty", e.target.value)}
          className="border px-2 py-1 text-sm rounded-md bg-white shadow-sm w-36"
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
