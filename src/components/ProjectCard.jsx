// const SectionTitle = ({ title, subtitle }) => {
//   return (
//     <div className="mb-16 text-center">
//       <p className="text-blue-400 font-semibold uppercase tracking-[0.3em]">
//         Portfolio
//       </p>

//       <h2 className="mt-4 text-5xl font-black text-white">
//         {title}
//       </h2>

//       <p className="mx-auto mt-6 max-w-2xl text-slate-400">
//         {subtitle}
//       </p>
//     </div>
//   );
// };

// export default SectionTitle;

import { motion } from "framer-motion";
import ProjectPreview from "./ProjectPreview";
import ProjectDetails from "./ProjectDetails";

const ProjectCard = ({ project, reverse }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`
        mb-32
        grid
        items-center
        gap-16
        lg:grid-cols-2
        ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
      `}
    >
      <ProjectPreview
        image={project.image}
        title={project.title}
      />

      <ProjectDetails project={project} />
    </motion.div>
  );
};

export default ProjectCard;