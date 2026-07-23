import { portfolio } from "../data/portfolio";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";

const SelectedWork = () => {
  return (
    <section
      id="projects"
      className="bg-[#050816] py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          title="Selected Work"
          subtitle="Real products I've designed and built to solve real-world problems using modern frontend technologies."
        />

        {portfolio.projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
};

export default SelectedWork;