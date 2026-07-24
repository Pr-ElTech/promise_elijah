import {    ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const ProjectButtons = ({ github, live }) => {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <a
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-lg"
      >
        <ExternalLink size={18} />
        Live Demo
      </a>

      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-3 text-slate-300 transition-all duration-300 hover:border-blue-500 hover:text-blue-400"
      >
        <FaGithub   size={18} />
        GitHub
      </a>
    </div>
  );
};

export default ProjectButtons;