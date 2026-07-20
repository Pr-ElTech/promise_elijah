import { motion } from "framer-motion";
import { portfolio } from "../data/portfolio";

const stats = [
  {
    number: "4+",
    title: "Production Projects",
  },
  {
    number: "13+",
    title: "Technologies",
  },
  {
    number: "10+",
    title: "Core Technologies",
  },
  {
    number: "∞",
    title: "Always Learning",
  },
];

const StatsSection = () => {
  return (
    <section className="relative bg-[#050816] py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 md:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40"
          >
            <h2 className="text-5xl font-black text-blue-400">
              {stat.number}
            </h2>

            <p className="mt-3 text-sm uppercase tracking-widest text-slate-400">
              {stat.title}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;