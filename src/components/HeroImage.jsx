import { motion } from "framer-motion";

import heroImage from "../assets/image/promiseImage.png";

const HeroImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative flex justify-center"
    >
      {/* Glow */}
      <div className="absolute h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-3xl"></div>

      {/* Image Card */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">
        <img
          src={heroImage}
          alt="Promise Elijah"
          className="h-[600px] w-[460px] object-cover"
        />
      </div>
    </motion.div>
  );
};

export default HeroImage;
