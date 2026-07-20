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
      <div className="relative">

    <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-3xl"></div>

    <img
        src={heroImage}
        alt="Promise Elijah"
        className="
            relative
            rounded-3xl
            border border-slate-700
            shadow-[0_30px_80px_rgba(37,99,235,.25)]
        "
    />

</div>
    </motion.div>
  );
};

export default HeroImage;
