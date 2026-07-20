import { motion } from "framer-motion";

const ProductLogoCard = ({ product }) => {
  return (
    <motion.a
      href={product.link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="group flex h-44 items-center justify-center rounded-3xl border border-slate-800 bg-slate-900/50 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40"
    >
      <img
        src={product.image}
        alt={product.name}
        className="h-24 object-contain transition-transform duration-300 group-hover:scale-105"
      />
    </motion.a>
  );
};

export default ProductLogoCard;