const ProjectPreview = ({ image, title }) => {
  return (
    <div
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-slate-800
        bg-slate-900
        shadow-xl
      "
    >
      {/* Fake Browser Bar */}
      <div className="flex items-center gap-2 border-b border-slate-800 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500"></span>
        <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
        <span className="h-3 w-3 rounded-full bg-green-500"></span>
      </div>

      <img
        src={image}
        alt={title}
        className="transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  );
};

export default ProjectPreview;