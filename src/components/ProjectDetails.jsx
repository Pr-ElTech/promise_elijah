import TechBadge from "./TechBadge";
import ProjectButtons from "./ProjectButtons";

const ProjectDetails = ({ project }) => {
  return (
    <div>
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-400">
        {project.category}
      </p>

      <h2 className="text-4xl font-bold text-white">
        {project.title}
      </h2>

      <p className="mt-6 leading-8 text-slate-400">
        {project.description}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {project.technologies.map((tech) => (
          <TechBadge key={tech} tech={tech} />
        ))}
      </div>

      <ProjectButtons
        github={project.github}
        live={project.live}
      />
    </div>
  );
};

export default ProjectDetails;