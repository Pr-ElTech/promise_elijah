import { motion } from "framer-motion";
import { portfolio } from "../data/portfolio";

const HeroText = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
        <span className="h-2 w-2 rounded-full bg-green-500"></span>
        Available for Opportunities
      </span>

      <div>
        <p className="text-lg text-slate-400">Hi, I'm</p>

        <h1 className="mt-2 text-5xl font-black leading-tight text-white md:text-7xl">
          {portfolio.name}
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-blue-400 md:text-3xl">
          {portfolio.role}
        </h2>

        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
          {portfolio.headline}
        </p>

        <p className="mt-4 max-w-xl text-slate-400">{portfolio.description}</p>
      </div>
    </motion.div>
  );
};

export default HeroText;
