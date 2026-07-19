import { motion } from "framer-motion";
import { FaArrowRight, FaDownload } from "react-icons/fa";

const CTAButtons = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mt-10 flex flex-wrap gap-5"
    >
      <a
        href="#projects"
        className="group flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_35px_rgba(37,99,235,.45)]"
      >
        View Projects
        <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
      </a>

      <a
        href="/resume.pdf"
        download
        className="flex items-center gap-3 rounded-xl border border-slate-700 px-8 py-4 font-semibold text-slate-200 transition-all duration-300 hover:border-blue-500 hover:bg-slate-900"
      >
        <FaDownload />
        Download CV
      </a>
    </motion.div>
  );
};

export default CTAButtons;
