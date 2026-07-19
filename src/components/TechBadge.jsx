import { motion } from "framer-motion";

const TechBadge = ({ icon, title }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="px-4 py-2 rounded-full bg-slate-900 border border-slate-700 flex items-center gap-2"
    >
      {icon}
      <span className="text-sm">{title}</span>
    </motion.div>
  );
};

export default TechBadge;
