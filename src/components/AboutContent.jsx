import AboutHighlights from "./AboutHighlights";
import AboutResumeButton from "./AboutResumeButton";

const AboutContent = () => {
  return (
    <div>

      <h3 className="text-3xl font-bold text-white">
        Frontend Engineer focused on creating software that solves real problems.
      </h3>

      <p className="mt-8 text-slate-400 leading-8">

        I'm a Frontend Engineer based in Lagos, Nigeria, passionate about
        designing fast, scalable and user-focused web applications that
        create measurable business impact.

      </p>

      <p className="mt-6 text-slate-400 leading-8">

        I've built production-ready products across fintech,
        agriculture and business platforms using React,
        JavaScript, Tailwind CSS and modern frontend technologies.
        I'm currently expanding into backend development,
        AI integration and enterprise software architecture.

      </p>

      <AboutHighlights />

      <AboutResumeButton />

    </div>
  );
};

export default AboutContent;