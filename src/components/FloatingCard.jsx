import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";

const FloatingCard = () => {
  return (
    <motion.div
      animate={{
        y: [-8, 8, -8],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
      className="absolute -bottom-8 -left-10 hidden w-64 rounded-2xl border border-slate-700 bg-slate-900/90 p-5 backdrop-blur-lg lg:block"
    >
      <div className="flex items-center gap-3">
        <FaReact className="text-4xl text-cyan-400" />

        <div>
          <h4 className="font-bold text-white">Frontend Engineer</h4>

          <p className="text-sm text-slate-400">
            React • TypeScript • Tailwind
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default FloatingCard;
