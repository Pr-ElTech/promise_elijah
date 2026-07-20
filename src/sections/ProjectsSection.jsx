import SectionTitle from "../components/SectionTitle";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="bg-[#050816] py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          title="Featured Projects"
          subtitle="Products I've designed and built with modern frontend technologies, focusing on performance, scalability and user experience."
        />

        {/* Project Cards go here */}
      </div>
    </section>
  );
};

export default ProjectsSection;