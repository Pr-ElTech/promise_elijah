const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-16 text-center">
      <p className="text-blue-400 font-semibold uppercase tracking-[0.3em]">
        Portfolio
      </p>

      <h2 className="mt-4 text-5xl font-black text-white">
        {title}
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-slate-400">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionTitle;