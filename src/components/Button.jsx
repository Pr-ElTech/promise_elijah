import { motion } from "framer-motion";

const Button = ({ children, primary = true }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      className={`px-7 py-3 rounded-xl font-semibold transition-all duration-300 ${
        primary
          ? "bg-blue-600 hover:bg-blue-500 text-white"
          : "border border-slate-600 text-white hover:bg-slate-800"
      }`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
