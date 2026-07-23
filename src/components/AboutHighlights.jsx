const skills = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "Redux Toolkit",
  "REST APIs",
  "Responsive Design",
  "Git & GitHub",
  "Framer Motion",
  "Performance",
  "AI Enthusiast",
];

const AboutHighlights = () => {
  return (
    <div className="mt-10 flex flex-wrap gap-4">

      {skills.map((skill) => (
        <span
          key={skill}
          className="rounded-full border border-slate-700 bg-slate-900 px-5 py-3 text-sm text-slate-300 transition-all duration-300 hover:border-blue-500 hover:text-blue-400"
        >
          {skill}
        </span>
      ))}

    </div>
  );
};

export default AboutHighlights;